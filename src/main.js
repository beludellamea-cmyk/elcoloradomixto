import * as THREE from 'three';
import { crearMundo, CARRILES, zParada, Z_PARADA_META, N_ESTACIONES, alturaEn, zEstacion, DIR_SOL } from './world.js';
import { crearJugador } from './jugador.js';
import { Particulas } from './fx.js';
import { Sonido } from './audio.js';
import { clamp, damp } from './util.js';
import { Cuerpo } from './cuerpo.js';
import { crearExtras } from './extras.js';

const $ = (id) => document.getElementById(id);
const E = window.MB_ESTACIONES;

/* ================================================================== *
 *  Opciones de accesibilidad (se guardan en el navegador)
 * ================================================================== */
const CLAVE = 'misionBermejo3d.opciones.v1';
const PASOS_TEXTO = [0.9, 1, 1.15, 1.3, 1.5, 1.75];
const porDefecto = {
  texto: 1, velocidad: 1, sentado: false, contraste: false,
  movimiento: !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches),
  obstaculos: true, sonido: true, liviano: false, tactil: true, peso: null, equipo: false
};
let opts = { ...porDefecto };
try { Object.assign(opts, JSON.parse(localStorage.getItem(CLAVE) || '{}')); } catch (e) { /* sin almacenamiento */ }
function guardarOpts() { try { localStorage.setItem(CLAVE, JSON.stringify(opts)); } catch (e) { /* ignorar */ } }

/* ================================================================== *
 *  Escena
 * ================================================================== */
function errorWebgl(msg) {
  $('errorWebglTexto').textContent = msg;
  $('errorWebgl').classList.remove('oculto');
  $('pantallaInicio').classList.add('oculto');
}
if (!Array.isArray(E) || E.length !== N_ESTACIONES) {
  errorWebgl('No se pudieron cargar los contenidos históricos (assets/js/estaciones.js). Verificá que el archivo exista junto a index.html.');
  throw new Error('Faltan estaciones');
}

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: $('mundo'), antialias: true, powerPreference: 'high-performance' });
} catch (err) {
  errorWebgl('Tu navegador o computadora no permite WebGL, que es necesario para el mundo 3D. Probá con Chrome o Edge actualizados.');
  throw err;
}
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f7ead6');
scene.fog = new THREE.Fog('#f3e6cf', 90, 340);
const camara = new THREE.PerspectiveCamera(62, 1, 0.2, 1400);
camara.position.set(0, 4, 12);

const hemi = new THREE.HemisphereLight('#fff3dc', '#b08a5c', 1.5);
scene.add(hemi);
const sol = new THREE.DirectionalLight('#ffe0a3', 2.4);
sol.castShadow = true;
sol.shadow.mapSize.set(1024, 1024);
const sc = sol.shadow.camera;
sc.left = -34; sc.right = 34; sc.top = 34; sc.bottom = -34; sc.near = 5; sc.far = 160;
sol.shadow.bias = -0.0006;
sol.shadow.normalBias = 0.04;
scene.add(sol, sol.target);

const mundo = crearMundo(scene, E);
const jugador = crearJugador();
scene.add(jugador.objeto);
const particulas = new Particulas(scene);
const sfx = new Sonido();
/* Algarrobos con vainas, peces del río y telegramas o cartas de época */
const extras = crearExtras({ raiz: mundo.raiz, anim: mundo.anim, particulas, sfx });

/* Cuerpo real (cámara + MediaPipe): la silueta recortada se pega como un plano
   delante de la cámara virtual, así la persona aparece caminando por el pueblo. */
const cuerpo = new Cuerpo();
let modoCamara = false;   // true si la partida usa la cámara
let tMov = 0;             // segundos en movimiento
let distRec = 0;          // distancia recorrida (para estimar pasos con teclado)
const siluetaTex = new THREE.CanvasTexture(cuerpo.lienzo);
siluetaTex.colorSpace = THREE.SRGBColorSpace;
const silueta = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({ map: siluetaTex, transparent: true, depthTest: false, depthWrite: false, fog: false, toneMapped: false })
);
silueta.renderOrder = 999;
silueta.frustumCulled = false;
silueta.visible = false;
camara.add(silueta);
scene.add(camara);
const DIST_SIL = 6;
function colocarSilueta() {
  const alto = 2 * DIST_SIL * Math.tan(THREE.MathUtils.degToRad(camara.fov / 2));
  const ancho = alto * camara.aspect;
  const h = alto * 0.78;
  const w = h * (cuerpo.lienzo.width / cuerpo.lienzo.height);
  silueta.scale.set(w, h, 1);
  // Carril: la persona se desplaza lateralmente en la pantalla según el carril del juego
  const x = clamp((J.x - camara.position.x) * 0.75, -ancho * 0.3, ancho * 0.3);
  silueta.position.set(x, -alto / 2 + h / 2 - alto * 0.04, -DIST_SIL);
}

/* ================================================================== *
 *  Estado del juego
 * ================================================================== */
// inicio | calibrando | caminando | cartel | celebracion | final
let estado = 'inicio';
let enPausa = false;
let estadoAntesPausa = 'caminando';
let capaAbierta = null; // id de pantalla superpuesta (pausa/opciones/ayuda/acerca)
let capaAnterior = null;

let verLugar = false;
// Punto que mira la cámara en "Ver el lugar" (x, z relativos a la estación)
const VISTAS = [[18, -6], [-15, -3], [14, -3], [-17, -4], [-21, -6], [-24, -2], [0, -26], [18, -3]];
const J = { x: 0, z: 0, y: 0, lane: 1, v: 0, golpe: 0, saludo: false };
let estacion = 0; // índice de la próxima estación a visitar (8 = meta)
let puntos = 0, algodon = 0, aciertos = 0, aciertosVF = 0, tJuego = 0;
let cartasRec = 0, doradosRec = 0, vainas = 0;
let resultados = [];
let paso = 'historia'; // historia | pregunta
let ordenOpc = [0, 1, 2]; // orden en que se muestran las opciones (mezclado en cada cartel)
const teclas = { avance: false };
let tcAvance = false;
let t = 0;

function reiniciarEstado() {
  Object.assign(J, { x: 0, z: 0, y: 0, lane: 1, v: 0, golpe: 0, saludo: false });
  estacion = 0; puntos = 0; algodon = 0; aciertos = 0; aciertosVF = 0; tJuego = 0; tMov = 0; distRec = 0;
  resultados = E.map(() => ({ intentos: 0, estado: null, puntos: 0 }));
  mundo.reiniciarItems();
  extras.reiniciar();
  cartasRec = 0; doradosRec = 0; vainas = 0;
  actualizarHUD();
}

/* ================================================================== *
 *  Aplicación de opciones
 * ================================================================== */
