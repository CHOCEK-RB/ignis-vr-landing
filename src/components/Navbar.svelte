<script>
  import { slide, fade } from 'svelte/transition';
  import { navLinks, gameInfo } from '../data/gameData.js';

  let isMobileMenuOpen = $state(false);
  let isScrolled = $state(false);

  function handleScroll() {
    if (typeof window !== 'undefined') {
      isScrolled = window.scrollY > 40;
    }
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<svelte:window onscroll={handleScroll} />

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
    ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg shadow-black/50 py-3'
    : 'bg-gradient-to-b from-[#07090e]/90 to-transparent py-5'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between">
      <!-- Logo y Título -->
      <a
        href="#hero"
        class="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
        onclick={closeMobileMenu}
      >
        <div class="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-0.5 shadow-md shadow-orange-600/30 group-hover:shadow-orange-500/50">
          <div class="w-full h-full bg-[#0d111a] rounded-[10px] flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-500 group-hover:text-yellow-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C10.5 4.5 9 6.5 9 9.5C9 10.8 9.5 12 10.3 12.9C8.3 12.1 7 10.2 7 8C5 10 4 12.8 4 15.5C4 19.1 7.1 22 11 22C16 22 19 18.5 19 14.5C19 9.5 15.5 6 12 2Z"/>
            </svg>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-2xl font-extrabold tracking-wider text-white font-heading group-hover:text-orange-400 transition-colors">
            {gameInfo.title}
          </span>
          <span class="text-[10px] font-semibold uppercase tracking-widest text-orange-400/80 -mt-1">
            VR Experience
          </span>
        </div>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30"
          >
            {link.label}
          </a>
        {/each}
      </nav>



      <!-- Botón Hamburguesa Móvil -->
      <div class="flex md:hidden">
        <button
          type="button"
          aria-label="Abrir menú de navegación"
          onclick={toggleMobileMenu}
          class="p-2.5 rounded-xl bg-[#141b29] border border-orange-500/30 text-slate-200 hover:text-white hover:border-orange-400 transition-colors"
        >
          {#if isMobileMenuOpen}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Menú Desplegable Móvil -->
  {#if isMobileMenuOpen}
    <div
      transition:slide={{ duration: 250 }}
      class="md:hidden bg-[#0a0e17]/98 border-b border-orange-500/30 px-5 pt-3 pb-6 shadow-2xl backdrop-blur-xl"
    >
      <div class="flex flex-col gap-2">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            onclick={closeMobileMenu}
            class="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-orange-500/10 transition-colors border border-transparent hover:border-orange-500/20"
          >
            {link.label}
          </a>
        {/each}

      </div>
    </div>
  {/if}
</header>
