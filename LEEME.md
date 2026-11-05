# En Órbita · Landing page

Prototipo académico. Página estática (HTML, CSS y JavaScript), sin base de datos,
sin claves y sin servicios pagos.

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El contenido de la página (todos los textos y secciones). |
| `css/styles.css` | El diseño: colores, tipografías, tamaños y animaciones. |
| `js/config.js` | **Configuración.** Acá se pega el enlace público de Landbot cuando esté probado. |
| `js/demo.js` | La demo simulada de OrbiBot: preguntas, respuestas e ideas. |
| `js/main.js` | El menú en celular, las animaciones al bajar y el botón de Landbot. |
| `assets/logo.png` | Logo oficial con fondo transparente, recortado a sus bordes. |
| `assets/logo-simbolo.png` | Solo el símbolo del logo (avatar de OrbiBot). |
| `assets/favicon.png`, `assets/apple-touch-icon.png` | Ícono de la pestaña del navegador y del celular. |
| `assets/logo-original.png` | El archivo del logo tal como se recibió, guardado como respaldo. |

## Cómo publicarla gratis en Netlify (sin programar)

1. Descargá esta carpeta completa (`en-orbita-landing`) a tu computadora.
2. Entrá a https://app.netlify.com/drop e iniciá sesión o creá una cuenta gratuita.
3. Arrastrá la carpeta `en-orbita-landing` entera al recuadro que dice “Drag and drop”.
4. En unos segundos Netlify te da un enlace del estilo `https://nombre-al-azar.netlify.app`.
5. Para cambiar ese nombre: *Site configuration → Change site name* (por ejemplo, `en-orbita`).

Para actualizar la página después de un cambio: en Netlify, entrá al sitio → *Deploys* →
arrastrá de nuevo la carpeta completa.

## Cómo activar el botón “Probar OrbiBot”

1. En Landbot, copiá el **enlace público para compartir** del bot (no el del editor).
2. Abrí `js/config.js` con cualquier editor de texto (Bloc de notas, TextEdit).
3. Pegá el enlace entre las comillas: `LANDBOT_URL: "https://..."`.
4. Guardá y volvé a subir la carpeta a Netlify.

Los botones principales pasan a decir “Probar OrbiBot” y aparece un bloque debajo de la demo.
La simulación académica sigue disponible.

## Cómo cambiar textos

- Textos de la página: buscalos en `index.html` y reemplazalos (no borres lo que está entre `< >`).
- Conversación e ideas de la demo: están en `js/demo.js`, entre comillas.