function aplicarOpts() {
  document.documentElement.style.setProperty('--fs', `${Math.round(20 * opts.texto)}px`);
  document.body.classList.toggle('alto-contraste', opts.contraste);
  document.body.classList.toggle('mov-reducido', opts.movimiento);
  sfx.activo = opts.sonido;
  sol.castShadow = !opts.liviano;
  renderer.setPixelRatio(opts.liviano ? 0.8 : Math.min(window.devicePixelRatio || 1, 1.5));
  jugador.sombraFalsa.visible = opts.liviano;
  particulas.reducido = opts.movimiento;
  mundo.mostrarObstaculos(opts.obstaculos);
  $('btnSonido').textContent = opts.sonido ? '🔊' : '🔇';
  $('opcTexto').textContent = `${Math.round(opts.texto * 100)}%`;
  $('opcVelocidad').value = String(opts.velocidad);
  $('opcSentado').checked = opts.sentado;
  $('opcContraste').checked = opts.contraste;
  $('opcMovimiento').checked = opts.movimiento;
  $('opcObstaculos').checked = opts.obstaculos;
  $('opcSonido').checked = opts.sonido;
  $('opcLiviano').checked = opts.liviano;
  $('opcTactil').checked = opts.tactil;
  $('opcPeso').value = opts.peso || '';
  $('opcEquipo').checked = opts.equipo;
  cuerpo.sentado = opts.sentado;
  redimensionar();
  actualizarControles();
}

function redimensionar() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camara.aspect = w / h;
  camara.fov = w / h < 1.2 ? 72 : 62;
  camara.updateProjectionMatrix();
}
window.addEventListener('resize', redimensionar);

/* ================================================================== *
 *  Interfaz: capas, avisos y HUD
 * ================================================================== */
const CAPAS = ['pantallaPausa', 'pantallaOpciones', 'pantallaAyuda', 'pantallaAcerca', 'pantallaFinal', 'pantallaCamara', 'pantallaCreditos', 'pantallaCarta'];
function abrirCapa(id, volverA = null) {
  CAPAS.forEach((c) => $(c).classList.add('oculto'));
  capaAnterior = volverA;
  capaAbierta = id;
  $(id).classList.remove('oculto');
  const b = $(id).querySelector('.btn-principal') || $(id).querySelector('button');
  if (b) setTimeout(() => b.focus(), 30);
  actualizarControles();
}
function cerrarCapa() {
  if (!capaAbierta) return;
  $(capaAbierta).classList.add('oculto');
  if (capaAbierta === 'pantallaCarta') enPausa = false;
  const volver = capaAnterior;
  capaAbierta = null; capaAnterior = null;
  if (volver) abrirCapa(volver);
  else actualizarControles();
}

/* Lista de créditos de las fotos, generada desde assets/js/estaciones.js */
function construirCreditos() {
  const cont = $('credLista');
  cont.innerHTML = '';
  E.filter((e) => e.foto).forEach((e) => {
    const f = e.foto;
    const div = document.createElement('div');
    div.className = 'credito';
    const t = document.createElement('b'); t.textContent = `${e.orden}. ${f.titulo}`;
    const a = document.createElement('p');
    a.textContent = f.autor ? `Foto: ${f.autor} (${f.anio}) · ${f.licencia}` : 'Autor y licencia: pendientes de confirmar (no publicar hasta tenerlos)';
    const c = document.createElement('p'); c.textContent = `Cambios: ${f.cambios}`;
    div.append(t, a, c);
    if (f.url) { const l = document.createElement('a'); l.href = f.url; l.target = '_blank'; l.rel = 'noopener'; l.textContent = 'Ver la página original'; div.append(l); }
    cont.appendChild(div);
  });
  if (!cont.children.length) cont.textContent = 'Todavía no hay fotos con crédito en el juego.';
}

let tAviso = 0;
function aviso(texto, tipo = '', ms = 1800) {
  const a = $('aviso');
  a.textContent = texto;
  a.className = `ver ${tipo}`;
  clearTimeout(tAviso);
  tAviso = setTimeout(() => { a.className = ''; }, ms);
}

function construirProgreso() {
  const ol = $('hudProgreso');
  ol.innerHTML = '';
  E.forEach((e, i) => {
    const li = document.createElement('li');
    li.textContent = String(i + 1);
    li.title = e.lugar;
    ol.appendChild(li);
  });
}

function actualizarHUD() {
  $('hudPuntos').textContent = String(puntos);
  $('hudAlgodon').textContent = String(algodon);
  $('hudCartas').textContent = `${cartasRec}/${extras.totalCartas}`;
  $('hudPeces').textContent = `${doradosRec}/${extras.totalDorados}`;
  [...$('hudProgreso').children].forEach((li, i) => {
    li.className = '';
    const r = resultados[i];
    if (r && r.estado === 'no') li.classList.add('parcial');
    else if (r && r.estado) li.classList.add('ok');
    if (i === estacion && estacion < N_ESTACIONES) li.classList.add('actual');
    if (r && r.estado) li.textContent = '✓'; else li.textContent = String(i + 1);
  });
}

function actualizarDestino() {
  const el = $('hudDestino');
  if (estado !== 'caminando') { el.style.visibility = 'hidden'; return; }
  el.style.visibility = 'visible';
  if (estacion < N_ESTACIONES) {
    const d = Math.max(0, Math.round(J.z - zParada(estacion)));
    el.textContent = `Próxima parada ${estacion + 1}: ${E[estacion].lugar} · ${d} m`;
  } else {
    el.textContent = `¡A la meta! · ${Math.max(0, Math.round(J.z - Z_PARADA_META))} m`;
  }
}

function textoAyuda() {
  const k = (s) => `<kbd>${s}</kbd>`;
  if (estado === 'cartel' && verLugar) return `${k('Enter')} volver al cartel`;
  if (estado === 'calibrando') return 'Quedate quieto y de frente para calibrar';
  const eq = opts.equipo ? ' · compañero/a: ' + k('1') + k('2') + k('3') + ' o ' + k('A') + k('B') + k('C') : '';
  if (estado === 'cartel' && paso === 'vf') return modoCamara ? '✋ izquierda = verdadero · derecha = falso' : `${k('T')} verdadero · ${k('F')} falso`;
  if (estado === 'cartel' && modoCamara) return paso === 'historia' ? '✋ levantá una mano para ir a la pregunta' : '✋ izquierda = A · derecha = B · las dos = C' + eq;
  if (estado === 'cartel') return (paso === 'historia' ? `${k('Enter')} ir a la pregunta` : `${k('1')} ${k('2')} ${k('3')} elegir respuesta`) + eq;
  if (modoCamara) return opts.sentado ? 'Modo sentado: avanzás solo · inclinate a los costados para cambiar de carril' : 'Caminá en el lugar · pasos a los costados para cambiar de carril · ✋ levantá la mano para recoger algodón';
  if (opts.sentado) return `Modo sentado: avanzás solo · ${k('←')} ${k('→')} cambiar de carril`;
  return `${k('↑')} caminar · ${k('←')} ${k('→')} cambiar de carril · ${k('P')} pausa`;
}
let ultimoAyuda = '';
function actualizarControles() {
  const hud = estado !== 'inicio' && estado !== 'final';
  $('hud').classList.toggle('oculto', !hud);
  const ay = $('ayuda');
  const h = textoAyuda();
  if (h !== ultimoAyuda) { ay.innerHTML = h; ultimoAyuda = h; }
  ay.classList.toggle('oculto', !hud || !!capaAbierta);
  const tact = $('controlesTactiles');
  tact.classList.toggle('oculto', !(opts.tactil && estado === 'caminando' && !capaAbierta));
  $('tcAvanzar').classList.toggle('oculto', opts.sentado);
  $('pantallaInicio').classList.toggle('oculto', estado !== 'inicio');
  $('calibracion').classList.toggle('oculto', estado !== 'calibrando');
  $('camEstado').classList.toggle('oculto', !(modoCamara && cuerpo.activo && hud && !capaAbierta));
}

