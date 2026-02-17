<script lang="ts">
    type DataItem = { label: string; value: number; color: string };
    
    type Props = {
        data?: DataItem[];
        size?: number;
    };

    let { data = [], size = 180 }: Props = $props();

    let hasData = $derived(data && data.length > 0);
    let total = $derived(hasData ? data.reduce((acc, curr) => acc + curr.value, 0) : 0);
    
    function calculatePaths() {
        if (!hasData || total === 0) return [];
        let currentAngle = 0;
        return data.map(item => {
            const angle = (item.value / total) * 360;
            const startAngle = currentAngle;
            currentAngle += angle;
            
            const startRad = (startAngle - 90) * Math.PI / 180;
            const endRad = (currentAngle - 90) * Math.PI / 180;
            
            const x1 = 50 + 40 * Math.cos(startRad);
            const y1 = 50 + 40 * Math.sin(startRad);
            const x2 = 50 + 40 * Math.cos(endRad);
            const y2 = 50 + 40 * Math.sin(endRad);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            return {
                d: `M ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                color: item.color,
                label: item.label,
                value: item.value,
                percentage: Math.round((item.value / total) * 100)
            };
        });
    }

    let paths = $derived(calculatePaths());
</script>

<div class="flex flex-col md:flex-row items-center gap-10 py-4 w-full justify-center lg:justify-start min-h-[220px]">
    {#if hasData && total > 0}
        <!-- Chart (Muted segments) -->
        <div class="relative" style="width: {size}px; height: {size}px;">
            <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
                {#each paths as path}
                    <path 
                        d={path.d} 
                        fill="none" 
                        stroke={path.color} 
                        stroke-width="12" 
                        stroke-linecap="butt"
                        stroke-opacity="0.8"
                        class="transition-all duration-300 cursor-default hover:stroke-opacity-100"
                    />
                {/each}
            </svg>
            
            <!-- Center Hole Info -->
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span class="text-3xl font-bold text-white leading-none tracking-tight">{total}</span>
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Total</span>
            </div>
        </div>

        <!-- Legend (Clean/Neutral) -->
        <div class="flex flex-col gap-4 min-w-[160px]">
            {#each paths as path}
                <div class="flex items-center justify-between gap-6 group cursor-default">
                    <div class="flex items-center gap-3">
                        <div class="w-2.5 h-2.5 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity" style="background-color: {path.color}"></div>
                        <span class="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-wider">{path.label}</span>
                    </div>
                    <span class="text-[10px] font-bold text-slate-500 font-mono tracking-tighter">{path.percentage}%</span>
                </div>
            {/each}
        </div>
    {:else}
        <div class="w-full flex items-center justify-center border border-slate-700/20 rounded-lg bg-slate-900/40 py-12">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-widest">No data available</p>
        </div>
    {/if}
</div>
