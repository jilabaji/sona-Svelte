<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import RobotTable from '$lib/components/tables/RobotTable.svelte';
	import RegisterRobotModal from '$lib/components/modals/RegisterRobotModal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
    import RobotStatCard from '$lib/components/cards/RobotStatCard.svelte';
    import SearchBar from '$lib/components/ui/SearchBar.svelte';
    import FilterDropdown from '$lib/components/ui/FilterDropdown.svelte';
    import FloatingActionButton from '$lib/components/ui/FloatingActionButton.svelte';

	let showAddModal = $state(false);
    let searchQuery = $state('');
    let statusFilter = $state('');

    const statusOptions = [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Warning', value: 'WARNING' },
        { label: 'Critical', value: 'DANGER' },
        { label: 'Maintenance', value: 'MAINTENANCE' }
    ];

    const fleetStats = [
        { 
            label: 'Total Fleet', 
            value: '148', 
            trend: '+12', 
            trendType: 'info' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`
        },
        { 
            label: 'Active Now', 
            value: '132', 
            trend: 'Optimal', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        },
        { 
            label: 'In Warning', 
            value: '08', 
            trend: '+2', 
            trendType: 'danger' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        },
        { 
            label: 'Maintenance', 
            value: '06', 
            trend: '-4', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
        }
    ];
</script>

{#snippet actions()}
    <div class="flex items-center gap-2">
        <!-- Dashboard Button (Full on Desktop, Icon on Tablet/Mobile) -->
        <Button 
            onclick={() => showAddModal = true} 
            className="w-auto px-4 sm:px-6 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 border-none"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="sm:mr-2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
            <span class="hidden sm:inline">+ Register Robot</span>
            <span class="sm:hidden ml-1 font-bold">+</span>
        </Button>
    </div>
{/snippet}

<svelte:head>
	<title>Fleet Management | RoboCare Enterprise</title>
</svelte:head>

<DashboardLayout title="Robots Fleet" {actions}>
	<div class="flex flex-col gap-8 pb-10">
		<!-- Page Branding/Intro -->
		<section class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
			<div class="space-y-1">
				<h1 class="text-3xl font-extrabold text-white tracking-tight italic">Fleet Management</h1>
				<p class="text-[15px] font-medium text-slate-500 leading-relaxed">Centralized control for all care robots in service across enterprises.</p>
			</div>
			
            <!-- System Health Summary -->
            <div class="flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest w-fit">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Fleet Status: Synchronized
            </div>
		</section>

		<!-- Statistics Cards Row -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each fleetStats as stat}
				<RobotStatCard {...stat} />
			{/each}
		</div>

        <!-- Search & Filters Utility Bar -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl">
            <SearchBar bind:value={searchQuery} className="md:max-w-md w-full" />
            
            <div class="flex flex-col sm:flex-row items-center gap-3">
                <FilterDropdown 
                    label="Status" 
                    options={statusOptions} 
                    bind:value={statusFilter} 
                    className="w-full sm:w-44" 
                />
                <button class="h-11 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-bold border border-white/5 transition-all w-full sm:w-auto">
                    Export CSV
                </button>
            </div>
        </div>

		<!-- Main Table / Fleet Display -->
		<RobotTable />
	</div>
</DashboardLayout>

<!-- Mobile FAB -->
<FloatingActionButton onclick={() => showAddModal = true} label="Register Robot" />

<RegisterRobotModal bind:isOpen={showAddModal} />
