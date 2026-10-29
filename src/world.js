import * as THREE from 'three';
import { Builder, matVC, mat, rng, texturaCartel, planoCartel, FUENTE } from './util.js';

/* ------------------------------------------------------------------ *
 *  Geometría del recorrido (estilizado, NO es un mapa real)
 * ------------------------------------------------------------------ */
export const CARRILES = [-2.6, 0, 2.6];
export const SEPARACION = 90;
export const Z_PRIMERA = -75;
export const N_ESTACIONES = 8;
export const zEstacion = (i) => Z_PRIMERA - i * SEPARACION;
/** Punto donde el jugador se detiene frente al cartel de la estación i. */
export const zParada = (i) => zEstacion(i) + 12;
export const Z_META = zEstacion(N_ESTACIONES - 1) - 95;
export const Z_PARADA_META = Z_META + 12;
const Z_PUENTE = zEstacion(6); // estación 7
/** Dirección hacia el sol (luz desde atrás-derecha del jugador). */
export const DIR_SOL = new THREE.Vector3(0.4, 0.72, 0.56).normalize();

/** Altura del terreno/puente en z (para que el jugador suba al Puente Libertad). */
export function alturaEn(z) {
  const r = z - Z_PUENTE; // negativo hacia adelante
  const H = 0.95;
  if (r > -6) return 0;
  if (r > -14) return H * ((-6 - r) / 8);
  if (r > -34) return H;
  if (r > -42) return H * ((r + 42) / 8);
  return 0;
}

const COLOR = {
  tierra: '#b9674a', cordon: '#e3cfa8', pasto: '#7cc05c', madera: '#8b5a2b', maderaOsc: '#5e3a1d',
  barro: '#c4906a', paja: '#d9b765', ladrillo: '#c0563a', blanco: '#f6f1e6', rojo: '#d8452f', azul: '#2f8fd0',
  verde: '#4f9d3f', verdeOsc: '#3a7d34', amarillo: '#ffc83d', gris: '#9aa5b1', chapa: '#c9d3da', negro: '#2b2b33'
};

/* ------------------------------------------------------------------ *
 *  Utilidades de decorado
 * ------------------------------------------------------------------ */
function arbol(b, x, z, s = 1, copa = '#4f9d3f') {
  b.cyl(0.22 * s, 0.34 * s, 2.4 * s, '#7a4e2b', x, 0, z, 6);
  b.sphere(1.9 * s, copa, x, 1.6 * s, z, [1.15, 0.85, 1.15], 7);
  b.sphere(1.3 * s, '#5eb04a', x + 0.5 * s, 2.7 * s, z - 0.3 * s, [1, 0.8, 1], 7);
}

function poste(b, x, z, h = 1.4, color = COLOR.madera) { b.box(0.16, h, 0.16, color, x, 0, z); }

function cerco(b, x1, z1, x2, z2, alturas = [0.6, 1.1], paso = 2.4, color = COLOR.madera) {
  const dx = x2 - x1, dz = z2 - z1;
  const L = Math.hypot(dx, dz);
  const n = Math.max(1, Math.round(L / paso));
  const alto = Math.max(...alturas) + 0.25;
  for (let i = 0; i <= n; i++) poste(b, x1 + (dx * i) / n, z1 + (dz * i) / n, alto, color);
  const ang = Math.atan2(-dz, dx);
  for (const h of alturas) {
    b.box(L, 0.07, 0.07, color, (x1 + x2) / 2, h, (z1 + z2) / 2, [0, ang, 0]);
  }
}

function vaca(b, x, z, dir = 0, manchas = true) {
  const sw = (a, c) => (dir === 0 ? [a, c] : [c, a]);
  const [bw, bd] = sw(1.9, 0.9);
  b.box(bw, 1.0, bd, '#f4f1ea', x, 0.7, z);
  if (manchas) {
    const [mw, md] = sw(0.7, 0.95);
    b.box(mw, 0.5, md, '#2b2b33', x + (dir === 0 ? 0.3 : 0), 1.05, z + (dir === 0 ? 0 : 0.3));
  }
  const [px, pz] = dir === 0 ? [0.6, 0.3] : [0.3, 0.6];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) b.box(0.22, 0.72, 0.22, '#3b3b44', x + sx * px, 0, z + sz * pz);
  const hx = dir === 0 ? 1.15 : 0, hz = dir === 0 ? 0 : 1.15;
  const [hw, hd] = sw(0.7, 0.55);
  b.box(hw, 0.55, hd, '#f4f1ea', x + hx, 1.05, z + hz);
  const [nw, nd] = sw(0.2, 0.3);
  b.box(nw, 0.25, nd, '#e8a0a0', x + hx * 1.28, 1.0, z + hz * 1.28);
}

