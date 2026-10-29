// Genera assets/mediapipe/datos.js: incrusta el WebAssembly y los modelos de MediaPipe
// para que el juego funcione con doble clic (file://) y sin conexión.
// Uso: npm run datos   (requiere haber corrido npm install)
import fs from 'node:fs';
import path from 'node:path';

const raiz = path.dirname(new URL(import.meta.url).pathname);
const aBase64 = (p) => fs.readFileSync(path.join(raiz, p)).toString('base64');
const wasmDir = 'node_modules/@mediapipe/tasks-vision/wasm';

const datos = {
  loader: aBase64(path.join(wasmDir, 'vision_wasm_internal.js')),
  wasm: aBase64(path.join(wasmDir, 'vision_wasm_internal.wasm')),
  pose: aBase64('assets/mediapipe/pose_landmarker_lite.task'),
  seg: aBase64('assets/mediapipe/selfie_segmenter.tflite')
};

const salida = '/* Generado por build-datos.mjs: MediaPipe Tasks Vision 0.10.21 + modelos (uso local, sin conexión). No editar. */\n' +
  `window.MB_MEDIAPIPE = ${JSON.stringify(datos)};\n`;
fs.writeFileSync(path.join(raiz, 'assets/mediapipe/datos.js'), salida);
console.log(`datos.js: ${(salida.length / 1024 / 1024).toFixed(1)} MB`);
