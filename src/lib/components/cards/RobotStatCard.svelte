<script lang="ts">
    import Card from '../ui/Card.svelte';
    import Badge from '../ui/Badge.svelte';

    type Props = {
        label: string;
        value: string | number;
        trend?: string;
        trendType?: 'success' | 'danger' | 'info' | 'neutral';
        icon: string;
        className?: string;
    };

    let { label, value, trend, trendType = 'neutral', icon, className = '' }: Props = $props();
</script>

<Card className="p-6 group relative h-full flex flex-col justify-between" hover>
    <div class="flex justify-between items-start mb-4">
        <span class="text-[13px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        <div class="w-10 h-10 flex items-center justify-center bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
            {@html icon}
        </div>
    </div>
    
    <div class="flex items-end justify-between">
        <div class="text-3xl font-extrabold text-white tracking-tight">{value}</div>
        {#if trend}
            <Badge variant={trendType} className="mb-0.5">
                {trend}
            </Badge>
        {/if}
    </div>

    <!-- Subtle background effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/[0.03] group-hover:to-purple-500/[0.03] transition-all duration-300 pointer-events-none rounded-2xl"></div>
</Card>
