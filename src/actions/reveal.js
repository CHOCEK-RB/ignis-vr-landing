/**
 * Acción de Svelte: revela un elemento cuando entra en el viewport.
 *
 * Añade la clase `reveal-init` al montar (el CSS la deja oculta) y la clase
 * `is-visible` cuando el elemento se cruza en pantalla, lo que dispara la
 * transición definida en `src/app.css`.
 *
 * - Respeta `prefers-reduced-motion`: en ese caso el elemento se muestra de
 *   inmediato, sin movimiento.
 * - Si el navegador no soporta IntersectionObserver, también se muestra ya.
 *
 * Uso:
 *   <div use:reveal>…</div>
 *   <div use:reveal={{ delay: 120 }}>…</div>
 */
export function reveal(node, options = {}) {
  const {
    delay = 0,
    threshold = 0.15,
    rootMargin = '0px 0px -8% 0px',
    once = true,
    distance = 22,
  } = options;

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  if (reduceMotion || typeof IntersectionObserver === 'undefined') {
    node.classList.add('is-visible');
    return {};
  }

  node.classList.add('reveal-init');
  node.style.setProperty('--reveal-delay', `${delay}ms`);
  node.style.setProperty('--reveal-distance', `${distance}px`);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('is-visible');
        }
      }
    },
    { threshold, rootMargin },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
