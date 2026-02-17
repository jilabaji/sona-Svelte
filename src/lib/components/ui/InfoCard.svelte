<script lang="ts">
    import Card from './Card.svelte';

    type Props = {
        title: string;
        icon?: any;
        children: any;
        className?: string;
    };

    let { title, icon, children, className = '' }: Props = $props();
</script>

<Card className="p-6 md:p-8 flex flex-col gap-6 {className}" hover>
    <div class="flex items-center justify-between border-b border-white/5 pb-4">
        <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            {#if icon}
                {@render icon()}
            {/if}
            {title}
        </h3>
    </div>
    
    <div class="flex-1">
        {@render children()}
    </div>
</Card>
