<script lang="ts">
    import { page } from '$app/state';
    import DetailLayout from '$lib/components/layout/DetailLayout.svelte';
    import StatusBadge from '$lib/components/ui/StatusBadge.svelte';
    import ProgressBar from '$lib/components/ui/ProgressBar.svelte';
    import InfoCard from '$lib/components/ui/InfoCard.svelte';
    import ActivityTimeline from '$lib/components/timeline/ActivityTimeline.svelte';
    import HealthDetailChart from '$lib/components/charts/HealthDetailChart.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import testImg from '$lib/assets/test.jpg';

    const robotId = page.params.id;

    // Dummy Robot Data
    const robot = {
        id: robotId,
        name: 'Alpha Care-V1',
        serial: 'RC-AUTO-4921-X',
        model: 'Clinical Assist',
        enterprise: 'St. Mary Care Home',
        location: 'Section 4, Floor 2',
        createdDate: 'Oct 12, 2025',
        status: 'ACTIVE' as const,
        battery: 84,
        temperature: 32,
        signal: 92,
        uptime: '14d 6h 22m',
        lastActive: 'Just now',
        description: 'Next-generation clinical assistance unit equipped with lid-scanning and patient vitals monitoring sensors. Primarily assigned to geriatric care support.'
    };

    const timelineEvents = [
        { title: 'System Health Check', time: '10 Mins Ago', description: 'Automatic diagnostic sequence completed. All systems optimal.', type: 'success' as const },
        { title: 'Battery Warning', time: '2 Hours Ago', description: 'Unit reached 15% threshold. Successfully returned to dock.', type: 'warning' as const },
        { title: 'Firmware Update', time: 'Yesterday', description: 'System upgraded to v2.4.1 (Stable). Security patches applied.', type: 'info' as const },
        { title: 'Assigned to Enterprise', time: '3 Days Ago', description: 'Unit provisioned and assigned to St. Mary Care Home.', type: 'info' as const },
        { title: 'Critical Sensor Error', time: '5 Days Ago', description: 'Thermal sensor recalibration required. System paused.', type: 'danger' as const }
    ];

    const cpuData = [
        { label: 'T1', value: 12 }, { label: 'T2', value: 24 }, { label: 'T3', value: 18 },
        { label: 'T4', value: 42 }, { label: 'T5', value: 36 }, { label: 'T6', value: 45 },
        { label: 'T7', value: 28 }
    ];

    const movementData = [
        { label: 'T1', value: 65 }, { label: 'T2', value: 72 }, { label: 'T3', value: 58 },
        { label: 'T4', value: 82 }, { label: 'T5', value: 91 }, { label: 'T6', value: 77 },
        { label: 'T7', value: 85 }
    ];
</script>

<svelte:head>
	<title>{robot.name} | Robot Profile | RoboCare</title>
</svelte:head>

{#snippet actions()}
    <div class="hidden sm:flex items-center gap-3">
        <Button variant="outline" className="w-auto px-5 h-10 border-slate-700 hover:border-slate-500">
            Edit Profile
        </Button>
    </div>
{/snippet}

<DetailLayout title={robot.name} backUrl="/robots" backLabel="Robots" {actions}>
    <div class="flex flex-col gap-6 md:gap-8">
        <!-- Sub Header Info -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div class="space-y-1">
                <div class="flex items-center gap-3">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight italic">{robot.name}</h2>
                    <StatusBadge status={robot.status} className="scale-75 origin-left" />
                </div>
                <p class="text-sm font-bold text-slate-500 font-mono tracking-tighter uppercase">{robot.serial} • Platform Module</p>
            </div>
            
            <div class="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[10px] font-bold uppercase tracking-widest w-fit">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Telemetry: Active
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <!-- Left Column: Primary Info & Health -->
            <div class="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
                
                <!-- Robot Overview Card -->
                <article class="relative group bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-indigo-500/20 transition-all duration-500">
                    <div class="flex flex-col md:flex-row overflow-hidden">
                        <!-- Image Area -->
                        <div class="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0">
                            <img src={testImg} alt={robot.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
                        </div>

                        <!-- Data Area -->
                        <div class="flex-1 p-6 md:p-8 flex flex-col gap-6 relative">
                            <div class="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div class="space-y-1">
                                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Model Type</span>
                                    <p class="text-sm font-bold text-white tracking-tight">{robot.model}</p>
                                </div>
                                <div class="space-y-1">
                                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Enterprise</span>
                                    <p class="text-sm font-bold text-indigo-400 tracking-tight">{robot.enterprise}</p>
                                </div>
                                <div class="space-y-1">
                                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Location</span>
                                    <p class="text-sm font-bold text-white tracking-tight">{robot.location}</p>
                                </div>
                                <div class="space-y-1">
                                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Registration</span>
                                    <p class="text-sm font-bold text-white tracking-tight">{robot.createdDate}</p>
                                </div>
                            </div>
                            
                            <div class="space-y-2 border-t border-white/5 pt-6 mt-auto">
                                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Fleet Notes</span>
                                <p class="text-xs font-medium text-slate-400 leading-relaxed italic">
                                    "{robot.description}"
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Status & Health Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex flex-col gap-4 shadow-xl">
                        <ProgressBar label="Battery" value={robot.battery} color="from-green-500 to-emerald-600" />
                    </div>
                    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex flex-col gap-1 shadow-xl">
                        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Internal Temp</span>
                        <div class="flex items-end gap-2">
                            <span class="text-2xl font-extrabold text-white">{robot.temperature}°C</span>
                        </div>
                    </div>
                    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex flex-col gap-4 shadow-xl">
                        <ProgressBar label="Signal Strength" value={robot.signal} color="from-blue-500 to-indigo-600" />
                    </div>
                    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex flex-col gap-1 shadow-xl">
                        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Uptime</span>
                        <div class="text-lg font-extrabold text-white leading-tight mt-1">{robot.uptime}</div>
                    </div>
                </div>

                <!-- Performance Analytics -->
                <InfoCard title="Analytical Telemetry" icon={() => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'}>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <HealthDetailChart title="CPU Processing" data={cpuData} color="#a855f7" />
                        <HealthDetailChart title="Avg Velocity" data={movementData} color="#6366f1" />
                    </div>
                </InfoCard>

            </div>

            <!-- Right Column: Timeline & Controls -->
            <div class="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                
                <!-- Activity Timeline -->
                <InfoCard title="Activity Log" icon={() => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6h4v6"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'}>
                    <ActivityTimeline events={timelineEvents} />
                    
                    <button class="w-full mt-6 py-3 border border-dashed border-white/10 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-indigo-500/30 hover:text-indigo-400 transition-all">
                        Full Audit History
                    </button>
                </InfoCard>

                <!-- Quick Action Panel -->
                <div class="bg-indigo-600/5 border border-indigo-500/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
                    <h3 class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Admin Operations
                    </h3>
                    
                    <div class="flex flex-col gap-3">
                        <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 font-extrabold tracking-tight h-11">
                            Remote Diagnostic
                        </Button>
                        <Button variant="outline" className="w-full border-slate-700 hover:bg-white/5 font-bold h-11">
                            Maintenance Mode
                        </Button>
                        <hr class="border-white/5 my-1" />
                        <Button variant="outline" className="w-full border-red-900/40 text-red-500 hover:bg-red-500/10 font-bold h-11">
                            Emergency Shutdown
                        </Button>
                    </div>

                    <p class="text-[9px] font-medium text-slate-600 text-center uppercase tracking-tighter">
                        Last Active Status: {robot.lastActive}
                    </p>
                </div>

            </div>
        </div>
    </div>
</DetailLayout>
