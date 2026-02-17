<script lang="ts">
    import Sidebar from './Sidebar.svelte';
    import TopBar from './TopBar.svelte';
    import { closeSidebar } from '$lib/stores/ui.store';

    let { children, actions, title } = $props();

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') closeSidebar();
    }
</script>

<div 
    class="flex min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden w-full max-w-full"
    onkeydown={handleKeyDown}
    role="none"
>
	<!-- Sidebar: Fixed width on desktop, drawer on mobile -->
	<Sidebar />
	
	<!-- Main Content Area -->
	<main class="flex-1 lg:ml-64 transition-all duration-300 min-h-screen flex flex-col min-w-0 overflow-hidden">
        <!-- Persistent Global Header -->
        <TopBar {title}>
            {#if actions}
                {@render actions()}
            {/if}
        </TopBar>
        
        <!-- Content Container -->
		<div class="flex-1 w-full max-w-[1800px] mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 min-w-0">
			{@render children()}
		</div>
	</main>
</div>
