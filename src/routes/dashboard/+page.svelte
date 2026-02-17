<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import LineChart from '$lib/components/charts/LineChart.svelte';
	import Card from '$lib/components/ui/Card.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';

	const stats = [
		{ 
            label: 'Total Robots', 
            value: '1,248', 
            trend: '+12%', 
            trendType: 'success',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>` 
        },
		{ 
            label: 'Enterprises', 
            value: '42', 
            trend: '+3', 
            trendType: 'success',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4Z"/></svg>`
        },
		{ 
            label: 'Uptime Rate', 
            value: '99.98%', 
            trend: 'Stable', 
            trendType: 'info',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
        },
		{ 
            label: 'Active Alerts', 
            value: '04', 
            trend: '-40%', 
            trendType: 'danger',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        }
	];
</script>

<svelte:head>
	<title>Dashboard | RoboCare Enterprise</title>
</svelte:head>

<DashboardLayout>
	<Header />

	<div class="flex flex-col gap-8">
		<!-- Page Header Info -->
		<section class="flex flex-col gap-1">
			<h1 class="text-3xl font-extrabold text-white tracking-tight">Dashboard Overview</h1>
			<p class="text-[15px] font-medium text-slate-500">Welcome back, Admin. Real-time fleet metrics and system status.</p>
		</section>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each stats as stat}
				<Card className="p-6 relative group" hover>
					<div class="flex justify-between items-start mb-6">
						<span class="text-[13px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
						<div class="w-10 h-10 flex items-center justify-center bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
							{@html stat.icon}
						</div>
					</div>
					
                    <div class="flex items-end justify-between">
                        <div class="text-3xl font-extrabold text-slate-100 tracking-tight">{stat.value}</div>
                        <Badge variant={stat.trendType as any} className="mb-1">
                            {stat.trend}
                        </Badge>
                    </div>

                    <!-- Subtle backdrop glow on hover -->
                    <div class="absolute -inset-px bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
				</Card>
			{/each}
		</div>

		<!-- Main Charts Section -->
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div class="flex flex-col gap-3">
                <BarChart />
            </div>
            <div class="flex flex-col gap-3">
                <LineChart />
            </div>
		</div>

        <!-- Recent Activity Feed (Optional addition for professional feel) -->
        <Card className="p-8">
            <div class="flex items-center justify-between mb-8">
                <h3 class="text-lg font-bold text-white">Recent Fleet Activity</h3>
                <button class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">View detailed logs</button>
            </div>
            
            <div class="flex flex-col gap-6">
                {#each [1, 2, 3] as i}
                    <div class="flex items-start gap-4 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                        <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between mb-1">
                                <span class="text-[14px] font-bold text-slate-200">System maintenance completed</span>
                                <span class="text-[12px] text-slate-500 font-medium">{i*2}h ago</span>
                            </div>
                            <p class="text-[13px] text-slate-500 leading-relaxed font-medium">Automated health check completed for RC-7281 (Enterprise Alpha). All sub-systems operational with 100% efficiency.</p>
                        </div>
                    </div>
                {/each}
            </div>
        </Card>
	</div>
</DashboardLayout>
