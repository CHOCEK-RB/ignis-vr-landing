<script>
  /**
   * Barra de progreso de lectura (arriba) y botón "volver arriba" (abajo).
   */
  let progress = $state(0);
  let showTop = $state(false);

  function onScroll() {
    if (typeof window === 'undefined') return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progress = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    showTop = window.scrollY > 600;
  }
</script>

<svelte:window onscroll={onScroll} />

<div class="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
  <div
    class="h-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 shadow-[0_0_12px_rgba(255,120,20,0.9)] transition-[width] duration-150"
    style="width: {progress}%"
  ></div>
</div>

{#if showTop}
  <button
    type="button"
    onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Volver arriba"
    class="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f1627]/95 border border-orange-500/40 text-orange-400 shadow-xl shadow-black/40 backdrop-blur hover:bg-orange-600 hover:text-white hover:border-orange-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
  >
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
{/if}
