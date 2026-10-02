<script>
  /**
   * Capa decorativa de brasas flotantes.
   *
   * Por defecto se fija a la ventana (`fixed`) para que las brasas recorran
   * toda la página mientras se hace scroll. Se puede incrustar dentro de una
   * sección con `fixed={false}`.
   *
   * Las posiciones son deterministas (no usa `Math.random`) para que el
   * render sea estable entre recargas.
   */
  let { count = 20, fixed = true, class: klass = '', opacity = 0.75 } = $props();

  const palettes = [
    { color: '#ff8c1a', glow: 'rgba(255, 140, 26, 0.85)' },
    { color: '#ff4d00', glow: 'rgba(255, 77, 0, 0.85)' },
    { color: '#ffc266', glow: 'rgba(255, 194, 102, 0.85)' },
    { color: '#ffb703', glow: 'rgba(255, 183, 3, 0.8)' },
  ];

  /** Ruido determinista en [0, 1) a partir de una semilla entera. */
  function noise(seed) {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  const embers = $derived(
    Array.from({ length: count }, (_, i) => {
      const palette = palettes[Math.floor(noise(i + 31) * palettes.length)];
      return {
        id: i,
        left: noise(i + 1) * 100,
        size: 2 + noise(i + 7) * 4,
        duration: 9 + noise(i + 13) * 13,
        delay: -noise(i + 19) * 22,
        drift: (noise(i + 23) - 0.5) * 70,
        ...palette,
      };
    }),
  );
</script>

<div
  aria-hidden="true"
  class="{fixed ? 'fixed' : 'absolute'} inset-0 z-30 overflow-hidden pointer-events-none mix-blend-screen {klass}"
>
  {#each embers as ember (ember.id)}
    <span
      class="ember-particle"
      style="
        left: {ember.left}%;
        width: {ember.size}px;
        height: {ember.size}px;
        background: {ember.color};
        box-shadow: 0 0 8px 1px {ember.glow};
        --ember-drift: {ember.drift}px;
        --ember-opacity: {opacity};
        animation-duration: {ember.duration}s;
        animation-delay: {ember.delay}s;
      "
    ></span>
  {/each}
</div>
