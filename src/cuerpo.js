/*
  Seguimiento del cuerpo con MediaPipe (todo local, sin servicios externos).
  - PoseLandmarker: puntos del cuerpo (caderas, rodillas, hombros, muñecas).
  - ImageSegmenter (selfie): separa a la persona del fondo para recortar la silueta.
  Las imágenes de la cámara nunca se guardan ni se envían: se procesan en esta computadora.
*/
import { PoseLandmarker, ImageSegmenter } from '@mediapipe/tasks-vision';

const RUTA_DATOS = 'assets/mediapipe/datos.js';
const IDX = { hombroI: 11, hombroD: 12, munecaI: 15, munecaD: 16, caderaI: 23, caderaD: 24, rodillaI: 25, rodillaD: 26, tobilloI: 27, tobilloD: 28 };
const VIS_MIN = 0.5;        // visibilidad mínima de un punto
const ESTABLE = 0.035;      // movimiento horizontal máximo mientras se calibra
const SEG_CALIBRACION = 3;  // segundos quieto para calibrar
const UMBRAL_PASO = 0.10;   // histéresis de las rodillas (normalizada por el tronco)
const VIS_PIERNA = 0.3;     // visibilidad mínima de rodillas/tobillos (son más difíciles de ver)
const UMBRAL_CARRIL = 0.6;  // desplazamiento lateral (en anchos de hombros) para cambiar de carril
const TIEMPO_RESPUESTA = 0.6; // segundos con la mano arriba para responder

function cargarScript(src) {
  return new Promise((ok, err) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => ok();
    s.onerror = () => err(new Error('No se pudieron leer los archivos de MediaPipe (assets/mediapipe/datos.js).'));
    document.head.appendChild(s);
  });
}
function bytesDeBase64(b64) {
  const s = atob(b64);
  const u8 = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i);
  return u8;
}
function urlDeBytes(u8, tipo) {
  return URL.createObjectURL(new Blob([u8], { type: tipo }));
}
async function crearConDelegado(Clase, fileset, modelo, opciones) {
  let ultimo = null;
  for (const delegate of ['GPU', 'CPU']) {
    try {
      return await Clase.createFromOptions(fileset, { baseOptions: { modelAssetBuffer: modelo, delegate }, ...opciones });
    } catch (e) { ultimo = e; }
  }
  throw ultimo;
}

export class Cuerpo {
  constructor() {
    this.activo = false;   // cámara encendida
    this.listo = false;    // modelos cargados
    this.stream = null;
    this.video = document.createElement('video');
    this.video.muted = true;
    this.video.playsInline = true;
    // Silueta de salida (se usa como textura en la escena 3D)
    this.lienzo = document.createElement('canvas');
    this.lienzo.width = 320; this.lienzo.height = 240;
    this.ctx = this.lienzo.getContext('2d');
    this.lienzoVideo = document.createElement('canvas');
    this.lienzoVideo.width = 320; this.lienzoVideo.height = 240;
    this.ctxVideo = this.lienzoVideo.getContext('2d', { willReadFrequently: true });
    this.poseLM = null;
    this.segmentador = null;
    this.ultimoTVideo = -1;
    this.nuevaSilueta = false;
    this.sentado = false;
    this.lm = null;
    this.reiniciarCalibracion();
  }

  reiniciarCalibracion() {
    this.calibrado = false;
    this.progreso = 0;
    this.tCal = 0; this.sumX = 0; this.sumA = 0; this.nCal = 0; this.prevX = null;
    this.baseX = 0.5; this.anchoH = 0.25;
    this.pasos = 0; this.ultimoPaso = -99; this.lado = 0;
    this.tiempo = 0;
    this.caminando = false;
    this.latEstado = 0;
    this.tIzq = 0; this.tDer = 0; this.tAmbas = 0;
    this.dispIzq = false; this.dispDer = false; this.dispAmbas = false;
    this.prevIzq = false; this.prevDer = false;
    this.eventos = [];
    this.visible = false;
    this.estadoTexto = 'Buscando tu cuerpo…';
    this.tSinPose = 0;
  }

