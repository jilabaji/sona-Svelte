<script lang="ts">
    type Props = {
        label: string;
        value: string | number;
        trend?: string;
        trendType?: 'success' | 'danger' | 'info' | 'neutral';
        icon: any;
        className?: string;
    };

    let { label, value, trend, trendType = 'neutral', icon: Icon, className = '' }: Props = $props();

    const trendColors = {
        success: 'text-green-400 bg-green-400/5 border-green-400/10',
        danger: 'text-red-400 bg-red-400/5 border-red-400/10',
        info: 'text-blue-400 bg-blue-400/5 border-blue-400/10',
        neutral: 'text-slate-500 bg-slate-500/5 border-slate-500/10'
    };
</script>

<div class="bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 shadow-sm hover:scale-[1.01] transition-all duration-200 {className} group">
    <div class="flex justify-between items-start mb-6">
        <div class="flex flex-col gap-1.5">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
            <div class="text-3xl font-bold text-white tracking-tight">
                {value}
            </div>
        </div>
        <div class="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40 text-slate-500 group-hover:text-indigo-400 transition-colors">
            {@html Icon}
        </div>
    </div>
    
    {#if trend}
        <div class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border {trendColors[trendType]}">
            {trend}
        </div>
    {:else}
        <div class="h-5"></div>
    {/if}
</div>
