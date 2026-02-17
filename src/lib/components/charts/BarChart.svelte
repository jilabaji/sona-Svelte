<script lang="ts">
    type DataPoint = { label: string; value: number };
    
    type Props = {
        data?: DataPoint[];
        color?: string;
        height?: number;
    };

    let { data = [], color = "#6366F1", height = 200 }: Props = $props();

    let hasData = $derived(data && data.length > 0);
    let maxValue = $derived(hasData ? Math.max(...data.map(d => d.value), 10) : 10);
</script>

<div class="w-full flex flex-col gap-4">
    {#if hasData}
        <div class="flex items-end justify-between w-full gap-3" style="height: {height}px;">
            {#each data as d}
                {@const percentage = (d.value / maxValue) * 100}
                <div class="flex-1 flex flex-col items-center gap-3 group">
                    <div class="relative w-full flex flex-col justify-end h-full">
                        <!-- Value Tooltip (Clean) -->
                        <span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 px-2 py-0.5 rounded border border-slate-700/40 pointer-events-none z-10 shadow-sm">{d.value}</span>
                        
                        <!-- Bar (Flat/Muted) -->
                        <div 
                            class="w-full rounded-t-sm transition-all duration-300 ease-out bg-opacity-80 group-hover:bg-opacity-100"
                            style="height: {percentage}%; background-color: {color};"
                        ></div>
                    </div>
                    <span class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest truncate w-full text-center">{d.label}</span>
                </div>
            {/each}
        </div>
    {:else}
        <div class="w-full flex items-center justify-center border border-slate-700/20 rounded-lg bg-slate-900/40" style="height: {height}px;">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-widest">No data available</p>
        </div>
    {/if}
</div>
