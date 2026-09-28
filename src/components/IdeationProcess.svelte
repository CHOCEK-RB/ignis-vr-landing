<script>
  import { fade, fly, scale } from 'svelte/transition';
  import { ideationProcess } from '../data/gameData.js';

  let activeStepId = $state(ideationProcess[0].id);
  let activeEvidenceModal = $state(null);

  let currentStep = $derived(
    ideationProcess.find((item) => item.id === activeStepId) || ideationProcess[0]
  );

  let currentStepIndex = $derived(
    ideationProcess.findIndex((item) => item.id === activeStepId)
  );

  function goToStep(index) {
    if (index >= 0 && index < ideationProcess.length) {
      activeStepId = ideationProcess[index].id;
    }
  }

  function openEvidence(step) {
    activeEvidenceModal = step;
  }

  function closeEvidence() {
    activeEvidenceModal = null;
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape' && activeEvidenceModal) closeEvidence();
  }}
/>

<section id="proceso" class="relative py-28 bg-[#06080e] border-t border-b border-orange-500/15 overflow-hidden">
  <!-- Resplandor ambiental de fondo -->
  <div class="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-orange-600/10 via-amber-600/5 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
  <div class="absolute bottom-10 right-0 w-[550px] h-[550px] bg-gradient-to-l from-cyan-600/10 via-blue-600/5 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de Sección -->
    <div class="text-center max-w-3xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm shadow-orange-900/40">
        <span class="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
        <span>Metodología & Concepción del Videojuego VR</span>
      </div>
      
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight">
        Proceso de <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-300">Ideación y Diseño</span>
      </h2>
      
      <p class="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Descubre cómo nació el proyecto "Bombero VS Monstruo de Fuego": desde la sesión inicial de lluvia de ideas del equipo hasta la definición de mecánicas e interacción física en VR.
      </p>
    </div>

    <!-- Barra Stepper / Selector de las 4 Etapas Consecutivas -->
    <div class="relative mb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each ideationProcess as stepItem, index (stepItem.id)}
          <button
            type="button"
            onclick={() => (activeStepId = stepItem.id)}
            class="relative rounded-2xl p-5 text-left transition-all duration-300 border flex flex-col justify-between {activeStepId === stepItem.id
              ? 'bg-[#121827] border-orange-400 shadow-xl shadow-orange-600/20 scale-[1.02]'
              : 'bg-[#0a0e18] border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'}"
          >
            <!-- Indicador superior del paso -->
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-md {activeStepId === stepItem.id ? 'bg-orange-600 text-white font-black' : 'bg-slate-800 text-slate-400'}">
                ETAPA {stepItem.step}
              </span>
              {#if activeStepId === stepItem.id}
                <span class="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
              {/if}
            </div>

            <h3 class="text-base font-bold text-white font-heading leading-tight">
              {stepItem.title}
            </h3>

            <p class="text-xs text-slate-400 mt-1 line-clamp-1">
              {stepItem.tag}
            </p>
          </button>
        {/each}
      </div>
    </div>

    <!-- Contenido Dinámico de la Etapa Seleccionada -->
    {#key currentStep.id}
      <div
        in:fade={{ duration: 280 }}
        class="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br {currentStep.gradient} bg-[#0c111d] border border-orange-500/30 shadow-2xl overflow-hidden"
      >
        <!-- Cabecera de la Etapa -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-800 gap-6 mb-8">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-950/80 text-orange-400 border border-orange-500/40">
                {currentStep.badge}
              </span>
              <span class="text-xs font-mono text-slate-400 uppercase">
                Paso {currentStep.step} de 04
              </span>
            </div>

            <h3 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              {currentStep.title}
            </h3>

            <p class="text-base text-orange-200/90 mt-1">
              {currentStep.subtitle}
            </p>
          </div>

          <!-- Botón de Evidencia Pizarra Miro -->
          <button
            type="button"
            onclick={() => openEvidence(currentStep)}
            class="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#151c2e] hover:bg-orange-600 border border-slate-700 hover:border-orange-400 transition-all shadow-md group shrink-0"
          >
            <span class="text-lg">📋</span>
            <span>Ver Pizarra Miro de Evidencia</span>
            <svg class="w-4 h-4 text-orange-400 group-hover:text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
            </svg>
          </button>
        </div>

        <!-- CUERPO DE CADA ETAPA SEGÚN LA INFORMACIÓN OFICIAL EXTRAÍDA -->

        <!-- ETAPA 1: LLUVIA DE IDEAS INICIAL -->
        {#if currentStep.id === 'lluvia-ideas'}
          <div class="space-y-8">
            <!-- Bloque de Integrantes del Equipo -->
            <div class="p-6 rounded-2xl bg-[#090d16] border border-slate-800">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
                <span>👥</span> INTEGRANTES DEL EQUIPO DE DESARROLLO (SESIÓN DE LLUVIA DE IDEAS):
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {#each currentStep.teamMembers as member (member.name)}
                  <div class="p-3.5 rounded-xl bg-[#111624] border border-slate-800/80 flex flex-col justify-between">
                    <span class="text-xs font-bold text-white font-heading">{member.name}</span>
                    <span class="text-[11px] text-slate-400 mt-1">{member.role}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Grid de Propuestas Presentadas por Integrante -->
            <div>
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-4">
                PROPUESTAS Y CONCEPTOS EXPLORADOS EN LA PIZARRA:
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each currentStep.proposals as prop (prop.author)}
                  <div class="p-6 rounded-2xl bg-[#0f1422] border {prop.color} flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                        <span class="text-base font-bold text-white font-heading">{prop.author}</span>
                        <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-black/40 text-slate-300">
                          {prop.role}
                        </span>
                      </div>

                      <div class="space-y-3">
                        {#each prop.ideas as idea (idea.title)}
                          <div class="bg-[#090d16]/70 p-3 rounded-xl border border-slate-800/50">
                            <h5 class="text-xs font-bold text-orange-300 mb-1 flex items-center gap-1.5">
                              <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                              {idea.title}
                            </h5>
                            <p class="text-xs text-slate-300 leading-relaxed">
                              {idea.desc}
                            </p>
                          </div>
                        {/each}
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>

        <!-- ETAPA 2: ELECCIÓN DE LA IDEA BASE -->
        {:else if currentStep.id === 'eleccion-idea'}
          <div class="space-y-8">
            <!-- Cita Destacada de la Elección -->
            <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#0d1626] to-[#0a1220] border-2 border-cyan-500/40 shadow-xl cyan-box-glow text-center">
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3 block">
                CONCEPTO ELEGIDO POR UNANIMIDAD:
              </span>
              <p class="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-snug max-w-3xl mx-auto italic">
                {currentStep.coreQuote}
              </p>
              <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Tema: Bombero VS Monstruo
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300 border border-orange-500/40">
                  Mecánica: Debilidad por Color
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Interacción: Objetos del Escenario
                </span>
              </div>
            </div>

            <!-- Pilares del Concepto -->
            <div>
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                PILORES DE DISEÑO DERIVADOS DE LA ELECCIÓN:
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each currentStep.corePillars as pillar (pillar.title)}
                  <div class="p-6 rounded-2xl bg-[#0f1524] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                    <span class="text-3xl mb-3 block">{pillar.icon}</span>
                    <h5 class="text-lg font-bold text-white font-heading mb-2">{pillar.title}</h5>
                    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                {/each}
              </div>
            </div>
          </div>

        <!-- ETAPA 3: FUNCIONALIDADES DEL VIDEOJUEGO -->
        {:else if currentStep.id === 'funcionalidades'}
          <div class="space-y-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {#each currentStep.featureCategories as cat (cat.title)}
                <div class="p-6 rounded-2xl bg-[#0f1524] border {cat.color} flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-3 pb-3 border-b border-slate-800 mb-4">
                      <span class="text-2xl">{cat.icon}</span>
                      <h4 class="text-base font-bold text-white font-heading">{cat.title}</h4>
                    </div>

                    <div class="space-y-3">
                      {#each cat.items as item (item.label)}
                        <div class="bg-[#0a0e18] p-3.5 rounded-xl border border-slate-800">
                          <h5 class="text-xs font-bold text-orange-400 mb-1 flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                            {item.label}
                          </h5>
                          <p class="text-xs text-slate-300 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>

            <!-- Nota sobre la regla de confinamiento -->
            <div class="p-4 rounded-xl bg-orange-950/30 border border-orange-500/30 flex items-center gap-3">
              <span class="text-2xl">🚨</span>
              <p class="text-xs text-slate-300">
                <strong class="text-orange-300">Regla espacial inquebrantable:</strong> La puerta del cuarto permanece sellada durante el combate. La única manera de abrirla y sobrevivir es consumiendo y extinguiendo todo el fuego de la habitación mediante las herramientas correspondientes.
              </p>
            </div>
          </div>

        <!-- ETAPA 4: INTERACCIONES CON EL USUARIO (VR) -->
        {:else if currentStep.id === 'interacciones-vr'}
          <div class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each currentStep.userInteractions as inter (inter.number)}
                <div class="p-6 rounded-2xl bg-[#0f1524] border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 group">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-3xl">{inter.icon}</span>
                    <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-800 text-red-400 border border-slate-700">
                      ACCIÓN {inter.number}
                    </span>
                  </div>

                  <h4 class="text-lg font-bold text-white font-heading group-hover:text-red-400 transition-colors mb-2">
                    {inter.title}
                  </h4>

                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {inter.desc}
                  </p>

                  <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Mapeo VR:</span>
                    <span class="font-bold text-orange-400">{inter.vrAction}</span>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Controles de Navegación entre Etapas (Anterior / Siguiente) -->
        <div class="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            disabled={currentStepIndex === 0}
            onclick={() => goToStep(currentStepIndex - 1)}
            class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-300 hover:text-white bg-[#111726] hover:bg-slate-800 border border-slate-800 disabled:opacity-30 disabled:hover:bg-[#111726] transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Etapa Anterior</span>
          </button>

          <span class="text-xs font-mono text-slate-500 hidden sm:inline-block">
            Navega por las 4 fases de creación
          </span>

          <button
            type="button"
            disabled={currentStepIndex === ideationProcess.length - 1}
            onclick={() => goToStep(currentStepIndex + 1)}
            class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 shadow-md transition-all flex items-center gap-2"
          >
            <span>Siguiente Etapa</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    {/key}

  </div>

  <!-- MODAL DE EVIDENCIA: PIZARRA MIRO EN ALTA RESOLUCIÓN -->
  {#if activeEvidenceModal}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pizarra Miro de {activeEvidenceModal.title}"
      transition:fade={{ duration: 250 }}
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md overflow-y-auto"
      onclick={closeEvidence}
      onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && closeEvidence()}
      tabindex="-1"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        in:fly={{ y: 20, duration: 280 }}
        class="relative w-full max-w-5xl bg-[#0c101c] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 my-6"
        onclick={(e) => e.stopPropagation()}
      >
        <!-- Cabecera del modal -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              Evidencia Original • {activeEvidenceModal.badge}
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-0.5">
              Pizarra Miro: {activeEvidenceModal.title}
            </h3>
          </div>

          <button
            type="button"
            onclick={closeEvidence}
            class="text-slate-400 hover:text-white p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Cerrar modal de evidencia"
          >
            ✕
          </button>
        </div>

        <!-- Imagen de la Pizarra Miro en Alta Calidad -->
        <div class="relative mt-6 rounded-2xl overflow-hidden bg-black/80 border border-slate-800 shadow-inner flex items-center justify-center p-2 sm:p-4">
          <img
            src={activeEvidenceModal.image}
            alt="Pizarra de {activeEvidenceModal.title}"
            class="max-w-full max-h-[70vh] object-contain rounded-xl"
          />
        </div>

        <div class="mt-6 p-4 rounded-xl bg-[#080c14] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-xs sm:text-sm text-slate-300">
            {activeEvidenceModal.summary}
          </p>

          <button
            type="button"
            onclick={closeEvidence}
            class="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-orange-600 hover:bg-orange-500 text-white shadow-md transition-all shrink-0"
          >
            Cerrar Evidencia
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>
