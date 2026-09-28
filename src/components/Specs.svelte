<script>
  import { supportedHeadsets, systemSpecs } from '../data/gameData.js';

  let activeTab = $state('recommended');
</script>

<section id="specs" class="relative py-28 bg-[#090d16] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de la Sección -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
        <span>Hardware & Plataformas Soportadas</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
        Compatibilidad y <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Requisitos Técnicos</span>
      </h2>
      <p class="text-slate-300 mt-4 text-base sm:text-lg">
        Diseñado desde cero para exprimir el rendimiento de los visores de Realidad Virtual más modernos.
      </p>
    </div>

    <!-- Visores VR Soportados -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {#each supportedHeadsets as headset (headset.name)}
        <div class="relative rounded-2xl p-6 bg-[#0f1524] border border-slate-800 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 group">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="2" y="6" width="20" height="12" rx="4"/>
                <circle cx="8" cy="12" r="2.5"/>
                <circle cx="16" cy="12" r="2.5"/>
                <path d="M10.5 12h3"/>
              </svg>
            </div>
            <span class="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md">
              {headset.badge}
            </span>
          </div>

          <h3 class="text-lg font-bold text-white font-heading group-hover:text-orange-300 transition-colors">
            {headset.name}
          </h3>

          <p class="text-xs text-slate-400 mt-2 leading-relaxed">
            {headset.description}
          </p>
        </div>
      {/each}
    </div>

    <!-- Comparativa de Requisitos del Sistema (PCVR / Unity Engine) -->
    <div class="rounded-3xl bg-[#0e1422] border border-slate-800 overflow-hidden shadow-2xl">
      <!-- Selector de Pestañas Mínimo / Recomendado -->
      <div class="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-[#0a0e18]">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-orange-500"></span>
          <span class="text-sm font-bold text-white uppercase tracking-wider font-heading">
            Especificaciones Técnicas de Rendimiento
          </span>
        </div>

        <div class="flex items-center gap-1 bg-[#131a2b] p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onclick={() => (activeTab = 'minimum')}
            class="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all {activeTab === 'minimum'
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-white'}"
          >
            Meta Quest 2 (APK Nativo)
          </button>
          <button
            type="button"
            onclick={() => (activeTab = 'recommended')}
            class="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all {activeTab === 'recommended'
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-white'}"
          >
            PC / Unity 6 Editor (Modo Test)
          </button>
        </div>
      </div>

      <!-- Tabla / Fichas de Requisitos -->
      <div class="p-6 sm:p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 block mb-1">SISTEMA OPERATIVO</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.os : systemSpecs.minimum.os}
            </span>
          </div>

          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 block mb-1">PROCESADOR (CPU)</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.processor : systemSpecs.minimum.processor}
            </span>
          </div>

          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 block mb-1">TARJETA GRÁFICA (GPU)</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.graphics : systemSpecs.minimum.graphics}
            </span>
          </div>

          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 block mb-1">MEMORIA RAM</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.memory : systemSpecs.minimum.memory}
            </span>
          </div>

          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 block mb-1">ALMACENAMIENTO</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.storage : systemSpecs.minimum.storage}
            </span>
          </div>

          <div class="p-4 rounded-xl bg-[#111726] border border-slate-800/80">
            <span class="text-xs font-mono text-cyan-400 block mb-1">ÁREA DE JUEGO VR</span>
            <span class="text-sm font-bold text-white">
              {activeTab === 'recommended' ? systemSpecs.recommended.vrPlayArea : systemSpecs.minimum.vrPlayArea}
            </span>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/20 flex items-center gap-3">
            <span class="text-xl">⚠️</span>
            <p class="text-xs text-slate-300">
              <strong class="text-orange-300">Seguridad física en VR:</strong> Requiere espacio Room-Scale libre de obstáculos para agacharse (ducking) y realizar salto asistido (0.9m) sin colisiones físicas.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
            <span class="text-xl">⌨️</span>
            <p class="text-xs text-slate-300">
              <strong class="text-cyan-300">Teclas Debug (Modo Editor PC):</strong> Pulsa <kbd class="px-1.5 py-0.5 rounded bg-black/60 font-mono text-cyan-300">K</kbd> para forzar la derrota del jefe o <kbd class="px-1.5 py-0.5 rounded bg-black/60 font-mono text-cyan-300">G</kbd> para previsualizar la ascensión dorada.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
