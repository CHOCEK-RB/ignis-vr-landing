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
  import Footer from './components/Footer.svelte';
  import { gameInfo } from './data/gameData.js';

  let downloadModalOpen = $state(false);

  function openDownloadModal() {
    downloadModalOpen = true;
  }

  function closeDownloadModal() {
    downloadModalOpen = false;
  }
</script>

<div class="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
  <!-- Barra de navegación fija con efecto glassmorphism -->
  <Navbar />

  <!-- 1. Hero Section -->
  <main class="flex-1">
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

    <!-- Sección de Descarga Rápida / Llamada a la Acción Final -->
    <section id="descarga" class="relative py-24 bg-gradient-to-b from-[#090d16] via-[#111728] to-[#07090e] overflow-hidden border-t border-orange-500/20">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent pointer-events-none"></div>

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-6">
          <span>Build Oficial Meta Quest 2</span>
        </div>

        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight">
          ¿Listo para <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-300">Enfrentar a SAHUR</span>?
        </h2>

        <p class="text-base sm:text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          Ponte el visor Meta Quest 2, toma la manguera y prepárate para sudar. El almacén ya cerró sus puertas y Tung Tung Sahur no parará de burlarse.
        </p>

        <!-- Botones de Descarga en Plataformas VR -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onclick={openDownloadModal}
            class="px-8 py-4 rounded-2xl font-black text-base text-white bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-orange-400/50 flex items-center gap-3"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H8l4-4 4 4h-3v5h-2z"/>
            </svg>
            <span>Descargar Demo Standalone (Quest APK)</span>
          </button>

          <a
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-2xl font-bold text-base text-slate-200 bg-[#141b29] hover:bg-[#1a2336] border border-slate-700 hover:border-orange-500/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
          >
            <svg class="w-5 h-5 fill-current text-orange-400" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15.5l-2.4-1.39a2.5 2.5 0 0 1-1.1.26 2.5 2.5 0 1 1 2.5-2.5c0 .32-.07.62-.18.89l2.4 1.39c.67-.37 1.44-.59 2.26-.59a4.5 4.5 0 1 1 4.5 4.5c0-.43-.07-.84-.19-1.22l-2.65-1.53c-.34.16-.72.25-1.12.25a2.5 2.5 0 1 1 2.5-2.5c0 .37-.08.72-.22 1.03l2.67 1.54C21.43 19.34 22 15.9 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
            <span>Añadir a Deseados en SteamVR</span>
          </a>
        </div>

        <p class="mt-6 text-xs text-slate-400">
          Versión Alpha 0.8.2 | Tamaño: 2.4 GB | Compatible con Meta Quest 2, 3, Pro y PCVR
        </p>
      </div>
    </section>
  </main>

  <!-- 7. Footer -->
  <Footer />

  <!-- Modal de Descarga Demo -->
  {#if downloadModalOpen}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Descargar Demo de Ignis VR"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onclick={closeDownloadModal}
      onkeydown={(e) => e.key === 'Escape' && closeDownloadModal()}
      tabindex="-1"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="relative w-full max-w-lg bg-[#0e1424] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onclick={(e) => e.stopPropagation()}
      >
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🔥</span>
            <h3 class="text-xl font-bold text-white font-heading">Descarga Demo IGNIS VR</h3>
          </div>
          <button
            type="button"
            onclick={closeDownloadModal}
            class="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <p class="text-sm text-slate-300 mt-4 leading-relaxed">
          Selecciona tu plataforma preferida para instalar la build de prueba:
        </p>

        <div class="flex flex-col gap-3 mt-5">
          <a
            href="/demo/ignis-vr-quest.apk"
            download
            class="p-4 rounded-xl bg-[#141b2e] hover:bg-orange-600/20 border border-slate-800 hover:border-orange-500 transition-all flex items-center justify-between group"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl">🥽</span>
              <div>
                <p class="text-sm font-bold text-white group-hover:text-orange-300">Meta Quest (Direct APK / SideQuest)</p>
                <p class="text-xs text-slate-400">Instalación directa sin cables</p>
              </div>
            </div>
            <span class="text-xs font-mono text-orange-400">2.4 GB</span>
          </a>

          <a
            href="https://store.steampowered.com"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 rounded-xl bg-[#141b2e] hover:bg-orange-600/20 border border-slate-800 hover:border-orange-500 transition-all flex items-center justify-between group"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl">🖥️</span>
              <div>
                <p class="text-sm font-bold text-white group-hover:text-orange-300">SteamVR Demo</p>
                <p class="text-xs text-slate-400">Para Valve Index, HTC Vive y Oculus Link</p>
              </div>
            </div>
            <span class="text-xs font-mono text-cyan-400">Steam</span>
          </a>
        </div>

        <div class="mt-6 flex justify-end">
          <button
            type="button"
            onclick={closeDownloadModal}
            class="px-5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
