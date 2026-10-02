<script>
  import { fade, scale } from 'svelte/transition';
  import { charactersAndObjects } from '../data/gameData.js';

  let selectedFilter = $state('todos');
  let activeModalItem = $state(null);

  const filters = [
    { id: 'todos', label: 'Todos los Modelos' },
    { id: 'personaje', label: 'Personajes y Entorno' },
    { id: 'objeto', label: 'Herramientas de Combate' },
    { id: 'etapa', label: 'Etapas del Monstruo' },
  ];

  let filteredItems = $derived(
    selectedFilter === 'todos'
      ? charactersAndObjects
      : charactersAndObjects.filter((item) => item.category === selectedFilter)
  );

  function openItemModal(item) {
    activeModalItem = item;
  }

  function closeItemModal() {
    activeModalItem = null;
  }
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape' && activeModalItem) closeItemModal();
  }}
/>

<section id="personajes" class="relative py-28 bg-[#070a10]">
  <!-- Resplandor ambiental de fondo -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-orange-600/5 blur-[160px] rounded-full pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de Sección -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
          <span>Modelos 3D & Entidades VR</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
          Personajes y <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Equipo del Juego</span>
        </h2>
        <p class="text-slate-400 mt-2 text-base max-w-2xl">
          Modelos 3D originales del videojuego: el traje del bombero, las mutaciones cromáticas de SAHUR, el almacén industrial y el arsenal de extinción física.
        </p>
      </div>

      <!-- Filtros de Categoría -->
      <div class="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
        {#each filters as filter (filter.id)}
          <button
            type="button"
            onclick={() => (selectedFilter = filter.id)}
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border {selectedFilter === filter.id
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-400 shadow-md shadow-orange-600/30'
              : 'bg-[#111624] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'}"
          >
            {filter.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Grid de Tarjetas con Dimensiones Optimizadas y Hover Effects -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each filteredItems as item (item.id)}
        <div
          class="group relative rounded-3xl bg-[#0e1422] border border-slate-800/80 {item.hoverBorder || 'hover:border-orange-500/50'} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/15 overflow-hidden flex flex-col justify-between cursor-pointer"
          onclick={() => openItemModal(item)}
          onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openItemModal(item)}
          role="button"
          tabindex="0"
        >
          <!-- Contenedor de Imagen de Estudio 3D con Ajuste Óptimo -->
          <div class="relative h-64 sm:h-72 w-full flex items-center justify-center p-4 bg-gradient-to-b from-[#131b2c] via-[#0d1422] to-[#080c16] overflow-hidden border-b border-slate-800/80">
            <!-- Resplandor central -->
            <div class="absolute inset-0 {item.modalGlow || 'bg-[radial-gradient(circle_at_center,_rgba(255,100,20,0.12),_transparent_70%)]'} pointer-events-none"></div>

            <!-- Imagen adaptada con object-contain sin deformación -->
            <img
              src={item.image}
              alt={item.name}
              class="max-h-full max-w-full object-contain filter drop-shadow(0 14px 28px rgba(0,0,0,0.75)) transition-transform duration-500 group-hover:scale-110 {item.imageClass || ''}"
              loading="lazy"
            />

            <!-- Badges flotantes -->
            <div class="absolute top-3.5 left-3.5">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md border {item.tagColor}">
                {item.badge}
              </span>
            </div>

            <div class="absolute bottom-3 right-3.5">
              <span class="text-xs font-mono font-semibold text-slate-300 bg-black/70 px-2.5 py-1 rounded-md border border-slate-700/60">
                {item.role}
              </span>
            </div>
          </div>

          <!-- Contenido de la Tarjeta -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                {item.name}
              </h3>
              
              <p class="text-sm text-slate-300/90 mt-2 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            <!-- Mini Ficha Técnica en Tarjeta -->
            <div class="mt-6 pt-4 border-t border-slate-800/80">
              <div class="flex flex-col gap-1.5 mb-4">
                {#each item.stats as stat (stat.label)}
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-400">{stat.label}:</span>
                    <span class="font-semibold text-slate-200">{stat.value}</span>
                  </div>
                {/each}
              </div>

              <!-- Botón de Ingreso a la Ficha / Inspección -->
              <button
                type="button"
                onclick={(e) => {
                  e.stopPropagation();
                  openItemModal(item);
                }}
                class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#141b2b] group-hover:bg-orange-600 text-slate-300 group-hover:text-white border border-slate-700 group-hover:border-orange-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Ingresar a la Ficha 3D</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>

  <!-- Modal Detallado de Inspección de Modelo 3D / Objeto -->
  {#if activeModalItem}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inspección de {activeModalItem.name}"
      transition:fade={{ duration: 250 }}
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      onclick={closeItemModal}
      onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && closeItemModal()}
      tabindex="-1"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        in:scale={{ duration: 250, start: 0.95 }}
        class="relative w-full max-w-3xl bg-[#0e1424] {activeModalItem.modalBorder || 'border border-orange-500/40'} rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 my-6 text-left"
        onclick={(e) => e.stopPropagation()}
      >
        <!-- Cabecera del Modal -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span class="text-xs font-mono font-bold {activeModalItem.tagColor} uppercase tracking-widest">
              {activeModalItem.badge} • Ficha Técnica Oficial
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
              {activeModalItem.name}
            </h3>
          </div>
          <button
            type="button"
            onclick={closeItemModal}
            class="text-slate-400 hover:text-white p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <!-- Visor del Modelo 3D Centrado con Dimensiones Adecuadas -->
        <div class="relative h-72 sm:h-96 w-full mt-6 rounded-2xl overflow-hidden bg-gradient-to-b from-[#111728] via-[#080d18] to-[#04060c] border border-slate-800 flex items-center justify-center p-6 shadow-inner">
          <div class="absolute inset-0 {activeModalItem.modalGlow || 'bg-[radial-gradient(circle_at_center,_rgba(255,100,20,0.15),_transparent_70%)]'} pointer-events-none"></div>

          <img
            src={activeModalItem.image}
            alt={activeModalItem.name}
            class="max-h-full max-w-full object-contain filter drop-shadow(0 20px 35px rgba(0,0,0,0.85)) {activeModalItem.imageClass || ''}"
          />

          <div class="absolute bottom-3 left-3 bg-black/80 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 border border-cyan-500/30">
            Vista Render VR | 60 FPS Simulado
          </div>
        </div>

        <!-- Descripción -->
        <p class="text-slate-200 mt-6 text-sm sm:text-base leading-relaxed">
          {activeModalItem.description}
        </p>

        <!-- Especificaciones Técnicas y Física VR -->
        <div class="mt-6 p-5 rounded-2xl bg-[#080c16] border border-slate-800">
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider {activeModalItem.tagColor} mb-3 flex items-center gap-2">
            <span>⚙️</span> PROPIEDADES EN REALIDAD VIRTUAL:
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {#each activeModalItem.stats as stat (stat.label)}
              <div class="bg-[#101626] p-3 rounded-xl border border-slate-800/70">
                <span class="text-[11px] text-slate-400 block">{stat.label}</span>
                <span class="text-xs font-bold text-slate-100 mt-1 block">{stat.value}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Botón de Cerrar Modal -->
        <div class="mt-6 flex justify-end">
          <button
            type="button"
            onclick={closeItemModal}
            class="px-6 py-2.5 rounded-xl font-bold text-sm {activeModalItem.btnGradient || 'bg-gradient-to-r from-orange-600 to-red-600 shadow-orange-600/30'} text-white shadow-md hover:scale-105 transition-transform"
          >
            Volver a Modelos
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>
