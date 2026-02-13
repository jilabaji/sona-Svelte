<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	let { children } = $props();
</script>

<div class="dashboard-layout">
	<Sidebar />
	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.dashboard-layout {
		display: flex;
		min-height: 100vh;
		background: linear-gradient(135deg, #020617 0%, #0b1220 50%, #0f172a 100%);
		position: relative;
	}

	.main-content {
		flex-grow: 1;
		margin-left: 240px;
		padding: 32px 48px;
		min-height: 100vh;
	}

	@media (max-width: 1024px) {
		.main-content {
			margin-left: 80px;
		}
	}

	@media (max-width: 768px) {
		.main-content {
			margin-left: 0;
			padding: 24px;
		}
	}
</style>
