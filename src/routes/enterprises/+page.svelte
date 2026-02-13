<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import EnterpriseTable from '$lib/components/tables/EnterpriseTable.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Partner Enterprises | RoboCare Admin</title>
</svelte:head>

<DashboardLayout>
	<Header>
		<Button>
			<span class="btn-icon">+</span>
			Add Enterprise
		</Button>
	</Header>

	<div class="content-body">
		<section class="page-intro">
			<h1 class="page-title">Partner Enterprises</h1>
			<p class="page-subtitle">Manage care home accounts and their robot allocations.</p>
		</section>

		<EnterpriseTable />
	</div>
</DashboardLayout>

<style>
	.page-title {
		font-size: 2rem;
		font-weight: 700;
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
