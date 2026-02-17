<script lang="ts">
    type Props = {
        className?: string;
        children?: any;
    };

    let { className = '', children }: Props = $props();
</script>

<div class="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[20px] p-6 sm:p-10 w-full max-w-[420px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] {className}">
    {@render children?.()}
</div>
