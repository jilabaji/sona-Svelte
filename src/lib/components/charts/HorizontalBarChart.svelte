<script lang="ts">
    type DataPoint = { label: string; value: number };
    
    type Props = {
        data?: DataPoint[];
        maxValue?: number;
    };

    let { data = [], maxValue: customMaxValue }: Props = $props();

    let hasData = $derived(data && data.length > 0);
    let computedMaxValue = $derived(hasData ? Math.max(...data.map(d => d.value), customMaxValue || 0) : 10);
    
    let mounted = $state(false);
    $effect(() => {
        if (hasData) {
            const timer = setTimeout(() => mounted = true, 100);
            return () => clearTimeout(timer);
        }
    });
</script>

<div class="flex flex-col gap-6 w-full" role="list" aria-label="Enterprise Robot Distribution">
    {#if hasData}
        {#each data as item}
            {@const percentage = (item.value / computedMaxValue) * 100}
            <div class="space-y-2 group cursor-default" role="listitem">
                <div class="flex justify-between items-end">
                    <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">{item.label}</span>
                    <span class="text-xs font-bold text-white tracking-tight">{item.value} Robots</span>
                </div>
                <div class="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                    <div 
                        class="h-full bg-indigo-600 rounded-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) opacity-80 group-hover:opacity-100"
                        style="width: {mounted ? percentage : 0}%"
                        aria-label="{item.label}: {item.value} robots"
                    ></div>
                </div>
            </div>
        {/each}
    {:else}
        <div class="w-full flex items-center justify-center border border-slate-700/20 rounded-lg bg-slate-900/40 py-8">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-widest">No data available</p>
        </div>
    {/if}
</div>
