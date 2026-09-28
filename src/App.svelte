<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import BossCombat from './components/BossCombat.svelte';
  import IdeationProcess from './components/IdeationProcess.svelte';
  import Story from './components/Story.svelte';
  import Characters from './components/Characters.svelte';
  import LifeAnalogies from './components/LifeAnalogies.svelte';
  import Gallery from './components/Gallery.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import Specs from './components/Specs.svelte';
  import { gameInfo } from './data/gameData.js';
</script>

<div class="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
  <!-- Barra de navegación fija con efecto glassmorphism -->
  <Navbar />

  <!-- Contenido Principal de la Documentación -->
  <main class="flex-1">
    <!-- 1. Portada del Proyecto -->
    <Hero />

    <!-- 2. Combate Táctico, Fases de Color & Ataques de SAHUR -->
    <BossCombat />

    <!-- 3. Proceso de Ideación & Concepción (Pizarras Miro) -->
    <IdeationProcess />

    <!-- 4. Storytelling & Lore Oficial -->
    <Story />

    <!-- 5. Personajes, Arsenal y Modelos 3D -->
    <Characters />

    <!-- 6. 7 Analogías para la Vida -->
    <LifeAnalogies />

    <!-- 7. Galería In-Game Masonry & Carrusel -->
    <Gallery />

    <!-- 8. Testimonios y Experiencia de Jugadores VR -->
    <Testimonials />

    <!-- 9. Compatibilidad y Requisitos Técnicos (Meta Quest 2 & Unity 6) -->
    <Specs />
  </main>
</div>
