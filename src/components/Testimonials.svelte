<script>
  import { fade, fly } from 'svelte/transition';
  import { experienciaJugadores } from '../data/gameData.js';

  // Participante y foto activa para el visor modal a pantalla completa
  let activeParticipant = $state(null);
  let activePhotoIndex = $state(0);

  function openModal(participante, imgIndex = 0) {
    activeParticipant = participante;
    activePhotoIndex = imgIndex;
  }

  function closeModal() {
    activeParticipant = null;
    activePhotoIndex = 0;
  }

  function nextPhoto() {
    if (activeParticipant && activeParticipant.imagenes) {
      activePhotoIndex =
        (activePhotoIndex + 1) % activeParticipant.imagenes.length;
    }
  }

  function prevPhoto() {
    if (activeParticipant && activeParticipant.imagenes) {
      activePhotoIndex =
        (activePhotoIndex - 1 + activeParticipant.imagenes.length) %
        activeParticipant.imagenes.length;
    }
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (activeParticipant) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  }}
/>

<section id="testimonios" class="relative py-28 bg-[#07090e]">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de Sección -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
        <span>Playtesting & Feedback de Usuarios Reales</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
        Experiencia de los <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Jugadores</span>
      </h2>
      <p class="text-slate-300 mt-4 text-base sm:text-lg">
        Observaciones y feedback cualitativo recogidos durante las sesiones de prueba en primera persona con visor VR.
      </p>
    </div>

    <!-- Grid Dinámico e Iterativo de Tarjetas de Playtesting -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each experienciaJugadores as participante, index (participante.id)}
        <div
          class="group relative rounded-3xl p-7 sm:p-8 bg-[#0f1524]/90 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/20 flex flex-col justify-between {index === 0
            ? 'border-orange-500/50 shadow-xl shadow-orange-600/10'
            : 'border-slate-800/90 hover:border-orange-500/50'}"
        >
          <!-- Parte Superior: Sesión y Comentario Continuo -->
          <div>
            <!-- Badge superior de sesión y comillas decorativas -->
            <div class="flex items-center justify-between mb-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>Sesión #{index + 1} • Feedback VR</span>
              </div>
              <span class="text-2xl text-orange-500/40 font-serif select-none">❝</span>
            </div>

            <!-- Comentario en un único párrafo continuo -->
            <p class="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              «{participante.comentario}»
            </p>

            <!-- Chips/badges interactivos con los puntos clave resaltados -->
            <div class="mt-6 flex flex-wrap gap-2">
              {#each participante.puntosClave as punto (punto)}
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#141b2e] border border-orange-500/25 text-orange-300 hover:border-orange-500/60 hover:bg-orange-950/30 transition-all cursor-default shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  <span>{punto}</span>
                </span>
              {/each}
            </div>
          </div>

          <!-- Parte Inferior: Visor Compacto de Fotos y Botón de Apertura -->
          <div class="mt-8 pt-6 border-t border-slate-800/80">
            <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span class="flex items-center gap-1.5 text-orange-400 font-semibold">
                <span>🥽</span> Capturas de la Prueba ({participante.imagenes.length})
              </span>
              <span class="text-[11px] text-slate-500">Clic para ampliar</span>
            </div>

            <!-- Galería compacta de fotos en miniatura -->
            <div class="grid grid-cols-3 gap-2">
              {#each participante.imagenes as img, imgIndex (img)}
                <button
                  type="button"
                  onclick={() => openModal(participante, imgIndex)}
                  class="group/thumb relative aspect-square rounded-xl overflow-hidden bg-black/60 border border-slate-700/80 hover:border-orange-500 transition-all hover:scale-105 shadow-md cursor-pointer"
                  aria-label="Ver foto {imgIndex + 1}"
                >
                  <img
                    src="{participante.folderPath.startsWith('/') ? '' : '/'}{participante.folderPath}{img}"
                    alt="Prueba de juego en VR - Foto {imgIndex + 1}"
                    class="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-black/25 group-hover/thumb:bg-transparent transition-colors"></div>
                  <div class="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-mono text-orange-300">
                    #{imgIndex + 1}
                  </div>
                </button>
              {/each}
            </div>

            <!-- Botón principal para abrir el visor de fotos donde el usuario lo prueba -->
            <button
              type="button"
              onclick={() => openModal(participante, 0)}
              class="mt-4 w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-orange-600/15 hover:bg-orange-600 text-orange-400 hover:text-white border border-orange-500/40 hover:border-orange-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-orange-600/30 group/btn"
            >
              <svg class="w-4 h-4 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Ver Fotos de la Prueba en VR</span>
              <span class="text-orange-400 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1">→</span>
            </button>
          </div>

        </div>
      {/each}
    </div>

  </div>

  <!-- MODAL / LIGHTBOX MODERNO PARA VER LAS CAPTURAS A PANTALLA COMPLETA -->
  {#if activeParticipant}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fotos de la sesión de prueba"
      transition:fade={{ duration: 250 }}
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      onclick={closeModal}
      onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && closeModal()}
      tabindex="-1"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        in:fly={{ y: 30, duration: 300 }}
        class="relative w-full max-w-4xl bg-[#0d121f] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 my-8 text-left"
        onclick={(e) => e.stopPropagation()}
      >
        <!-- Cabecera del modal -->
        <div class="flex items-center justify-between pb-5 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-xl text-orange-400">
              🥽
            </div>
            <div>
              <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                Sesión de Playtesting VR • Evidencia Fotográfica
              </span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white font-heading mt-0.5">
                Pruebas con Jugador en Visor VR
              </h3>
            </div>
          </div>

          <button
            type="button"
            onclick={closeModal}
            class="text-slate-400 hover:text-white p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <!-- Visor de la fotografía actual -->
        <div class="mt-6">
          <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span class="text-orange-400 font-bold uppercase tracking-wider">
              📸 FOTOGRAFÍA #{activePhotoIndex + 1} DE {activeParticipant.imagenes.length}:
            </span>
            <span class="hidden sm:inline">Usa las flechas ← → para navegar</span>
          </div>

          <div class="relative max-h-[60vh] h-[450px] rounded-2xl overflow-hidden bg-black/90 border border-slate-800 flex items-center justify-center shadow-inner group">
            {#key activePhotoIndex}
              <div in:fade={{ duration: 250 }} class="w-full h-full flex items-center justify-center p-2">
                <img
                  src="{activeParticipant.folderPath.startsWith('/') ? '' : '/'}{activeParticipant.folderPath}{activeParticipant.imagenes[activePhotoIndex]}"
                  alt="Fotografía {activePhotoIndex + 1} de la prueba VR"
                  class="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>
            {/key}

            <!-- Controles Anterior / Siguiente -->
            <button
              type="button"
              onclick={prevPhoto}
              class="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-slate-700 hover:border-orange-500 transition-all hover:scale-110"
              aria-label="Foto anterior"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onclick={nextPhoto}
              class="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-slate-700 hover:border-orange-500 transition-all hover:scale-110"
              aria-label="Foto siguiente"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Miniaturas para saltar rápido -->
          <div class="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
            {#each activeParticipant.imagenes as img, pIndex (img)}
              <button
                type="button"
                onclick={() => (activePhotoIndex = pIndex)}
                class="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all {activePhotoIndex === pIndex
                  ? 'border-orange-500 scale-105 shadow-md shadow-orange-600/40'
                  : 'border-slate-800 opacity-60 hover:opacity-100'}"
              >
                <img
                  src="{activeParticipant.folderPath.startsWith('/') ? '' : '/'}{activeParticipant.folderPath}{img}"
                  alt="Miniatura {pIndex + 1}"
                  class="w-full h-full object-cover"
                />
              </button>
            {/each}
          </div>
        </div>

        <!-- Reseña y Puntos Clave en el modal -->
        <div class="mt-6 p-5 rounded-2xl bg-[#111728] border border-slate-800">
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-2">
            Feedback Cualitativo de la Sesión:
          </h4>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed italic">
            «{activeParticipant.comentario}»
          </p>

          <div class="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
            {#each activeParticipant.puntosClave as punto (punto)}
              <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-orange-950/40 border border-orange-500/30 text-orange-300">
                {punto}
              </span>
            {/each}
          </div>
        </div>

        <!-- Botón de Cerrar Modal -->
        <div class="mt-6 flex justify-end">
          <button
            type="button"
            onclick={closeModal}
            class="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/30 hover:scale-105 transition-transform"
          >
            Volver a la Página
          </button>
        </div>

      </div>
    </div>
  {/if}
</section>
