import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const FUENTE = '"Trebuchet MS","Segoe UI",Verdana,Tahoma,Arial,sans-serif';

/** Generador pseudoaleatorio con semilla: el mundo es idéntico en cada partida. */
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const cacheMat = new Map();
/** Material compartido (Lambert + caras planas = look "low poly" liviano). */
export function mat(color, extra = {}) {
  const key = color + JSON.stringify(extra);
  let m = cacheMat.get(key);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra });
    cacheMat.set(key, m);
  }
  return m;
}
/** Material para mallas con colores por vértice (todas las construcciones fusionadas). */
export const matVC = new THREE.MeshLambertMaterial({ color: 0xffffff, vertexColors: true, flatShading: true });

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);
const _c = new THREE.Color();

/**
 * Acumula formas sencillas y las fusiona en UNA sola malla con colores por vértice
 * (1 "draw call" por escenario). Las coordenadas son locales al origen del Builder;
 * en box/cyl/cone/sphere el parámetro `y` es la BASE de la forma.
 */
export class Builder {
  constructor(ox = 0, oy = 0, oz = 0) {
    this.o = new THREE.Vector3(ox, oy, oz);
    this.lista = [];
  }
  _add(geo, color, x, y, z, rot, scl) {
    _e.set(rot?.[0] || 0, rot?.[1] || 0, rot?.[2] || 0);
    _q.setFromEuler(_e);
    _p.set(x + this.o.x, y + this.o.y, z + this.o.z);
    if (scl) _s.set(scl[0], scl[1], scl[2]); else _s.set(1, 1, 1);
    _m.compose(_p, _q, _s);
    geo.applyMatrix4(_m);
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (g !== geo) geo.dispose();
    for (const k of Object.keys(g.attributes)) {
      if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    }
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    _c.set(color);
    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.lista.push(g);
  }
  box(w, h, d, color, x = 0, y = 0, z = 0, rot, scl) {
    this._add(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), color, x, y, z, rot, scl);
  }
  cyl(rt, rb, h, color, x = 0, y = 0, z = 0, seg = 12, rot, scl) {
    this._add(new THREE.CylinderGeometry(rt, rb, h, seg).translate(0, h / 2, 0), color, x, y, z, rot, scl);
  }
  cone(r, h, color, x = 0, y = 0, z = 0, seg = 8, rot, scl) {
    this._add(new THREE.ConeGeometry(r, h, seg).translate(0, h / 2, 0), color, x, y, z, rot, scl);
  }
  sphere(r, color, x = 0, y = 0, z = 0, scl, seg = 8) {
    this._add(new THREE.SphereGeometry(r, seg, Math.max(4, seg - 3)).translate(0, r, 0), color, x, y, z, null, scl);
  }
  /** Cúpula (media esfera). */
  domo(r, color, x = 0, y = 0, z = 0, seg = 14) {
    this._add(new THREE.SphereGeometry(r, seg, 7, 0, Math.PI * 2, 0, Math.PI / 2), color, x, y, z);
  }
  /** Prisma triangular (techo a dos aguas): ancho w (eje x), alto h, largo d (eje z). */
  gable(w, h, d, color, x = 0, y = 0, z = 0) {
    const g = new THREE.CylinderGeometry(1, 1, 1, 3);
    g.rotateX(-Math.PI / 2);
    g.scale(w / 1.732, h / 1.5, d);
    g.translate(0, h / 3, 0);
    this._add(g, color, x, y, z);
  }
  /** Pirámide de 4 caras (techo de paja). */
  piramide(w, h, d, color, x = 0, y = 0, z = 0) {
    const g = new THREE.ConeGeometry(1, 1, 4);
    g.rotateY(Math.PI / 4);
    g.scale(w / 1.4142, h, d / 1.4142);
    g.translate(0, h / 2, 0);
    this._add(g, color, x, y, z);
  }
  /** Geometría propia ya centrada como se desee (sin traslación automática). */
  geo(geometry, color, x = 0, y = 0, z = 0, rot, scl) {
    this._add(geometry, color, x, y, z, rot, scl);
  }
  build({ cast = true, receive = true, material = matVC } = {}) {
    const merged = mergeGeometries(this.lista, false);
    this.lista.forEach((g) => g.dispose());
    this.lista = [];
    const malla = new THREE.Mesh(merged, material);
    malla.castShadow = cast;
    malla.receiveShadow = receive;
    return malla;
  }
}

/** Textura de cartel dibujada con canvas (no depende de imágenes externas). */
export function texturaCartel(lineas, { ancho = 1024, alto = 256, fondo = ['#1b2a4a', '#2c4a8a'], borde = '#ffc83d', insignia = null } = {}) {
  const c = document.createElement('canvas');
  c.width = ancho;
  c.height = alto;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, ancho, alto);
  grad.addColorStop(0, fondo[0]);
  grad.addColorStop(1, fondo[1]);
  g.fillStyle = grad;
  g.fillRect(0, 0, ancho, alto);
  g.lineWidth = Math.round(alto * 0.045);
  g.strokeStyle = borde;
  g.strokeRect(g.lineWidth / 2, g.lineWidth / 2, ancho - g.lineWidth, alto - g.lineWidth);

  let xIni = alto * 0.12;
  if (insignia) {
    const r = alto * 0.32;
    g.fillStyle = borde;
    g.beginPath();
    g.arc(alto * 0.52, alto / 2, r, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#1b2a4a';
    g.font = `900 ${Math.round(r * 1.3)}px ${FUENTE}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(String(insignia), alto * 0.52, alto / 2 + r * 0.06);
    xIni = alto * 1.0;
  }
  g.textAlign = insignia ? 'left' : 'center';
  g.textBaseline = 'middle';
  const xTxt = insignia ? xIni : ancho / 2;
  const anchoDisp = ancho - xIni - alto * 0.12;
  const n = lineas.length;
  lineas.forEach((l, i) => {
    const tam = l.tam || (i === 0 ? 0.3 : 0.2);
    let px = Math.round(alto * tam);
    const peso = l.peso || (i === 0 ? 900 : 700);
    g.font = `${peso} ${px}px ${FUENTE}`;
    while (g.measureText(l.texto).width > anchoDisp && px > 12) {
      px -= 2;
      g.font = `${peso} ${px}px ${FUENTE}`;
    }
    g.fillStyle = l.color || (i === 0 ? '#ffffff' : '#ffd96b');
    const y = alto * ((i + 1) / (n + 1));
    g.fillText(l.texto, xTxt, y);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Plano con un cartel (para colocar en el mundo). */
export function planoCartel(textura, w, h) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: textura, toneMapped: false })
  );
  return m;
}

export function lerp(a, b, t) { return a + (b - a) * t; }
export function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
export function damp(a, b, lambda, dt) { return lerp(a, b, 1 - Math.exp(-lambda * dt)); }
