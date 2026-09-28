<script>
  import { fade, fly, slide } from 'svelte/transition';
  import { storyChapters, allStoryPanels, combatMechanics } from '../data/gameData.js';

  let activeChapterId = $state(storyChapters[0].id);
  let activeViewMode = $state('capitulos'); // 'capitulos' | 'storyboard'
  let activeMechanicIndex = $state(0);

  // Lightbox modal para ampliar paneles
  let selectedPanel = $state(null);

  let currentChapter = $derived(
    storyChapters.find((ch) => ch.id === activeChapterId) || storyChapters[0]
  );

  let currentChapterIndex = $derived(
    storyChapters.findIndex((ch) => ch.id === activeChapterId)
  );

  function goToChapter(index) {
    if (index >= 0 && index < storyChapters.length) {
      activeChapterId = storyChapters[index].id;
    }
  }

  function openPanelLightbox(panel) {
    selectedPanel = panel;
  }

  function closePanelLightbox() {
    selectedPanel = null;
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape' && selectedPanel) closePanelLightbox();
  }}
/>

<section id="historia" class="relative py-28 bg-[#090d16] overflow-hidden border-t border-b border-orange-500/10">
  <!-- Fondos difuminados ambientales -->
  <div class="absolute -top-40 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none"></div>
  <div class="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de la Sección -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
        <span>Storytelling & Cómic Oficial</span>
      </div>
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight uppercase">
        El Bombero y el <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-300">Monstruo de Fuego</span>
      </h2>
      <p class="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Sigue la historia ilustrada de Carlos panel a panel: desde la llamada rutinaria hasta el enfrentamiento sobrenatural en el cuarto sellado.
      </p>

      <!-- Selector de Modo de Vista -->
      <div class="mt-8 inline-flex items-center p-1 rounded-2xl bg-[#0f1524] border border-slate-800">
        <button
          type="button"
          onclick={() => (activeViewMode = 'capitulos')}
          class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all {activeViewMode === 'capitulos'
            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/30'
            : 'text-slate-400 hover:text-white'}"
        >
          📖 Vista Guiada por Capítulos
        </button>
        <button
          type="button"
          onclick={() => (activeViewMode = 'storyboard')}
          class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all {activeViewMode === 'storyboard'
            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/30'
            : 'text-slate-400 hover:text-white'}"
        >
          🎨 Cómic Completo (14 Paneles)
        </button>
      </div>
    </div>

    <!-- MODO 1: VISTA GUIADA POR CAPÍTULOS CON PANELES SINCRONIZADOS -->
    {#if activeViewMode === 'capitulos'}
      <div in:fade={{ duration: 250 }}>
        <!-- Barra de Capítulos (Tabs) -->
        <div class="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {#each storyChapters as chapter, index (chapter.id)}
            <button
              type="button"
              onclick={() => (activeChapterId = chapter.id)}
              class="flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap border {activeChapterId === chapter.id
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-400 shadow-lg shadow-orange-600/30 scale-102'
                : 'bg-[#121827] text-slate-300 hover:text-white border-slate-800 hover:border-orange-500/40'}"
            >
              <span class="text-xs font-mono px-2 py-0.5 rounded {activeChapterId === chapter.id ? 'bg-black/40 text-yellow-300 font-bold' : 'bg-slate-800 text-slate-400'}">
                {chapter.step}
              </span>
              <span>{chapter.title}</span>
            </button>
          {/each}
        </div>

        <!-- Tarjeta de Capítulo Activo con Paneles Ilustrados -->
        {#key currentChapter.id}
          <div
            in:fade={{ duration: 300 }}
            class="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br {currentChapter.gradient} bg-[#0e1422] border {currentChapter.borderAccent} shadow-2xl mb-8"
          >
            <!-- Cabecera del Capítulo -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
              <div class="flex items-center gap-3">
                <span class="text-sm font-mono font-bold text-orange-400 uppercase tracking-widest">
                  Capítulo {currentChapter.step} de {storyChapters.length}
                </span>
                <span class="text-slate-600">•</span>
                <span class="px-3 py-1 rounded-md text-xs font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-300">
                  {currentChapter.badge}
                </span>
              </div>

              <!-- Controles Siguiente / Anterior -->
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentChapterIndex === 0}
                  onclick={() => goToChapter(currentChapterIndex - 1)}
                  class="p-2 rounded-xl bg-[#141b2a] text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 border border-slate-800 transition-colors"
                  aria-label="Capítulo anterior"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  disabled={currentChapterIndex === storyChapters.length - 1}
                  onclick={() => goToChapter(currentChapterIndex + 1)}
                  class="p-2 rounded-xl bg-[#141b2a] text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 border border-slate-800 transition-colors"
                  aria-label="Capítulo siguiente"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <!-- Texto Narrativo del PDF -->
              <div class="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 class="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-wide mb-2">
                    {currentChapter.title}
                  </h3>
                  
                  <p class="text-lg font-medium text-orange-300/90 italic mb-5">
                    {currentChapter.tag}
                  </p>

                  <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                    {currentChapter.content}
                  </p>
                </div>

                <!-- Cita Clave del PDF -->
                <div class="mt-8 p-4 sm:p-5 rounded-2xl bg-black/40 border border-orange-500/20">
                  <p class="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-1">
                    Cita Textual del Documento:
                  </p>
                  <p class="text-sm font-semibold text-slate-100 italic">
                    {currentChapter.highlightQuote}
                  </p>
                </div>
              </div>

              <!-- Paneles Ilustrados del Capítulo -->
              <div class="lg:col-span-6 flex flex-col gap-4">
                <div class="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>PANELES ILUSTRADOS ({currentChapter.panels.length})</span>
                  <span class="text-orange-400">Haz clic en una imagen para ampliar</span>
                </div>

                <div class="grid grid-cols-1 {currentChapter.panels.length > 1 ? 'sm:grid-cols-2' : ''} gap-4">
                  {#each currentChapter.panels as panel (panel.id)}
                    <div
                      class="group relative rounded-2xl overflow-hidden bg-black/50 border border-slate-700/80 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/20 cursor-pointer"
                      onclick={() => openPanelLightbox(panel)}
                      onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openPanelLightbox(panel)}
                      role="button"
                      tabindex="0"
                    >
                      <div class="aspect-[16/10] overflow-hidden">
                        <img
                          src={panel.image}
                          alt={panel.title}
                          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      
                      <!-- Overlay con título y badge -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div class="absolute top-2.5 left-2.5">
                        <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/70 text-orange-400 border border-orange-500/40">
                          Panel #{panel.id < 10 ? '0' + panel.id : panel.id}
                        </span>
                      </div>

                      <div class="absolute bottom-2.5 left-2.5 right-2.5">
                        <h4 class="text-xs sm:text-sm font-bold text-white font-heading">
                          {panel.title}
                        </h4>
                        <p class="text-[11px] text-slate-300 line-clamp-1">
                          {panel.tag}
                        </p>
                      </div>

                      <div class="absolute bottom-2.5 right-2.5 p-1 rounded-md bg-orange-600 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                        </svg>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

            </div>
          </div>
        {/key}
      </div>

    <!-- MODO 2: STORYBOARD CÓMIC COMPLETO (14 PANELES ILUSTRADOS) -->
    {:else}
      <div in:fade={{ duration: 250 }}>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each allStoryPanels as panel (panel.id)}
            <div
              class="group relative rounded-3xl overflow-hidden bg-[#0e1422] border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-600/20 flex flex-col justify-between cursor-pointer"
              onclick={() => openPanelLightbox(panel)}
              onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openPanelLightbox(panel)}
              role="button"
              tabindex="0"
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={panel.image}
                  alt={panel.title}
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-black/30"></div>
                
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-black/80 text-orange-400 border border-orange-500/40">
                    Panel #{panel.id < 10 ? '0' + panel.id : panel.id}
                  </span>
                </div>

                <div class="absolute top-3 right-3">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-950/70 text-orange-300 border border-orange-500/30">
                    {panel.tag}
                  </span>
                </div>
              </div>

              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 class="text-lg font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                    {panel.title}
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {panel.caption}
                  </p>
                </div>

                <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-orange-400 font-semibold">
                  <span>Ampliar panel e historia</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Matriz Cromática de Combate contra Ignis -->
    <div class="mt-20">
      <div class="text-center mb-8">
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase">
          La Regla del Fuego: <span class="text-orange-400">Lectura Cromática de Combate</span>
        </h3>
        <p class="text-sm sm:text-base text-slate-300 mt-2 max-w-xl mx-auto">
          En Ignis no ganas disparando a ciegas. Cada mutación de color de la bestia exige un recurso táctico específico:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each combatMechanics as mechanic, index (mechanic.phase)}
          <div
            class="relative rounded-2xl p-6 bg-[#0f1524] border transition-all duration-300 cursor-pointer {activeMechanicIndex === index
              ? `${mechanic.accent} scale-105 shadow-xl`
              : 'border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-[#141b2e]'}"
            onclick={() => (activeMechanicIndex = index)}
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (activeMechanicIndex = index)}
            role="button"
            tabindex="0"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl">{mechanic.icon}</span>
              <span class="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-slate-700">
                Paso {index + 1}
              </span>
            </div>

            <h4 class="text-lg font-bold text-white font-heading mb-1">
              {mechanic.phase}
            </h4>

            <p class="text-xs font-semibold {mechanic.weaknessColor || 'text-orange-400'} mb-2">
              Vulnerable a: {mechanic.weakness}
            </p>

            <p class="text-xs text-slate-400 leading-relaxed">
              {mechanic.effect}
            </p>
          </div>
        {/each}
      </div>
    </div>

  </div>

  <!-- Lightbox Modal para Inspeccionar Paneles de Cómic -->
  {#if selectedPanel}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Panel {selectedPanel.id} del Storyboard"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onclick={closePanelLightbox}
      onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && closePanelLightbox()}
      tabindex="-1"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="relative w-full max-w-4xl bg-[#0e1424] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onclick={(e) => e.stopPropagation()}
      >
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              Panel #{selectedPanel.id < 10 ? '0' + selectedPanel.id : selectedPanel.id} • {selectedPanel.tag}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              {selectedPanel.title}
            </h3>
          </div>
          <button
            type="button"
            onclick={closePanelLightbox}
            class="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <div class="relative aspect-video mt-6 rounded-2xl overflow-hidden bg-black/60 border border-slate-800">
          <img
            src={selectedPanel.image}
            alt={selectedPanel.title}
            class="w-full h-full object-contain"
          />
        </div>

        <div class="mt-6 p-4 rounded-xl bg-[#090d17] border border-slate-800">
          <p class="text-slate-200 text-sm sm:text-base leading-relaxed">
            {selectedPanel.caption}
          </p>
        </div>

        <div class="mt-6 flex justify-end">
          <button
            type="button"
            onclick={closePanelLightbox}
            class="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/30"
          >
            Cerrar Vista
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>