  /** Enciende la cámara y carga MediaPipe (la primera vez). `informar` recibe textos de estado. */
  async iniciar(informar = () => {}) {
    if (!this.activo) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Este navegador no permite usar la cámara. Probá con Chrome o Edge actualizados.');
      }
      informar('Pidiendo permiso para usar la cámara…');
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }, audio: false
      });
      this.video.srcObject = this.stream;
      await this.video.play();
      const vw = this.video.videoWidth || 640, vh = this.video.videoHeight || 480;
      this.lienzo.height = Math.round(this.lienzo.width * vh / vw);
      this.lienzoVideo.height = this.lienzo.height;
      this.activo = true;
    }
    if (!this.listo) {
      informar('Cargando MediaPipe (la primera vez tarda unos segundos)…');
      if (!window.MB_MEDIAPIPE) await cargarScript(RUTA_DATOS);
      const D = window.MB_MEDIAPIPE;
      if (!D) throw new Error('No se encontraron los archivos de MediaPipe en assets/mediapipe/datos.js.');
      const fileset = {
        wasmLoaderPath: urlDeBytes(bytesDeBase64(D.loader), 'text/javascript'),
        wasmBinaryPath: urlDeBytes(bytesDeBase64(D.wasm), 'application/wasm')
      };
      this.poseLM = await crearConDelegado(PoseLandmarker, fileset, bytesDeBase64(D.pose), {
        runningMode: 'VIDEO', numPoses: 1,
        minPoseDetectionConfidence: 0.5, minPosePresenceConfidence: 0.5, minTrackingConfidence: 0.5
      });
      this.segmentador = await crearConDelegado(ImageSegmenter, fileset, bytesDeBase64(D.seg), {
        runningMode: 'VIDEO', outputCategoryMask: false, outputConfidenceMasks: true
      });
      this.listo = true;
    }
  }

  /** Apaga la cámara (la luz del equipo se apaga). Los modelos quedan cargados. */
  detener() {
    if (this.stream) this.stream.getTracks().forEach((t) => t.stop());
    this.stream = null;
    this.video.srcObject = null;
    this.activo = false;
    this.ultimoTVideo = -1;
    this.reiniciarCalibracion();
  }

  /** Llamar en cada cuadro del juego. `dt` en segundos (0 en pausa). */
  actualizar(dt) {
    if (!this.activo || !this.listo || this.video.readyState < 2) return;
    this.tiempo += dt;
    const t = this.video.currentTime;
    if (t === this.ultimoTVideo) return;
    this.ultimoTVideo = t;
    const ahora = performance.now();
    let lm = null;
    try {
      const r = this.poseLM.detectForVideo(this.video, ahora);
      lm = r.landmarks && r.landmarks[0] ? r.landmarks[0] : null;
    } catch (e) { lm = null; }
    this.lm = lm;
    this.segmentar(ahora);
    this.analizar(lm, dt);
  }

  segmentar(ahora) {
    let r;
    try { r = this.segmentador.segmentForVideo(this.video, ahora); } catch (e) { return; }
    const masks = r.confidenceMasks;
    if (!masks || !masks.length) return;
    // En el modelo selfie, el índice 1 corresponde a la persona (índice 0, al fondo).
    const m = masks.length > 1 ? masks[1] : masks[0];
    const datos = m.getAsFloat32Array();
    const mw = m.width, mh = m.height;
    const W = this.lienzo.width, H = this.lienzo.height;
    // Imagen espejada (como un espejo): la persona se ve igual que en la pantalla.
    this.ctxVideo.save();
    this.ctxVideo.translate(W, 0);
    this.ctxVideo.scale(-1, 1);
    this.ctxVideo.drawImage(this.video, 0, 0, W, H);
    this.ctxVideo.restore();
    const img = this.ctxVideo.getImageData(0, 0, W, H);
    const px = img.data;
    for (let y = 0; y < H; y++) {
      const my = Math.min(mh - 1, Math.floor(y * mh / H));
      for (let x = 0; x < W; x++) {
        const mx = Math.min(mw - 1, Math.floor((W - 1 - x) * mw / W));
        const v = datos[my * mw + mx];
        const a = v <= 0.35 ? 0 : v >= 0.65 ? 1 : (v - 0.35) / 0.3;
        px[(y * W + x) * 4 + 3] = a * 255;
      }
    }
    this.ctx.clearRect(0, 0, W, H);
    this.ctx.putImageData(img, 0, 0);
    if (m.close) m.close();
    masks.forEach((k) => { if (k !== m && k.close) k.close(); });
    this.nuevaSilueta = true;
  }

  analizar(lm, dt) {
    if (!lm) {
      this.tSinPose += dt;
      this.visible = false;
      this.caminando = false;
      this.estadoTexto = 'No te veo: ubicate de cuerpo entero, de frente y con buena luz';
      return;
    }
    this.tSinPose = 0;
    const ok = (i) => (lm[i].visibility ?? 1) >= VIS_MIN;
    const hombros = ok(IDX.hombroI) && ok(IDX.hombroD);
    const caderas = ok(IDX.caderaI) && ok(IDX.caderaD);
    this.visible = hombros;
    if (!this.visible) {
      this.estadoTexto = 'Ubicate de frente: no te veo los hombros';
      this.caminando = false;
      return;
    }
    // Coordenadas en pantalla espejada: x crece hacia la derecha de la persona.
    const xD = (i) => 1 - lm[i].x;
    // Centro del cuerpo: caderas si se ven; si no, hombros (cámara solo con la parte de arriba)
    const hx = (!this.sentado && caderas) ? (xD(IDX.caderaI) + xD(IDX.caderaD)) / 2 : (xD(IDX.hombroI) + xD(IDX.hombroD)) / 2;
    const anchoH = Math.max(0.06, Math.abs(xD(IDX.hombroI) - xD(IDX.hombroD)));

    if (!this.calibrado) {
      const estable = this.prevX === null || Math.abs(hx - this.prevX) < ESTABLE;
      this.prevX = hx;
      if (estable) { this.tCal += dt; this.sumX += hx; this.sumA += anchoH; this.nCal++; }
      else { this.tCal = 0; this.sumX = 0; this.sumA = 0; this.nCal = 0; }
      this.progreso = Math.min(1, this.tCal / SEG_CALIBRACION);
      this.estadoTexto = estable
        ? `Quedate quieto… ${Math.max(0, Math.ceil(SEG_CALIBRACION - this.tCal))}`
        : 'Quedate quieto y de frente';
      if (this.tCal >= SEG_CALIBRACION && this.nCal > 0) {
        this.baseX = this.sumX / this.nCal;
        this.anchoH = this.sumA / this.nCal;
        this.calibrado = true;
        this.estadoTexto = '¡Listo!';
      }
      return;
    }

    // Desplazamiento lateral -> cambio de carril (con rearme para no repetir)
    const dx = (hx - this.baseX) / Math.max(0.06, this.anchoH);
    if (this.latEstado === 0) {
      if (dx > UMBRAL_CARRIL) { this.latEstado = 1; this.eventos.push({ tipo: 'carril', d: 1 }); }
      else if (dx < -UMBRAL_CARRIL) { this.latEstado = -1; this.eventos.push({ tipo: 'carril', d: -1 }); }
    } else if (Math.abs(dx) < 0.25) this.latEstado = 0;

    // Caminar en el lugar: las rodillas (o los tobillos si no se ven) suben alternadas.
    if (!this.sentado) {
      const vis = (i) => (lm[i].visibility ?? 1) >= VIS_PIERNA;
      const piernas = vis(IDX.rodillaI) && vis(IDX.rodillaD) ? [IDX.rodillaI, IDX.rodillaD]
        : vis(IDX.tobilloI) && vis(IDX.tobilloD) ? [IDX.tobilloI, IDX.tobilloD] : null;
      this.piernasOK = !!piernas;
      if (piernas) {
        const yHomb = (lm[IDX.hombroI].y + lm[IDX.hombroD].y) / 2;
        const yRef = caderas ? (lm[IDX.caderaI].y + lm[IDX.caderaD].y) / 2 : yHomb + anchoH * 2.2;
        const tronco = Math.max(0.08, Math.abs(yRef - yHomb));
        const s = (lm[piernas[1]].y - lm[piernas[0]].y) / tronco;
        const nuevo = s > UMBRAL_PASO ? 1 : s < -UMBRAL_PASO ? -1 : 0;
        if (nuevo !== 0 && nuevo !== this.lado) {
          if (this.lado !== 0) { this.pasos++; this.ultimoPaso = this.tiempo; }
          this.lado = nuevo;
        }
      }
    }
    this.caminando = (this.tiempo - this.ultimoPaso) < 0.8;

    // Manos arriba (muñeca por encima del hombro)
    const izq = ok(IDX.munecaI) && lm[IDX.munecaI].y < lm[IDX.hombroI].y;
    const der = ok(IDX.munecaD) && lm[IDX.munecaD].y < lm[IDX.hombroD].y;
    if (izq && !this.prevIzq) this.eventos.push({ tipo: 'recoge', lado: 'izq' });
    if (der && !this.prevDer) this.eventos.push({ tipo: 'recoge', lado: 'der' });
    this.prevIzq = izq; this.prevDer = der;

    if (izq && der) {
      this.tAmbas += dt; this.tIzq = 0; this.tDer = 0;
      if (this.tAmbas >= TIEMPO_RESPUESTA && !this.dispAmbas) { this.dispAmbas = true; this.eventos.push({ tipo: 'responde', lado: 'ambas' }); }
    } else {
      this.tAmbas = 0; this.dispAmbas = false;
      if (izq) { this.tIzq += dt; if (this.tIzq >= TIEMPO_RESPUESTA && !this.dispIzq) { this.dispIzq = true; this.eventos.push({ tipo: 'responde', lado: 'izq' }); } }
      else { this.tIzq = 0; this.dispIzq = false; }
      if (der) { this.tDer += dt; if (this.tDer >= TIEMPO_RESPUESTA && !this.dispDer) { this.dispDer = true; this.eventos.push({ tipo: 'responde', lado: 'der' }); } }
      else { this.tDer = 0; this.dispDer = false; }
    }

    this.estadoTexto = `Pasos: ${this.pasos} · ${this.caminando ? 'caminando' : 'quieto'}${this.piernasOK ? '' : ' · no veo tus piernas'}`;
  }

  /** Devuelve y vacía los eventos pendientes (carril, recoger, responder, calibrado). */
  consumirEventos() {
    const e = this.eventos;
    this.eventos = [];
    return e;
  }
}
