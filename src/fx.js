import * as THREE from 'three';

/** Partículas simples (chispas y confeti) con un único objeto Points reutilizable. */
export class Particulas {
  constructor(scene, max = 420) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.vida = new Float32Array(max);
    this.dur = new Float32Array(max);
    this.base = new Float32Array(max * 3);
    this.grav = new Float32Array(max);
    this.sig = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -100;
    this.puntos = new THREE.Points(
      g,
      new THREE.PointsMaterial({ size: 0.42, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })
    );
    this.puntos.frustumCulled = false;
    scene.add(this.puntos);
    this.reducido = false;
  }
  emitir(x, y, z, color, n = 14, vel = 3.5, dur = 0.7, grav = 5) {
    if (this.reducido) n = Math.ceil(n * 0.3);
    const c = new THREE.Color(color);
    for (let k = 0; k < n; k++) {
      const i = this.sig;
      this.sig = (this.sig + 1) % this.max;
      const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2 - 0.1;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
      this.vel[i * 3] = Math.cos(a) * vel * (0.4 + Math.random() * 0.6);
      this.vel[i * 3 + 1] = (1.5 + e * vel) * (0.6 + Math.random() * 0.6);
      this.vel[i * 3 + 2] = Math.sin(a) * vel * (0.4 + Math.random() * 0.6);
      this.base[i * 3] = c.r; this.base[i * 3 + 1] = c.g; this.base[i * 3 + 2] = c.b;
      this.vida[i] = this.dur[i] = dur * (0.7 + Math.random() * 0.6);
      this.grav[i] = grav;
    }
  }
  confeti(x, y, z) {
    const cols = ['#ff4d6d', '#ffd23f', '#4aa8ff', '#6fe39b', '#ff9f43', '#b58cff'];
    cols.forEach((c) => this.emitir(x + (Math.random() - 0.5) * 8, y + Math.random() * 3, z, c, 22, 5, 1.8, 3));
  }
  actualizar(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.vida[i] <= 0) { this.col[i * 3] = this.col[i * 3 + 1] = this.col[i * 3 + 2] = 0; continue; }
      this.vida[i] -= dt;
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const f = Math.max(0, this.vida[i] / this.dur[i]);
      this.col[i * 3] = this.base[i * 3] * f;
      this.col[i * 3 + 1] = this.base[i * 3 + 1] * f;
      this.col[i * 3 + 2] = this.base[i * 3 + 2] * f;
    }
    this.puntos.geometry.attributes.position.needsUpdate = true;
    this.puntos.geometry.attributes.color.needsUpdate = true;
  }
}
