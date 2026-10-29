# MISIÓN BERMEJO 3D — Etapa 2 (cámara y cuerpo real con MediaPipe)

Videojuego educativo 3D sobre la historia de El Colorado, Formosa (Instructivo N.º 43, proyecto DIA – Didáctica con IA).

Funciona **sin conexión**: se abre con doble clic en `index.html` (Chrome o Edge actualizados).

## Cómo jugar

1. En la pantalla inicial elegí **📷 Jugar con la cámara** (o **⌨ Jugar con el teclado** si no hay cámara).
2. Leé el aviso de privacidad y tocá **Entendido, usar la cámara**. Cada persona que juega debe aceptarlo.
3. **Calibración (3 segundos):** quedate quieto, de frente, de cuerpo entero.
4. Después:

| Movimiento | Acción en el juego |
|---|---|
| Caminar en el lugar | Avanzar por el pueblo |
| Pasos a la izquierda / derecha | Cambiar de carril |
| Levantar una mano (cerca de un algodón) | Recoger el algodón |
| Mano izquierda arriba (mantenida) | Responder **A** |
| Mano derecha arriba (mantenida) | Responder **B** |
| Las dos manos arriba | Responder **C** |
| Quedarse quieto | Frenar |

Las letras se muestran en el orden en que aparecen las opciones en pantalla.

**Verdadero o falso:** después de cada pregunta aparece una afirmación sobre la estación. Mano izquierda = **verdadero**, mano derecha = **falso** (teclado: T / F). Acertar suma 20 puntos.

**Modo equipo:** en Accesibilidad, marcá la opción. Una persona camina con el cuerpo y otra responde con el teclado: 1 2 3 (o A B C) para elegir la respuesta y T / F para verdadero o falso.

**Modo sentado:** en Accesibilidad, avanza solo; podés inclinarte a los costados para cambiar de carril.

**Teclado (alternativa):** ↑ o W caminar · ← → o A D cambiar de carril · 1 2 3 responder · T F verdadero o falso · Enter o Espacio avanzar · P o Esc pausa · M sonido · O accesibilidad · V ver el lugar.

## Privacidad

- La imagen de la cámara se procesa **en esta computadora**. No se guarda ni se envía a internet.
- La cámara se apaga al terminar el recorrido o al volver a la pantalla inicial.
- Antes de cada partida se muestra el aviso y cada persona debe aceptarlo.

## Resultado final

Puntaje, respuestas correctas, algodón, tiempo, **pasos** (contados con la cámara o estimados por distancia con teclado), **tiempo en movimiento** y **calorías estimadas** (3,5 × peso en kg × horas de juego). Las calorías son una **estimación**, no una medición. Para calcularlas, ingresá tu peso en Accesibilidad.

## Requisitos y cuidados

- Chrome o Edge actualizados (MediaPipe usa WebAssembly y WebGL).
- Buena luz de frente (no con una ventana detrás), unos 2 metros de espacio libre frente a la cámara.
- Espacio despejado, sin sillas ni mochilas cerca.
- Si el navegador bloquea la cámara, permitila en la barra de direcciones o abrí el juego desde un servidor local.

## Contenidos históricos

Los textos están en `assets/js/estaciones.js` y se editan con cualquier editor de texto; no hace falta recompilar. Los datos provienen de fichas de NotebookLM y **deben contrastarse con las páginas originales** antes de publicar. Las escenas son estilizadas, no un mapa real, y no se muestran retratos de personas históricas.

## Estructura

```
index.html                    Pantallas y HUD
assets/css/estilos.css
assets/js/estaciones.js       Contenidos (editable)
assets/js/juego.js            Juego + Three.js + cuerpo (generado, no editar)
assets/mediapipe/datos.js     MediaPipe (WebAssembly y modelos incrustados, generado)
assets/mediapipe/*.task, *.tflite   Modelos originales (usados para regenerar datos.js)
src/                          Código fuente (main, cuerpo, world, jugador, audio, fx, util)
build.mjs, build-datos.mjs    Compilación
package.json                  Dependencias: three, esbuild, @mediapipe/tasks-vision 0.10.21
```

## Recompilar (solo si modificás `src/`)

```
npm install
npm run build
```

`npm run build` genera `assets/js/juego.js` y `assets/mediapipe/datos.js`. Three.js (MIT) y MediaPipe Tasks Vision (Apache 2.0) tienen sus licencias en `node_modules/`.

## Limitaciones de esta versión

- La detección del cuerpo depende de la luz, del fondo y de la distancia a la cámara. Conviene probarla con estudiantes antes de usarla en el aula.
- La estimación de calorías es orientativa.
- El explorador de la versión sin cámara es un personaje genérico.

## Próximas etapas

Fotos propias de los lugares como texturas, ajustes de detección según las pruebas con el curso y la pantalla de consentimiento por persona.

## Si no cuenta los pasos

Mirá el indicador abajo a la izquierda mientras caminás:
- **"Pasos: N · caminando"**: la detección funciona. Si el juego no avanza, revisá que la pantalla no esté en pausa.
- **"no veo tus piernas"**: alejate un poco o asegurate de que se vean las rodillas o los tobillos (basta con que se vean los tobillos).
- **"Ubicate de frente: no te veo los hombros"**: centrate frente a la cámara, con los hombros a la vista.
- **"Pasos: N · quieto"** mientras caminás: levantá bien las rodillas, alternando izquierda y derecha, sin mover el torso.

## Fotos de referencia

Las imágenes están en `assets/img/` (puente, comisaría y escuela). Se muestran en el cartel de su estación. La comisaría y la escuela son fotos de referencia del estado actual: **su autor y licencia están pendientes de confirmar** y no deben publicarse hasta tenerlos. El puente tiene crédito de Wikimedia Commons (CC BY-SA 4.0), que hay que confirmar en el archivo original. Los datos de cada foto están en `assets/js/estaciones.js` (campo `foto`) y se ven en "Créditos de las fotos".
