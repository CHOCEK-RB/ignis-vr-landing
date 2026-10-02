<script>
  import { lifeAnalogies } from '../data/gameData.js';
  import { analogiesQuote } from '../data/docsData.js';
</script>

<section id="analogias" class="relative py-28 bg-[#070a10] border-t border-orange-500/15 overflow-hidden">
  <!-- Brillo sutil de fondo -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-600/5 blur-[160px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de la Sección -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
        <span>Diseño de Juego & Filosofía</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
        Analogías para la <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Vida</span>
      </h2>
      <p class="text-slate-300 mt-4 text-base sm:text-lg">
        IGNIS se puede leer como un pequeño tratado sobre cómo enfrentar problemas. Estas 10 reflexiones simbólicas nacen directamente de sus mecánicas de combate en Realidad Virtual.
      </p>
    </div>

    <!-- Grid de las 10 Analogías -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each lifeAnalogies as analogy, idx (analogy.number)}
        <div
          class="p-7 rounded-3xl bg-[#0f1524]/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group {idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/30">
                LECCIÓN #{analogy.number}
              </span>
              <span class="text-2xl group-hover:scale-110 transition-transform">{analogy.icon}</span>
            </div>

            <h3 class="text-xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors leading-snug">
              {analogy.title}
            </h3>

            <p class="text-slate-300 text-sm mt-3 leading-relaxed">
              {analogy.lesson}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>Mecánica VR simbólica</span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Frase de cierre (Doc 12) -->
    <blockquote class="mt-16 max-w-3xl mx-auto text-center rounded-3xl bg-[#0f1524]/90 border border-amber-500/20 px-8 py-10">
      <p class="text-xl sm:text-2xl font-heading font-bold text-amber-100 leading-relaxed">
        «{analogiesQuote}»
      </p>
      <footer class="mt-4 text-xs font-mono uppercase tracking-wider text-amber-400/80">
        Doc 12 — Analogías para la vida
      </footer>
    </blockquote>

  </div>
</section>