function actualizarEstadoCamara() {
  if (!modoCamara || !cuerpo.activo) return;
  const el = $('camEstado');
  if (el.textContent !== cuerpo.estadoTexto) el.textContent = cuerpo.estadoTexto;
  if (estado === 'calibrando') {
    $('calibracionBarra').style.width = `${Math.round(cuerpo.progreso * 100)}%`;
    $('calibracionTexto').textContent = cuerpo.estadoTexto;
  }
}

/* ================================================================== *
 *  Lectura en voz alta (voz del propio sistema, sin servicios externos)
 * ================================================================== */
function elegirVoz() {
  if (!('speechSynthesis' in window)) return null;
  const vs = window.speechSynthesis.getVoices();
  return vs.find((v) => /^es/i.test(v.lang) && v.localService) || null;
}
function leer(texto) {
  if (!('speechSynthesis' in window)) { aviso('Este navegador no puede leer en voz alta.', '', 2200); return; }
  const ss = window.speechSynthesis;
  if (ss.speaking) { ss.cancel(); return; }
  const voz = elegirVoz();
  if (!voz) { aviso('No hay una voz en español instalada en esta computadora.', '', 2600); return; }
  const u = new SpeechSynthesisUtterance(texto);
  u.voice = voz; u.lang = voz.lang; u.rate = 0.95;
  ss.speak(u);
}
function detenerLectura() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

/* ================================================================== *
 *  Cartel de estación
 * ================================================================== */
function abrirCartel(i) {
  const e = E[i];
  estado = 'cartel';
  paso = 'historia';
  verLugar = false;
  $('btnVolverCartel').classList.add('oculto');
  $('cartel').classList.remove('paso-pregunta');
  J.saludo = true;
  $('cartelNum').textContent = String(e.orden);
  $('cartelSup').textContent = `Estación ${e.orden} de ${N_ESTACIONES}`;
  $('cartelTitulo').textContent = e.titulo;
  $('cartelAnio').textContent = e.anio;
  $('textoAnio').textContent = `🗓 ${e.anioTexto}`;
  $('textoHistoria').textContent = e.historia;
  const f = e.foto;
  $('cartelFoto').classList.toggle('oculto', !f);
  if (f) {
    $('cartelFotoImg').src = f.archivo;
    $('cartelFotoImg').alt = f.titulo;
    $('cartelFotoCred').textContent = f.autor && f.licencia === 'Foto propia'
      ? `Foto: ${f.autor} (${f.anio}) · Foto propia · Estado actual, no histórico`
      : f.autor
      ? `Foto: ${f.autor} (${f.anio}) · ${f.licencia} · Wikimedia Commons · Estado actual, no histórico`
      : 'Foto de referencia: estado actual, no histórico · crédito pendiente de confirmar';
  }
  $('textoCuriosidad').textContent = e.curiosidad;
  $('textoPregunta').textContent = e.pregunta;
  $('cartelFuente').textContent = (e.foto ? '' : 'Escena provisional: todavía no tiene fotografía de referencia. ') + `Fuente indicada por NotebookLM: ${e.fuente}`;
  $('retro').textContent = ''; $('retro').className = 'retro';
  const cont = $('opciones');
  cont.innerHTML = '';
  ordenOpc = [0, 1, 2];
  if (((window.MB_CONFIG || {}).mezclarOpciones) !== false) {
    for (let k = 2; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [ordenOpc[k], ordenOpc[j]] = [ordenOpc[j], ordenOpc[k]]; }
  }
  ordenOpc.map((i) => e.opciones[i]).forEach((txt, k) => {
    const b = document.createElement('button');
    b.className = 'opcion';
    b.type = 'button';
    b.innerHTML = `<span class="letra">${'ABC'[k]}</span><span class="txt"></span><small>tecla ${k + 1}</small>`;
    b.querySelector('.txt').textContent = txt;
    b.addEventListener('click', () => responder(k));
    cont.appendChild(b);
  });
  $('btnSeguir').classList.add('oculto');
  $('cartelHistoria').classList.remove('oculto');
  $('cartelPregunta').classList.add('oculto');
  $('cartelVF').classList.add('oculto');
  $('cartel').classList.remove('oculto');
  $('cartel').scrollTop = 0;
  sfx.llegada();
  aviso(`Estación ${e.orden}: ${e.lugar}`, '', 1700);
  actualizarControles();
  setTimeout(() => $('btnAPregunta').focus(), 60);
}

function alternarVerLugar(on) {
  if (estado !== 'cartel') return;
  verLugar = on === undefined ? !verLugar : on;
  $('cartel').classList.toggle('oculto', verLugar);
  $('btnVolverCartel').classList.toggle('oculto', !verLugar);
  detenerLectura();
  if (verLugar) { $('btnVolverCartel').focus(); aviso('Mirá el lugar en 3D', '', 1200); }
  else setTimeout(() => (paso === 'historia' ? $('btnAPregunta') : ($('btnSeguir').classList.contains('oculto') ? $('opciones').querySelector('button:not(:disabled)') : $('btnSeguir')))?.focus(), 40);
  actualizarControles();
}

function irAPregunta() {
  if (estado !== 'cartel' || paso !== 'historia') return;
  detenerLectura();
  paso = 'pregunta';
  $('cartel').classList.add('paso-pregunta');
  sfx.clic();
  $('cartelHistoria').classList.add('oculto');
  $('cartelPregunta').classList.remove('oculto');
  $('cartel').scrollTop = 0;
  actualizarControles();
  setTimeout(() => { const b = $('opciones').querySelector('button'); if (b) b.focus(); }, 40);
}

