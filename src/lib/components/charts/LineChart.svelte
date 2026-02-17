<script lang="ts">
    type DataPoint = { label: string; value: number };
    
    type Props = {
        data?: DataPoint[];
        color?: string;
        height?: number;
        showLabels?: boolean;
    };

    let { 
        data = [], 
        color = "#6366F1", 
        height = 240, 
        showLabels = true 
    }: Props = $props();

    // Safe derived values with fallbacks
    let hasData = $derived(data && data.length > 0);
    
    let maxValue = $derived(hasData ? Math.max(...data.map(d => d.value), 10) : 10);
    
    let points = $derived(hasData ? data.map((d, i) => ({
        x: data.length > 1 ? (i / (data.length - 1)) * 100 : 50,
        y: 100 - (d.value / maxValue) * 100
    })) : []);

    let pathData = $derived(points.length > 0 ? `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}` : '');
    let areaData = $derived(points.length > 0 ? `${pathData} L ${points[points.length - 1].x},100 L 0,100 Z` : '');
</script>

<div class="w-full flex flex-col gap-4">
    {#if hasData}
        <div class="relative w-full" style="height: {height}px;">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full overflow-visible">
                <!-- Professional Grid Lines - Quiet -->
                <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(148,163,184,0.05)" stroke-width="0.1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(148,163,184,0.05)" stroke-width="0.1" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(148,163,184,0.05)" stroke-width="0.1" />
                
                {#if points.length > 0}
                    <!-- Area Fill (Subtle) -->
                    <path d={areaData} fill={color} fill-opacity="0.08" />
                    
                    <!-- Line Path (Clean) -->
                    <path d={pathData} fill="none" stroke={color} stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                    
                    <!-- Data Points (Minimal) -->
                    {#each points as point}
                        <circle cx={point.x} cy={point.y} r="0.8" fill={color} stroke="#020617" stroke-width="0.5" class="hover:r-1.5 transition-all duration-200 cursor-pointer" />
                    {/each}
                {/if}
            </svg>
        </div>

        {#if showLabels && data.length > 0}
            <div class="flex justify-between w-full px-1">
                {#each data as d}
                    <span class="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">{d.label}</span>
                {/each}
            </div>
        {/if}
    {:else}
        <div class="w-full flex items-center justify-center border border-slate-700/20 rounded-lg bg-slate-900/40" style="height: {height}px;">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-widest">No data available</p>
        </div>
    {/if}
</div>
