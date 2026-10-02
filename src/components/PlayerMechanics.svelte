<script>
  import SectionHeader from './ui/SectionHeader.svelte';
  import DataTable from './ui/DataTable.svelte';
  import { playerHealth, suitDamage, visorMechanics, assistedJump, vrAvatar, playerStates } from '../data/docsData.js';

  const damageRows = playerHealth.damageSources.map((d) => [d.attack, d.damage]);
  const suitRows = suitDamage.stages.map((s) => [s.health, s.stage]);
  const visorRows = visorMechanics.params.map((p) => [p.label, p.value]);
</script>

<section id="mecanicas" class="relative py-28 bg-[#0b1019] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Mecánicas del jugador"
      title="Salud, traje, visor y"
      highlight="cuerpo en VR"
      subtitle="Todo lo que ocurre en primera persona: cómo se recibe daño, cómo se lee en el traje, cómo el humo ciega y cómo responde el avatar."
    />

    <!-- Salud y daño -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
      <div class="lg:col-span-5 rounded-3xl p-6 bg-[#0f1524] border border-slate-800">
        <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-4">
          Salud del jugador
        </span>
        <dl class="space-y-2">
          {#each playerHealth.params as p (p.label)}
            <div class="flex items-center justify-between gap-4 py-1.5 border-b border-slate-800/70 last:border-0">
              <dt class="text-sm text-slate-400">{p.label}</dt>
              <dd class="text-sm font-bold text-white font-mono text-right">{p.value}</dd>
            </div>
          {/each}
        </dl>
        <div class="mt-4 pt-4 border-t border-slate-800">
          <span class="text-[11px] font-mono text-slate-400 uppercase">Feedback al recibir daño</span>
          <ul class="mt-2 space-y-1.5">
            {#each playerHealth.feedback as f (f)}
              <li class="text-xs text-slate-300 flex items-start gap-2">
                <span class="text-red-400">•</span><span>{f}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div class="lg:col-span-7">
        <DataTable
          title="Fuentes de daño"
          columns={['Ataque', 'Daño']}
          rows={damageRows}
          open={true}
        />
      </div>
    </div>

    <!-- Traje -->
    <div class="rounded-3xl p-7 bg-[#0f1627] border border-slate-800 mb-10">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h3 class="text-2xl font-extrabold text-white font-heading">Daño del traje por etapas</h3>
      </div>
      <p class="text-sm text-slate-300 mb-5 max-w-3xl">{suitDamage.intro}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {#each suitDamage.stages as s, i (s.stage)}
          <div class="rounded-2xl p-4 bg-[#111726] border border-slate-800/80">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background: {['#22c55e', '#eab308', '#f97316', '#ef4444'][i]};"></span>
              <span class="text-xs font-mono text-slate-400">Etapa {i}</span>
            </div>
            <p class="text-sm font-bold text-white">{s.health}</p>
            <p class="text-xs text-slate-400">{s.stage}</p>
          </div>
        {/each}
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {#each suitDamage.notes as n (n)}
          <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
            <span class="text-orange-400 mt-0.5">◆</span><span>{n}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Visor + salto + avatar -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div class="lg:col-span-7 space-y-8">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 class="text-2xl font-extrabold text-white font-heading">Hollín y limpieza del visor</h3>
          </div>
          <p class="text-sm text-slate-300 mb-4">{visorMechanics.intro}</p>
          <DataTable title="Parámetros del visor" columns={['Parámetro', 'Valor']} rows={visorRows} />
          <ul class="mt-4 space-y-2">
            {#each visorMechanics.notes as n (n)}
              <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <span class="text-orange-400 mt-0.5">◆</span><span>{n}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div class="rounded-3xl p-6 bg-[#0f1524] border border-slate-800">
          <h3 class="text-xl font-black text-white font-heading mb-3">{assistedJump.intro}</h3>
          <ul class="space-y-2.5">
            {#each assistedJump.points as p (p)}
              <li class="flex items-start gap-2 text-sm text-slate-300">
                <span class="text-orange-400 mt-0.5">◆</span><span>{p}</span>
              </li>
            {/each}
          </ul>
        </div>
        <div class="rounded-3xl p-6 bg-[#0f1524] border border-slate-800">
          <h3 class="text-xl font-black text-white font-heading mb-3">Avatar VR en primera persona</h3>
          <p class="text-sm text-slate-300 mb-3">{vrAvatar.intro}</p>
          <ul class="space-y-2">
            {#each vrAvatar.points as p (p)}
              <li class="flex items-start gap-2 text-xs text-slate-300">
                <span class="text-orange-400 mt-0.5">◆</span><span>{p}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>

    <!-- Estados -->
    <div class="mt-8 flex flex-wrap gap-2">
      {#each playerStates as s (s.state)}
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <span class="font-bold text-orange-400">{s.state}</span>
          <span class="text-slate-600">·</span>
          <span>{s.meaning}</span>
        </span>
      {/each}
    </div>
  </div>
</section>
