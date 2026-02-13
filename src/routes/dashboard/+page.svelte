<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import LineChart from '$lib/components/charts/LineChart.svelte';

	const stats = [
		{ label: 'Total Robots', value: '124', trend: '+12%', trendClass: 'success' },
		{ label: 'Active Enterprises', value: '18', trend: '+2', trendClass: 'success' },
		{ label: 'Uptime Rate', value: '99.9%', trend: 'Optimal', trendClass: 'neutral' },
		{ label: 'Maintenance Alerts', value: '3', trend: '-40%', trendClass: 'danger' }
	];
</script>

<svelte:head>
	<title>Dashboard | RoboCare Admin</title>
</svelte:head>

<DashboardLayout>
	<Header />

	<div class="content-body">
		<section class="page-intro">
			<h1 class="page-title">Dashboard Overview</h1>
			<p class="page-subtitle">Welcome back. Monitoring fleet status and enterprise performance.</p>
		</section>

		<!-- Stats Cards Row -->
		<div class="stats-row">
			{#each stats as stat}
				<div class="stat-card">
					<div class="stat-header">
						<span class="stat-label">{stat.label}</span>
						<div class="stat-badge {stat.trendClass}">
							{stat.trend}
						</div>
					</div>
					<div class="stat-value">{stat.value}</div>
					<div class="stat-glass-effect"></div>
				</div>
			{/each}
		</div>

		<!-- Chart Section -->
		<div class="charts-row">
			<BarChart />
			<LineChart />
		</div>
	</div>
</DashboardLayout>

<style>
	/* Stats Row */
	.stats-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
		margin-bottom: 40px;
	}

	.stat-card {
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 18px;
		padding: 24px;
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.stat-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.stat-label {
		font-size: 0.875rem;
		color: #94a3b8;
		font-weight: 500;
	}

	.stat-badge {
		padding: 4px 10px;
		border-radius: 99px;
		font-size: 0.75rem;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.05);
	}

	.stat-badge.success { color: #22c55e; background: rgba(34, 197, 94, 0.1); }
	.stat-badge.danger { color: #ef4444; background: rgba(239, 68, 68, 0.1); }
	.stat-badge.neutral { color: #6366f1; background: rgba(99, 102, 241, 0.1); }

	.stat-value {
		font-size: 1.75rem;
		font-weight: 700;
		color: #e5e7eb;
	}

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

	.charts-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	@media (max-width: 1200px) {
		.stats-row {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.charts-row {
			grid-template-columns: 1fr;
		}
		
		.stats-row {
			grid-template-columns: 1fr;
		}
	}
</style>
