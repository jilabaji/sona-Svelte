<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import LineChart from '$lib/components/charts/LineChart.svelte';
    import DonutChart from '$lib/components/charts/DonutChart.svelte';
	import Card from '$lib/components/ui/Card.svelte';
    import Badge from '$lib/components/ui/Badge.svelte';
    import AnalyticsCard from '$lib/components/ui/AnalyticsCard.svelte';
    
    // Import Mock Data
    import { 
        DEMO_MODE, 
        robotActivityMock, 
        fleetDistributionMock, 
        recentActivityMock, 
        dashboardStatsMock 
    } from '$lib/mock/dashboardData';

    // Data Source Logic (Fallback to Mock in DEMO_MODE or if empty)
    const stats = DEMO_MODE ? dashboardStatsMock : [];
    const activityData = DEMO_MODE ? robotActivityMock : [];
    const distributionData = DEMO_MODE ? fleetDistributionMock : [];
    const recentLogs = DEMO_MODE ? recentActivityMock : [];
</script>

<svelte:head>
	<title>Dashboard | RoboCare Enterprise</title>
</svelte:head>

<DashboardLayout title="Operational Dashboard">
	<div class="flex flex-col gap-10 pb-16 w-full animate-in fade-in duration-500">
		<!-- Page Header Info -->
		<section class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/40 pb-8">
			<div class="space-y-1">
				<h1 class="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
				<p class="text-sm font-medium text-slate-400">Welcome, Administrator. Here's your fleet status for today.</p>
			</div>
            
            {#if DEMO_MODE}
                <div class="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                    <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
                    <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Demo Analytics Preview</span>
                </div>
            {/if}
		</section>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each stats as stat}
				<div class="bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 shadow-sm hover:scale-[1.01] transition-all duration-200 group">
                    <div class="flex justify-between items-start mb-6">
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</span>
                            <div class="text-3xl font-bold text-white tracking-tight">
                                {stat.value}
                            </div>
                        </div>
                        <div class="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40 text-slate-500 group-hover:text-indigo-400 transition-colors">
                            {@html stat.icon}
                        </div>
                    </div>
                    
                    <div class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border {stat.trendType === 'success' ? 'text-green-400 bg-green-400/5 border-green-400/10' : stat.trendType === 'danger' ? 'text-red-400 bg-red-400/5 border-red-400/10' : 'text-blue-400 bg-blue-400/5 border-blue-400/10'}">
                        {stat.trend}
                    </div>
                </div>
			{/each}
		</div>

		<!-- Main Charts Section -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <AnalyticsCard title="Robot Activity Evolution" subtitle="Daily operational volume across all facilities" className="lg:col-span-8">
                <LineChart data={activityData} color="#6366F1" height={280} />
            </AnalyticsCard>
            
            <AnalyticsCard title="Fleet Composition" subtitle="Current status of active units" className="lg:col-span-4">
                <DonutChart data={distributionData} size={180} />
            </AnalyticsCard>
		</div>

        <!-- Bottom Section: Logs & Insights -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <!-- Recent Activity Feed -->
            <div class="xl:col-span-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/40 rounded-xl p-8">
                <div class="flex items-center justify-between mb-8">
                    <div class="space-y-1">
                        <h3 class="text-lg font-bold text-white">Recent Fleet Activity</h3>
                        <p class="text-xs text-slate-500">Live feed of system events and audit logs.</p>
                    </div>
                    <button class="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest">View Archives</button>
                </div>
                
                <div class="flex flex-col gap-6">
                    {#each recentLogs as log}
                        <div class="flex items-start gap-5 pb-6 border-b border-slate-800/50 last:border-0 last:pb-0 group">
                            <div class="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/40 flex items-center justify-center text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-sm font-bold text-slate-200">{log.title}</span>
                                    <span class="text-[11px] text-slate-500 font-bold uppercase tracking-tighter">{log.time}</span>
                                </div>
                                <p class="text-sm text-slate-500 leading-relaxed font-medium">{log.description}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Side Insight Card -->
            <div class="flex flex-col gap-8">
                <AnalyticsCard title="Quick Actions" subtitle="System shortcuts">
                    <div class="grid grid-cols-1 gap-3">
                        <button class="flex items-center gap-3 px-4 py-3 bg-slate-800/30 border border-slate-700/40 rounded-xl text-slate-300 text-xs font-bold hover:bg-slate-800 transition-all text-left">
                            <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Direct Unit Deployment
                        </button>
                        <button class="flex items-center gap-3 px-4 py-3 bg-slate-800/30 border border-slate-700/40 rounded-xl text-slate-300 text-xs font-bold hover:bg-slate-800 transition-all text-left">
                            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Run Fleet Diagnostic
                        </button>
                        <button class="flex items-center gap-3 px-4 py-3 bg-slate-800/30 border border-slate-700/40 rounded-xl text-slate-300 text-xs font-bold hover:bg-slate-800 transition-all text-left">
                            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Generate Audit Report
                        </button>
                    </div>
                </AnalyticsCard>
                
                <div class="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-6 flex flex-col gap-4">
                    <div class="flex items-center gap-3 text-indigo-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span class="text-xs font-bold uppercase tracking-widest">Core Insight</span>
                    </div>
                    <p class="text-sm text-slate-400 leading-relaxed">
                        Fleet efficiency is up <strong class="text-indigo-400">8.4%</strong> since last Monday. Maintenance downtime has decreased by 14 hours across St. Mary facilities.
                    </p>
                </div>
            </div>
        </div>
	</div>
</DashboardLayout>