function banderaTextura() {
  const c = document.createElement('canvas');
  c.width = 192; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#75aadb'; g.fillRect(0, 0, 192, 128);
  g.fillStyle = '#ffffff'; g.fillRect(0, 43, 192, 42);
  g.fillStyle = '#f6b40e'; g.beginPath(); g.arc(96, 64, 13, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function texturaAgua() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 256, 256);
  const r = rng(77);
  for (let i = 0; i < 90; i++) {
    const y = r() * 256, x = r() * 256, w = 20 + r() * 70;
    g.fillStyle = r() > 0.5 ? 'rgba(210,175,160,0.55)' : 'rgba(255,240,225,0.7)';
    g.fillRect(x, y, w, 2 + r() * 3);
    g.fillRect(x - 256, y, w, 2 + r() * 3);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* ------------------------------------------------------------------ *
 *  Escenarios de las 8 estaciones (coordenadas locales: z=0 es la estación)
 *  x>0 = derecha del recorrido, x<0 = izquierda, z<0 = hacia adelante
 * ------------------------------------------------------------------ */
const ESCENAS = {
  /* 1 · Puerto Km 192 N.R.B. */
  puerto(b, ctx) {
    // Orilla y muelle
    b.box(5, 0.25, 120, '#dcc08a', 12.5, 0, 0);
    b.box(20, 0.3, 4.6, COLOR.madera, 21, 0.5, -4);
    for (let i = 0; i < 18; i++) b.box(0.08, 0.02, 4.6, COLOR.maderaOsc, 12.5 + i * 1.1, 0.8, -4);
    for (let i = 0; i < 6; i++) for (const dz of [-6.1, -1.9]) b.cyl(0.22, 0.22, 1.9, COLOR.maderaOsc, 14 + i * 3.6, 0, dz, 7);
    // Carga en el muelle
    b.box(1.3, 1.3, 1.3, '#c98a4b', 18, 0.8, -3.2); b.box(1.3, 1.3, 1.3, '#b97a3d', 19.5, 0.8, -3.8); b.box(1.2, 1.2, 1.2, '#c98a4b', 18.7, 2.1, -3.5);
    b.cyl(0.55, 0.55, 1.2, COLOR.rojo, 25, 0.8, -4.5, 10);
    b.cyl(0.57, 0.57, 0.12, COLOR.negro, 25, 1.35, -4.5, 10);
    // Vapor del Ministerio de Obras Públicas (estilizado)
    const bx = 44, bz = -13;
    b.box(16, 1.3, 5, '#7c2a22', bx, 0.05, bz);
    b.box(12.5, 1.3, 4.5, COLOR.blanco, bx + 0.8, 1.35, bz);
    b.box(6.5, 1.7, 3.8, COLOR.blanco, bx + 1, 2.65, bz);
    b.box(7.2, 0.22, 4.2, COLOR.rojo, bx + 1, 4.35, bz);
    for (let i = 0; i < 4; i++) b.box(0.15, 0.8, 0.9, '#5aa9e6', bx - 1.5 + i * 1.6, 3.0, bz + 1.93);
    for (let i = 0; i < 4; i++) b.box(0.15, 0.8, 0.9, '#5aa9e6', bx - 1.5 + i * 1.6, 3.0, bz - 1.93);
    b.cyl(0.5, 0.6, 3.2, COLOR.negro, bx + 2.8, 4.5, bz, 10);
    b.cyl(0.62, 0.62, 0.5, COLOR.rojo, bx + 2.8, 7.3, bz, 10);
    b.cone(2.45, 3.2, '#7c2a22', bx - 8, 0.7, bz, 4, [0, 0, Math.PI / 2], [0.5, 1, 1]);
    // Canoa
    b.sphere(1, COLOR.maderaOsc, 24, 0.12, 5, [2.3, 0.4, 0.62]);
    b.box(0.1, 0.5, 0.9, COLOR.madera, 24, 0.4, 5);
    // Cartel de hito
    b.box(0.2, 2.6, 0.2, COLOR.madera, -8, 0, 5);

    // Agua (animada)
    const agua = ctx.agua(190, 130, 15, -2);
    agua.position.set(15 + 95, 0.06, 0);
    ctx.g.add(agua);
    // Rueda de paletas
    const rueda = new THREE.Group();
    rueda.position.set(bx + 8.4, 1.9, bz);
    const mr = mat(COLOR.rojo);
    for (let i = 0; i < 8; i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.9, 3.6), mr);
      p.rotation.z = (i / 8) * Math.PI * 2;
      p.position.set(Math.sin(p.rotation.z) * -0.9 * 0, 0, 0);
      rueda.add(p);
    }
    ctx.g.add(rueda);
    ctx.anim.push((t, dt) => { rueda.rotation.z -= dt * 1.4; });
    // Humo del vapor
    const humo = [];
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 0), new THREE.MeshLambertMaterial({ color: '#eceff3', transparent: true, opacity: 0.8 }));
      s.userData.f = i / 5;
      ctx.g.add(s);
      humo.push(s);
    }
    ctx.anim.push((t, dt) => {
      for (const s of humo) {
        s.userData.f = (s.userData.f + dt * 0.15) % 1;
        const f = s.userData.f;
        s.position.set(bx + 2.8 - f * 3, 7.9 + f * 6, bz);
        s.scale.setScalar(0.6 + f * 1.8);
        s.material.opacity = 0.8 * (1 - f);
      }
    });
    // Cartel "Km 192"
    const tx = texturaCartel([{ texto: 'KM 192', tam: 0.38 }, { texto: 'N.R.B.', tam: 0.3, color: '#ffd96b' }], { ancho: 512, alto: 256, fondo: ['#7c2a22', '#b8573a'] });
    const p = planoCartel(tx, 2.6, 1.3);
    p.position.set(-8, 2.9, 5.15);
    ctx.g.add(p);
  },

  /* 2 · Subcomisaría «Bermejo» */
  subcomisaria(b, ctx) {
    const cx = -15, cz = -3;
    b.box(9, 3.2, 6.5, COLOR.barro, cx, 0, cz);
    b.box(9.2, 0.5, 6.7, '#a8764f', cx, 0, cz);
    for (let i = 0; i < 9; i++) b.box(0.18, 3.2, 0.18, '#7a5236', cx + 4.55, 0, cz - 3.1 + i * 0.8);
    b.piramide(11.8, 3.4, 9, COLOR.paja, cx, 3.2, cz);
    b.piramide(12.2, 0.5, 9.4, '#b78f45', cx, 3.1, cz);
    b.box(0.2, 2.3, 1.6, '#4a2f1c', cx + 4.5, 0, cz);
    b.box(0.2, 1.0, 1.2, '#3a2a20', cx + 4.5, 1.2, cz + 2.2);
    b.box(0.2, 1.0, 1.2, '#3a2a20', cx + 4.5, 1.2, cz - 2.2);
    // Galería
    for (const dz of [-3.3, 3.3]) b.box(0.26, 2.7, 0.26, COLOR.maderaOsc, cx + 6.3, 0, cz + dz);
    b.box(2.4, 0.2, 7.2, COLOR.madera, cx + 5.4, 2.7, cz);
    // Palenque
    for (const dz of [5, 9]) b.box(0.22, 1.5, 0.22, COLOR.maderaOsc, -8.2, 0, dz);
    b.box(0.2, 0.2, 4.4, COLOR.madera, -8.2, 1.2, 7);
    // Tanque y leña
    b.cyl(0.6, 0.6, 1.4, '#5b7a8a', cx + 2.5, 0, cz + 6.5, 10);
    for (let i = 0; i < 4; i++) b.cyl(0.18, 0.18, 1.6, '#6a4a2a', cx - 3 + i * 0.4, 0, cz + 6, 6, [0, 0, Math.PI / 2]);
    // Corral
    cerco(b, 9, -12, 9, 6, [0.5, 1.0, 1.5], 2.4);
    cerco(b, 9, 6, 24, 6, [0.5, 1.0, 1.5], 2.4);
    cerco(b, 9, -12, 24, -12, [0.5, 1.0, 1.5], 2.4);
    b.box(1.6, 0.9, 1.6, '#e0c55a', 18, 0, -6); b.box(1.6, 0.9, 1.6, '#e0c55a', 19.8, 0, -5.5);
    // Cartel
    const tx = texturaCartel([{ texto: 'SUBCOMISARÍA' }, { texto: '«BERMEJO» · 1936', tam: 0.22 }], { ancho: 768, alto: 256, fondo: ['#1f3a6e', '#2f5aa8'] });
    const p = planoCartel(tx, 4, 1.34);
    p.position.set(cx + 4.65, 2.75, cz);
    p.rotation.y = Math.PI / 2;
    ctx.g.add(p);
  },

  /* 3 · Registro Civil */
  registro(b, ctx) {
    const cx = 14.5, cz = -3;
    b.box(10, 3.4, 7.5, '#f3e7cf', cx, 0, cz);
    b.box(10.2, 0.5, 7.7, '#cdb88f', cx, 0, cz);
    b.gable(11.8, 2.6, 8.6, '#b5472f', cx, 3.4, cz);
    b.box(0.2, 2.3, 1.5, '#4a2f1c', cx - 5.05, 0, cz);
    for (const dz of [2.6, -2.6]) b.box(0.2, 1.3, 1.2, '#8ec5e8', cx - 5.05, 1.1, cz + dz);
    for (let i = 0; i < 6; i++) b.box(2.1, 0.14, 1.0, i % 2 ? COLOR.blanco : COLOR.rojo, cx - 6.1, 2.75 - 0.0, cz - 3 + i * 1.0 - 0.0 + 0.0, [0, 0, -0.18]);
    for (const dz of [-3.1, 3.1]) b.box(0.2, 2.7, 0.2, COLOR.maderaOsc, cx - 7.1, 0, cz + dz);
    // Anexo de la carnicería
    b.box(4.5, 2.8, 5.5, '#f0d9b5', cx - 0.5, 0, cz + 7);
    b.gable(5.4, 1.6, 6.2, '#b5472f', cx - 0.5, 2.8, cz + 7);
    for (let i = 0; i < 5; i++) b.box(1.6, 0.14, 0.9, i % 2 ? COLOR.blanco : COLOR.azul, cx - 3.4, 2.4, cz + 5 + i * 0.9, [0, 0, -0.2]);
    b.box(0.2, 1.8, 1.8, '#4a2f1c', cx - 2.8, 0, cz + 7);
    // Atril con el libro de nacimientos
    b.cyl(0.22, 0.3, 1.2, COLOR.maderaOsc, 8, 0, 3.5, 8);
    b.box(1.4, 0.09, 1.0, '#7b2a1d', 8, 1.2, 3.5, [0, 0, 0.0]);
    b.box(0.62, 0.07, 0.86, '#ffffff', 7.67, 1.29, 3.5, [0, 0, 0.12]);
    b.box(0.62, 0.07, 0.86, '#fffaf0', 8.33, 1.29, 3.5, [0, 0, -0.12]);
    // Carro de colono con bolsas
    const kx = -13, kz = 4;
    b.box(3.4, 0.2, 1.8, COLOR.madera, kx, 0.8, kz);
    for (const dz of [-1, 1]) b.cyl(0.8, 0.8, 0.14, COLOR.maderaOsc, kx - 0.6, 0.8, kz + dz * 1.05, 14, [Math.PI / 2, 0, 0]);
    for (const dz of [-1, 1]) b.cyl(0.8, 0.8, 0.14, COLOR.maderaOsc, kx + 0.6, 0.8, kz + dz * 1.05, 14, [Math.PI / 2, 0, 0]);
    b.box(3.4, 0.14, 0.14, COLOR.maderaOsc, kx - 3.3, 0.9, kz - 0.6);
    b.box(3.4, 0.14, 0.14, COLOR.maderaOsc, kx - 3.3, 0.9, kz + 0.6);
    for (let i = 0; i < 3; i++) b.sphere(0.55, '#e9dfc8', kx - 0.8 + i * 0.8, 1.0, kz, [1, 1.1, 0.9]);
    // Carteles
    const t1 = texturaCartel([{ texto: 'REGISTRO CIVIL' }, { texto: 'desde agosto de 1938', tam: 0.2 }], { ancho: 768, alto: 256, fondo: ['#6e2a1e', '#a8442f'] });
    const p1 = planoCartel(t1, 4, 1.34); p1.position.set(cx - 5.18, 3.0, cz); p1.rotation.y = -Math.PI / 2; ctx.g.add(p1);
    const t2 = texturaCartel([{ texto: 'CARNICERÍA' }], { ancho: 512, alto: 160, fondo: ['#1f5a3a', '#2f8a5a'] });
    const p2 = planoCartel(t2, 2.6, 0.8); p2.position.set(cx - 2.92, 2.6, cz + 7 - 1.7); p2.rotation.y = -Math.PI / 2; ctx.g.add(p2);
    const t3 = texturaCartel([{ texto: 'ACTA N.º 1', tam: 0.3 }, { texto: '27 de agosto de 1938', tam: 0.2 }], { ancho: 512, alto: 200, fondo: ['#5a3a1a', '#8a5a2b'] });
    const p3 = planoCartel(t3, 2.4, 0.94); p3.position.set(7.9, 2.1, 3.5); p3.rotation.y = -Math.PI / 2; p3.position.x = 8.9; ctx.g.add(p3);
    b.box(0.12, 2.0, 0.12, COLOR.maderaOsc, 8.95, 0, 4.7); b.box(0.12, 2.0, 0.12, COLOR.maderaOsc, 8.95, 0, 2.3);
  },

  /* 4 · Desmotadora Oficial y Chacra Experimental */
  desmotadora(b, ctx) {
    const cx = -17.5, cz = -3;
    b.box(16, 6, 12, '#9fb2bf', cx, 0, cz);
    b.box(16.2, 0.7, 12.2, '#7d8f9c', cx, 0, cz);
    b.gable(17.6, 3.2, 13, COLOR.chapa, cx, 6, cz);
    b.cyl(0.95, 1.2, 15, '#b5523a', cx - 5.5, 0, cz - 7.5, 10);
    b.cyl(1.2, 1.2, 0.7, COLOR.negro, cx - 5.5, 14.4, cz - 7.5, 10);
    b.box(0.2, 4.2, 5.4, '#3a4350', cx + 8.05, 0, cz);
    for (let i = 0; i < 5; i++) b.box(0.22, 0.12, 5.5, '#566271', cx + 8.06, 0.7 + i * 0.8, cz);
    b.box(2.2, 0.9, 11, '#8b6a47', -8.6, 0, cz);
    // Fardos
    const fardo = (x, y, z) => { b.box(1.8, 1.2, 1.2, '#f6f4ee', x, y, z); b.box(1.86, 0.1, 1.26, '#555b66', x, y + 0.3, z); b.box(1.86, 0.1, 1.26, '#555b66', x, y + 0.8, z); };
    fardo(-8.6, 0.9, 0.5); fardo(-8.6, 0.9, -1.5); fardo(-8.6, 0.9, -3.5); fardo(-8.6, 2.1, -0.5); fardo(-8.6, 2.1, -2.5);
    fardo(-7.4, 0, 7); fardo(-7.4, 1.2, 7); fardo(-7.4, 0, 8.4);
    // Camión cargado
    const tx = -11.5, tz = 10;
    b.box(2.5, 0.5, 6.6, '#7a2e22', tx, 0.65, tz);
    b.box(2.4, 1.9, 2.2, COLOR.rojo, tx, 0.65, tz + 2.2);
    b.box(2.2, 0.7, 0.1, '#bfe3f5', tx, 1.9, tz + 3.35);
    for (const dz of [-2, 2.4]) for (const dx of [-1.25, 1.25]) b.cyl(0.55, 0.55, 0.4, COLOR.negro, tx + dx, 0.55, tz + dz, 12, [0, 0, Math.PI / 2]);
    b.sphere(1.1, '#fbfaf5', tx, 1.0, tz - 1.2, [1.1, 1, 1.1]); b.sphere(1.0, '#fbfaf5', tx, 1.0, tz + 0.2, [1.1, 1, 1.1]); b.sphere(0.9, '#f4f1ea', tx, 1.9, tz - 0.5);
    // Chacra experimental
    cerco(b, 9, -13, 9, 12, [0.55, 1.0], 2.4);
    cerco(b, 9, 12, 32, 12, [0.55, 1.0], 2.4);
    cerco(b, 9, -13, 32, -13, [0.55, 1.0], 2.4);
    for (let f = 0; f < 4; f++) {
      b.box(20, 0.35, 1.1, '#6b4a35', 20, 0, -9 + f * 4.5);
      for (let i = 0; i < 14; i++) {
        b.sphere(0.5, COLOR.verdeOsc, 11.5 + i * 1.4, 0.3, -9 + f * 4.5, [1, 0.9, 1], 6);
        b.sphere(0.2, '#ffffff', 11.5 + i * 1.4 + 0.2, 0.9, -9 + f * 4.5 + 0.2, null, 5);
      }
    }
    b.box(5, 2.6, 3.4, '#cfeadf', 29, 0, 5); b.gable(5.4, 1.4, 3.8, '#e8f5ef', 29, 2.6, 5);
    for (let i = 0; i < 3; i++) b.box(0.12, 2.6, 3.5, '#ffffff', 26.7 + i * 2.3, 0, 5);
    // Cartel
    const t = texturaCartel([{ texto: 'CHACRA EXPERIMENTAL', tam: 0.24 }, { texto: '(actual INTA)', tam: 0.2 }], { ancho: 640, alto: 220, fondo: ['#2d5a2a', '#4f9d3f'] });
    const p = planoCartel(t, 3.6, 1.24); p.position.set(8.2, 2.0, 5); p.rotation.y = -Math.PI / 2; ctx.g.add(p);
    b.box(0.14, 2.0, 0.14, COLOR.maderaOsc, 8.15, 0, 6.8); b.box(0.14, 2.0, 0.14, COLOR.maderaOsc, 8.15, 0, 3.2);
    const t2 = texturaCartel([{ texto: 'DESMOTADORA OFICIAL', tam: 0.22 }, { texto: 'Junta Nacional del Algodón', tam: 0.17 }], { ancho: 768, alto: 220, fondo: ['#33414f', '#566a7c'] });
    const p2 = planoCartel(t2, 4.6, 1.32); p2.position.set(cx + 8.2, 4.9, cz); p2.rotation.y = Math.PI / 2; ctx.g.add(p2);
  },

  /* 5 · Escuela Nacional N.º 116 */
  escuela(b, ctx) {
    // Rancho de estaqueo (1942)
    const rx = -14, rz = 3;
    b.box(8, 2.8, 5.5, '#b98253', rx, 0, rz);
    for (let i = 0; i < 9; i++) b.box(0.2, 2.8, 0.2, '#6e4528', rx + 4.05, 0, rz - 2.6 + i * 0.65);
    b.piramide(10, 3, 7.5, COLOR.paja, rx, 2.8, rz);
    b.box(0.2, 2.1, 1.3, '#4a2f1c', rx + 4.0, 0, rz);
    b.box(0.2, 0.9, 1.0, '#3a2a20', rx + 4.0, 1.2, rz + 1.9);
    // Pila de ladrillos
    b.box(2.4, 0.6, 1.3, COLOR.ladrillo, -8.5, 0, -4); b.box(2.2, 0.6, 1.2, '#cf6444', -8.5, 0.6, -4); b.box(2.0, 0.6, 1.1, COLOR.ladrillo, -8.5, 1.2, -4);
    b.box(2.4, 0.6, 1.3, '#cf6444', -8.5, 0, -6); b.box(2.2, 0.6, 1.2, COLOR.ladrillo, -8.5, 0.6, -6);
    // Edificio de material (1947)
    const ex = -29, ez = -9;
    b.box(20, 4.6, 9, '#c0563a', ex, 0, ez);
    b.box(20.3, 0.7, 9.3, '#f0e8d8', ex, 0, ez);
    for (let i = 0; i < 7; i++) b.box(0.18, 1.6, 1.4, '#9fd6f2', ex + 10.0, 1.5, ez - 7.5 + i * 2.5);
    b.box(0.22, 2.5, 2.2, '#f3e9d2', ex + 10.0, 0, ez);
    b.gable(21.6, 2.8, 9.8, '#6e4a38', ex, 4.6, ez);
    // Mástil
    b.cyl(0.07, 0.1, 8.5, '#c8ced6', -12, 0, -6, 6);
    b.sphere(0.2, '#ffc83d', -12, 8.4, -6);
    // Cancha y festejos (1944)
    b.box(26, 0.04, 28, '#8fd06a', 24, 0.0, -1);
    for (const gz of [-12, 10]) {
      b.box(0.14, 2.2, 0.14, '#ffffff', 21, 0, gz - 1.7); b.box(0.14, 2.2, 0.14, '#ffffff', 21, 0, gz + 1.7);
      b.box(0.14, 0.14, 3.6, '#ffffff', 21, 2.2, gz);
    }
    b.sphere(0.35, '#ffffff', 22, 0.0, -1.5);
    // Banderines
    for (const bz of [-14, 12]) b.cyl(0.08, 0.08, 4.4, COLOR.maderaOsc, 8.6, 0, bz, 6);
    const cols = ['#d8452f', '#ffd23f', '#2f8fd0', '#4f9d3f'];
    for (let i = 0; i < 14; i++) {
      const t = (i + 0.5) / 14;
      b.box(0.55, 0.55, 0.05, cols[i % 4], 8.6, 4.0 - Math.sin(t * Math.PI) * 0.7 - 0.3, -14 + t * 26, [0, Math.PI / 2, Math.PI / 4]);
    }
    // Parrilla del asado
    b.box(2.6, 0.7, 0.9, '#33343a', 12, 0.4, 5); b.box(2.4, 0.08, 0.7, '#ff7a2f', 12, 1.1, 5);
    for (const dz of [-0.3, 0.3]) for (const dx of [-1.1, 1.1]) b.box(0.1, 0.5, 0.1, '#33343a', 12 + dx, 0, 5 + dz);
    // Carteles
    const t = texturaCartel([{ texto: 'ESCUELA N.º 116', tam: 0.27 }, { texto: 'rancho de estaqueo · 1942', tam: 0.18 }], { ancho: 640, alto: 220, fondo: ['#6e4528', '#a9744c'] });
    const p = planoCartel(t, 3.8, 1.3); p.position.set(rx + 4.2, 3.6, rz + 0.0); p.rotation.y = Math.PI / 2; ctx.g.add(p);
    const t2 = texturaCartel([{ texto: 'EPEP N.º 166', tam: 0.27 }, { texto: 'edificio de material · 1947', tam: 0.17 }], { ancho: 720, alto: 220, fondo: ['#7a2e22', '#c0563a'] });
    const p2 = planoCartel(t2, 4.2, 1.28); p2.position.set(ex + 10.2, 3.1, ez + 5.5); p2.rotation.y = Math.PI / 2; p2.visible = true; ctx.g.add(p2);
    ctx.bandera(-12, 7.2, -6);
  },

  /* 6 · Plaza General San Martín */
  plaza(b, ctx) {
    const cx = -26, cz = -2;
    b.box(33, 0.05, 36, '#93d474', cx + 0.5, 0.0, cz);
    b.box(26, 0.07, 2.4, '#e6d2a8', -19.5, 0, cz);
    b.box(2.4, 0.07, 34, '#e6d2a8', cx, 0, cz);
    b.cyl(5, 5, 0.08, '#e6d2a8', cx, 0, cz, 24);
    // Alambrado de cinco hilos
    const hilos = [0.35, 0.6, 0.85, 1.1, 1.35];
    cerco(b, -9, -20, -9, -3.4, hilos, 3.1, '#6e4a2a');
    cerco(b, -9, -0.6, -9, 16, hilos, 3.1, '#6e4a2a');
    cerco(b, -9, 16, -43, 16, hilos, 3.1, '#6e4a2a');
    cerco(b, -9, -20, -43, -20, hilos, 3.1, '#6e4a2a');
    // Monumento
    b.cyl(2.3, 2.5, 0.5, '#bdb7a6', cx, 0, cz, 16);
    b.box(1.9, 2.4, 1.9, '#d3cdbb', cx, 0.5, cz);
    b.box(2.3, 0.3, 2.3, '#bdb7a6', cx, 2.9, cz);
    b.box(1.2, 0.6, 0.8, '#a9a391', cx, 3.2, cz);
    b.sphere(0.55, '#a9a391', cx, 3.7, cz);
    // Canteros y bancos
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      b.sphere(0.32, ['#ff6fa3', '#ffd23f', '#ffffff', '#ff7a2f'][i % 4], cx + Math.cos(a) * 3.7, 0.0, cz + Math.sin(a) * 3.7, null, 5);
    }
    for (const [x, z, r] of [[-19.5, 1.6, 0], [-19.5, -5.6, 0], [cx + 2.4, 8, 1], [cx - 2.4, 8, 1]]) {
      b.box(2.0, 0.12, 0.6, '#8b5a2b', x, 0.5, z); b.box(2.0, 0.5, 0.1, '#8b5a2b', x, 0.6, z - 0.3);
      b.box(0.1, 0.5, 0.5, '#33343a', x - 0.8, 0, z); b.box(0.1, 0.5, 0.5, '#33343a', x + 0.8, 0, z);
    }
    for (const [x, z] of [[-14, -2], [-14, 8], [-14, -12], [cx - 6, cz - 6]]) {
      b.cyl(0.08, 0.1, 3.4, '#33343a', x, 0, z, 6); b.sphere(0.3, '#fff2b0', x, 3.3, z);
    }
    // Árboles del parque
    for (const [x, z, s] of [[-14, -15, 1.3], [-14, 11, 1.3], [-36, -14, 1.5], [-37, 10, 1.4], [-32, -4, 1.2], [-20, 12, 1.2], [-20, -16, 1.2]]) arbol(b, x, z, s, '#3f9a3c');
    // Vacas fuera del alambrado
    vaca(b, 11, -4, 0); vaca(b, 16, 5, 1); vaca(b, 13, -10, 0, false);
    vaca(b, -17, 20, 0);
    // Mástil de los actos patrios
    b.cyl(0.07, 0.1, 8.5, '#c8ced6', -13, 0, -8.5, 6);
    b.sphere(0.2, '#ffc83d', -13, 8.4, -8.5);
    ctx.bandera(-13, 7.2, -8.5);
    const t = texturaCartel([{ texto: 'BUSTO A SAN MARTÍN', tam: 0.22 }, { texto: '17 de agosto de 1950', tam: 0.2 }], { ancho: 640, alto: 200, fondo: ['#4a4a52', '#6b6b78'] });
    const p = planoCartel(t, 1.7, 0.53); p.position.set(cx + 0.97, 1.6, cz); p.rotation.y = Math.PI / 2; ctx.g.add(p);
    const t2 = texturaCartel([{ texto: 'PLAZA GENERAL SAN MARTÍN', tam: 0.2 }, { texto: 'alambrado de cinco hilos', tam: 0.17 }], { ancho: 720, alto: 200, fondo: ['#1f5a3a', '#2f8a5a'] });
    const p2 = planoCartel(t2, 3.8, 1.05); p2.position.set(-9.4, 2.2, -2); p2.rotation.y = Math.PI / 2;
    ctx.g.add(p2);
    b.box(0.14, 2.2, 0.14, COLOR.maderaOsc, -9.3, 0, -0.1); b.box(0.14, 2.2, 0.14, COLOR.maderaOsc, -9.3, 0, -3.9);
  },

  /* 7 · Puente Libertad */
  puente(b, ctx) {
    const H = 0.95, acero = '#c5ccd4';
    const ang = Math.atan2(H, 8);
    // rampas y tablero
    b.geo(new THREE.BoxGeometry(11.6, 0.45, 8.06), '#8f949c', 0, H / 2 - 0.225, -10, [ang, 0, 0]);
    b.box(11.6, 0.45, 20, '#8f949c', 0, H - 0.45, -24);
    b.geo(new THREE.BoxGeometry(11.6, 0.45, 8.06), '#8f949c', 0, H / 2 - 0.225, -38, [-ang, 0, 0]);
    b.box(10.8, 0.04, 20, '#5f636b', 0, H - 0.01, -24);
    for (let i = 0; i < 7; i++) b.box(0.16, 0.02, 1.8, '#ffffff', 0, H + 0.03, -15.5 - i * 3);
    // pilares
    for (const z of [-17, -24, -31]) for (const x of [-4, 4]) b.cyl(0.7, 0.9, 3.6, '#a8a49a', x, -2.75, z, 8);
    // barandas
    for (const x of [-5.6, 5.6]) {
      b.box(0.14, 0.14, 20, COLOR.rojo, x, H + 1.45, -24);
      b.box(0.1, 0.1, 20, '#e9e4d8', x, H + 0.9, -24);
      for (let i = 0; i <= 10; i++) b.box(0.14, 1.2, 0.14, '#e9e4d8', x, H, -14 - i * 2);
    }
    // arcos de acero
    for (const z of [-17, -24, -31]) b.geo(new THREE.TorusGeometry(5.7, 0.25, 6, 14, Math.PI), acero, 0, H + 0.05, z);
    for (const x of [-5.7, 5.7]) { b.box(0.3, 0.3, 14, acero, x, H + 5.7, -24); }
    // balsa y canoa del "antes"
    b.box(7, 0.4, 4.5, COLOR.madera, -22, 0.06, -22);
    for (let i = 0; i < 6; i++) b.box(0.1, 0.03, 4.5, COLOR.maderaOsc, -25 + i * 1.2, 0.46, -22);
    b.cyl(0.5, 0.5, 1.1, COLOR.rojo, -20.5, 0.46, -21, 10); b.cyl(0.5, 0.5, 1.1, '#2f8fd0', -22.5, 0.46, -23, 10);
    b.box(0.2, 1.8, 0.2, COLOR.maderaOsc, -24.5, 0.46, -20.2);
    b.sphere(1, COLOR.maderaOsc, 20, 0.1, -30, [2.4, 0.4, 0.62]);
    // agua
    const agua = ctx.agua(700, 34, 14, 2);
    agua.position.set(0, 0.07, -24.5);
    ctx.g.add(agua);
    // cartel de inauguración sobre la entrada del puente
    const t = texturaCartel([{ texto: 'PUENTE LIBERTAD', tam: 0.28 }, { texto: 'inaugurado el 8 de febrero de 1958', tam: 0.17 }], { ancho: 900, alto: 220, fondo: ['#1f3a6e', '#2f5aa8'] });
    const p = planoCartel(t, 5.6, 1.37); p.position.set(-8.6, 2.6, -6.5); p.rotation.y = Math.PI / 2 * 0; ctx.g.add(p);
    b.box(0.14, 2.2, 0.14, COLOR.maderaOsc, -8.6, 0, -6.4);
    const t2 = texturaCartel([{ texto: 'Antes: canoas y balsas', tam: 0.24 }], { ancho: 640, alto: 160, fondo: ['#7a4e2a', '#a9744c'] });
    const p2 = planoCartel(t2, 3.6, 0.9); p2.position.set(-22, 2.6, -22); ctx.g.add(p2);
    b.box(0.12, 2.0, 0.12, COLOR.maderaOsc, -22, 0.0, -22.1);
  },

  /* 8 · Casas Redondas y silos de Jorge Telbiz */
  casas(b, ctx) {
    const casa = (x, z, r, h = 3.4, tono = '#c25a35') => {
      b.cyl(r, r, h, tono, x, 0, z, 22);
      b.cyl(r + 0.1, r + 0.1, 0.4, '#e0b48a', x, h - 0.4, z, 22);
      for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2; b.box(0.06, h - 0.9, 0.06, '#d89066', x + Math.cos(a) * (r + 0.02), 0.2, z + Math.sin(a) * (r + 0.02)); }
      b.domo(r, '#d9784a', x, h, z, 18);
      b.sphere(0.35, '#e0b48a', x, h + r - 0.2, z);
      b.box(0.3, 2.2, 1.3, '#3a2a20', x - r + 0.02, 0, z);
      b.box(0.3, 0.9, 0.9, '#3a2a20', x - r * 0.7, 1.4, z + r * 0.7);
    };
    casa(14, -4, 3.7); casa(23, 6, 3.2, 3.2, '#b84f2e'); casa(25, -15, 3.4, 3.4);
    // anillo del camino de la volanta
    b.cyl(7.4, 7.4, 0.04, '#d9a672', 14, 0, -4, 36);
    b.cyl(4.6, 4.6, 0.05, '#7cc05c', 14, 0.0, -4, 36);
    // silos en espiral
    const silo = (x, z, r, h) => {
      b.cyl(r, r, h, '#c7633c', x, 0, z, 20);
      b.domo(r, '#d9784a', x, h, z, 18);
      const pts = [];
      const vueltas = 4.5;
      for (let i = 0; i <= 120; i++) { const t = i / 120; const a = t * vueltas * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * (r + 0.06), 0.5 + t * (h - 1), Math.sin(a) * (r + 0.06))); }
      b.geo(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 180, 0.17, 5), '#f1d3a7', x, 0, z);
    };
    silo(9, 13, 2.1, 9); silo(31, -4, 1.9, 7.5);
    // volanta animada (carro de dos ruedas que camina en círculos)
    const volanta = new THREE.Group();
    const mm = mat(COLOR.madera), mo = mat(COLOR.maderaOsc);
    const plat = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, 2.3), mm); plat.position.y = 0.95; volanta.add(plat);
    const bolsa = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.9), mat('#e9dfc8')); bolsa.position.set(0, 1.3, 0); volanta.add(bolsa);
    for (const sx of [-0.8, 0.8]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 3.2), mo); m.position.set(sx, 0.95, 2.4); volanta.add(m); }
    const ruedas = [];
    for (const sx of [-0.95, 0.95]) {
      const piv = new THREE.Group(); piv.position.set(sx, 0.85, 0);
      const disco = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.14, 16), mo); disco.rotation.z = Math.PI / 2; piv.add(disco);
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.65, 0.1), mm); piv.add(r1);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 1.65), mm); piv.add(r2);
      volanta.add(piv); ruedas.push(piv);
    }
    // caballo estilizado (sin detalles realistas): lomo + cabeza simples
    const mc = mat('#8a5a3a');
    const lomo = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 1.9), mc); lomo.position.set(0, 1.35, 4.2); volanta.add(lomo);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.45, 0.8), mc); cab.position.set(0, 1.85, 5.35); volanta.add(cab);
    for (const sx of [-0.22, 0.22]) for (const sz of [3.6, 4.8]) { const pata = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.0, 0.16), mat('#3b2a1c')); pata.position.set(sx, 0.5, sz); volanta.add(pata); }
    ctx.g.add(volanta);
    let ang = 0;
    ctx.anim.push((t, dt) => {
      ang += dt * 0.32;
      const R = 5.9;
      volanta.position.set(14 + Math.cos(ang) * R, 0, -4 + Math.sin(ang) * R);
      volanta.rotation.y = -ang + Math.PI;
      for (const w of ruedas) w.rotation.x += dt * 0.32 * R / 0.85;
    });
    const t = texturaCartel([{ texto: 'CASAS REDONDAS', tam: 0.28 }, { texto: 'Jorge Telbiz · década de 1950', tam: 0.17 }], { ancho: 760, alto: 220, fondo: ['#7a2e22', '#c0563a'] });
    const p = planoCartel(t, 4.4, 1.27); p.position.set(8.3, 2.4, 12); p.rotation.y = -Math.PI / 2; ctx.g.add(p);
    b.box(0.14, 2.2, 0.14, COLOR.maderaOsc, 8.35, 0, 10.3); b.box(0.14, 2.2, 0.14, COLOR.maderaOsc, 8.35, 0, 13.7);
  }
};

