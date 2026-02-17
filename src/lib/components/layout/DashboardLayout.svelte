<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
	<!-- Sidebar: Fixed width on desktop -->
	<Sidebar />
	
	<!-- Main Content Area -->
	<main class="flex-1 lg:ml-64 transition-all duration-300 min-h-screen overflow-x-hidden">
		<div class="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-10">
			{@render children()}
		</div>
	</main>
</div>
