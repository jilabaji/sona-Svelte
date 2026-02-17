<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import EnterpriseTable from '$lib/components/tables/EnterpriseTable.svelte';
	import Button from '$lib/components/ui/Button.svelte';
    import EnterpriseStatCard from '$lib/components/cards/EnterpriseStatCard.svelte';
    import SearchBar from '$lib/components/ui/SearchBar.svelte';
    import FilterDropdown from '$lib/components/ui/FilterDropdown.svelte';
    import FloatingActionButton from '$lib/components/ui/FloatingActionButton.svelte';
    import AddEnterpriseModal from '$lib/components/modals/AddEnterpriseModal.svelte';

    let showAddModal = $state(false);
    let searchQuery = $state('');
    let statusFilter = $state('');

    const statusOptions = [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
        { label: 'Suspended', value: 'SUSPENDED' }
    ];

    const enterpriseStats = [
        { 
            label: 'Total Partners', 
            value: '42', 
            trend: '+3', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        { 
            label: 'Active Accounts', 
            value: '38', 
            trend: '92%', 
            trendType: 'info' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        },
        { 
            label: 'Pending Action', 
            value: '04', 
            trend: 'Review', 
            trendType: 'danger' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        },
        { 
            label: 'Fleet Assigned', 
            value: '1,248', 
            trend: '+42', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`
        }
    ];
</script>

{#snippet actions()}
    <Button 
        onclick={() => showAddModal = true}
        className="w-auto px-4 sm:px-6 h-11 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/25 border-none"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="sm:mr-2"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4Z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
        <span class="hidden sm:inline">Add Enterprise</span>
        <span class="sm:hidden font-bold ml-1">+</span>
    </Button>
{/snippet}

<svelte:head>
	<title>Partner Enterprises | RoboCare Enterprise</title>
</svelte:head>

<DashboardLayout title="Partners & Enterprises" {actions}>
	<div class="flex flex-col gap-8 pb-10">
		<!-- Page Header Info -->
		<section class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-8">
			<div class="space-y-1">
				<h1 class="text-3xl font-extrabold text-white tracking-tight italic">Partner Accounts</h1>
				<p class="text-[15px] font-medium text-slate-400">Manage care home networks and global robot inventory allocation.</p>
			</div>
			
            <div class="flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest w-fit">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Active Contracts: Validated
            </div>
		</section>

		<!-- Statistics Cards Row -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each enterpriseStats as stat}
				<EnterpriseStatCard {...stat} />
			{/each}
		</div>

        <!-- Search & Filters Utility Bar -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-xl">
            <SearchBar bind:value={searchQuery} placeholder="Search partners or locations..." className="md:max-w-md w-full" />
            
            <div class="flex flex-col sm:flex-row items-center gap-3">
                <FilterDropdown 
                    label="Status" 
                    options={statusOptions} 
                    bind:value={statusFilter} 
                    className="w-full sm:w-44" 
                />
                <button class="h-11 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-bold border border-white/5 transition-all w-full sm:w-auto hover:text-white">
                    Export Partner List
                </button>
            </div>
        </div>

		<!-- Main Table / Enterprise List -->
		<EnterpriseTable />
	</div>
</DashboardLayout>

<!-- Mobile FAB -->
<FloatingActionButton onclick={() => showAddModal = true} label="Add Enterprise" />

<AddEnterpriseModal bind:isOpen={showAddModal} />
