<script>
  import { socialLinks, gameInfo } from '../data/gameData.js';

  let emailInput = $state('');
  let subscribed = $state(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (emailInput.trim()) {
      subscribed = true;
      emailInput = '';
    }
  }

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>

<footer class="relative bg-[#05070b] border-t border-slate-850 pt-20 pb-12 overflow-hidden">
  <!-- Brillo sutil de fondo -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-48 bg-gradient-to-t from-orange-600/10 to-transparent blur-3xl pointer-events-none"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-850">
      
      <!-- Columna 1: Info del Juego & Marca -->
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-0.5 shadow-md shadow-orange-600/30">
            <div class="w-full h-full bg-[#0d111a] rounded-[10px] flex items-center justify-center text-orange-400">
              🔥
            </div>
          </div>
          <span class="text-2xl font-black text-white font-heading tracking-wider">
            {gameInfo.title} VR
          </span>
        </div>

        <p class="text-slate-400 text-sm mt-4 leading-relaxed max-w-sm">
          {gameInfo.tagline} Encerrado en una fábrica en llamas, domina las debilidades del fuego y sobrevive en la experiencia VR definitiva.
        </p>

        <!-- Redes Sociales con Iconos -->
        <div class="flex items-center gap-3 mt-6">
          {#each socialLinks as social (social.name)}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-[#0f1422] border border-slate-800 hover:border-orange-500/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600/20 transition-all hover:scale-110"
              aria-label={social.name}
            >
              {#if social.icon === 'steam'}
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15.5l-2.4-1.39a2.5 2.5 0 0 1-1.1.26 2.5 2.5 0 1 1 2.5-2.5c0 .32-.07.62-.18.89l2.4 1.39c.67-.37 1.44-.59 2.26-.59a4.5 4.5 0 1 1 4.5 4.5c0-.43-.07-.84-.19-1.22l-2.65-1.53c-.34.16-.72.25-1.12.25a2.5 2.5 0 1 1 2.5-2.5c0 .37-.08.72-.22 1.03l2.67 1.54C21.43 19.34 22 15.9 22 12c0-5.52-4.48-10-10-10z"/></svg>
              {:else if social.icon === 'youtube'}
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              {:else}
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              {/if}
            </a>
          {/each}
        </div>
      </div>

      <!-- Columna 2: Navegación Rápida -->
      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
          Navegación
        </h4>
        <ul class="space-y-2.5 text-sm text-slate-400">
          <li><a href="#hero" class="hover:text-orange-400 transition-colors">Inicio</a></li>
          <li><a href="#historia" class="hover:text-orange-400 transition-colors">Historia & Lore</a></li>
          <li><a href="#personajes" class="hover:text-orange-400 transition-colors">Personajes y Arsenal</a></li>
          <li><a href="#galeria" class="hover:text-orange-400 transition-colors">Galería In-Game</a></li>
          <li><a href="#testimonios" class="hover:text-orange-400 transition-colors">Experiencia de Jugadores</a></li>
        </ul>
      </div>

      <!-- Columna 3: Contacto & Prensa -->
      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
          Contacto & Soporte
        </h4>
        <ul class="space-y-2.5 text-sm text-slate-400">
          <li class="flex items-center gap-2">
            <span class="text-orange-400">✉️</span>
            <span class="text-slate-300">contacto@ignisvr.game</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-orange-400">🎮</span>
            <span class="text-slate-300">soporte@ignisvr.game</span>
          </li>
          <li class="mt-4">
            <span class="text-xs text-slate-400">Fábrica Industrial Central, Nivel 03</span>
          </li>
        </ul>
      </div>

      <!-- Columna 4: Suscripción a la Beta -->
      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4">
          Recibe Clave de Acceso
        </h4>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
          Inscríbete para ser el primero en recibir novedades de desarrollo y acceso a la versión Alpha.
        </p>

        {#if subscribed}
          <div class="p-3 rounded-xl bg-orange-950/60 border border-orange-500/50 text-orange-300 text-xs font-semibold">
            ¡Suscripción exitosa! Te enviaremos tu clave pronto.
          </div>
        {:else}
          <form onsubmit={handleSubscribe} class="flex flex-col gap-2">
            <input
              type="email"
              bind:value={emailInput}
              required
              placeholder="tu.correo@ejemplo.com"
              class="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1422] border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button
              type="submit"
              class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-600/30 transition-all hover:scale-102"
            >
              Registrarme
            </button>
          </form>
        {/if}
      </div>

    </div>

    <!-- Barra Inferior de Copyright y Volver Arriba -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
      <p>
        © 2026 <strong class="text-slate-300">Ignis Interactive VR</strong>. Todos los derechos reservados. Basado en la historia de Carlos y el monstruo de fuego.
      </p>

      <button
        type="button"
        onclick={scrollToTop}
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0f1524] border border-slate-800 hover:border-orange-500/40 text-slate-300 hover:text-white transition-all hover:scale-105"
      >
        <span>Volver arriba</span>
        <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </div>
  </div>
</footer>
