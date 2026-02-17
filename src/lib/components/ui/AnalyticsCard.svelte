<script lang="ts">
    type Props = {
        title: string;
        subtitle?: string;
        children?: any;
        className?: string;
        icon?: any;
        showBadge?: boolean;
    };

    let { title, subtitle, children, className = '', icon: Icon, showBadge = false }: Props = $props();
</script>

<div class="bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 shadow-sm flex flex-col gap-8 {className}">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/10 pb-5">
        <div class="flex flex-col gap-1">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2.5">
                {#if Icon}
                    <span class="text-slate-500">{@html Icon}</span>
                {/if}
                {title}
            </h3>
            {#if subtitle}
                <p class="text-[11px] font-medium text-slate-500">{subtitle}</p>
            {/if}
        </div>
        
        {#if showBadge}
            <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Active Insight</span>
            </div>
        {/if}
    </div>
    
    <div class="flex-1 min-h-0">
        {@render children?.()}
    </div>
</div>
