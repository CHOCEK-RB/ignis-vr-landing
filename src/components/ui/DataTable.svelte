<script>
  /**
   * Tabla densa y plegable. Se abre bajo demanda y muestra el número de filas
   * para que el lector decida si le interesa (principio de divulgación progresiva).
   */
  let { title = '', columns = [], rows = [], open = false, mono = false } = $props();
</script>

<details
  class="group rounded-2xl bg-[#0f1524] border border-slate-800 overflow-hidden"
  open={open}
>
  <summary
    class="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer select-none hover:bg-[#131a2b] transition-colors list-none [&::-webkit-details-marker]:hidden"
  >
    <span class="flex items-center gap-3">
      <span
        class="w-6 h-6 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs transition-transform group-open:rotate-90"
        >▶</span
      >
      <span class="text-sm sm:text-base font-bold text-white font-heading">{title}</span>
    </span>
    <span class="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md shrink-0">
      {rows.length} filas
    </span>
  </summary>

  <div class="overflow-x-auto border-t border-slate-800">
    <table class="w-full text-left text-xs sm:text-sm">
      <thead>
        <tr class="bg-[#0a0e18] text-orange-400/90">
          {#each columns as col (col)}
            <th class="px-4 py-3 font-mono font-semibold uppercase tracking-wider whitespace-nowrap">
              {col}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as row, i (i)}
          <tr class="border-t border-slate-800/70 hover:bg-[#141d33]/60 transition-colors">
            {#each row as cell, j (j)}
              <td
                class="px-4 py-2.5 align-top {j === 0
                  ? 'font-semibold text-white'
                  : 'text-slate-300'} {mono && j > 0 ? 'font-mono' : ''}"
              >
                {cell}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</details>
