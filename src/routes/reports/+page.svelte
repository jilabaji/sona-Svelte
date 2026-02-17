<script lang="ts">
    import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
    import StatCard from '$lib/components/cards/StatCard.svelte';
    import AnalyticsCard from '$lib/components/ui/AnalyticsCard.svelte';
    import LineChart from '$lib/components/charts/LineChart.svelte';
    import BarChart from '$lib/components/charts/BarChart.svelte';
    import DonutChart from '$lib/components/charts/DonutChart.svelte';
    import HorizontalBarChart from '$lib/components/charts/HorizontalBarChart.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import ProgressBar from '$lib/components/ui/ProgressBar.svelte';
    import ServiceStatusTile from '$lib/components/cards/ServiceStatusTile.svelte';

    // Dummy Data
    const robotActivity = [
        { label: 'Jan', value: 450 }, { label: 'Feb', value: 520 }, { label: 'Mar', value: 480 },
        { label: 'Apr', value: 610 }, { label: 'May', value: 590 }, { label: 'Jun', value: 720 },
        { label: 'Jul', value: 810 }, { label: 'Aug', value: 780 }, { label: 'Sep', value: 850 },
        { label: 'Oct', value: 920 }, { label: 'Nov', value: 980 }, { label: 'Dec', value: 1100 }
    ];

    const robotStatus = [
        { label: 'Active', value: 420, color: '#4ade80' }, // green-400
        { label: 'Maint.', value: 45, color: '#fbbf24' },  // amber-400
        { label: 'Offline', value: 18, color: '#f87171' }, // red-400
        { label: 'Pending', value: 32, color: '#6366f1' }  // indigo-500
    ];

    const topEnterprises = [
        { label: 'St. Mary Care Home', value: 52 },
        { label: 'Heritage Manor', value: 44 },
        { label: 'Green Valley', value: 38 },
        { label: 'Global Clinic', value: 31 },
        { label: 'Nexus Center', value: 19 }
    ];

    const userLogins = [
        { label: 'Mon', value: 120 }, { label: 'Tue', value: 145 }, { label: 'Wed', value: 132 },
        { label: 'Thu', value: 168 }, { label: 'Fri', value: 155 }, { label: 'Sat', value: 98 },
        { label: 'Sun', value: 84 }
    ];

    const errorRate = [
        { label: '0h', value: 0.2 }, { label: '4h', value: 0.5 }, { label: '8h', value: 0.8 },
        { label: '12h', value: 0.3 }, { label: '16h', value: 0.1 }, { label: '20h', value: 0.4 },
        { label: '24h', value: 0.2 }
    ];

    const mainStats = [
        { 
            label: 'Total Robots', value: '515', trend: '+12.5%', trendType: 'success' as const,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>'
        },
        { 
            label: 'Active Enterprises', value: '42', trend: '+3 New', trendType: 'info' as const,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4Z"/></svg>'
        },
        { 
            label: 'Platform Users', value: '1,284', trend: '+8.4%', trendType: 'success' as const,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>'
        },
        { 
            label: 'System Uptime', value: '99.98%', trend: '99.9% Target', trendType: 'neutral' as const,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
        }
    ];
</script>

<svelte:head>
	<title>Reports & Analytics | RoboCare Admin</title>
</svelte:head>

{#snippet actions()}
    <div class="flex items-center gap-3">
        <Button variant="outline" className="h-10 px-4 text-xs font-semibold bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors">
            Export CSV
        </Button>
        <Button className="h-10 px-5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 border-none shadow-sm rounded-lg text-white">
            Download PDF
        </Button>
    </div>
{/snippet}

<DashboardLayout title="Reports & Analytics" {actions}>
	<div class="flex flex-col gap-10 pb-16 w-full animate-in fade-in duration-500">
		<!-- Header Row -->
		<section class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/40 pb-8">
			<div class="space-y-1">
				<h1 class="text-2xl font-bold text-white tracking-tight">Reports & Analytics</h1>
				<p class="text-sm font-medium text-slate-400">Performance and system insights for your fleet.</p>
			</div>
            
            <div class="flex items-center gap-2">
                <button class="flex items-center gap-2.5 px-4 py-2 bg-slate-900/50 border border-slate-700/40 rounded-lg text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 group-hover:text-indigo-400 transition-colors"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Last 30 Days
                </button>
            </div>
		</section>

		<!-- Statistics Cards Row -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
			{#each mainStats as stat}
				<StatCard {...stat} />
			{/each}
		</div>

        <!-- Main Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <AnalyticsCard title="Robot Activity Over Time" className="lg:col-span-8">
                <LineChart data={robotActivity} color="#6366F1" height={280} />
            </AnalyticsCard>
            
            <AnalyticsCard title="Fleet Status Distribution" className="lg:col-span-4">
                <DonutChart data={robotStatus} size={200} />
            </AnalyticsCard>
        </div>

        <!-- Detailed Breakdown Section -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
            <!-- Enterprise Performance -->
            <AnalyticsCard 
                title="Top Enterprises by Robot Allocation" 
                subtitle="Distribution of active robots across partner facilities"
            >
                <div class="flex flex-col gap-10">
                    <HorizontalBarChart data={topEnterprises} />
                    
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-800/30 pt-8">
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Trend</span>
                            <span class="text-xl font-bold text-green-400 tracking-tight">+14.2%</span>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Units / Org</span>
                            <span class="text-xl font-bold text-white tracking-tight">12.4 Units</span>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Top Facility</span>
                            <span class="text-sm font-bold text-slate-500">St. Mary Care Home</span>
                        </div>
                    </div>
                </div>
            </AnalyticsCard>

            <!-- User Behavior -->
            <AnalyticsCard title="Login Activity Trends">
                <div class="space-y-10">
                    <LineChart data={userLogins} color="#4ade80" height={220} />
                    <div class="grid grid-cols-3 gap-4 border-t border-slate-800/30 pt-8">
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Session</span>
                            <span class="text-base font-bold text-white italic">24m 12s</span>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Retention</span>
                            <span class="text-base font-bold text-blue-400">92.4%</span>
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Churn</span>
                            <span class="text-base font-bold text-red-400">0.2%</span>
                        </div>
                    </div>
                </div>
            </AnalyticsCard>
        </div>

        <!-- Performance / System Health Section -->
        <AnalyticsCard 
            title="System Infrastructure Status" 
            subtitle="Live operational state of critical platform services"
        >
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <ServiceStatusTile 
                    name="Core Engine"
                    status="operational"
                    statusLabel="Operational"
                    metric="98% Integrity"
                    description="Processing stability and runtime health"
                />
                <ServiceStatusTile 
                    name="Telemetry Node"
                    status="high-load"
                    statusLabel="High Load"
                    metric="1.2s Latency"
                    description="Real-time data ingestion performance"
                />
                <ServiceStatusTile 
                    name="Load Balancer"
                    status="balanced"
                    statusLabel="Balanced"
                    metric="42% Capacity"
                    description="Traffic distribution efficiency"
                />
                <ServiceStatusTile 
                    name="Auth Service"
                    status="secure"
                    statusLabel="Secure"
                    metric="100% Uptime"
                    description="Authentication and access control"
                />
            </div>
        </AnalyticsCard>
	</div>
</DashboardLayout>
