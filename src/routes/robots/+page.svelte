<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import RobotTable from '$lib/components/tables/RobotTable.svelte';
	import RegisterRobotModal from '$lib/components/modals/RegisterRobotModal.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let showAddModal = $state(false);
</script>

<svelte:head>
	<title>Fleet Management | RoboCare Admin</title>
</svelte:head>

<DashboardLayout>
	<Header>
		<Button onclick={() => showAddModal = true}>
			<span class="btn-icon">+</span>
			Add Robot
		</Button>
	</Header>

	<div class="content-body">
		<section class="page-intro">
			<h1 class="page-title">Fleet Management</h1>
			<p class="page-subtitle">Monitor and manage all care robots in service.</p>
		</section>

		<RobotTable />
	</div>
</DashboardLayout>

<RegisterRobotModal bind:isOpen={showAddModal} />

<style>
	.page-title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 8px;
		letter-spacing: -0.01em;
	}

	.page-subtitle {
		font-size: 1rem;
		color: #94a3b8;
		margin-bottom: 40px;
	}

	.btn-icon {
		font-size: 1.2rem;
		line-height: 1;
	}
</style>
