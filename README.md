# IGNIS — Landing Page Inmersiva (Svelte 5 + Vite + Tailwind 4)

Landing page documental e inmersiva del videojuego de realidad virtual **IGNIS**, un boss rush para **Meta Quest 2** desarrollado con **Unity 6 / URP**. El sitio resume la mecánica central de combate y toda la documentación de diseño del proyecto: la pelea de **el bombero** contra **SAHUR** en un **almacén industrial** en llamas.

Todo el contenido está alineado con la documentación de diseño de `Web/` (ver [Fuentes de contenido](#-fuentes-de-contenido)).

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (Vite)
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la build de producción
npm run preview
```

---

## 🎮 Mecánica central del juego

El combate se basa en **leer el color de SAHUR y responder con el arma correcta**. Las 8 fases de color nunca repiten el mismo color dos veces seguidas y hay 3 fases de saco garantizadas:

| Fase | Color | Arma | Efecto |
| :--- | :--- | :--- | :--- |
| 1 | 🔴 **Rojo** | Manguera (agua) | Apaga la llama central y las fases rojas |
| 2 | 🟡 **Amarillo** | Extintor (espuma) | Neutraliza las fases amarillas; manchas de espuma |
| 3 | 🔵 **Azul** | Sacos de arena | Sofoca por impacto y peso |

Ciclo: **rojo → amarillo → azul**, sin repeticiones consecutivas. Cada acierto encoge a SAHUR un 10 % y sube el tono de su voz.

---

## 📁 Arquitectura del proyecto

```text
pagina_web/
├── Web/                             # Documentación de diseño original (15 .md)
├── files/
│   ├── storytelling-ignis.pdf       # Relato original
│   └── videos-originales/           # Vídeos crudos (~1,6 GB, ignorados por git)
├── public/
│   ├── flame-icon.svg               # Favicon con gradiente de fuego
│   ├── pictures/                    # Imágenes estáticas (paneles, galería, arsenal…)
│   └── videos/                      # Gameplay autoalojado + pósteres (comprimidos)
├── scripts/
│   └── transcode-videos.sh          # Comprime los vídeos originales para publicación
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── SectionHeader.svelte # Encabezado de sección reutilizable
│   │   │   ├── DataTable.svelte     # Tabla densa plegable (<details>) con contador
│   │   │   └── ScrollProgress.svelte# Barra de progreso de lectura + «volver arriba»
│   │   ├── Navbar.svelte            # Navegación por grupos con scrollspy
│   │   ├── Hero.svelte              # Portada con brasas flotantes
│   │   ├── Premise.svelte           # #premisa  — ficha técnica, narrativa y tono
│   │   ├── GameLoop.svelte          # #bucle    — objetivos, bucle de partida y condición de victoria
│   │   ├── PlayerMechanics.svelte   # #mecanicas— salud, traje, visor, salto, avatar VR
│   │   ├── Arsenal.svelte           # #arsenal  — manguera, extintor y sacos con física
│   │   ├── BossCombat.svelte        # #combate  — fases de color y ataques de SAHUR
│   │   ├── AudioVoices.svelte       # #audio    — sistema 3D, mezcla y catálogo de voces
│   │   ├── IdeationProcess.svelte   # #proceso  — ideación en 4 etapas (Miro)
│   │   ├── Story.svelte             # #historia — storyboard de la primera iteración
│   │   ├── Characters.svelte        # #personajes— personajes y modelos 3D
│   │   ├── Videos.svelte            # #videos   — destacado, línea de tiempo y entrevistas
│   │   ├── Gallery.svelte           # #galeria  — galería in-game con lightbox
│   │   ├── Testimonials.svelte      # #testimonios — playtesting
│   │   └── LifeAnalogies.svelte     # #analogias— analogías simbólicas
│   ├── data/
│   │   ├── docsData.js              # Contenido derivado de Web/ (fuente canónica)
│   │   └── gameData.js              # Contenido narrativo/visual del sitio
│   ├── app.css                      # Tailwind 4 + tokens de diseño y accesibilidad
│   ├── App.svelte                   # Componente raíz orquestador de la SPA
│   └── main.js                      # Punto de entrada (mount de Svelte 5)
├── index.html                       # HTML5 con Rajdhani & Plus Jakarta Sans
├── package.json                     # Scripts y dependencias
├── svelte.config.js                 # Configuración de Svelte
└── vite.config.js                   # Configuración de Vite (base: /ignis-vr-landing/)
```

---

## 🎬 Vídeos: estrategia de alojamiento

Los originales pesan **~1,6 GB** y GitHub bloquea archivos de más de **100 MB** (además, Pages no sirve archivos de Git LFS). Por eso se usa un enfoque híbrido:

| Vídeo | Formato | Motivo |
| :--- | :--- | :--- |
| Prototipo funcional (gameplay) | 🎞️ **Autoalojado** (720p, ~20 MB) | Corto, es la versión a destacar |
| Primer prototipo (gameplay) | 🎞️ **Autoalojado** (720p, ~20 MB) | Corto, cierra la línea de tiempo |
| Entrevista usuario 02/03/final | ▶️ **YouTube no listado** (facade) | Largos (1080p); se carga el reproductor solo al hacer clic |

- Los crudos viven en `files/videos-originales/` y **no se versionan**.
- Los clips publicados se generan con `./scripts/transcode-videos.sh`.
- El "facade" de YouTube usa la miniatura `i.ytimg.com` y carga `youtube-nocookie.com/embed/...` solo al pulsar, para no penalizar el primer pintado.

---

## 📚 Fuentes de contenido

Toda la información del sitio proviene de la carpeta [`Web/`](./Web) (14 documentos + índice):

`01-ficha-y-premisa`, `02-objetivos-y-loop`, `03-controles`, `04-mecanicas-jugador`, `05-arsenal`, `06-jefe-sahur`, `07-fases-derrota-ascension`, `08-fuego-entorno`, `09-audio`, `10-inventario-assets`, `11-balance-numerico`, `12-analogias-vida`, `13-ideas-roadmap`, `14-glosario-y-notas`.

`src/data/docsData.js` es la traducción de esos documentos a estructuras de datos consumidas por los componentes.

---

## 🔌 Integración con backend (Next.js / REST / GraphQL)

Tanto [`src/data/docsData.js`](./src/data/docsData.js) como [`src/data/gameData.js`](./src/data/gameData.js) concentran el contenido del sitio. Para conectarlos a un backend basta con sustituir los imports por llamadas `fetch`:

```javascript
// Ejemplo de conexión a /api/ignis/content
export async function fetchGameContent() {
  const response = await fetch('https://tu-backend.com/api/ignis/content');
  return await response.json();
}
```

---

## 🚢 Despliegue

El sitio se publica automáticamente en **GitHub Pages** mediante las GitHub Actions de `.github/workflows/` al hacer push a `main`:

1. `npm run build` genera `dist/`.
2. Se sube el contenido de `dist/` como artefacto de Pages.

`vite.config.js` define `base: '/ignis-vr-landing/'`, imprescindible para que los recursos resuelvan bajo la ruta del repositorio.
