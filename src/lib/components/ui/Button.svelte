<script lang="ts">
    type Props = {
        type?: 'button' | 'submit' | 'reset';
        variant?: 'primary' | 'secondary' | 'ghost';
        disabled?: boolean;
        loading?: boolean;
        className?: string;
        onclick?: (e: MouseEvent) => void;
        children?: any;
    };

    let { 
        type = 'button', 
        variant = 'primary', 
        disabled = false, 
        loading = false, 
        className = '',
        onclick,
        children
    }: Props = $props();

    const variants = {
        primary: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0',
        secondary: 'bg-slate-400/10 text-slate-200 backdrop-blur-md border border-slate-400/20 hover:bg-slate-400/20 hover:border-slate-400/30',
        ghost: 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-400/5'
    };
</script>

<button
    {type}
    disabled={disabled || loading}
    class="inline-flex items-center justify-center h-12 px-6 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full relative overflow-hidden gap-2 {variants[variant]} {className}"
    {onclick}
>
    {#if loading}
        <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
    {:else}
        {@render children?.()}
    {/if}
</button>
