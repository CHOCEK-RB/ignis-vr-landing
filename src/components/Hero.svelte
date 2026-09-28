<script>
  import { gameInfo } from '../data/gameData.js';

  // Embers generator for immersive ambient VR flame particles
  let embers = $state([
    { id: 1, left: 10, delay: 0, duration: 6, size: 6 },
    { id: 2, left: 25, delay: 2, duration: 8, size: 4 },
    { id: 3, left: 45, delay: 1, duration: 7, size: 5 },
    { id: 4, left: 65, delay: 3, duration: 9, size: 7 },
    { id: 5, left: 80, delay: 0.5, duration: 6.5, size: 4 },
    { id: 6, left: 92, delay: 2.5, duration: 7.5, size: 6 },
  ]);

  // Selector Táctico de Equipamiento en el HUD del Hero
  let activeTool = $state('manguera');

  const tools = [
    {
      id: 'manguera',
      label: 'Manguera de Agua',
      image: `${import.meta.env.BASE_URL}pictures/parte_01/manguera.png`,
      alt: 'Jugador usando la manguera de agua en primera persona VR',
      phaseText: 'HERRAMIENTA: MANGUERA DE AGUA',
      color: 'text-red-400 border-red-500/40 bg-red-950/40',
      icon: '💧',
      badgeTitle: 'Manguera a Presión',
      badgeDesc: 'Disparo continuo con gatillo háptico',
    },
    {
      id: 'extintor',
      label: 'Extintor Químico',
      image: `${import.meta.env.BASE_URL}pictures/parte_01/extintor.png`,
      alt: 'Jugador descargando espuma química con el extintor amarillo en VR',
      phaseText: 'HERRAMIENTA: EXTINTOR QUÍMICO',
      color: 'text-yellow-400 border-yellow-500/40 bg-yellow-950/40',
      icon: '🧯',
      badgeTitle: 'Espuma Química Amarilla',
      badgeDesc: 'Dispersión a dos manos contra fase amarilla',
    },
    {
      id: 'arena',
      label: 'Saco de Arena Azul',
      image: `${import.meta.env.BASE_URL}pictures/parte_01/saco_azul.png`,
      alt: 'Jugador sosteniendo el saco de arena azul para sofocar el fuego en VR',
      phaseText: 'HERRAMIENTA: SACO DE ARENA AZUL',
      color: 'text-blue-400 border-blue-500/40 bg-blue-950/40',
      icon: '📦',
      badgeTitle: 'Saco de Arena Azul',
      badgeDesc: 'Arrojo físico para sofocar la fase azul del monstruo',
    },
  ];

  let currentTool = $derived(
    tools.find((tool) => tool.id === activeTool) || tools[0]
  );
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#07090e]">
  <!-- Fondos radiales de resplandor ígneo -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-orange-600/25 via-red-600/10 to-transparent blur-[120px] rounded-full"></div>
    <div class="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-amber-600/15 blur-[100px] rounded-full"></div>
    <div class="absolute top-1/3 right-10 w-[380px] h-[380px] bg-red-700/15 blur-[90px] rounded-full"></div>
  </div>

  <!-- Partículas de brasas flotantes -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
    {#each embers as ember (ember.id)}
      <div
        class="absolute rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 shadow-md shadow-orange-500/80 animate-float-ember"
        style="
          left: {ember.left}%;
          bottom: -20px;
          width: {ember.size}px;
          height: {ember.size}px;
          animation-duration: {ember.duration}s;
          animation-delay: {ember.delay}s;
          animation-iteration-count: infinite;
        "
      ></div>
    {/each}
  </div>

  <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Contenido Textual Hero -->
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        <!-- Badge de Realidad Virtual -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-semibold tracking-wide uppercase shadow-sm shadow-orange-900/50 mb-6">
          <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>{gameInfo.badgeText}</span>
        </div>

        <!-- Título Épico con Efecto Ígneo -->
        <h1 class="text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white font-heading leading-none">
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-300 fire-text-glow">
            {gameInfo.title}
          </span>
          <span class="block text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest text-slate-300 mt-2">
            {gameInfo.subtitle}
          </span>
        </h1>

        <!-- Eslogan oficial IGNIS -->
        <p class="mt-6 text-lg sm:text-xl text-orange-200/90 font-medium leading-relaxed max-w-2xl border-l-2 border-orange-500/60 pl-4 py-1 bg-gradient-to-r from-orange-500/10 to-transparent">
          «Una llamada de rutina. Un almacén sellado tras de ti. Una llama central que al apagarse despierta a SAHUR.»
        </p>

        <!-- Descripción detallada -->
        <p class="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
          {gameInfo.synopsis}
        </p>

        <!-- Botón de Exploración de Documentación -->
        <div class="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#combate"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 rounded-2xl shadow-xl shadow-orange-600/40 hover:shadow-orange-500/70 hover:scale-105 active:scale-95 transition-all duration-300 border border-orange-400/50 group"
          >
            <span>Ver Documentación de Combate & IA</span>
            <span class="text-white group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <!-- Badges técnicos / Plataformas -->
        <div class="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Room-Scale 360° Físico</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Combate Táctico y Puzzle Elemental</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Audio Espacial Binaural 3D</span>
          </div>
        </div>
      </div>

      <!-- Lado Derecho: VR In-Game Showcase interactivo con imágenes de pictures/parte_01 -->
      <div class="lg:col-span-5 relative">
        <div class="relative mx-auto max-w-md lg:max-w-none">
          <!-- Marco HUD VR -->
          <div class="relative rounded-3xl p-1 bg-gradient-to-b from-orange-500/40 via-red-600/20 to-slate-800/40 shadow-2xl shadow-orange-600/20">
            <div class="relative rounded-[22px] bg-[#0c101a] overflow-hidden border border-orange-500/20">
              
              <!-- Imagen in-game dinámica según la opción seleccionada de pictures/parte_01 -->
              <div class="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={currentTool.image}
                  alt={currentTool.alt}
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                <!-- Superposición de HUD VR -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/30 pointer-events-none"></div>

                <!-- HUD Indicadores de VR -->
                <div class="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-orange-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-orange-500/30">
                  <span class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    TEMP: 850°C CRÍTICO
                  </span>
                  <span class="text-slate-300 font-semibold">{currentTool.phaseText}</span>
                </div>

                <!-- Selector de Equipamiento en el HUD -->
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="bg-[#0f1422]/90 backdrop-blur-md border border-orange-500/30 rounded-xl p-3 shadow-lg">
                    <p class="text-xs font-semibold text-orange-300 uppercase tracking-wider mb-2">
                      Selector Táctico de Equipamiento:
                    </p>
                    <div class="grid grid-cols-3 gap-1.5">
                      {#each tools as tool (tool.id)}
                        <button
                          type="button"
                          onclick={() => (activeTool = tool.id)}
                          class="px-2 py-1.5 rounded-lg text-[11px] font-semibold border transition-all duration-200 {activeTool === tool.id
                            ? `${tool.color} shadow-sm font-bold scale-[1.02]`
                            : 'text-slate-400 border-slate-700/60 hover:text-slate-200 bg-slate-900/40'}"
                        >
                          {tool.label}
                        </button>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pie de tarjeta HUD -->
              <div class="p-4 bg-[#0a0e17] flex items-center justify-between border-t border-slate-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                  <span class="text-xs font-medium text-slate-300">Tracking Háptico Activo</span>
                </div>
                <span class="text-xs font-mono text-orange-400">90 FPS / Room-Scale</span>
              </div>
            </div>
          </div>

          <!-- Elemento flotante decorativo dinámico según la herramienta -->
          <div class="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#111726]/95 border {currentTool.id === 'arena' ? 'border-blue-500/50 shadow-blue-500/20' : currentTool.id === 'extintor' ? 'border-yellow-500/40 shadow-yellow-500/20' : 'border-orange-500/40 shadow-orange-500/20'} backdrop-blur-md shadow-xl fire-box-glow-sm">
            <span class="text-2xl">{currentTool.icon}</span>
            <div>
              <p class="text-xs font-bold text-white uppercase tracking-wider">{currentTool.badgeTitle}</p>
              <p class="text-[11px] text-slate-400">{currentTool.badgeDesc}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
