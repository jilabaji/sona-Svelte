<script lang="ts">
    type StatusType = 'operational' | 'high-load' | 'balanced' | 'secure';

    type Props = {
        name: string;
        status: StatusType;
        statusLabel: string;
        metric: string;
        description: string;
    };

    let { name, status, statusLabel, metric, description }: Props = $props();

    const dotColors = {
        'operational': 'bg-green-400',
        'high-load': 'bg-amber-400',
        'balanced': 'bg-blue-400',
        'secure': 'bg-emerald-400'
    };
</script>

<div 
    class="bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 shadow-sm transition-all duration-200 hover:scale-[1.01] flex flex-col gap-4"
    role="article"
    aria-label="Status for {name}: {statusLabel}"
>
    <!-- Header: Name + Dot Status -->
    <div class="flex items-center justify-between">
        <span class="text-base font-medium text-slate-200">{name}</span>
        <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full {dotColors[status]}"></div>
            <span class="text-xs font-medium text-slate-500">{statusLabel}</span>
        </div>
    </div>

    <!-- Main Content: Metric + Description -->
    <div class="flex flex-col gap-1">
        <div class="text-2xl font-bold text-white tracking-tight">
            {metric}
        </div>
        <p class="text-sm text-slate-500 leading-relaxed mt-1">
            {description}
        </p>
    </div>
</div>
