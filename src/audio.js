/* Sonidos sintetizados con Web Audio: no hay archivos de audio ni servicios externos. */
export class Sonido {
  constructor() {
    this.ctx = null;
    this.activo = true;
    this.maestro = null;
  }
  /** Debe llamarse tras un gesto del usuario (clic o tecla) para que el navegador lo permita. */
  iniciar() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.maestro = this.ctx.createGain();
    this.maestro.gain.value = 0.5;
    this.maestro.connect(this.ctx.destination);
  }
  _nota(freq, ini, dur, { tipo = 'sine', vol = 0.3, hasta = null } = {}) {
    if (!this.activo || !this.ctx) return;
    const t0 = this.ctx.currentTime + ini;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(freq, t0);
    if (hasta) o.frequency.exponentialRampToValueAtTime(hasta, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(this.maestro);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
  algodon() { this._nota(880, 0, 0.12, { tipo: 'triangle' }); this._nota(1320, 0.07, 0.16, { tipo: 'triangle' }); }
  llegada() { [523, 659, 784].forEach((f, i) => this._nota(f, i * 0.11, 0.25, { tipo: 'triangle', vol: 0.25 })); }
  acierto() { [523, 659, 784, 1047].forEach((f, i) => this._nota(f, i * 0.09, 0.3, { tipo: 'triangle', vol: 0.28 })); }
  error() { this._nota(300, 0, 0.28, { tipo: 'sine', vol: 0.25, hasta: 200 }); }
  golpe() { this._nota(160, 0, 0.18, { tipo: 'square', vol: 0.18, hasta: 70 }); }
  clic() { this._nota(660, 0, 0.06, { tipo: 'sine', vol: 0.18 }); }
  final() { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => this._nota(f, i * 0.13, 0.35, { tipo: 'triangle', vol: 0.26 })); }
}
