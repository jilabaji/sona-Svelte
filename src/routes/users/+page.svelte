<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import UserTable from '$lib/components/tables/UserTable.svelte';
	import Button from '$lib/components/ui/Button.svelte';
    import EnterpriseStatCard from '$lib/components/cards/EnterpriseStatCard.svelte';
    import SearchBar from '$lib/components/ui/SearchBar.svelte';
    import FilterDropdown from '$lib/components/ui/FilterDropdown.svelte';
    import FloatingActionButton from '$lib/components/ui/FloatingActionButton.svelte';
    import InviteUserModal from '$lib/components/modals/InviteUserModal.svelte';

	let showInviteModal = $state(false);
    let searchQuery = $state('');
    let roleFilter = $state('');
    let statusFilter = $state('');

    const roleOptions = [
        { label: 'Master Admin', value: 'MASTER' },
        { label: 'Enterprise Admin', value: 'ENT' },
        { label: 'Staff', value: 'STAFF' },
        { label: 'Viewer', value: 'VIEWER' }
    ];

    const statusOptions = [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Inactive', value: 'INACTIVE' },
        { label: 'Pending', value: 'PENDING' }
    ];

    const userStats = [
        { 
            label: 'Total Platform Users', 
            value: '284', 
            trend: '+12', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        { 
            label: 'Active Sessions', 
            value: '42', 
            trend: 'Live', 
            trendType: 'info' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
        },
        { 
            label: 'Pending Invites', 
            value: '14', 
            trend: '-2', 
            trendType: 'neutral' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><path d="m22 9-10 7L2 9"/></svg>`
        },
        { 
            label: 'Security Alerts', 
            value: '0', 
            trend: 'Secure', 
            trendType: 'success' as const,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`
        }
    ];

    const roleDistribution = [
        { label: 'Master Admins', count: 4, color: 'bg-purple-500' },
        { label: 'Enterprise Admins', count: 12, color: 'bg-blue-500' },
        { label: 'Platform Staff', count: 48, color: 'bg-indigo-500' },
        { label: 'Client Viewers', count: 220, color: 'bg-slate-500' }
    ];
</script>

{#snippet actions()}
    <Button 
        onclick={() => showInviteModal = true}
        className="w-auto px-6 h-11 bg-gradient-to-r from-purple-600 to-indigo-600 border-none shadow-lg shadow-purple-500/20"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/></svg>
        <span class="hidden sm:inline">Invite User</span>
        <span class="sm:hidden font-bold ml-1">+</span>
    </Button>
{/snippet}

<svelte:head>
	<title>User Management | RoboCare Enterprise</title>
</svelte:head>

<DashboardLayout title="User Management" {actions}>
	<div class="flex flex-col gap-8 pb-10">
        <!-- Page Header Info -->
		<section class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-8">
			<div class="space-y-1">
				<h1 class="text-3xl font-extrabold text-white tracking-tight italic">Platform Governance</h1>
				<p class="text-[15px] font-medium text-slate-400">Configure system access, organizational roles, and security permissions.</p>
			</div>
			
            <div class="flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest w-fit">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Auth System: Operational
            </div>
		</section>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each userStats as stat}
				<EnterpriseStatCard {...stat} />
			{/each}
		</div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <!-- Main Content: Search + Table -->
            <div class="xl:col-span-9 flex flex-col gap-6">
                <!-- Search & Filters Utility Bar -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-xl">
                    <SearchBar bind:value={searchQuery} placeholder="Search by name or email..." className="md:max-w-md w-full" />
                    
                    <div class="flex flex-col sm:flex-row items-center gap-3">
                        <FilterDropdown label="Role" options={roleOptions} bind:value={roleFilter} className="w-full sm:w-36" />
                        <FilterDropdown label="Status" options={statusOptions} bind:value={statusFilter} className="w-full sm:w-36" />
                    </div>
                </div>

                <UserTable />
            </div>

            <!-- Side Panel: Stats & Security -->
            <div class="xl:col-span-3 flex flex-col gap-6">
                <!-- Role Distribution Card -->
                <div class="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl">
                    <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Role Distribution</h3>
                    <div class="space-y-5">
                        {#each roleDistribution as role}
                            <div class="flex flex-col gap-2">
                                <div class="flex justify-between items-end">
                                    <span class="text-[13px] font-bold text-slate-300">{role.label}</span>
                                    <span class="text-xs font-extrabold text-white">{role.count}</span>
                                </div>
                                <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full {role.color} rounded-full" style="width: {(role.count / 284) * 100}%"></div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Security Tips / Auth Info -->
                <div class="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400 rotate-12"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <h4 class="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Security Protocol
                    </h4>
                    <p class="text-[13px] font-medium text-slate-400 leading-relaxed mb-4">
                        Ensure all **Enterprise Admins** have 2FA enabled. Suspicious login attempts are automatically flagged for Master Admin review.
                    </p>
                    <button class="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest flex items-center gap-2">
                        View Audit Logs
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        </div>
	</div>
</DashboardLayout>

<!-- Mobile FAB -->
<FloatingActionButton onclick={() => showInviteModal = true} label="Invite User" />

<InviteUserModal bind:isOpen={showInviteModal} />