function responder(k) {
  if (estado !== 'cartel' || paso !== 'pregunta') return;
  const e = E[estacion];
  const r = resultados[estacion];
  if (r.estado) return;
  const botones = [...$('opciones').children];
  if (botones[k].disabled) return;
  r.intentos++;
  const retro = $('retro');
  const kOk = ordenOpc.indexOf(e.correcta);
  if (k === kOk) {
    const pts = r.intentos === 1 ? 100 : 50;
    r.estado = r.intentos === 1 ? 'primera' : 'segunda';
    r.puntos = pts;
    puntos += pts; aciertos++;
    botones.forEach((b) => (b.disabled = true));
    botones[k].classList.add('correcta');
    retro.textContent = `¡Correcto! +${pts} puntos`;
    retro.className = 'retro bien';
    sfx.acierto();
    particulas.emitir(J.x, 2.6, J.z, '#ffd23f', 30, 4.5, 1.1, 4);
    particulas.emitir(J.x, 2.6, J.z, '#6fe39b', 20, 4, 1.1, 4);
    finalizarPregunta();
  } else {
    botones[k].classList.add('incorrecta');
    botones[k].disabled = true;
    sfx.error();
    if (r.intentos === 1) {
      retro.textContent = 'Casi… probá con otra opción. Si acertás ahora ganás 50 puntos.';
      retro.className = 'retro mal';
      const sig = botones.find((b) => !b.disabled);
      if (sig) sig.focus();
    } else {
      r.estado = 'no'; r.puntos = 0;
      botones.forEach((b) => (b.disabled = true));
      botones[kOk].classList.add('correcta');
      retro.textContent = `La respuesta correcta era: ${e.opciones[e.correcta]}.`;
      retro.className = 'retro mal';
      finalizarPregunta();
    }
  }
  actualizarHUD();
}

function finalizarPregunta() {
  const b = $('btnSeguir');
  b.classList.remove('oculto');
  b.textContent = 'Verdadero o falso ➜';
  setTimeout(() => { b.focus(); b.scrollIntoView({ block: 'nearest' }); }, 80);
}

/* Paso extra después de la pregunta: una afirmación de la estación, verdadero o falso */
function irAVF() {
  if (estado !== 'cartel' || paso !== 'pregunta' || !resultados[estacion].estado) return;
  detenerLectura();
  paso = 'vf';
  sfx.clic();
  $('cartelPregunta').classList.add('oculto');
  $('cartelVF').classList.remove('oculto');
  $('textoVF').textContent = E[estacion].vf.afirmacion;
  $('retroVF').textContent = ''; $('retroVF').className = 'retro';
  $('btnVerdadero').disabled = false; $('btnFalso').disabled = false;
  $('btnSeguirVF').classList.add('oculto');
  $('cartel').scrollTop = 0;
  actualizarControles();
  setTimeout(() => $('btnVerdadero').focus(), 40);
}

function responderVF(v) {
  if (estado !== 'cartel' || paso !== 'vf') return;
  const r = resultados[estacion];
  if (r.vf !== undefined) return;
  const e = E[estacion];
  const bien = v === e.vf.verdadera;
  r.vf = bien;
  const retro = $('retroVF');
  if (bien) {
    puntos += 20; aciertosVF++;
    retro.textContent = `¡Correcto! +20 puntos. ${e.vf.explicacion}`;
    retro.className = 'retro bien';
    sfx.acierto();
  } else {
    retro.textContent = `No era así. ${e.vf.explicacion}`;
    retro.className = 'retro mal';
    sfx.error();
  }
  $('btnVerdadero').disabled = true; $('btnFalso').disabled = true;
  $('btnSeguirVF').textContent = estacion >= N_ESTACIONES - 1 ? 'Ir hacia la meta ➜' : 'Seguir el recorrido ➜';
  $('btnSeguirVF').classList.remove('oculto');
  actualizarHUD();
  setTimeout(() => { $('btnSeguirVF').focus(); }, 80);
}

function cerrarCartel() {
  if (estado !== 'cartel' || !resultados[estacion].estado || resultados[estacion].vf === undefined) return;
  detenerLectura();
  $('cartel').classList.add('oculto');
  verLugar = false;
  mundo.paradas[estacion].hecho = true;
  estacion++;
  estado = 'caminando';
  J.saludo = false;
  actualizarHUD();
  actualizarControles();
  aviso(estacion >= N_ESTACIONES ? '¡Ya casi! Seguí hasta la meta' : '¡Seguí adelante!', '', 1300);
}

/* ================================================================== *
 *  Mecánica del recorrido
 * ================================================================== */
function cambiarCarril(d) {
  if (estado !== 'caminando' || enPausa || capaAbierta) return;
  const n = clamp(J.lane + d, 0, 2);
  if (n !== J.lane) { J.lane = n; sfx.clic(); }
}

function recoger(a) {
  algodon++; puntos += 10;
  sfx.algodon();
  particulas.emitir(a.x, a.y + 1.2, a.z, '#ffffff', 10, 2.6, 0.5, 3);
  actualizarHUD();
}

/* Vainas, peces dorados y telegramas o cartas: suman puntos y muestran su aviso */
function procesarColeccionable(c) {
  if (c.tipo === 'vaina') {
    vainas++; puntos += 8;
    sfx.algodon();
    particulas.emitir(c.x, c.y + 0.4, c.z, '#c98a4b', 10, 2.4, 0.6, 4);
    aviso('¡Vaina de algarrobo! +8', '', 1000);
  } else if (c.tipo === 'dorado') {
    doradosRec++; puntos += 30;
    sfx.coleccion();
    particulas.emitir(c.x, c.y, c.z, '#ffd23f', 26, 4.5, 0.9, 5);
    aviso('¡Pez dorado coleccionado! +30', 'bueno', 1400);
  } else if (c.tipo === 'pergamino') {
    puntos += 10;
    sfx.coleccion();
    particulas.emitir(c.x, c.y, c.z, '#f6e7bf', 18, 3, 0.8, 4);
    abrirCarta(c.indice, true);
  } else if (c.tipo === 'carta') {
    cartasRec++; puntos += 25;
    sfx.coleccion();
    particulas.emitir(c.x, c.y, c.z, '#fff4d6', 24, 4, 0.9, 3);
    abrirCarta(c.indice);
  }
  actualizarHUD();
}

/* Cartel de telegrama o carta: el dato es el de la investigación de la estación */
function abrirCarta(i, pergamino = false) {
  const e = E[i];
  const esTelegrama = i % 2 === 0;
  $('cartaTitulo').textContent = `Estación ${e.orden}: ${e.lugar}`;
  if (pergamino) {
    $('cartaTipo').textContent = 'Pergamino del tucán';
    $('cartaTexto').textContent = e.pregunta;
    $('cartaNota').textContent = 'Esta es la pregunta que trajo el tucán. Respondela en el cartel de la estación, con las manos o con el teclado.';
    $('cartaFuente').textContent = '';
  } else {
    $('cartaTipo').textContent = esTelegrama ? 'Telegrama' : 'Carta de época';
    $('cartaTexto').textContent = e.curiosidad;
    $('cartaNota').textContent = esTelegrama
      ? 'Recreación ficticia: el papel y el formato del telegrama son ilustrativos. El dato de arriba es de la investigación.'
      : 'Recreación ilustrativa del formato de carta. El dato de arriba es de la investigación.';
    $('cartaFuente').textContent = `Fuente indicada por NotebookLM: ${e.fuente}`;
  }
  $('cartaContador').textContent = `Cartas y telegramas: ${cartasRec}/${extras.totalCartas}`;
  enPausa = true;
  abrirCapa('pantallaCarta');
  setTimeout(() => $('btnCerrarCarta').focus(), 60);
}


