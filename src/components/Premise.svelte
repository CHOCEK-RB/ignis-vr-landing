<script>
  import SectionHeader from './ui/SectionHeader.svelte';
  import DataTable from './ui/DataTable.svelte';
  import { fichaTecnica, premiseNarrative, tonePoints, oneLineLoop } from '../data/docsData.js';

  const fichaRows = fichaTecnica.map((f) => [f.campo, f.valor]);
</script>

<section id="premisa" class="relative py-28 bg-[#090d16] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Ficha técnica y premisa"
      title="Qué es"
      highlight="IGNIS"
      subtitle="Los datos canónicos del proyecto y la premisa narrativa: un almacén, una llama y una voz que se burla de ti."
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Ficha técnica -->
      <div class="lg:col-span-5">
        <DataTable
          title="Ficha técnica del proyecto"
          columns={['Campo', 'Valor']}
          rows={fichaRows}
          open={true}
        />
        <div
          class="mt-4 p-4 rounded-2xl bg-orange-950/20 border border-orange-500/20 flex items-start gap-3"
        >
          <span class="text-lg">🎯</span>
          <p class="text-xs sm:text-sm text-slate-300">
            <strong class="text-orange-300">Bucle en una línea:</strong> {oneLineLoop}
          </p>
        </div>
      </div>

      <!-- Narrativa -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {#each premiseNarrative as item (item.title)}
          <div
            class="rounded-2xl p-6 bg-[#0f1524] border border-slate-800 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <span class="text-3xl block mb-3">{item.icon}</span>
            <h3 class="text-lg font-bold text-white font-heading mb-2">{item.title}</h3>
            <p class="text-sm text-slate-300 leading-relaxed">{item.text}</p>
          </div>
        {/each}

        <div
          class="sm:col-span-2 rounded-2xl p-6 bg-gradient-to-br from-orange-950/40 to-[#0f1524] border border-orange-500/25"
        >
          <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-3">
            Tono y personalidad
          </span>
          <ul class="space-y-2">
            {#each tonePoints as point (point)}
              <li class="flex items-start gap-2 text-sm text-slate-200">
                <span class="text-orange-400 mt-0.5">◆</span>
                <span>{point}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
