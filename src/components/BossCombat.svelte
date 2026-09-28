<script>
  import { colorCombatRules, sahurBossMechanics, sahurVoiceQuotes } from '../data/gameData.js';

  let activeColorIndex = $state(0);
  let activeAttackTab = $state('throw-flames');

  let activeColor = $derived(colorCombatRules[activeColorIndex]);
  let activeAttack = $derived(
    sahurBossMechanics.attacks.find((a) => a.id === activeAttackTab) ||
      sahurBossMechanics.attacks[0]
  );
</script>

<section id="combate" class="relative py-28 bg-[#090d16] border-t border-orange-500/20 overflow-hidden">
  <!-- Resplandores ambientales de fondo -->
  <div class="absolute top-10 left-1/3 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
  <div class="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de la Sección -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
        <span>Sistema de Combate & IA del Jefe</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
        Combate contra <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-300">SAHUR</span>
      </h2>
      <p class="text-slate-300 mt-4 text-base sm:text-lg">
        {sahurBossMechanics.alias}: un jefe cómico de madera y fuego. Inmune a todo salvo al arma del color que muestra. Con cada acierto se encoge, su voz sube de tono y salta de posición.
      </p>
    </div>

    <!-- 1. BLOQUE DE COMBATE CROMÁTICO (3 COLORES, 3 ARMAS) -->
    <div class="mb-20">
      <div class="flex items-center justify-between mb-6">
        <div>
          <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">Mecánica Central</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
            Regla de los Tres Colores
          </h3>
        </div>
        <div class="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
          <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>Nunca repite el mismo color dos veces seguidas</span>
        </div>
      </div>

      <!-- Pestañas de Fases de Color -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {#each colorCombatRules as rule, i (rule.phase)}
          <button
            type="button"
            onclick={() => (activeColorIndex = i)}
            class="p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group {activeColorIndex === i
              ? 'bg-[#141b2c] shadow-xl scale-[1.02]'
              : 'bg-[#0e1422] border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'}"
            style="border-color: {activeColorIndex === i ? rule.color : 'rgba(30, 41, 59, 0.8)'};"
          >
            <div class="flex items-center gap-3">
              <span class="text-3xl">{rule.icon}</span>
              <div>
                <span class="text-xs font-mono font-semibold" style="color: {rule.color};">{rule.rgb}</span>
                <h4 class="text-lg font-bold text-white font-heading">{rule.phase}</h4>
              </div>
            </div>
            <span class="text-xs font-mono px-2 py-1 rounded bg-black/60 text-slate-300">
              {rule.ammo}
            </span>
          </button>
        {/each}
      </div>

      <!-- Tarjeta Detallada de la Fase Seleccionada -->
      <div
        class="rounded-3xl p-6 sm:p-8 bg-[#0f1627] border shadow-2xl transition-all"
        style="border-color: {activeColor.color}40;"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4" style="background-color: {activeColor.color}15; color: {activeColor.color}; border: 1px solid {activeColor.color}40;">
              <span>ARMA REQUERIDA: {activeColor.weapon.toUpperCase()}</span>
            </div>
            <h4 class="text-2xl sm:text-3xl font-black text-white font-heading mb-3">
              {activeColor.weapon}
            </h4>
            <p class="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              {activeColor.desc}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-[#141d33] border border-slate-800">
                <span class="text-[11px] font-mono text-slate-400 block mb-1 uppercase">Condición para Superar</span>
                <span class="text-sm font-bold text-white">{activeColor.requirement}</span>
              </div>
              <div class="p-4 rounded-xl bg-[#141d33] border border-slate-800">
                <span class="text-[11px] font-mono text-slate-400 block mb-1 uppercase">Disponibilidad de Munición</span>
                <span class="text-sm font-bold" style="color: {activeColor.color};">{activeColor.ammo}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-center p-6 rounded-2xl bg-[#090d18] border border-slate-800/80">
            <span class="text-xs font-mono text-orange-400 font-bold mb-3 uppercase tracking-wider">
              Ciclo de Combate de SAHUR
            </span>
            <ul class="space-y-3 text-xs sm:text-sm text-slate-300">
              <li class="flex items-start gap-2">
                <span class="text-orange-400">1.</span>
                <span><strong>Acierto continuo:</strong> sostener el daño con el color correcto hasta completar la condición.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400">2.</span>
                <span><strong>Animación Hit:</strong> el jefe reacciona con dolor y quejido específico según el arma (0.63s).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400">3.</span>
                <span><strong>Encogimiento 10%:</strong> escala ×0.9 con pies anclados al piso en 0.35s.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400">4.</span>
                <span><strong>Salto a Waypoint:</strong> elige un nuevo punto de los 5 del almacén y su voz sube +8% de tono.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. EL CUARTETO DE ATAQUES DE SAHUR -->
    <div class="mb-20">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">Patrón FullRotation</span>
        <h3 class="text-3xl font-extrabold text-white font-heading mt-1">
          Los 4 Ataques del Jefe
        </h3>
        <p class="text-slate-400 text-sm mt-2">
          Ciclo de ≈ 48.6 s (10 s de pausa entre ataques). Cada ofensiva exige una acción física específica en VR.
        </p>
      </div>

      <!-- Selector de Ataques -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {#each sahurBossMechanics.attacks as attack (attack.id)}
          <button
            type="button"
            onclick={() => (activeAttackTab = attack.id)}
            class="p-4 rounded-xl border text-center transition-all duration-200 {activeAttackTab === attack.id
              ? 'bg-gradient-to-b from-orange-950/60 to-[#141b2c] border-orange-500 text-white shadow-lg shadow-orange-600/20'
              : 'bg-[#0f1524] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'}"
          >
            <span class="text-2xl block mb-1">{attack.icon}</span>
            <span class="text-xs font-bold font-heading block">{attack.name.split('(')[0]}</span>
            <span class="text-[10px] font-mono text-orange-400/80">{attack.tag}</span>
          </button>
        {/each}
      </div>

      <!-- Ficha del Ataque Activo -->
      <div class="p-6 sm:p-8 rounded-3xl bg-[#0f1627] border border-slate-800 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
          <div class="flex items-center gap-3">
            <span class="text-4xl">{activeAttack.icon}</span>
            <div>
              <h4 class="text-xl sm:text-2xl font-black text-white font-heading">{activeAttack.name}</h4>
              <span class="text-xs font-mono text-slate-400">Clip de animación: {activeAttack.clip}</span>
            </div>
          </div>
          <span class="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-600/20 border border-orange-500/40 text-orange-400">
            {activeAttack.tag}
          </span>
        </div>

        <p class="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
          {activeAttack.desc}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
            <span class="text-xs font-mono text-red-400 font-bold block mb-1 uppercase">Peligro & Daño:</span>
            <p class="text-sm text-slate-200">{activeAttack.damage}</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
            <span class="text-xs font-mono text-emerald-400 font-bold block mb-1 uppercase">Cómo Contrarrestarlo en VR:</span>
            <p class="text-sm text-slate-200">{activeAttack.counter}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. DIÁLOGOS Y VOCES CÓMICAS (25 CLIPS OFICIALES) -->
    <div>
      <div class="flex items-center justify-between mb-8">
        <div>
          <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">Humor y Personalidad</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
            Voces y Burla de SAHUR
          </h3>
        </div>
        <span class="hidden sm:inline text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-xl border border-slate-800">
          Modulación de tono: Pitch = min(2.0, 1.08 ^ etapa)
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each sahurVoiceQuotes as vq (vq.category)}
          <div class="p-5 rounded-2xl bg-[#0f1524] border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-mono font-bold text-orange-400 uppercase">{vq.category}</span>
                <span class="text-xl">{vq.icon}</span>
              </div>
              <p class="text-sm text-slate-200 font-medium italic leading-relaxed">
                «{vq.quote}»
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800/80">
              <span class="text-[11px] font-mono text-slate-400 block">{vq.context}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