/* Levantar la mano: recoge el algodón más cercano que esté por delante, en el carril actual */
function recogerConMano() {
  let mejor = null, dist = Infinity;
  for (const a of mundo.algodones) {
    if (a.got) continue;
    const delante = J.z - a.z; // positivo = el algodón está por delante
    if (delante < -1.5 || delante > 12 || Math.abs(a.x - J.x) > 1.6) continue;
    if (Math.abs(delante) < dist) { dist = Math.abs(delante); mejor = a; }
  }
  if (mejor) { mejor.got = true; recoger(mejor); return; }
  const c = extras.recoger(J.x, J.z, true);
  if (c) procesarColeccionable(c);
  else aviso('No hay nada cerca: acercate y levantá la mano', '', 1000);
}

/* Responder con las manos: izquierda = A, derecha = B, las dos = C.
   Las letras se muestran en el orden en que aparecen las opciones. */
function responderConMano(lado) {
  if (estado !== 'cartel' || verLugar) return;
  if (paso === 'historia') { irAPregunta(); return; }
  if (paso === 'pregunta') {
    if (resultados[estacion].estado) { irAVF(); return; }
    responder(lado === 'izq' ? 0 : lado === 'der' ? 1 : 2);
    return;
  }
  if (resultados[estacion].vf !== undefined) { cerrarCartel(); return; }
  if (lado === 'izq') responderVF(true);
  else if (lado === 'der') responderVF(false);
}

/* Traduce los eventos de MediaPipe en acciones del juego */
function procesarCuerpo() {
  const eventos = cuerpo.consumirEventos();
  if (capaAbierta === 'pantallaCarta' && eventos.some((ev) => ev.tipo === 'responde' || ev.tipo === 'recoge')) { cerrarCapa(); return; }
  if (enPausa || capaAbierta) return;
  for (const ev of eventos) {
    if (ev.tipo === 'carril' && estado === 'caminando') cambiarCarril(ev.d);
    else if (ev.tipo === 'recoge' && estado === 'caminando') recogerConMano();
    else if (ev.tipo === 'responde') responderConMano(ev.lado);
  }
}

function golpear(o) {
  o.golpeado = true;
  J.golpe = 0.55;
  J.v *= 0.2;
  puntos = Math.max(0, puntos - 5);
  sfx.golpe();
  particulas.emitir(o.x, 1.0, o.z, '#ffb26b', 14, 3, 0.6, 7);
  aviso('¡Uy! Un obstáculo (−5)', 'malo', 900);
  if (!opts.movimiento) { const d = $('destello'); d.classList.add('ver'); setTimeout(() => d.classList.remove('ver'), 90); }
  actualizarHUD();
}

function moverJugador(dt) {
  const vmax = 7.6 * opts.velocidad;
  const zParadaActual = estacion < N_ESTACIONES ? zParada(estacion) : Z_PARADA_META;
  const caminaCuerpo = modoCamara && cuerpo.activo && cuerpo.caminando;
  let objetivo = teclas.avance || tcAvance || opts.sentado || caminaCuerpo ? vmax : 0;
  const falta = J.z - zParadaActual;
  objetivo *= clamp(falta / 7, 0.2, 1);
  if (J.golpe > 0) { J.golpe -= dt; objetivo = 0; }
  J.v = damp(J.v, objetivo, 7, dt);
  const paso = J.v * dt;
  J.z -= paso;
  distRec += Math.max(0, paso);
  if (J.v > 0.3) tMov += dt;
  J.x = damp(J.x, CARRILES[J.lane], 12, dt);
  J.y = alturaEn(J.z);
  tJuego += dt;

  // Con cámara, los algodones se recogen levantando la mano (ver recogerConMano)
  if (!modoCamara) {
    for (const a of mundo.algodones) {
      if (!a.got && Math.abs(a.z - J.z) < 1.25 && Math.abs(a.x - J.x) < 1.3) { a.got = true; recoger(a); }
    }
    const c = extras.recoger(J.x, J.z, false);
    if (c) procesarColeccionable(c);
  }
  if (opts.obstaculos) {
    for (const o of mundo.obstaculos) {
      if (!o.golpeado && Math.abs(o.z - J.z) < 1.0 && Math.abs(o.x - J.x) < 1.2) golpear(o);
    }
  }

  if (J.z <= zParadaActual + 0.02) {
    J.z = zParadaActual; J.v = 0;
    if (estacion < N_ESTACIONES) abrirCartel(estacion);
    else iniciarCelebracion();
  }
}

let tCelebra = 0;
function iniciarCelebracion() {
  estado = 'celebracion';
  tCelebra = 0;
  J.saludo = true;
  sfx.final();
  particulas.confeti(0, 3, Z_PARADA_META - 8);
  aviso('¡Llegaste a El Colorado!', 'bueno bajo', 2600);
  actualizarControles();
}

function formatoTiempo(s) {
  const seg = Math.round(s);
  return `${Math.floor(seg / 60)}:${String(seg % 60).padStart(2, '0')}`;
}

function mostrarFinal() {
  estado = 'final';
  J.saludo = false;
  // Pasos: con cámara se cuentan con las rodillas; con teclado se estiman por distancia
  const pasos = modoCamara ? cuerpo.pasos : Math.round(distRec / 0.75);
  $('finalPasos').textContent = String(pasos);
  $('finalMov').textContent = formatoTiempo(tMov);
  const kg = Number(opts.peso);
  // Estimación de la guía: calorías ≈ 3,5 × peso (kg) × horas de juego
  $('finalCalorias').textContent = kg > 0 ? `${Math.round(3.5 * kg * (tJuego / 3600))} kcal` : 'Ingresá tu peso';
  $('finalNotaEstim').textContent = `Las calorías son una estimación (3,5 × peso en kg × horas de juego), no una medición.${modoCamara ? ' Los pasos se contaron con la cámara.' : ' Los pasos se estimaron según la distancia recorrida.'}`;
  $('finalPuntos').textContent = String(puntos);
  $('finalAciertos').textContent = `${aciertos}/${N_ESTACIONES}`;
  $('finalVF').textContent = `${aciertosVF}/${N_ESTACIONES}`;
  $('finalCartas').textContent = `${cartasRec}/${extras.totalCartas}`;
  $('finalDorados').textContent = `${doradosRec}/${extras.totalDorados}`;
  $('finalAlgodon').textContent = String(algodon);
  $('finalTiempo').textContent = formatoTiempo(tJuego);
  if (modoCamara) cuerpo.detener(); // se apaga la cámara al terminar
  const estrellas = aciertos >= 8 ? 3 : aciertos >= 6 ? 2 : aciertos >= 3 ? 1 : 0;
  $('finalEstrellas').innerHTML = [0, 1, 2].map((i) => `<span class="${i < estrellas ? 'on' : ''}">★</span>`).join('');
  $('finalMedalla').textContent = [
    '¡Seguí explorando! Cada estación te cuenta algo nuevo.',
    '¡Buen comienzo! Volvé a jugar para descubrir más.',
    '¡Muy buen recorrido por la historia de El Colorado!',
    '¡Excelente! Conocés muy bien la historia de El Colorado.'
  ][estrellas];
  const ol = $('finalLista');
  ol.innerHTML = '';
  E.forEach((e, i) => {
    const r = resultados[i];
    const li = document.createElement('li');
    const cl = r.estado === 'primera' ? 's1' : r.estado === 'segunda' ? 's2' : 's0';
    const sello = r.estado === 'primera' || r.estado === 'segunda' ? '✓' : '✗';
    li.innerHTML = `<span class="sello ${cl}">${sello}</span><span></span><em>${r.puntos || 0}</em>`;
    li.children[1].textContent = `${e.orden}. ${e.lugar}`;
    ol.appendChild(li);
  });
  actualizarControles();
  abrirCapa('pantallaFinal');
}

