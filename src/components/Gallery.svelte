<script>
  import { fade, fly } from 'svelte/transition';
  import { galleryItems } from '../data/gameData.js';

  let activeIndex = $state(0);
  let lightboxOpen = $state(false);
  let selectedCategory = $state('todas');

  const categories = ['todas', 'In-Game VR', 'Mecánicas', 'Boss Fight'];

  let filteredGallery = $derived(
    selectedCategory === 'todas'
      ? galleryItems
      : galleryItems.filter((img) => img.category === selectedCategory)
  );

  function getColSpanClass(index, total) {
    if (total === 3) return 'lg:col-span-4 aspect-[16/10]';
    if (total === 4) return 'lg:col-span-6 aspect-[16/10]';
    // Para 10 elementos en vista completa:
    // Fila 1 (12 cols): 8 + 4
    // Fila 2 (12 cols): 4 + 4 + 4
    // Fila 3 (12 cols): 4 + 8
    // Fila 4 (12 cols): 4 + 4 + 4
    const spans = [
      'lg:col-span-8',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-8',
      'lg:col-span-4',
      'lg:col-span-4',
      'lg:col-span-4',
    ];
    return `${spans[index % spans.length]} aspect-[16/10]`;
  }

  function openLightbox(index) {
    activeIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function nextImage() {
    activeIndex = (activeIndex + 1) % filteredGallery.length;
  }

  function prevImage() {
    activeIndex = (activeIndex - 1 + filteredGallery.length) % filteredGallery.length;
  }

  function handleKeydown(e) {
    if (!lightboxOpen) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<section id="galeria" class="relative py-28 bg-[#090d16] border-t border-b border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Encabezado de la Galería -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
          <span>Capturas & Experiencia In-Game ({galleryItems.length} Imágenes)</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
          Galería del <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Juego en VR</span>
        </h2>
        <p class="text-slate-400 mt-2 text-base max-w-xl">
          Echa un vistazo directo al visor VR: el almacén en llamas, el modelado de SAHUR, los sacos azules y la tensión física en primera persona.
        </p>
      </div>

      <!-- Filtros de categoría -->
      <div class="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
        {#each categories as cat (cat)}
          <button
            type="button"
            onclick={() => (selectedCategory = cat)}
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all duration-200 border {selectedCategory === cat
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-400 shadow-md shadow-orange-600/30'
              : 'bg-[#111624] text-slate-400 hover:text-white border-slate-800'}"
          >
            {cat}
          </button>
        {/each}
      </div>
    </div>

    <!-- Cuadrícula Dinámica Estilo Masonry / Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
      {#each filteredGallery as item, index (item.id)}
        <div
          class="group relative rounded-3xl overflow-hidden bg-[#0f1524] border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-600/20 cursor-pointer {getColSpanClass(index, filteredGallery.length)}"
          onclick={() => openLightbox(index)}
          onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
          role="button"
          tabindex="0"
        >
          <img
            src={item.src}
            alt={item.title}
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Superposición Gradiente y Datos -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-orange-400 border border-orange-500/30">
              {item.category}
            </span>
          </div>

          <div class="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-orange-300 transition-colors">
                {item.title}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2 max-w-lg">
                {item.caption}
              </p>
            </div>

            <!-- Icono Zoom Hover -->
            <div class="w-10 h-10 rounded-xl bg-orange-600/80 text-white flex items-center justify-center shrink-0 ml-4 group-hover:scale-110 transition-transform shadow-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>

  <!-- Lightbox Modal con Transición y Controles -->
  {#if lightboxOpen && filteredGallery[activeIndex]}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
      transition:fade={{ duration: 250 }}
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
      onclick={closeLightbox}
      onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter') && closeLightbox()}
      tabindex="-1"
    >
      <!-- Botón Cerrar -->
      <button
        type="button"
        onclick={closeLightbox}
        class="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-orange-500 transition-colors"
        aria-label="Cerrar visor"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Botón Anterior -->
      <button
        type="button"
        onclick={(e) => { e.stopPropagation(); prevImage(); }}
        class="absolute left-4 sm:left-8 z-50 p-3.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-orange-500 transition-all hover:scale-110"
        aria-label="Imagen anterior"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Contenedor de la Imagen Activa -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        onclick={(e) => e.stopPropagation()}
      >
        {#key activeIndex}
          <div in:fly={{ y: 20, duration: 250 }}>
            <img
              src={filteredGallery[activeIndex].src}
              alt={filteredGallery[activeIndex].title}
              class="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-orange-500/30"
            />
          </div>
        {/key}

        <div class="mt-4 text-center">
          <h4 class="text-2xl font-bold text-white font-heading">
            {filteredGallery[activeIndex].title}
          </h4>
          <p class="text-sm text-slate-300 mt-1 max-w-2xl">
            {filteredGallery[activeIndex].caption}
          </p>
          <span class="inline-block mt-1 text-xs font-mono text-orange-400">
            {activeIndex + 1} de {filteredGallery.length} • {filteredGallery[activeIndex].category}
          </span>
        </div>

        <!-- Miniaturas de navegación rápida -->
        <div class="flex items-center gap-2 mt-3 overflow-x-auto max-w-full py-1 px-2 scrollbar-none">
          {#each filteredGallery as thumb, tIndex (thumb.id)}
            <button
              type="button"
              onclick={() => (activeIndex = tIndex)}
              class="relative w-12 sm:w-14 h-8 sm:h-9 rounded-lg overflow-hidden border-2 transition-all shrink-0 {activeIndex === tIndex
                ? 'border-orange-500 scale-105 shadow-md shadow-orange-600/40'
                : 'border-slate-800 opacity-50 hover:opacity-100 hover:border-slate-600'}"
              aria-label="Ir a imagen {tIndex + 1}"
            >
              <img src={thumb.src} alt="" class="w-full h-full object-cover" />
            </button>
          {/each}
        </div>
      </div>

      <!-- Botón Siguiente -->
      <button
        type="button"
        onclick={(e) => { e.stopPropagation(); nextImage(); }}
        class="absolute right-4 sm:right-8 z-50 p-3.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-orange-500 transition-all hover:scale-110"
        aria-label="Imagen siguiente"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  {/if}
</section>
