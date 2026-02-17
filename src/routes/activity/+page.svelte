<script lang="ts">
    import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
    import ActivityTable from '$lib/components/tables/ActivityTable.svelte';
    import ActivityTimeline from '$lib/components/timeline/ActivityTimeline.svelte';
    import LogStatCard from '$lib/components/cards/LogStatCard.svelte';
    import LogDetailModal from '$lib/components/modals/LogDetailModal.svelte';
    import SearchBar from '$lib/components/ui/SearchBar.svelte';
    import FilterDropdown from '$lib/components/ui/FilterDropdown.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    type LogSeverity = 'info' | 'success' | 'warning' | 'error';

    interface Log {
        id: string;
        timestamp: string;
        actor: string;
        action: string;
        module: string;
        severity: LogSeverity;
        ip: string;
        description: string;
        device: string;
    }

    let searchQuery = $state('');
    let typeFilter = $state('');
    let severityFilter = $state('');
    let selectedLog = $state<Log | null>(null);
    let showDetailModal = $state(false);

    const typeOptions = [
        { label: 'All Types', value: '' },
        { label: 'User', value: 'USER' },
        { label: 'Robot', value: 'ROBOT' },
        { label: 'Enterprise', value: 'ENTERPRISE' },
        { label: 'System', value: 'SYSTEM' }
    ];

    const severityOptions = [
        { label: 'All Levels', value: '' },
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' }
    ];

    const stats = [
        { label: 'Total Logs Today', value: '1,284', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', color: 'indigo' as const },
        { label: 'System Errors', value: '03', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>', color: 'danger' as const },
        { label: 'Warnings', value: '12', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', color: 'warning' as const },
        { label: 'Successful Actions', value: '842', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', color: 'success' as const }
    ];

    const logs: Log[] = [
        { id: '1', timestamp: '2026-02-17 15:42:01', actor: 'John Doe', action: 'User Login', module: 'USER', severity: 'success', ip: '192.168.1.42', description: 'Successful session established via Chrome on Windows 11. MFA verified.', device: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/121.0.0.0' },
        { id: '2', timestamp: '2026-02-17 15:38:12', actor: 'Alpha Care-V1', action: 'Battery Warning', module: 'ROBOT', severity: 'warning', ip: '10.0.4.12', description: 'Unit reached 15% threshold. Successfully identified dock charging station.', device: 'RoboOS v2.4.1 ARM64' },
        { id: '3', timestamp: '2026-02-17 15:30:45', actor: 'System', action: 'API Error Detected', module: 'SYSTEM', severity: 'error', ip: 'Static-IP', description: 'Failed to synchronize telemetry data for Node #402. Connection timed out after 5000ms.', device: 'Backend-Worker-04' },
        { id: '4', timestamp: '2026-02-17 15:25:00', actor: 'Sarah Jenkins', action: 'Robot Assigned', module: 'ROBOT', severity: 'info', ip: '82.4.12.99', description: 'Gamma-Guard assigned to "Sunset Heights" enterprise by Enterprise Administrator.', device: 'Safari on macOS Sonoma' },
        { id: '5', timestamp: '2026-02-17 15:12:33', actor: 'Alex Rivera', action: 'Enterprise Added', module: 'ENTERPRISE', severity: 'success', ip: '172.16.0.1', description: 'New enterprise "Heritage Manor" successfully provisioned and configured.', device: 'Chrome on macOS Sonoma' },
        { id: '6', timestamp: '2026-02-17 14:55:10', actor: 'System', action: 'Health Check Completed', module: 'SYSTEM', severity: 'success', ip: 'Internal', description: 'All core services are operational. Integrity check passed for 48/48 modules.', device: 'Health-Monitor-Cron' },
        { id: '7', timestamp: '2026-02-17 14:40:22', actor: 'John Doe', action: 'Password Reset', module: 'USER', severity: 'info', ip: '192.168.1.42', description: 'Administrative password reset triggered. Email sent to verify identity.', device: 'Firefox on Linux' },
        { id: '8', timestamp: '2026-02-17 14:20:55', actor: 'Beta Nurse-X', action: 'Robot Deactivated', module: 'ROBOT', severity: 'warning', ip: '10.0.4.13', description: 'Manual deactivation sequence initiated from local interface by staff.', device: 'RoboOS v2.4.1 ARM64' },
        { id: '9', timestamp: '2026-02-17 14:15:00', actor: 'Alex Rivera', action: 'Invitation Sent', module: 'USER', severity: 'info', ip: '172.16.0.1', description: 'Invite sent to m.chen@greenvalley.com for Staff access role.', device: 'Chrome on Windows 11' },
        { id: '10', timestamp: '2026-02-17 13:58:12', actor: 'System', action: 'Database Backup', module: 'SYSTEM', severity: 'success', ip: 'Cloud-Sync', description: 'Automated daily backup completed. Data securely sharded to US-EAST-1.', device: 'Backup-Engine-v2' }
    ];

    function handleViewDetail(log: Log) {
        selectedLog = log;
        showDetailModal = true;
    }

    // Convert logs to timeline format for mobile
    const timelineEvents = logs.map(log => ({
        title: log.action,
        time: log.timestamp.split(' ')[1],
        description: `${log.actor} - ${log.description}`,
        type: log.severity === 'error' ? 'danger' as const : log.severity as 'info' | 'warning' | 'success' | 'danger',
        onclick: () => handleViewDetail(log)
    }));
</script>

<svelte:head>
	<title>Activity Logs | RoboCare Enterprise</title>
</svelte:head>

{#snippet actions()}
    <div class="flex items-center gap-2">
        <Button variant="outline" className="h-10 px-4 text-xs border-slate-700 hover:bg-white/5">
            Export CSV
        </Button>
        <Button variant="outline" className="h-10 px-4 text-xs border-red-900/30 text-red-500 hover:bg-red-500/10">
            Clear Filters
        </Button>
    </div>
{/snippet}

<DashboardLayout title="Activity Logs" {actions}>
	<div class="flex flex-col gap-8 pb-10">
		<!-- Page Header -->
		<section class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-8">
			<div class="space-y-1">
				<h1 class="text-3xl font-extrabold text-white tracking-tight italic">System Audit Trail</h1>
				<p class="text-[15px] font-medium text-slate-400">Chronological history of all platform actions and security events.</p>
			</div>
            
            <div class="flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Logging Interface: Real-time
            </div>
		</section>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each stats as stat}
				<LogStatCard {...stat} />
			{/each}
		</div>

        <!-- Filter Utility Bar -->
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-slate-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-xl">
            <SearchBar bind:value={searchQuery} placeholder="Search actor, action or module..." className="xl:max-w-md w-full" />
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full xl:w-auto">
                <FilterDropdown label="Type" options={typeOptions} bind:value={typeFilter} className="w-full" />
                <FilterDropdown label="Severity" options={severityOptions} bind:value={severityFilter} className="w-full" />
                <button class="h-11 px-4 bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-xl text-xs font-bold text-slate-400 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>Range</span>
                </button>
            </div>
        </div>

		<!-- Main Display Mode -->
		<section class="w-full">
            <!-- Desktop View -->
            <div class="hidden lg:block">
                <ActivityTable {logs} onViewDetail={handleViewDetail} />
            </div>

            <!-- Mobile View -->
            <div class="lg:hidden bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl">
                <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Recent Activity Stream
                </h3>
                <ActivityTimeline events={timelineEvents} />
                
                <button class="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-white/10 transition-all">
                    Load Older Logs
                </button>
            </div>
        </section>
	</div>
</DashboardLayout>

<LogDetailModal bind:isOpen={showDetailModal} log={selectedLog} />
