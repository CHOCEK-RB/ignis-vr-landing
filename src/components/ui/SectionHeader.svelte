<script>
  import { reveal } from '../../actions/reveal.js';

  let { badge = '', title = '', highlight = '', subtitle = '' } = $props();
</script>

<div class="text-center max-w-3xl mx-auto mb-16" use:reveal>
  {#if badge}
    <div
      class="section-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4"
    >
      <span class="badge-ember"></span>
      <span>{badge}</span>
    </div>
  {/if}

  <h2 class="text-4xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
    {title}{#if highlight}<span class="section-highlight">&nbsp;{highlight}</span>{/if}
  </h2>

  {#if subtitle}
    <p class="text-slate-300 mt-4 text-base sm:text-lg">{subtitle}</p>
  {/if}

  <span class="section-rule" aria-hidden="true"></span>
</div>
