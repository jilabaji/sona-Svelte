<script lang="ts">
    type Props = {
        value: number;
        label?: string;
        color?: string; // Expecting a tailwind bg class like 'bg-indigo-600'
        showValue?: boolean;
        className?: string;
    };

    let { 
        value, 
        label = '', 
        color = 'bg-indigo-600', 
        showValue = true,
        className = '' 
    }: Props = $props();

    let roundedValue = $derived(Math.min(Math.max(value, 0), 100));
</script>

<div class="w-full space-y-2.5 {className}">
    <div class="flex justify-between items-center">
        {#if label}
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        {/if}
        {#if showValue}
            <span class="text-[11px] font-bold text-slate-400">{roundedValue}%</span>
        {/if}
    </div>
    <div class="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/20">
        <div 
            class="h-full rounded-full {color} transition-all duration-700 ease-out opacity-90"
            style="width: {roundedValue}%"
        ></div>
    </div>
</div>
