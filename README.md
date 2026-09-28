# IGNIS - Landing Page Inmersiva en Svelte 5

Landing Page moderna, inmersiva y reactiva para el videojuego de Realidad Virtual **"IGNIS"**, basada en el relato y mecánicas oficiales de combate de Carlos contra el monstruo de fuego en la fábrica sellada.

---

## 🚀 Inicio Rápido

Para ejecutar el proyecto en modo de desarrollo local:

```bash
# 1. Instalar dependencias (si aún no se han instalado)
npm install

# 2. Iniciar servidor de desarrollo en Vite
npm run dev

# 3. Compilar para producción
npm run build

# 4. Vista previa de la compilación de producción
npm run preview
```

---

## 📁 Arquitectura del Proyecto

```text
pagina_web/
├── files/
│   └── storytelling-ignis.pdf       # Documento original del lore
├── public/
│   ├── flame-icon.svg               # Favicon con gradiente de fuego
│   └── pictures/                    # Activos e imágenes estáticas servidas por Vite
├── src/
│   ├── components/
│   │   ├── Navbar.svelte            # Navegación fija con efecto blur y menú móvil
│   │   ├── Hero.svelte              # Portada épica de documentación con brasas flotantes
│   │   ├── BossCombat.svelte        # Fases de color, cuarteto de ataques de Sahur y voces
│   │   ├── IdeationProcess.svelte   # Proceso de ideación en 4 etapas con evidencias Miro
│   │   ├── Story.svelte             # Lore interactivo con paneles de cómic
│   │   ├── Characters.svelte        # Modelos 3D, personajes y arsenal balístico
│   │   ├── LifeAnalogies.svelte     # 7 lecturas y analogías simbólicas para la vida
│   │   ├── Gallery.svelte           # Galería in-game estilo masonry con visor lightbox
│   │   ├── Testimonials.svelte      # Playtesting con pestaña de fotos con óculos VR
│   │   └── Specs.svelte             # Requisitos técnicos Meta Quest 2 Standalone & Unity 6
│   ├── data/
│   │   └── gameData.js              # Modelo de datos desacoplado (listo para API / backend)
│   ├── app.css                      # Estilos con Tailwind CSS y tokens de diseño
│   ├── App.svelte                   # Componente raíz orquestador de la SPA
│   └── main.js                      # Punto de entrada (mount de Svelte 5)
├── index.html                       # HTML5 con tipografías Rajdhani & Plus Jakarta Sans
├── package.json                     # Scripts y dependencias (Svelte 5 + Tailwind)
├── svelte.config.js                 # Configuración de Svelte
└── vite.config.js                   # Configuración de Vite con Tailwind y Svelte
```

---

## 🎮 Mecánica Central del Juego reflejada en la Web

- **Fase Amarilla**: Vulnerable a la espuma química del **Extintor Amarillo**.
- **Fase Roja**: Vulnerable al agua a alta presión de la **Manguera y Mochila**.
- **Fase Naranja**: Vulnerable a la sofocación por peso de los **Sacos de Arena**.
- **Fase Azul (Final)**: Núcleo residual debilitado («Me apago… tengo frío») antes de evaporarse en vapor blanco.

---

## 🔌 Integración con Backend (Next.js / REST / GraphQL)

El archivo [`src/data/gameData.js`](./src/data/gameData.js) concentra todo el contenido dinámico del sitio. Para conectarlo a un backend:

```javascript
// Ejemplo de conexión a endpoint de Next.js /api/ignis/content
export async function fetchGameContent() {
  const response = await fetch('https://tu-backend.com/api/ignis/content');
  return await response.json();
}
```
