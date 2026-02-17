<script lang="ts">
	import Sidebar from './Sidebar.svelte';
    import TopBar from './TopBar.svelte';
	let { children, actions, title } = $props();
</script>

<div class="flex min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
	<!-- Sidebar: Fixed width on desktop -->
	<Sidebar />
	
	<!-- Main Content Area -->
	<main class="flex-1 lg:ml-64 transition-all duration-300 min-h-screen flex flex-col">
        <!-- Persistent Global Header -->
        <TopBar {title}>
            {#if actions}
                {@render actions()}
            {/if}
        </TopBar>
        
        <!-- Content Container -->
		<div class="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-10">
			{@render children()}
		</div>
	</main>
</div>
