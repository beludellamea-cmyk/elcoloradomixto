// Compila src/main.js (con Three.js incluido) en assets/js/juego.js: un único script clásico,
// que funciona al abrir index.html con doble clic y sin conexión.
import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: ['es2019'],
  minify: true,
  legalComments: 'inline',
  outfile: 'assets/js/juego.js',
  logLevel: 'info'
});