/* ================================================================== *
 *  Control del flujo: jugar, pausa, reinicio, saltos de prueba
 * ================================================================== */
function jugar(conCamara = false) {
  sfx.iniciar();
  modoCamara = conCamara && cuerpo.activo;
  verLugar = false;
  $('btnVolverCartel').classList.add('oculto');
  reiniciarEstado();
  CAPAS.forEach((c) => $(c).classList.add('oculto'));
  capaAbierta = null;
  $('cartel').classList.add('oculto');
  enPausa = false;
  if (modoCamara) {
    cuerpo.reiniciarCalibracion();
    estado = 'calibrando';
  } else {
    estado = 'caminando';
  }
  actualizarHUD();
  actualizarControles();
  aviso(modoCamara ? 'Calibración: quedate quieto y de frente' : '¡Empezó la misión! Caminá hacia la primera estación', '', 2400);
}

/* Pide permiso de cámara (después del aviso de privacidad), carga MediaPipe y arranca */
async function aceptarCamara() {
  CAPAS.forEach((c) => $(c).classList.add('oculto'));
  capaAbierta = null;
  $('cargando').classList.remove('oculto');
  try {
    await cuerpo.iniciar((texto) => { $('cargandoTexto').textContent = texto; });
    $('cargando').classList.add('oculto');
    jugar(true);
  } catch (err) {
    $('cargando').classList.add('oculto');
    cuerpo.detener();
    modoCamara = false;
    $('inicioError').textContent = `No se pudo usar la cámara: ${err.message || err} Podés jugar con el teclado.`;
    $('inicioError').classList.remove('oculto');
    actualizarControles();
    setTimeout(() => $('btnJugarTeclado').focus(), 30);
  }
}

/* Volver a jugar: si la cámara se apagó al terminar, pide otra vez el aviso */
function reintentar() {
  if (modoCamara && !cuerpo.activo) { abrirCapa('pantallaCamara'); return; }
  jugar(modoCamara);
}

function irAlInicio() {
  detenerLectura();
  verLugar = false;
  $('btnVolverCartel').classList.add('oculto');
  CAPAS.forEach((c) => $(c).classList.add('oculto'));
  capaAbierta = null;
  $('cartel').classList.add('oculto');
  cuerpo.detener();
  modoCamara = false;
  estado = 'inicio';
  enPausa = false;
  reiniciarEstado();
  $('inicioError').classList.add('oculto');
  actualizarControles();
  setTimeout(() => $('btnJugarCamara').focus(), 30);
}

function pausar() {
  if (enPausa || (estado !== 'caminando' && estado !== 'cartel' && estado !== 'calibrando')) return;
  enPausa = true;
  estadoAntesPausa = estado;
  detenerLectura();
  abrirCapa('pantallaPausa');
}
function continuar() {
  if (!enPausa) return;
  enPausa = false;
  cerrarCapa();
  if (estado === 'cartel') setTimeout(() => ($('btnSeguir').classList.contains('oculto') ? ($('cartelHistoria').classList.contains('oculto') ? $('opciones').querySelector('button:not(:disabled)') : $('btnAPregunta')) : $('btnSeguir'))?.focus(), 40);
}

function irAEstacion(i) {
  verLugar = false;
  $('btnVolverCartel').classList.add('oculto');
  CAPAS.forEach((c) => $(c).classList.add('oculto'));
  capaAbierta = null; enPausa = false;
  $('cartel').classList.add('oculto');
  detenerLectura();
  if (estado === 'inicio' || estado === 'final') { sfx.iniciar(); reiniciarEstado(); }
  estacion = clamp(i, 0, N_ESTACIONES);
  const zp = estacion < N_ESTACIONES ? zParada(estacion) : Z_PARADA_META;
  Object.assign(J, { z: zp + 22, x: 0, lane: 1, v: 0, golpe: 0, saludo: false });
  mundo.paradas.forEach((p, k) => (p.hecho = k < estacion));
  estado = 'caminando';
  actualizarHUD();
  actualizarControles();
}

function construirSaltos() {
  const cont = $('saltos');
  cont.innerHTML = '';
  for (let i = 0; i <= N_ESTACIONES; i++) {
    const b = document.createElement('button');
    b.className = 'btn btn-chico';
    b.textContent = i < N_ESTACIONES ? String(i + 1) : 'Meta';
    b.title = i < N_ESTACIONES ? E[i].lugar : 'Meta';
    b.addEventListener('click', () => irAEstacion(i));
    cont.appendChild(b);
  }
}

/* ================================================================== *
 *  Entrada: teclado
 * ================================================================== */
