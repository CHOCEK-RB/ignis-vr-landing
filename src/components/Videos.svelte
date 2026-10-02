<script>
  import SectionHeader from './ui/SectionHeader.svelte';
  import { videos, videoHostingNote } from '../data/docsData.js';

  const accentMap = {
    orange: 'border-orange-500/50 text-orange-300',
    slate: 'border-slate-600/50 text-slate-300',
    yellow: 'border-yellow-500/40 text-yellow-300',
    cyan: 'border-cyan-500/40 text-cyan-300',
  };

  const featured = videos.find((v) => v.featured);
  const timeline = videos.filter((v) => !v.featured);

  const youtubeThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  let loadedId = $state('');
  function load(id) {
    loadedId = id;
  }
</script>

<section id="videos" class="relative py-28 bg-[#090d16] border-t border-orange-500/10">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      badge="Vídeos"
      title="El juego"
      highlight="en movimiento"
      subtitle="La build actual, el primer prototipo y las sesiones de prueba de usuario. Las entrevistas se cargan solo al pulsar."
    />

    <!-- Destacado -->
    {#if featured}
      <div class="mb-14">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span class="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">{featured.tag}</span>
        </div>
        <div class="rounded-3xl p-1 bg-gradient-to-b from-orange-500/40 via-red-600/20 to-slate-800/40 shadow-2xl shadow-orange-600/20">
          <div class="rounded-[22px] overflow-hidden bg-black border border-orange-500/20">
            <video
              class="w-full aspect-video"
              controls
              preload="metadata"
              poster={featured.poster}
              playsinline
            >
              <source src={featured.src} type="video/mp4" />
              Tu navegador no puede reproducir este vídeo.
            </video>
          </div>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white font-heading mt-5">{featured.title}</h3>
        <p class="text-sm text-slate-300 mt-1 max-w-3xl">{featured.description}</p>
      </div>
    {/if}

    <!-- Línea de tiempo -->
    <div class="flex items-center justify-between gap-4 mb-6">
      <h3 class="text-2xl font-extrabold text-white font-heading">Línea de tiempo del desarrollo</h3>
      <span class="hidden sm:block text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
        Prototipo 1 → Prueba 02 → Prueba 03 → Prueba final
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each timeline as v (v.id)}
        <div class="rounded-3xl bg-[#0f1524] border border-slate-800 overflow-hidden hover:border-orange-500/40 transition-colors">
          <div class="relative aspect-video bg-black">
            {#if loadedId === v.id}
              {#if v.kind === 'youtube'}
                <iframe
                  class="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/{v.youtubeId}?autoplay=1&rel=0"
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              {:else}
                <video class="absolute inset-0 w-full h-full" controls autoplay preload="metadata" poster={v.poster} playsinline>
                  <source src={v.src} type="video/mp4" />
                </video>
              {/if}
            {:else}
              <button
                type="button"
                onclick={() => load(v.id)}
                aria-label="Reproducir {v.title}"
                class="group absolute inset-0 w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              >
                <img
                  src={v.kind === 'youtube' ? youtubeThumb(v.youtubeId) : v.poster}
                  alt="Miniatura de {v.title}"
                  class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <span class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></span>
                <span class="absolute inset-0 flex items-center justify-center">
                  <span class="w-16 h-16 rounded-full bg-orange-600/90 group-hover:bg-orange-500 flex items-center justify-center shadow-xl shadow-orange-900/50 group-hover:scale-110 transition-transform">
                    <svg class="w-7 h-7 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span class="absolute bottom-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded border bg-black/60 {accentMap[v.accent]}">
                  {v.tag}
                </span>
              </button>
            {/if}
          </div>
          <div class="p-5">
            <span class="text-[11px] font-mono text-orange-400/80 uppercase tracking-wider">{v.subtitle}</span>
            <h4 class="text-base font-bold text-white font-heading mt-1">{v.title}</h4>
            <p class="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">{v.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <p class="mt-6 text-xs text-slate-500 text-center">{videoHostingNote}</p>
  </div>
</section>
