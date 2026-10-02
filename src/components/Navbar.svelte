<script>
  import { slide } from 'svelte/transition';
  import { gameInfo } from '../data/gameData.js';
  import { navGroups } from '../data/docsData.js';

  const allLinks = navGroups.flatMap((g) => g.links);

  let isMobileMenuOpen = $state(false);
  let isScrolled = $state(false);
  let activeHref = $state(allLinks[0]?.href ?? '#hero');
  let openMobileGroup = $state('');

  let activeGroup = $derived(
    navGroups.find((g) => g.links.some((l) => l.href === activeHref))?.label ?? navGroups[0].label
  );

  function handleScroll() {
    if (typeof window === 'undefined') return;
    isScrolled = window.scrollY > 40;
    const offset = 140;
    let current = allLinks[0]?.href ?? '#hero';
    for (const link of allLinks) {
      const el = document.getElementById(link.href.slice(1));
      if (el && el.getBoundingClientRect().top <= offset) current = link.href;
    }
    activeHref = current;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  function toggleMobileGroup(label) {
    openMobileGroup = openMobileGroup === label ? '' : label;
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
            <svg class="w-6 h-6 animate-flame-flicker text-orange-500 group-hover:text-yellow-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
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

      <!-- Navegación Desktop agrupada -->
      <nav class="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Navegación principal">
        {#each navGroups as group (group.label)}
          <div class="relative group">
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 border border-transparent {activeGroup === group.label
                ? 'nav-group-active text-white bg-orange-500/15 border-orange-500/30'
                : 'text-slate-300 hover:text-white hover:bg-orange-500/10 hover:border-orange-500/30'}"
            >
              <span class="text-[10px] text-orange-400">{group.icon}</span>
              {group.label}
              <span class="text-[8px] text-slate-500 group-hover:rotate-180 transition-transform">▼</span>
            </button>
            <div
              class="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-2 w-56"
            >
              <div class="rounded-xl bg-[#0d1119]/98 backdrop-blur-md border border-orange-500/25 shadow-2xl shadow-black/60 p-2">
                {#each group.links as link (link.href)}
                  <a
                    href={link.href}
                    class="block px-3 py-2 rounded-lg text-sm transition-colors {activeHref === link.href
                      ? 'text-orange-300 bg-orange-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'}"
                  >
                    {link.label}
                  </a>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </nav>

      <!-- Acceso móvil: sección activa + botón hamburguesa -->
      <div class="flex md:hidden items-center gap-2.5">
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-orange-400/90 max-w-[8rem] truncate"
        >
          {activeGroup}
        </span>
        <button
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={isMobileMenuOpen}
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

  <!-- Menú Desplegable Móvil (acordeón por grupo) -->
  {#if isMobileMenuOpen}
    <div
      transition:slide={{ duration: 250 }}
      class="md:hidden bg-[#0a0e17]/98 border-b border-orange-500/30 px-5 pt-3 pb-6 shadow-2xl backdrop-blur-xl max-h-[75vh] overflow-y-auto"
    >
      <div class="flex flex-col gap-2">
        {#each navGroups as group (group.label)}
          <div class="border border-slate-800/80 rounded-xl overflow-hidden">
            <button
              type="button"
              onclick={() => toggleMobileGroup(group.label)}
              aria-expanded={openMobileGroup === group.label}
              class="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
            >
              <span class="flex items-center gap-2">
                <span class="text-xs text-orange-400">{group.icon}</span>
                {group.label}
              </span>
              <span class="text-orange-400 transition-transform {openMobileGroup === group.label ? 'rotate-180' : ''}">▾</span>
            </button>
            {#if openMobileGroup === group.label}
              <div class="bg-[#0d1119] border-t border-slate-800/80 p-1.5">
                {#each group.links as link (link.href)}
                  <a
                    href={link.href}
                    onclick={closeMobileMenu}
                    class="block px-3 py-2.5 rounded-lg text-sm transition-colors {activeHref === link.href
                      ? 'text-orange-300 bg-orange-500/10'
                      : 'text-slate-300 hover:text-orange-400 hover:bg-orange-500/10'}"
                  >
                    {link.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <span class="nav-heat" aria-hidden="true"></span>
</header>
