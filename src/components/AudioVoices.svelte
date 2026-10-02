<script>
  import SectionHeader from './ui/SectionHeader.svelte';
  import { audioSystem, audioCatalog, proceduralSounds } from '../data/docsData.js';

  let openGroup = $state('');
  function toggle(group) {
    openGroup = openGroup === group ? '' : group;
  }
</script>

<section id="audio" class="relative py-28 bg-[#090d16] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Audio y voces"
      title="25 clips,"
      highlight="una sola voz"
      subtitle="SAHUR habla, insulta y se queja. El sistema mezcla sus clips por prioridad y le sube el tono a medida que encoge."
    />

    <div class="mb-12">
      <p class="text-sm sm:text-base text-slate-300 mb-6 max-w-3xl">{audioSystem.intro}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
        <div class="rounded-2xl p-5 bg-[#0f1524] border border-slate-800">
          <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-3">Audio 3D</span>
          <dl class="space-y-2">
            {#each audioSystem.spatial as s (s.label)}
              <div class="flex items-center justify-between gap-3 py-1 border-b border-slate-800/60 last:border-0">
                <dt class="text-xs text-slate-400">{s.label}</dt>
                <dd class="text-xs font-bold text-white text-right">{s.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div class="rounded-2xl p-5 bg-gradient-to-br from-orange-950/40 to-[#0f1524] border border-orange-500/30 flex flex-col justify-center">
          <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-2">
            Modulación de tono
          </span>
          <p class="text-sm text-slate-200">
            Cada vez que SAHUR encoge al cambiar de color, su voz sube un 8 % de tono y llega como máximo al doble de su altura original.
          </p>
        </div>
      </div>
    </div>

    <!-- Catálogo de voces -->
    <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-6 text-center">
      Catálogo de voces (con transcripción)
    </h3>
    <div class="space-y-4">
      {#each audioCatalog as cat (cat.group)}
        <div class="rounded-2xl bg-[#0f1524] border border-slate-800 overflow-hidden">
          <button
            type="button"
            onclick={() => toggle(cat.group)}
            aria-expanded={openGroup === cat.group}
            class="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-[#131a2b] transition-colors text-left"
          >
            <span class="flex items-center gap-3">
              <span class="text-2xl">{cat.icon}</span>
              <span>
                <span class="block text-base font-bold text-white font-heading">{cat.group}</span>
                <span class="block text-[11px] font-mono text-slate-400">{cat.context}</span>
              </span>
            </span>
            <span class="flex items-center gap-2 shrink-0">
              <span class="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded-md">{cat.clips.length} clips</span>
              <span class="text-orange-400 transition-transform {openGroup === cat.group ? 'rotate-180' : ''}">▾</span>
            </span>
          </button>
          {#if openGroup === cat.group}
            <ul class="border-t border-slate-800 divide-y divide-slate-800/70">
              {#each cat.clips as clip (clip.file)}
                <li class="px-5 py-4">
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">{clip.duration}</span>
                  </div>
                  <p class="text-sm text-slate-200 italic">«{clip.quote}»</p>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Sonidos procedurales -->
    <div class="mt-8 rounded-2xl p-5 bg-[#0f1524] border border-slate-800">
      <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-3">
        Sonidos procedurales
      </span>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {#each proceduralSounds as s (s)}
          <li class="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
            <span class="text-cyan-400 mt-0.5">▸</span><span>{s}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