const TECLAS_JUEGO = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD']);
window.addEventListener('keydown', (ev) => {
  const c = ev.code;
  const enBoton = ev.target && (ev.target.tagName === 'BUTTON' || ev.target.tagName === 'SELECT' || ev.target.tagName === 'INPUT' || ev.target.tagName === 'SUMMARY');
  if (TECLAS_JUEGO.has(c) && !enBoton) ev.preventDefault();
  if (ev.altKey || ev.ctrlKey || ev.metaKey) return;

  if (c === 'Escape') {
    if (capaAbierta && capaAbierta !== 'pantallaPausa' && capaAbierta !== 'pantallaFinal') { cerrarCapa(); return; }
    if (enPausa) { continuar(); return; }
    if (estado === 'cartel' && verLugar) { alternarVerLugar(false); return; }
    if (estado === 'caminando' || estado === 'cartel' || estado === 'calibrando') pausar();
    return;
  }
  if (c === 'KeyP' && !ev.repeat) { if (enPausa) continuar(); else pausar(); return; }
  if (c === 'KeyM' && !ev.repeat) { opts.sonido = !opts.sonido; guardarOpts(); aplicarOpts(); return; }
  if (c === 'KeyO' && !ev.repeat && estado !== 'inicio' && !capaAbierta) { pausarYOpciones(); return; }
  if (capaAbierta === 'pantallaCarta' && !ev.repeat && (c === 'Enter' || c === 'Space')) { cerrarCapa(); return; }
  if (capaAbierta) return;

  if (estado === 'cartel' && c === 'KeyV' && !ev.repeat) { alternarVerLugar(); return; }
  if (estado === 'cartel' && verLugar) {
    if ((c === 'Enter' || c === 'Space') && !enBoton) alternarVerLugar(false);
    return;
  }

  if (estado === 'inicio') {
    if ((c === 'Enter' || c === 'Space') && !enBoton) jugar();
    return;
  }
  if (estado === 'caminando') {
    if (c === 'ArrowUp' || c === 'KeyW') teclas.avance = true;
    if (!ev.repeat) {
      if (c === 'ArrowLeft' || c === 'KeyA') cambiarCarril(-1);
      if (c === 'ArrowRight' || c === 'KeyD') cambiarCarril(1);
    }
    return;
  }
  if (estado === 'cartel' && !ev.repeat) {
    if (paso === 'historia') {
      if ((c === 'Enter' || c === 'Space') && !enBoton) irAPregunta();
    } else if (paso === 'pregunta') {
      const k = { Digit1: 0, Digit2: 1, Digit3: 2, Numpad1: 0, Numpad2: 1, Numpad3: 2, KeyA: 0, KeyB: 1, KeyC: 2 }[c];
      if (k !== undefined) responder(k);
      else if ((c === 'Enter' || c === 'Space') && !enBoton && resultados[estacion].estado) irAVF();
    } else if (paso === 'vf') {
      if (c === 'KeyT') responderVF(true);
      else if (c === 'KeyF') responderVF(false);
      else if ((c === 'Enter' || c === 'Space') && !enBoton && resultados[estacion].vf !== undefined) cerrarCartel();
    }
  }
});
window.addEventListener('keyup', (ev) => {
  if (ev.code === 'ArrowUp' || ev.code === 'KeyW') teclas.avance = false;
});
window.addEventListener('blur', () => { teclas.avance = false; tcAvance = false; if (estado === 'caminando' || estado === 'calibrando') pausar(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && (estado === 'caminando' || estado === 'calibrando')) pausar(); });

function pausarYOpciones() {
  if (!enPausa) pausar();
  abrirCapa('pantallaOpciones', enPausa ? 'pantallaPausa' : null);
}

/* ================================================================== *
 *  Entrada: botones en pantalla
 * ================================================================== */
function mantener(btn, on, off) {
  const ini = (e) => { e.preventDefault(); btn.classList.add('on'); on(); };
  const fin = () => { btn.classList.remove('on'); off(); };
  btn.addEventListener('pointerdown', ini);
  btn.addEventListener('pointerup', fin);
  btn.addEventListener('pointerleave', fin);
  btn.addEventListener('pointercancel', fin);
}
mantener($('tcAvanzar'), () => { tcAvance = true; sfx.iniciar(); }, () => { tcAvance = false; });
$('tcIzq').addEventListener('click', () => cambiarCarril(-1));
$('tcDer').addEventListener('click', () => cambiarCarril(1));

$('btnJugarCamara').addEventListener('click', () => { $('inicioError').classList.add('oculto'); abrirCapa('pantallaCamara'); });
$('btnJugarTeclado').addEventListener('click', () => jugar(false));
$('btnAceptarCamara').addEventListener('click', aceptarCamara);
$('btnTecladoCamara').addEventListener('click', () => { cerrarCapa(); jugar(false); });
$('btnVolverCamara').addEventListener('click', () => { cerrarCapa(); setTimeout(() => $('btnJugarCamara').focus(), 30); });
$('opcPeso').addEventListener('change', (e) => { const v = parseFloat(e.target.value); ajustar({ peso: v > 0 && v < 300 ? Math.round(v) : null }); });
$('btnComoSeJuega').addEventListener('click', () => abrirCapa('pantallaAyuda'));
$('btnOpcionesInicio').addEventListener('click', () => abrirCapa('pantallaOpciones'));
$('btnAcerca').addEventListener('click', () => abrirCapa('pantallaAcerca'));
$('btnCreditos').addEventListener('click', () => abrirCapa('pantallaCreditos'));
$('btnCerrarCreditos').addEventListener('click', cerrarCapa);
$('btnCerrarCarta').addEventListener('click', cerrarCapa);
$('btnCerrarAyuda').addEventListener('click', cerrarCapa);
$('btnCerrarAcerca').addEventListener('click', cerrarCapa);
$('btnCerrarOpciones').addEventListener('click', () => { guardarOpts(); cerrarCapa(); });
$('btnPausa').addEventListener('click', pausar);
$('btnAccesib').addEventListener('click', pausarYOpciones);
$('btnSonido').addEventListener('click', () => { sfx.iniciar(); opts.sonido = !opts.sonido; guardarOpts(); aplicarOpts(); });
$('btnContinuar').addEventListener('click', continuar);
$('btnOpcionesPausa').addEventListener('click', () => abrirCapa('pantallaOpciones', 'pantallaPausa'));
$('btnReiniciar').addEventListener('click', reintentar);
$('btnAlInicio').addEventListener('click', irAlInicio);
$('btnOtraVez').addEventListener('click', reintentar);
$('btnFinalInicio').addEventListener('click', irAlInicio);
$('btnAPregunta').addEventListener('click', irAPregunta);
$('btnVerLugar').addEventListener('click', () => alternarVerLugar(true));
$('btnVolverCartel').addEventListener('click', () => alternarVerLugar(false));
$('btnSeguir').addEventListener('click', irAVF);
$('btnVerdadero').addEventListener('click', () => responderVF(true));
$('btnFalso').addEventListener('click', () => responderVF(false));
$('btnSeguirVF').addEventListener('click', cerrarCartel);
$('btnLeer').addEventListener('click', () => { if (estado === 'cartel') leer(`${E[estacion].titulo}. ${E[estacion].anioTexto} ${E[estacion].historia} ¿Sabías que? ${E[estacion].curiosidad}`); });
$('btnLeerPregunta').addEventListener('click', () => { if (estado === 'cartel') { const e = E[estacion]; leer(`${e.pregunta} Opción A: ${e.opciones[ordenOpc[0]]}. Opción B: ${e.opciones[ordenOpc[1]]}. Opción C: ${e.opciones[ordenOpc[2]]}.`); } });

const ajustar = (cambio) => { opts = { ...opts, ...cambio }; guardarOpts(); aplicarOpts(); };
$('opcTextoMenos').addEventListener('click', () => { const i = Math.max(0, PASOS_TEXTO.indexOf(opts.texto) - 1); ajustar({ texto: PASOS_TEXTO[i] }); });
$('opcTextoMas').addEventListener('click', () => { const i = PASOS_TEXTO.indexOf(opts.texto); ajustar({ texto: PASOS_TEXTO[Math.min(PASOS_TEXTO.length - 1, (i < 0 ? 1 : i) + 1)] }); });
$('opcVelocidad').addEventListener('change', (e) => ajustar({ velocidad: parseFloat(e.target.value) }));
for (const [id, k] of [['opcSentado', 'sentado'], ['opcContraste', 'contraste'], ['opcMovimiento', 'movimiento'], ['opcObstaculos', 'obstaculos'], ['opcSonido', 'sonido'], ['opcLiviano', 'liviano'], ['opcTactil', 'tactil'], ['opcEquipo', 'equipo']]) {
  $(id).addEventListener('change', (e) => ajustar({ [k]: e.target.checked }));
}
if (!PASOS_TEXTO.includes(opts.texto)) opts.texto = 1;

