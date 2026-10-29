import * as THREE from 'three';
import { Builder, rng } from './util.js';
import { CARRILES, zEstacion, N_ESTACIONES } from './world.js';

/* Elementos extra del recorrido:
   - Algarrobos con vainas que caen al acercarse y se recogen en el camino.
   - Peces que saltan de un brazo del río junto al camino (los dorados son coleccionables).
   - Telegramas y cartas de época, uno por estación. Su dato es el de la investigación.
   Todo es geometría simple, para que el juego siga siendo liviano en computadoras escolares. */

const ARROYO = { x: 7.2, ancho: 2.4, z0: -50, z1: -12 };
const lerp = (a, b, t) => a + (b - a) * t;

export function crearExtras({ raiz, anim, particulas, sfx }) {
  const r = rng(9091);
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
  const _p = new THREE.Vector3(), _s = new THREE.Vector3();
  function ponerInst(malla, i, x, y, z, ry = 0, sc = 1) {
    _p.set(x, y, z); _e.set(0, ry, 0); _q.setFromEuler(_e); _s.setScalar(sc);
    _m.compose(_p, _q, _s);
    malla.setMatrixAt(i, _m);
  }

  /* ---------- Algarrobos con vainas ---------- */
  const arboles = [];
  const pods = [];
  const posArb = [];
  for (let i = 0; i < N_ESTACIONES; i++) {
    const zc = zEstacion(i) + 44;
    const lado = i % 2 ? 1 : -1;
    posArb.push([lado * (7 + r() * 0.8), zc]);
    posArb.push([lado * (7.4 + r() * 0.8), zc - 10]);
  }
  for (const [x, z] of posArb) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    raiz.add(g);
    const tr = new Builder();
    tr.cyl(0.24, 0.36, 3.4, '#6e4a2a', 0, 0, 0, 7);
    g.add(tr.build());
    const cr = new Builder();
    cr.sphere(2.3, '#6f9e3c', 0, 4.3, 0, [1.25, 0.72, 1.2], 7);
    cr.sphere(1.6, '#86b34a', 1.5, 4.8, 0.5, [1, 0.7, 1], 7);
    cr.sphere(1.5, '#5f8f36', -1.4, 4.5, -0.7, [1, 0.7, 1], 7);
    const copa = cr.build();
    g.add(copa);
    const ph = r() * 6;
    // Hojas que se mecen con el viento
    anim.push((t) => {
      copa.rotation.z = Math.sin(t * 1.2 + ph) * 0.035;
      copa.rotation.x = Math.cos(t * 0.9 + ph) * 0.025;
    });
    const arbol = { x, z, activo: false };
    arboles.push(arbol);
    for (let k = 0; k < 3; k++) {
      pods.push({
        arbol, i: pods.length,
        lx: (r() - 0.5) * 3.2, ly: 2.7 + r() * 0.9, lz: (r() - 0.5) * 1.6,
        // Caen hacia el camino, en los carriles de la derecha o la izquierda
        gx: Math.sign(x) * (2.0 + r() * 1.4), gz: z + (r() - 0.5) * 8,
        retraso: k * 0.28, estado: 'colgada', t: 0, got: false
      });
    }
  }
  const podGeo = new THREE.CapsuleGeometry(0.08, 0.36, 3, 6).rotateZ(Math.PI / 2);
  const podsMesh = new THREE.InstancedMesh(podGeo, new THREE.MeshLambertMaterial({ color: '#8a5a2b' }), pods.length);
  podsMesh.castShadow = true;
  podsMesh.frustumCulled = false;
  raiz.add(podsMesh);

  function actualizarVainas(dt, jz) {
    for (const a of arboles) if (!a.activo && a.z < jz && jz - a.z < 42) a.activo = true;
    for (const p of pods) {
      const a = p.arbol;
      if (p.estado === 'colgada' && a.activo) { p.estado = 'cayendo'; p.t = -p.retraso; }
      let x = a.x + p.lx, y = p.ly, z = a.z + p.lz, giro = 0;
      if (p.estado === 'cayendo') {
        p.t += dt;
        if (p.t > 0) {
          const u = Math.min(1, p.t / 0.9);
          x = lerp(x, p.gx, u); y = lerp(p.ly, 0.12, u * u); z = lerp(z, p.gz, u);
          giro = p.t * 5;
          if (u >= 1) { p.estado = 'suelo'; y = 0.12; }
        }
      }
      if (p.estado === 'suelo') { x = p.gx; y = 0.12; z = p.gz; }
      ponerInst(podsMesh, p.i, x, y, z, giro, p.got ? 0 : 1);
    }
    podsMesh.instanceMatrix.needsUpdate = true;
  }

  /* ---------- Brazo del río con peces ---------- */
  const peces = [];
  const largo = ARROYO.z1 - ARROYO.z0;
  const zCentro = (ARROYO.z0 + ARROYO.z1) / 2;
  {
    const agua = new THREE.Mesh(
      new THREE.PlaneGeometry(ARROYO.ancho, largo).rotateX(-Math.PI / 2),
      new THREE.MeshLambertMaterial({ color: '#3fa7d6', transparent: true, opacity: 0.92 })
    );
    agua.position.set(ARROYO.x, 0.03, zCentro);
    raiz.add(agua);
    const orilla = new THREE.MeshLambertMaterial({ color: '#c9a66b' });
    for (const dx of [-1, 1]) {
      const o = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, largo), orilla);
      o.position.set(ARROYO.x + dx * (ARROYO.ancho / 2 + 0.15), 0.04, zCentro);
      raiz.add(o);
    }
    const especies = ['sabalo', 'sabalo', 'dorado', 'sabalo', 'dorado', 'sabalo', 'dorado', 'sabalo', 'dorado'];
    especies.forEach((tipo) => {
      const g = new THREE.Group();
      const bd = new Builder();
      const color = tipo === 'dorado' ? '#ffb703' : '#c9d6df';
      bd.sphere(0.26, color, 0, 0, 0, [2.2, 0.85, 0.65], 6);
      bd.cone(0.2, 0.36, tipo === 'dorado' ? '#e69500' : '#9fb2bf', -0.55, 0, 0, 4, [0, 0, Math.PI / 2]);
      g.add(bd.build({ cast: false, receive: false }));
      raiz.add(g);
      peces.push({
        tipo, g, x: ARROYO.x + (r() - 0.5) * (ARROYO.ancho - 0.5),
        z: ARROYO.z0 + 2 + r() * (largo - 4), P: 2.8 + r() * 1.6, ph: r() * 9,
        enAire: false, got: false, s: 0
      });
    });
  }
  const totalDorados = peces.filter((p) => p.tipo === 'dorado').length;

  function salpicar(x, z, fuerza, jz) {
    particulas.emitir(x, 0.2, z, '#e8f8ff', Math.round(16 * fuerza), 3 * fuerza + 1, 0.8, 9);
    if (Math.abs(jz - z) < 45 && sfx) sfx.salpicadura();
  }

  function actualizarPeces(t, jz) {
    for (const p of peces) {
      if (p.got) { p.g.visible = false; continue; }
      const fase = (t + p.ph) % p.P;
      const enAire = fase < 0.9;
      if (enAire !== p.enAire) salpicar(p.x, p.z, enAire ? 1 : 0.6, jz);
      p.enAire = enAire;
      p.g.visible = enAire;
      if (!enAire) continue;
      const s = fase / 0.9;
      p.s = s;
      p.g.position.set(p.x + (s - 0.5) * 0.4, 6.4 * s * (1 - s) + 0.1, p.z);
      p.g.rotation.set(0, 0, (0.5 - s) * 1.1);
    }
  }

  /* ---------- Telegramas y cartas de época (una por estación) ---------- */
  const cartas = [];
  for (let i = 0; i < N_ESTACIONES; i++) {
    const g = new THREE.Group();
    const esTelegrama = i % 2 === 0;
    const b = new Builder();
    b.box(1.1, 0.1, 0.72, '#fff4d6');
    if (esTelegrama) b.box(1.12, 0.12, 0.12, '#d8452f');
    else b.sphere(0.13, '#b5472f', 0, 0.12, 0, null, 6);
    g.add(b.build({ cast: false, receive: false }));
    const x = CARRILES[(i + 1) % 3], z = zEstacion(i) + 40;
    g.position.set(x, 1.1, z);
    raiz.add(g);
    cartas.push({ indice: i, esTelegrama, g, x, z, got: false });
  }

  /* ---------- Lógica común ---------- */
  function actualizar(t, dt, jz) {
    actualizarVainas(dt, jz);
    actualizarPeces(t, jz);
    for (const c of cartas) {
      if (c.got) continue;
      c.g.position.y = 1.1 + Math.sin(t * 2.2 + c.indice) * 0.12;
      c.g.rotation.y = t * 0.8 + c.indice;
    }
  }

  /* Recoge el objeto más cercano al alcance. mano = true: con la mano levantada (más alcance hacia adelante).
     Devuelve { tipo, x, y, z, indice } o null. */
  function recoger(jx, jz, mano) {
    const dentro = (dx, dz) => (mano ? Math.abs(dx) <= 1.7 && dz >= -1.5 && dz <= 12 : Math.abs(dx) <= 1.4 && Math.abs(dz) <= 1.3);
    const dentroPez = (dx, dz) => (mano ? Math.abs(dx) <= 5.6 && Math.abs(dz) <= 6 : Math.abs(dx) <= 5.2 && Math.abs(dz) <= 4);
    const cands = [];
    for (const p of pods) {
      if (p.estado === 'suelo' && !p.got) cands.push({ tipo: 'vaina', ref: p, x: p.gx, y: 0.3, z: p.gz, ok: dentro(p.gx - jx, jz - p.gz) });
    }
    for (const c of cartas) {
      if (!c.got) cands.push({ tipo: 'carta', ref: c, x: c.x, y: 1.1, z: c.z, ok: dentro(c.x - jx, jz - c.z), indice: c.indice });
    }
    for (const q of peces) {
      if (q.tipo === 'dorado' && !q.got && q.enAire && q.s > 0.15 && q.s < 0.85) {
        const x = q.g.position.x, y = q.g.position.y;
        cands.push({ tipo: 'dorado', ref: q, x, y, z: q.z, ok: dentroPez(x - jx, jz - q.z) });
      }
    }
    let mejor = null, dist = Infinity;
    for (const c of cands) {
      if (!c.ok) continue;
      const d = Math.abs(jz - c.z) + Math.abs(c.x - jx);
      if (d < dist) { dist = d; mejor = c; }
    }
    if (!mejor) return null;
    mejor.ref.got = true;
    if (mejor.tipo === 'carta') mejor.ref.g.visible = false;
    return { tipo: mejor.tipo, x: mejor.x, y: mejor.y, z: mejor.z, indice: mejor.indice };
  }

  function reiniciar() {
    for (const p of pods) { p.estado = 'colgada'; p.t = 0; p.got = false; }
    for (const a of arboles) a.activo = false;
    for (const q of peces) { q.got = false; q.enAire = false; }
    for (const c of cartas) { c.got = false; c.g.visible = true; }
    podsMesh.instanceMatrix.needsUpdate = true;
  }

  return { actualizar, recoger, reiniciar, totalDorados, totalVainas: pods.length, totalCartas: cartas.length };
}
