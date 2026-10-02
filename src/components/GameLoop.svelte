<script>
  import SectionHeader from './ui/SectionHeader.svelte';
  import { mainObjective, secondaryObjectives, parallelAttacks, winLose, matchDuration } from '../data/docsData.js';
</script>

<section id="bucle" class="relative py-28 bg-[#0b1019] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Objetivos y bucle de juego"
      title="Cómo se juega"
      highlight="de principio a fin"
      subtitle="Una partida es un bucle claro: apagar, despertar, descubrir el color, golpear y repetir hasta la victoria."
    />

    <!-- Objetivos -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
      <div class="lg:col-span-5 rounded-3xl p-7 bg-gradient-to-br from-orange-950/50 to-[#0f1627] border border-orange-500/30">
        <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">Objetivo principal</span>
        <h3 class="text-2xl font-black text-white font-heading mt-2 mb-3">{mainObjective.title}</h3>
        <p class="text-sm sm:text-base text-slate-300 leading-relaxed">{mainObjective.text}</p>
      </div>
      <div class="lg:col-span-7 rounded-3xl p-7 bg-[#0f1524] border border-slate-800">
        <span class="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Objetivos secundarios</span>
        <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each secondaryObjectives as obj (obj)}
            <li class="flex items-start gap-2 text-sm text-slate-200">
              <span class="text-orange-400 mt-0.5">▸</span>
              <span>{obj}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Ataques en paralelo -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
      <div class="lg:col-span-4 rounded-3xl p-6 bg-[#0f1627] border border-slate-800">
        <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-3">
          Patrón de ataque
        </span>
        <p class="text-lg font-bold text-white font-heading">{parallelAttacks.pattern}</p>
      </div>
      <ul class="lg:col-span-8 grid grid-cols-1 gap-3">
        {#each parallelAttacks.notes as note (note)}
          <li class="flex items-start gap-3 p-4 rounded-2xl bg-[#0f1524] border border-slate-800 text-sm text-slate-300">
            <span class="text-orange-400 mt-0.5">◆</span>
            <span>{note}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Victoria y derrota -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="rounded-3xl p-7 bg-emerald-950/20 border border-emerald-500/30">
        <h3 class="text-xl font-black text-emerald-300 font-heading mb-3">{winLose.victory.title}</h3>
        <ul class="space-y-2">
          {#each winLose.victory.items as item (item)}
            <li class="flex items-start gap-2 text-sm text-slate-200">
              <span class="text-emerald-400 mt-0.5">✓</span><span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div class="rounded-3xl p-7 bg-red-950/20 border border-red-500/30">
        <h3 class="text-xl font-black text-red-300 font-heading mb-3">{winLose.defeat.title}</h3>
        <ul class="space-y-2">
          {#each winLose.defeat.items as item (item)}
            <li class="flex items-start gap-2 text-sm text-slate-200">
              <span class="text-red-400 mt-0.5">✕</span><span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <p class="mt-8 text-center text-sm text-slate-400 max-w-3xl mx-auto">{matchDuration}</p>
  </div>
</section>
