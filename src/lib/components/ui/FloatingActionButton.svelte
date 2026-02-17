<script lang="ts">
    import { scale, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    type Props = {
        onclick: () => void;
        label?: string;
        icon?: any;
    };

    let { onclick, label = "Add New", icon }: Props = $props();
</script>

<button 
    {onclick}
    class="sm:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full shadow-[0_8px_25px_rgba(99,102,241,0.5)] flex items-center justify-center transition-all active:scale-90 hover:scale-110 group overflow-hidden"
    transition:fly={{ y: 100, duration: 400, easing: quintOut }}
    aria-label={label}
>
    <!-- Background highlight -->
    <div class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    {#if icon}
        {@render icon()}
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    {/if}
</button>
