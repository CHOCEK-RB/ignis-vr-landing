<script>
  import SectionHeader from './ui/SectionHeader.svelte';

  const BASE = import.meta.env.BASE_URL;

  const weapons = [
    {
      id: 'manguera',
      name: 'Manguera de agua',
      icon: '💧',
      color: '#ef4444',
      image: `${BASE}pictures/parte_01/manguera.png`,
      role: 'Arma principal · aconseja la fase roja',
      desc: 'Chorro balístico continuo con gravedad. Es la herramienta con más alcance y la única que apaga la llama central y los charcos del suelo.',
      stats: [
        ['Velocidad', '8,5 m/s'],
        ['Caída del chorro', '1,35'],
        ['Alcance útil', '≈ 3,5 m (4,8 m arqueando)'],
        ['Llama central', '2,0 s'],
        ['Fase roja', '3,5 s'],
        ['Charcos de suelo', '2,0 s'],
        ['Disipar humo', '1,5 s'],
      ],
    },
    {
      id: 'extintor',
      name: 'Extintor de espuma',
      icon: '🧯',
      color: '#eab308',
      image: `${BASE}pictures/parte_01/extintor.png`,
      role: 'Arma de corto alcance · fase amarilla',
      desc: 'Cono de espuma a dos manos. Obliga a acercarse al jefe, lo que aumenta el riesgo pero rompe su escudo térmico en pocos segundos.',
      stats: [
        ['Alcance', '3,2 m'],
        ['Cono', '13°'],
        ['Radio de detección', '0,40 m'],
        ['Fase amarilla', '3,5 s'],
        ['Manchas de espuma', '8,5 s · máx. 45'],
        ['Agarre', '0,18 m'],
      ],
    },
    {
      id: 'sacos',
      name: 'Sacos de arena',
      icon: '📦',
      color: '#3b82f6',
      image: `${BASE}pictures/parte_01/saco_azul.png`,
      role: 'Arrojadizo físico · fase azul',
      desc: 'Se agitan y se lanzan heredando el movimiento real del brazo. Un solo impacto válido basta para superar la fase azul.',
      stats: [
        ['Masa', '6,0 kg'],
        ['Radio de agarre', '0,70 m'],
        ['Impulso de lanzamiento', '×1,5'],
        ['Rebote', '0,15'],
        ['Impactos válidos', '1'],
        ['Fases de saco garantizadas', '3 de 3'],
      ],
    },
  ];

  let activeId = $state('manguera');
  let active = $derived(weapons.find((w) => w.id === activeId) || weapons[0]);
</script>

<section id="arsenal" class="relative py-28 bg-[#090d16] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Arsenal"
      title="Tres herramientas,"
      highlight="tres respuestas"
      subtitle="El arma correcta depende del color del jefe. Cada herramienta tiene su alcance, su física y su tiempo de daño."
    />

    <!-- Selector -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {#each weapons as w (w.id)}
        <button
          type="button"
          onclick={() => (activeId = w.id)}
          aria-pressed={activeId === w.id}
          class="p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group {activeId === w.id
            ? 'bg-[#141b2c] shadow-xl scale-[1.02]'
            : 'bg-[#0e1422] border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'}"
          style="border-color: {activeId === w.id ? w.color : 'rgba(30, 41, 59, 0.8)'};"
        >
          <div class="flex items-center gap-3">
            <span class="text-3xl">{w.icon}</span>
            <div>
              <span class="text-xs font-mono font-semibold" style="color: {w.color};">{w.role}</span>
              <h3 class="text-lg font-bold text-white font-heading">{w.name}</h3>
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Ficha activa -->
    <div class="rounded-3xl bg-[#0f1627] border shadow-2xl overflow-hidden transition-all" style="border-color: {active.color}40;">
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="lg:col-span-5 relative min-h-[260px]">
          <img
            src={active.image}
            alt="Uso de {active.name} en el juego"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0f1627] via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
        <div class="lg:col-span-7 p-6 sm:p-8">
          <h3 class="text-2xl sm:text-3xl font-black text-white font-heading mb-3">{active.name}</h3>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">{active.desc}</p>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {#each active.stats as [label, value] (label)}
              <div class="flex items-center justify-between gap-4 py-2 border-b border-slate-800/70">
                <dt class="text-xs sm:text-sm text-slate-400">{label}</dt>
                <dd class="text-xs sm:text-sm font-bold font-mono text-right" style="color: {active.color};">{value}</dd>
              </div>
            {/each}
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>
