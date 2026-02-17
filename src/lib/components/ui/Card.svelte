<script lang="ts">
    type Props = {
        className?: string;
        children?: any;
        hover?: boolean;
    };

    let { className = '', children, hover = false }: Props = $props();
</script>

<div 
    class="bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 px-6 py-8 sm:px-8 sm:py-10 shadow-2xl {hover ? 'hover:bg-slate-900/80 hover:border-white/10' : ''} {className}"
>
    {@render children?.()}
</div>