/* ------------------------------------------------------------------ *
 *  Construcción del mundo completo
 * ------------------------------------------------------------------ */
export function crearMundo(scene, estaciones) {
  const raiz = new THREE.Group();
  scene.add(raiz);
  const anim = []; // funciones (t, dt) para animaciones del escenario
  const r = rng(20261027);

  /* ---- Cielo ---- */
  const cielo = (() => {
    const g = new THREE.SphereGeometry(520, 24, 14);
    const pos = g.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const top = new THREE.Color('#3f8fe0'), mid = new THREE.Color('#9fd3f5'), hor = new THREE.Color('#e9f6fc');
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 520;
      if (y > 0.35) c.copy(mid).lerp(top, Math.min(1, (y - 0.35) / 0.65));
      else if (y > 0) c.copy(hor).lerp(mid, y / 0.35);
      else c.copy(hor);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    m.renderOrder = -10;
    m.frustumCulled = false;
    return m;
  })();
  raiz.add(cielo);
  const sol = new THREE.Mesh(new THREE.SphereGeometry(26, 16, 12), new THREE.MeshBasicMaterial({ color: '#fff3b0', fog: false }));
  sol.frustumCulled = false;
  raiz.add(sol);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(44, 16, 12), new THREE.MeshBasicMaterial({ color: '#fff3b0', fog: false, transparent: true, opacity: 0.22, depthWrite: false }));
  halo.frustumCulled = false;
  raiz.add(halo);

  /* ---- Nubes ---- */
  {
    const b = new Builder();
    for (let i = 0; i < 26; i++) {
      const cx = (r() - 0.5) * 700, cy = 70 + r() * 60, cz = -r() * 1000 + 120;
      const n = 3 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) b.sphere(9 + r() * 7, '#ffffff', cx + k * 11 - n * 5, cy + r() * 4, cz + (r() - 0.5) * 8, [1.6, 0.7, 1], 7);
    }
    const nubes = b.build({ cast: false, receive: false, material: new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, transparent: true, opacity: 0.95 }) });
    raiz.add(nubes);
    anim.push((t) => { nubes.position.x = Math.sin(t * 0.02) * 40; });
  }

  /* ---- Suelo y camino ---- */
  const LARGO = 1100, ZC = -430;
  {
    const g = new THREE.PlaneGeometry(900, LARGO, 90, 110);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const a = new THREE.Color('#79bd57'), c2 = new THREE.Color('#9ccf6a'), c3 = new THREE.Color('#6aa94c');
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i) + ZC;
      const n = Math.sin(x * 0.045) * Math.cos(z * 0.05) + Math.sin(x * 0.13 + z * 0.09) * 0.5;
      c.copy(a);
      if (n > 0.35) c.lerp(c2, Math.min(1, (n - 0.35) * 1.2)); else if (n < -0.4) c.lerp(c3, Math.min(1, (-0.4 - n) * 1.1));
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const suelo = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true }));
    suelo.position.set(0, 0, ZC);
    suelo.receiveShadow = true;
    raiz.add(suelo);
  }
  {
    const b = new Builder();
    const tramos = [[40, Z_PUENTE - 6], [Z_PUENTE - 42, Z_META - 40]];
    for (const [za, zb] of tramos) {
      const L = za - zb, zc = (za + zb) / 2;
      b.box(11, 0.1, L, COLOR.tierra, 0, 0, zc);
      b.box(0.5, 0.2, L, COLOR.cordon, -5.75, 0, zc);
      b.box(0.5, 0.2, L, COLOR.cordon, 5.75, 0, zc);
      for (let z = za - 2; z > zb; z -= 6) {
        b.box(0.16, 0.02, 2.4, '#fff3d0', -1.3, 0.1, z);
        b.box(0.16, 0.02, 2.4, '#fff3d0', 1.3, 0.1, z);
      }
    }
    // Flechas guía hacia cada estación y cartel de salida
    for (let i = 0; i < N_ESTACIONES; i++) {
      for (const dz of [34, 28, 22]) {
        const z = zEstacion(i) + dz;
        b.box(1.5, 0.02, 0.32, '#ffd23f', -0.55, 0.11, z, [0, 0.63, 0]);
        b.box(1.5, 0.02, 0.32, '#ffd23f', 0.55, 0.11, z, [0, -0.63, 0]);
      }
    }
    // Postes de luz / cercos a los costados
    for (let z = 20; z > Z_META - 30; z -= 30) {
      b.cyl(0.1, 0.12, 6.4, '#6b5a48', -7.2, 0, z, 6);
      b.box(1.8, 0.14, 0.14, '#6b5a48', -7.2, 6.1, z);
    }
    const camino = b.build({ cast: false, receive: true });
    raiz.add(camino);
  }
  // Cerros lejanos
  {
    const b = new Builder();
    for (let i = 0; i < 46; i++) {
      const lado = i % 2 ? 1 : -1;
      const x = lado * (190 + r() * 160), z = 60 - r() * 1000, s = 30 + r() * 50;
      b.sphere(s, ['#6aa86a', '#7eb877', '#5f9d62'][i % 3], x, -s * 0.6, z, [1.6, 0.55, 1.4], 8);
    }
    raiz.add(b.build({ cast: false, receive: false }));
  }

  /* ---- Árboles (instanciados) ---- */
  {
    const zonas = []; // zonas sin árboles
    for (let i = 0; i < N_ESTACIONES; i++) zonas.push([zEstacion(i) - 26, zEstacion(i) + 30, -48, 48]);
    zonas.push([Z_PUENTE - 46, Z_PUENTE - 4, -400, 400]);
    zonas.push([Z_META - 14, Z_META + 30, -24, 24]);
    const pos = [];
    for (let z = 30; z > Z_META - 60; z -= 3 + r() * 5) {
      for (const lado of [-1, 1]) {
        if (r() < 0.25) continue;
        const x = lado * (9.5 + Math.pow(r(), 1.4) * 60);
        if (zonas.some(([za, zb, xa, xb]) => z < zb && z > za && x > xa && x < xb)) continue;
        pos.push([x, z, 0.8 + r() * 0.9]);
      }
    }
    const tronco = new THREE.CylinderGeometry(0.2, 0.32, 2.4, 6).translate(0, 1.2, 0);
    const copa = new THREE.IcosahedronGeometry(1.9, 0).scale(1.2, 0.85, 1.2).translate(0, 3.4, 0);
    const it = new THREE.InstancedMesh(tronco, mat('#7a4e2b'), pos.length);
    const ic = new THREE.InstancedMesh(copa, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), pos.length);
    const m4 = new THREE.Matrix4(), col = new THREE.Color();
    const verdes = ['#4f9d3f', '#5eb04a', '#3f8a3a', '#6cbc50', '#4a9a5a'];
    pos.forEach(([x, z, s], i) => {
      m4.compose(new THREE.Vector3(x, 0, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 6), new THREE.Vector3(s, s * (0.9 + r() * 0.3), s));
      it.setMatrixAt(i, m4); ic.setMatrixAt(i, m4);
      col.set(verdes[i % verdes.length]); ic.setColorAt(i, col);
    });
    it.castShadow = ic.castShadow = true;
    raiz.add(it, ic);

    // Flores y arbustos a la vera del camino
    const flores = [], arbustos = [];
    for (let z = 28; z > Z_META - 30; z -= 1.8 + r() * 2.6) {
      for (const lado of [-1, 1]) {
        if (r() < 0.4) continue;
        const x = lado * (6.4 + r() * 3.2);
        if (zonas.some(([za, zb, xa, xb]) => z < zb && z > za && Math.abs(x) < 10 && Math.abs(xa) > 30)) { /* se permite en estaciones */ }
        if (z < Z_PUENTE - 4 && z > Z_PUENTE - 44) continue;
        (r() < 0.35 ? arbustos : flores).push([x, z]);
      }
    }
    const fl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.15, 0).translate(0, 0.32, 0), new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), flores.length);
    const colores = ['#ff6fa3', '#ffd23f', '#ffffff', '#ff7a2f', '#b58cff'];
    flores.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); fl.setMatrixAt(i, m4); col.set(colores[i % colores.length]); fl.setColorAt(i, col); });
    const ar = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.75, 0).scale(1.2, 0.8, 1.2).translate(0, 0.55, 0), mat('#3f8a3a'), arbustos.length);
    arbustos.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); ar.setMatrixAt(i, m4); });
    raiz.add(fl, ar);
  }

  /* ---- Algodonales a los costados (instanciados) ---- */
  {
    const filas = [];
    for (let i = -1; i < N_ESTACIONES; i++) {
      const zc = i < 0 ? zEstacion(0) + 70 : zEstacion(i) - SEPARACION / 2;
      const lado = i % 2 ? 1 : -1;
      if (zc < Z_PUENTE + 45 && zc > Z_PUENTE - 90) continue;
      filas.push([lado, zc]);
    }
    const plantas = [], bolls = [];
    const b = new Builder();
    for (const [lado, zc] of filas) {
      b.box(30, 0.05, 36, '#8a6246', lado * 30, 0.0, zc);
      for (let fx = 0; fx < 11; fx++) {
        for (let fz = 0; fz < 15; fz++) {
          const x = lado * (17 + fx * 2.3), z = zc - 16 + fz * 2.3;
          plantas.push([x, z]);
          if (r() < 0.8) bolls.push([x + (r() - 0.5) * 0.3, z + (r() - 0.5) * 0.3]);
        }
      }
    }
    raiz.add(b.build({ cast: false, receive: true }));
    const m4 = new THREE.Matrix4();
    const pl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.55, 0).scale(1, 0.85, 1).translate(0, 0.45, 0), mat('#3a7d34'), plantas.length);
    plantas.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); pl.setMatrixAt(i, m4); });
    const bo = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.2, 0).translate(0, 0.95, 0), new THREE.MeshLambertMaterial({ color: '#ffffff', emissive: '#555555', flatShading: true }), bolls.length);
    bolls.forEach(([x, z], i) => { m4.makeTranslation(x, 0, z); bo.setMatrixAt(i, m4); });
    raiz.add(pl, bo);
  }

  /* ---- Contexto de construcción de escenarios ---- */
  const texAgua = texturaAgua();
  const aguas = [];
  const aguaFn = (ancho, largo, rx, rz) => {
    const t = texAgua.clone();
    t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(ancho / 22, largo / 22);
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(ancho, largo).rotateX(-Math.PI / 2),
      new THREE.MeshLambertMaterial({ color: '#b8583b', map: t })
    );
    m.receiveShadow = true;
    aguas.push({ t, v: rz });
    return m;
  };
  anim.push((tt, dt) => { for (const a of aguas) { a.t.offset.y += dt * 0.012 * (a.v || 1); a.t.offset.x += dt * 0.004; } });

  const banderaTex = banderaTextura();
  const banderas = [];
  function banderaFn(g, x, y, z) {
    const geo = new THREE.PlaneGeometry(2.4, 1.6, 12, 1);
    const orig = Float32Array.from(geo.attributes.position.array);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: banderaTex, side: THREE.DoubleSide }));
    m.position.set(x + 1.2, y, z);
    g.add(m);
    banderas.push({ m, orig });
  }
  anim.push((t) => {
    for (const { m, orig } of banderas) {
      const p = m.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const x0 = orig[i * 3];
        p.setZ(i, Math.sin(x0 * 2.6 - t * 4.2) * 0.14 * ((x0 + 1.2) / 2.4));
      }
      p.needsUpdate = true;
    }
  });

  /* ---- Estaciones ---- */
  const paradas = [];
  const colorBaliza = ['#ff9f43', '#4aa8ff', '#ff6f91', '#ffd23f', '#a06cff', '#34d399', '#4aa8ff', '#ff7a2f'];
  estaciones.forEach((est, i) => {
    const sz = zEstacion(i);
    const g = new THREE.Group();
    g.position.z = sz;
    raiz.add(g);
    const b = new Builder(); // coordenadas locales: el grupo `g` ya está en z = sz
    const ctx = { g, anim, agua: aguaFn, bandera: (x, y, z) => banderaFn(g, x, y, z) };
    (ESCENAS[est.escena] || (() => {}))(b, ctx);

    // Pórtico con el cartel de la estación
    b.box(0.6, 8.2, 0.6, '#7a4e2b', -6.9, 0, 0);
    b.box(0.6, 8.2, 0.6, '#7a4e2b', 6.9, 0, 0);
    b.box(14.6, 0.7, 0.7, '#5e3a1d', 0, 7.6, 0);
    b.box(0.3, 1.6, 0.3, '#5e3a1d', -6.0, 6.0, 0, [0, 0, -0.6]);
    b.box(0.3, 1.6, 0.3, '#5e3a1d', 6.0, 6.0, 0, [0, 0, 0.6]);
    // Flechas y marca de parada
    for (const dz of [18, 15]) {
      b.box(1.5, 0.02, 0.32, '#ffd23f', -0.55, 0.11, dz, [0, 0.63, 0]);
      b.box(1.5, 0.02, 0.32, '#ffd23f', 0.55, 0.11, dz, [0, -0.63, 0]);
    }
    g.add(b.build());

    const tex = texturaCartel(
      [{ texto: est.lugar, tam: 0.3 }, { texto: est.anio, tam: 0.22 }],
      { ancho: 1536, alto: 384, insignia: est.orden, fondo: ['#1b2a4a', '#2c4a8a'] }
    );
    const banner = planoCartel(tex, 12.4, 3.1);
    banner.position.set(0, 5.6, 0.36);
    g.add(banner);

    // Baliza luminosa (se ve de lejos)
    const baliza = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.45, 70, 12, 1, true),
      new THREE.MeshBasicMaterial({ color: colorBaliza[i], transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide })
    );
    baliza.position.set(0, 35, -1);
    g.add(baliza);

    // Marca en el suelo del punto de parada
    const marca = new THREE.Group();
    const aro = new THREE.Mesh(new THREE.RingGeometry(1.5, 2.1, 36).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
    const disco = new THREE.Mesh(new THREE.CircleGeometry(1.5, 36).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.28, side: THREE.DoubleSide }));
    marca.add(aro, disco);
    marca.position.set(0, 0.14, 12);
    g.add(marca);
    anim.push((t) => { const s = 1 + Math.sin(t * 3 + i) * 0.08; marca.scale.set(s, 1, s); });

    paradas.push({ i, z: sz, zParada: zParada(i), g, baliza, marca, hecho: false });
  });

  /* ---- Cartel de salida y meta ---- */
  {
    const b = new Builder();
    const arco = (z, ancho, alto) => {
      b.box(0.7, alto, 0.7, '#7a4e2b', -ancho / 2, 0, z);
      b.box(0.7, alto, 0.7, '#7a4e2b', ancho / 2, 0, z);
      b.box(ancho + 0.7, 0.8, 0.8, '#5e3a1d', 0, alto - 0.4, z);
    };
    arco(-14, 14.6, 7.6);
    arco(Z_META, 15.6, 9);
    // Banderines de la meta
    const cols = ['#d8452f', '#ffd23f', '#2f8fd0', '#4f9d3f', '#ff6fa3'];
    for (let i = 0; i < 18; i++) {
      const t = (i + 0.5) / 18;
      b.box(0.7, 0.7, 0.06, cols[i % 5], -7.8 + t * 15.6, 8.4 - Math.sin(t * Math.PI) * 1.2, Z_META + 0.5, [0, 0, Math.PI / 4]);
    }
    raiz.add(b.build());
    const salida = planoCartel(texturaCartel([{ texto: 'SALIDA', tam: 0.36 }, { texto: 'Caminá hacia la primera estación', tam: 0.17 }], { ancho: 1024, alto: 256, fondo: ['#7c2a22', '#b8573a'] }), 11, 2.75);
    salida.position.set(0, 4.7, -13.6);
    raiz.add(salida);
    const meta = planoCartel(texturaCartel([{ texto: '¡LLEGASTE A EL COLORADO!', tam: 0.27 }, { texto: 'Misión Bermejo cumplida', tam: 0.2 }], { ancho: 1280, alto: 320, fondo: ['#1f5a3a', '#2f8a5a'] }), 12.8, 3.2);
    meta.position.set(0, 6.2, Z_META + 0.45);
    raiz.add(meta);
    for (const x of [-10, 10]) { ctxBandera(raiz, x, Z_META + 2); }
  }
  function ctxBandera(g, x, z) {
    const b = new Builder();
    b.cyl(0.08, 0.1, 8.5, '#c8ced6', x, 0, z, 6);
    b.sphere(0.2, '#ffc83d', x, 8.4, z);
    g.add(b.build());
    banderaFn(g, x, 7.2, z);
  }

  /* ---- Algodones coleccionables y obstáculos ---- */
  const algodones = [];
  const obstaculos = [];
  {
    // segmentos entre estaciones: [zInicio, zFin] (z decrece)
    const segs = [[-8, zEstacion(0) + 30]];
    for (let i = 0; i < N_ESTACIONES - 1; i++) segs.push([zEstacion(i) - 14, zEstacion(i + 1) + 30]);
    segs.push([zEstacion(N_ESTACIONES - 1) - 14, Z_META + 30]);
    const rr = rng(4242);
    segs.forEach(([za, zb], si) => {
      let lane = 1 + Math.floor(rr() * 3) - 1;
      let z = za - 4;
      let grupos = 0;
      while (z > zb + 8 && grupos < 4) {
        const n = 3;
        for (let k = 0; k < n; k++) {
          const zz = z - k * 3.2;
          algodones.push({ x: CARRILES[lane], z: zz, y: alturaEn(zz), got: false, seg: si });
        }
        z -= n * 3.2 + 2;
        // proximo carril (distinto) y obstaculo en el carril restante
        let next = (lane + 1 + Math.floor(rr() * 2)) % 3;
        const libres = [0, 1, 2].filter((l) => l !== lane && l !== next);
        const lo = libres.length ? libres[Math.floor(rr() * libres.length)] : (lane + 1) % 3;
        const zo = z - 2.2;
        if (zo > zb + 8) obstaculos.push({ x: CARRILES[lo], z: zo, y: alturaEn(zo), tipo: Math.floor(rr() * 3), golpeado: false, seg: si });
        z -= 7;
        lane = next;
        grupos++;
      }
    });
  }

  // Mallas de algodón (instanciado) — esfera de tres capullos con cáliz verde
  const geoAlg = (() => {
    const b = new Builder();
    b.sphere(0.34, '#ffffff', 0, 0.0, 0, null, 8);
    b.sphere(0.3, '#fbfdff', 0.28, 0.12, 0.1, null, 8);
    b.sphere(0.3, '#fbfdff', -0.26, 0.1, 0.12, null, 8);
    b.sphere(0.28, '#ffffff', 0.0, 0.3, -0.18, null, 8);
    b.cone(0.3, 0.3, '#3f8a3a', 0, -0.2, 0, 5, [Math.PI, 0, 0]);
    return b.build({ cast: false, receive: false }).geometry;
  })();
  const matAlg = new THREE.MeshLambertMaterial({ color: 0xffffff, vertexColors: true, flatShading: true, emissive: '#6a6f78' });
  const instAlg = new THREE.InstancedMesh(geoAlg, matAlg, Math.max(1, algodones.length));
  instAlg.frustumCulled = false;
  raiz.add(instAlg);
  const halos = new THREE.InstancedMesh(new THREE.RingGeometry(0.6, 0.85, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffe27a', transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }), Math.max(1, algodones.length));
  halos.frustumCulled = false;
  raiz.add(halos);

  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0), _qi = new THREE.Quaternion();
  function actualizarAlgodones(t, zJugador) {
    algodones.forEach((a, i) => {
      const oculto = a.got || Math.abs(a.z - zJugador) > 110;
      if (oculto) { _s.set(0, 0, 0); _p.set(0, -20, a.z); _q.identity(); }
      else {
        _p.set(a.x, a.y + 1.15 + Math.sin(t * 2.4 + i) * 0.12, a.z);
        _q.setFromAxisAngle(_up, t * 1.8 + i);
        _s.set(1, 1, 1);
      }
      _m.compose(_p, _q, _s);
      instAlg.setMatrixAt(i, _m);
      if (oculto) { _p.set(0, -20, a.z); _s.set(0, 0, 0); }
      else { _p.set(a.x, a.y + 0.06, a.z); _s.setScalar(1 + Math.sin(t * 3 + i) * 0.08); }
      _m.compose(_p, _qi, _s);
      halos.setMatrixAt(i, _m);
    });
    instAlg.instanceMatrix.needsUpdate = true;
    halos.instanceMatrix.needsUpdate = true;
  }

  // Obstáculos: caja, barril y fardo (una sola malla con colores por vértice cada uno)
  const geoObs = [
    (() => { const b = new Builder(); b.box(1.4, 1.2, 1.4, '#c98a4b'); b.box(1.46, 0.16, 1.46, '#8b5a2b', 0, 0.1); b.box(1.46, 0.16, 1.46, '#8b5a2b', 0, 0.94); b.box(0.16, 1.22, 1.46, '#8b5a2b', 0.4, 0); b.box(0.16, 1.22, 1.46, '#8b5a2b', -0.4, 0); return b.build({ receive: false }).geometry; })(),
    (() => { const b = new Builder(); b.cyl(0.62, 0.62, 1.3, '#d8452f', 0, 0, 0, 12); b.cyl(0.65, 0.65, 0.14, '#33343a', 0, 0.25, 0, 12); b.cyl(0.65, 0.65, 0.14, '#33343a', 0, 0.95, 0, 12); b.cyl(0.55, 0.55, 0.05, '#eee', 0, 1.3, 0, 12); return b.build({ receive: false }).geometry; })(),
    (() => { const b = new Builder(); b.box(1.7, 1.1, 1.2, '#f2efe6'); b.box(1.76, 0.1, 1.26, '#4b5260', 0, 0.3); b.box(1.76, 0.1, 1.26, '#4b5260', 0, 0.75); b.sphere(0.45, '#ffffff', 0, 1.0, 0, [1.4, 0.8, 1], 6); return b.build({ receive: false }).geometry; })()
  ];
  const grupoObs = new THREE.Group();
  raiz.add(grupoObs);
  obstaculos.forEach((o) => {
    const m = new THREE.Mesh(geoObs[o.tipo], matVC);
    m.position.set(o.x, o.y, o.z);
    m.rotation.y = (o.z * 7.3) % 1;
    m.castShadow = true;
    o.mesh = m;
    grupoObs.add(m);
  });

  function reiniciarItems() {
    algodones.forEach((a) => (a.got = false));
    obstaculos.forEach((o) => {
      o.golpeado = false;
      o.mesh.rotation.x = 0; o.mesh.rotation.z = 0;
      o.mesh.position.y = o.y;
    });
    paradas.forEach((p) => { p.hecho = false; p.baliza.visible = true; });
  }
  function mostrarObstaculos(v) { grupoObs.visible = v; }

  function actualizar(t, dt, zJugador, camara, luz) {
    cielo.position.copy(camara.position);
    sol.position.copy(camara.position).addScaledVector(DIR_SOL, 430);
    halo.position.copy(sol.position);
    for (const f of anim) f(t, dt);
    actualizarAlgodones(t, zJugador);
    for (const o of obstaculos) {
      if (o.golpeado) {
        o.mesh.rotation.x = Math.min(1.45, o.mesh.rotation.x + dt * 6);
        o.mesh.position.y = o.y + Math.max(-0.3, 0.2 - o.mesh.rotation.x * 0.2);
      }
    }
    for (const p of paradas) {
      p.baliza.visible = !p.hecho;
      p.baliza.material.opacity = 0.26 + Math.sin(t * 2 + p.i) * 0.07;
      p.marca.visible = !p.hecho;
    }
  }

  return {
    raiz, paradas, algodones, obstaculos, actualizar, reiniciarItems, mostrarObstaculos,
    zParada, zEstacion, alturaEn
  };
}
