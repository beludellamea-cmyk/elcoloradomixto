import * as THREE from 'three';
import { mat } from './util.js';

/**
 * Explorador/a estilizado (figura genérica, NO representa a ninguna persona histórica).
 * En la próxima etapa este avatar se reemplaza por la silueta real del jugador (cámara + MediaPipe).
 */
export function crearJugador() {
  const g = new THREE.Group();
  const piel = mat('#e0a77a'), camisa = mat('#2d7fd3'), pantalon = mat('#33405e');
  const mochila = mat('#d8452f'), paja = mat('#ecc96a'), zapato = mat('#2b2b33');
  const sombra = (o) => { o.castShadow = true; return o; };

  const torso = sombra(new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.88, 0.44), camisa));
  torso.position.y = 1.5;
  const cabeza = sombra(new THREE.Mesh(new THREE.SphereGeometry(0.31, 14, 10), piel));
  cabeza.position.y = 2.2;
  const ala = sombra(new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.05, 16), paja));
  ala.position.y = 2.42;
  const copa = sombra(new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.32, 0.26, 12), paja));
  copa.position.y = 2.55;
  const cinta = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.33, 0.07, 12), mat('#d8452f'));
  cinta.position.y = 2.47;
  const bolso = sombra(new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.66, 0.24), mochila));
  bolso.position.set(0, 1.52, 0.34);

  const pierna = (x) => {
    const p = new THREE.Group();
    p.position.set(x, 1.08, 0);
    const m = sombra(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.82, 0.3), pantalon));
    m.position.y = -0.41;
    const z = sombra(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.42), zapato));
    z.position.set(0, -0.86, -0.06);
    p.add(m, z);
    return p;
  };
  const brazo = (x) => {
    const p = new THREE.Group();
    p.position.set(x, 1.86, 0);
    const m = sombra(new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.72, 0.22), camisa));
    m.position.y = -0.34;
    const mano = sombra(new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), piel));
    mano.position.y = -0.74;
    p.add(m, mano);
    return p;
  };
  const pI = pierna(-0.2), pD = pierna(0.2), bI = brazo(-0.5), bD = brazo(0.5);
  const cuerpo = new THREE.Group();
  cuerpo.add(torso, cabeza, ala, copa, cinta, bolso, pI, pD, bI, bD);
  g.add(cuerpo);
  const sombraFalsa = new THREE.Mesh(
    new THREE.CircleGeometry(0.6, 16).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25, depthWrite: false })
  );
  sombraFalsa.position.y = 0.04;
  g.add(sombraFalsa);

  let fase = 0, t = 0;
  return {
    objeto: g,
    sombraFalsa,
    /** @param v velocidad actual; @param saludo levanta un brazo; @param inclina lateral */
    actualizar(dt, v, saludo, inclina = 0, golpe = false) {
      t += dt;
      const k = Math.min(1, v / 5);
      fase += dt * (2 + v * 1.25);
      const s = Math.sin(fase) * 0.95 * k;
      pI.rotation.x = s; pD.rotation.x = -s;
      bI.rotation.x = -s * 0.8;
      if (saludo) bD.rotation.x = Math.PI * 0.88 + Math.sin(t * 7) * 0.22;
      else bD.rotation.x = s * 0.8;
      cuerpo.position.y = Math.abs(Math.sin(fase)) * 0.09 * k + (k < 0.05 ? Math.sin(t * 2) * 0.012 : 0);
      cuerpo.rotation.z = inclina * 0.14;
      cuerpo.rotation.x = golpe ? -0.25 : 0;
    }
  };
}