/* ================================================================== *
 *  Cámara y bucle principal
 * ================================================================== */
let tPrev = performance.now();
const camObj = new THREE.Vector3();
const objVista = new THREE.Vector3();
function actualizarCamara(dt) {
  if (window.__camLibre) return; // solo para pruebas
  if (estado === 'inicio' || estado === 'final') {
    // paneo suave sobre el puerto (estación 1) como fondo de la pantalla inicial
    const a = 0.55 + 0.45 * Math.sin(t * 0.11);
    const cx = 16, cz = zEstacion(0) - 2;
    camara.position.set(cx + Math.sin(a) * 40 - 8, 7.5 + Math.sin(t * 0.17) * 1.2, cz + Math.cos(a) * 36);
    camObj.set(cx + 6, 4.2, cz - 4);
    camara.lookAt(camObj);
    return;
  }
  if (estado === 'cartel' && verLugar) {
    const [vx, vz] = VISTAS[estacion];
    const sz = zEstacion(estacion);
    const lado = vx < 0 ? 1 : -1;
    const R = vx === 0 ? 36 : 31;
    const a = (vx === 0 ? 0 : lado * 0.62) + Math.sin(t * 0.3) * 0.38;
    objVista.set(vx + Math.sin(a) * R, 8.5, sz + vz + Math.cos(a) * R);
    camara.position.lerp(objVista, 1 - Math.exp(-3 * dt));
    camObj.set(vx, 2.6 + (vx === 0 ? 1.2 : 0), sz + vz);
    camara.lookAt(camObj);
    return;
  }
  const sacudida = J.golpe > 0 && !opts.movimiento ? (Math.random() - 0.5) * 0.18 : 0;
  const objX = J.x * 0.6;
  camara.position.x = damp(camara.position.x, objX, 7, dt) + sacudida;
  camara.position.y = damp(camara.position.y, 3.3 + J.y, 6, dt);
  camara.position.z = damp(camara.position.z, J.z + 7.6 + J.v * 0.06, 14, dt);
  camObj.set(J.x * 0.75, 1.55 + J.y, J.z - 9);
  camara.lookAt(camObj);
}

let acumDt = 0, nFrames = 0, malos = 0;
function vigilarRendimiento(dt) {
  if (window.__noAutoLiviano || opts.liviano || modoCamara || estado !== 'caminando' || enPausa) { acumDt = 0; nFrames = 0; return; }
  acumDt += dt; nFrames++;
  if (nFrames >= 90) {
    malos = acumDt / nFrames > 0.05 ? malos + 1 : 0;
    acumDt = 0; nFrames = 0;
    if (malos >= 2) { ajustar({ liviano: true }); aviso('Activamos los gráficos livianos para que vaya más fluido', '', 3200); malos = 0; }
  }
}

function bucle() {
  requestAnimationFrame(bucle);
  const ahora = performance.now();
  const dt = Math.min((ahora - tPrev) / 1000, 0.05);
  tPrev = ahora;
  if (!enPausa) t += dt;
  const activo = !enPausa;
  vigilarRendimiento(dt);

  // Cuerpo real: se procesa aunque la pausa esté activa (la silueta se mantiene al día)
  if (modoCamara && cuerpo.activo) {
    cuerpo.actualizar(activo ? dt : 0);
    if (cuerpo.nuevaSilueta) { siluetaTex.needsUpdate = true; cuerpo.nuevaSilueta = false; }
    procesarCuerpo();
    if (activo && estado === 'calibrando' && cuerpo.calibrado) {
      estado = 'caminando';
      aviso('¡Listo! Caminá en el lugar para avanzar', '', 2000);
      actualizarControles();
    }
    if (activo) actualizarEstadoCamara();
  }
  const conSilueta = modoCamara && cuerpo.activo && estado !== 'inicio' && estado !== 'final';
  silueta.visible = conSilueta;
  if (conSilueta) colocarSilueta();

  if (activo && estado === 'caminando') moverJugador(dt);
  else if (activo && (estado === 'cartel' || estado === 'calibrando')) { J.v = damp(J.v, 0, 8, dt); J.x = damp(J.x, CARRILES[J.lane], 12, dt); }
  else if (activo && estado === 'celebracion') {
    J.v = 0;
    tCelebra += dt;
    if (Math.random() < dt * 2.2) particulas.confeti(J.x, 3, J.z - 6);
    if (tCelebra > 3.2) mostrarFinal();
  }

  const visible = estado !== 'inicio' && estado !== 'final';
  jugador.objeto.visible = visible && !conSilueta; // con cámara, la silueta real reemplaza al explorador
  if (visible) {
    jugador.objeto.position.set(J.x, J.y, J.z);
    jugador.actualizar(activo ? dt : 0, J.v, J.saludo, (CARRILES[J.lane] - J.x) * 0.5, J.golpe > 0);
  }
  if (activo) {
    actualizarCamara(dt);
    mundo.actualizar(t, dt, visible ? J.z : zEstacion(0), camara);
    extras.actualizar(t, dt, J.z);
    if (estado === 'caminando' && Math.random() < dt * 3) particulas.emitir(J.x + (Math.random() - 0.5) * 16, 0.5 + Math.random() * 4, J.z - 6 - Math.random() * 40, '#fff3c4', 1, 0.3, 3, 0.15);
    particulas.actualizar(dt);
  }
  // sol y sombra siguen al jugador
  const fz = visible ? J.z : zEstacion(0);
  sol.target.position.set(J.x, 0, fz - 8);
  sol.position.set(J.x + DIR_SOL.x * 70, DIR_SOL.y * 70, fz - 8 + DIR_SOL.z * 70);
  sol.target.updateMatrixWorld();
  if (visible) actualizarDestino(); else $('hudDestino').style.visibility = 'hidden';

  renderer.render(scene, camara);
}

/* ================================================================== *
 *  Inicio
 * ================================================================== */
construirProgreso();
construirSaltos();
construirCreditos();
reiniciarEstado();
aplicarOpts();
actualizarControles();
bucle();
setTimeout(() => $('btnJugarCamara').focus(), 50);

// Ganchos para pruebas automáticas (no afectan al juego)
window.__MB = {
  cuerpo, get modoCamara() { return modoCamara; }, get tMov() { return tMov; }, get distRec() { return distRec; },
  alternarVerLugar, jugar, irAEstacion, abrirCartel, irAPregunta, responder, cerrarCartel, pausar, continuar,
  get ordenOpc() { return ordenOpc; }, get estado() { return estado; }, get paso() { return paso; }, get estacion() { return estacion; },
  get puntos() { return puntos; }, get algodon() { return algodon; }, get cartasRec() { return cartasRec; }, get doradosRec() { return doradosRec; }, get vainas() { return vainas; }, extras, J, mundo, camara, renderer, teclas
};
