<script lang="ts">
    type DataPoint = { label: string; value: number };
    
    type Props = {
        data: DataPoint[];
        title: string;
        color?: string;
        className?: string;
    };

    let { data, title, color = '#6366f1', className = '' }: Props = $props();

    // Simple SVG path calculation for a line chart
    let points = $derived(data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - d.value;
        return `${x},${y}`;
    }).join(' '));

    let areaPath = $derived(`M 0,100 L ${points} L 100,100 Z`);
</script>

<div class="flex flex-col gap-4 {className}">
    <div class="flex justify-between items-end">
        <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{title}</span>
        <span class="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded-md border border-white/5">{data[data.length-1].value}%</span>
    </div>

    <div class="h-24 w-full relative">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full overflow-visible">
            <!-- Area Fill -->
            <path 
                d={areaPath} 
                fill="url(#gradient-{title.replace(/\s+/g, '')})" 
                fill-opacity="0.1" 
            />
            
            <!-- Line -->
            <polyline 
                points={points} 
                fill="none" 
                stroke={color} 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                class="drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
            />

            <!-- Definitions for gradient -->
            <defs>
                <linearGradient id="gradient-{title.replace(/\s+/g, '')}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color={color} />
                    <stop offset="100%" stop-color={color} stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

        <!-- Tooltip/Point effect on last item -->
        <div 
            class="absolute right-0 top-0 w-2 h-2 rounded-full border-2 border-slate-900 shadow-xl"
            style="background-color: {color}; transform: translateY({100 - data[data.length-1].value}%); margin-top: -4px; margin-right: -4px;"
        ></div>
    </div>
</div>
