<script lang="ts">
    import StatusBadge from '../ui/StatusBadge.svelte';
    import Card from '../ui/Card.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';

    type Enterprise = {
        id: number;
        name: string;
        location: string;
        contactName: string;
        contactEmail: string;
        robots: number;
        maxRobots: number;
        status: string;
    };

    type Props = {
        enterprise: Enterprise;
        testImg: string;
    };

    let { enterprise, testImg }: Props = $props();

    let progress = $derived((enterprise.robots / enterprise.maxRobots) * 100);
</script>

<Card className="p-5 flex flex-col gap-5 border-white/[0.08]" hover>
    <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-lg">
            <img src={testImg} alt={enterprise.name} class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col gap-1">
            <h4 class="text-base font-bold text-white tracking-tight leading-tight">{enterprise.name}</h4>
            <span class="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {enterprise.location}
            </span>
        </div>
        <div class="ml-auto">
            <StatusBadge status={enterprise.status.toUpperCase() as any} />
        </div>
    </div>

    <div class="space-y-4 py-4 border-y border-white/5">
        <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Primary Contact</span>
                <span class="text-sm font-semibold text-slate-200">{enterprise.contactName}</span>
                <span class="text-[11px] text-slate-500 truncate">{enterprise.contactEmail}</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Allocation</span>
                <div class="flex items-center gap-2">
                    <span class="text-sm font-bold text-white">{enterprise.robots}</span>
                    <span class="text-[11px] text-slate-500 font-medium">/ {enterprise.maxRobots} Units</span>
                </div>
            </div>
        </div>

        <div class="space-y-1.5">
            <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <span>Fleet Capacity</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div class="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                <div 
                    class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-all duration-1000"
                    style="width: {progress}%"
                ></div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <span class="text-[12px] font-bold text-purple-400">Security Settings</span>
        <ActionButtons className="scale-110" />
    </div>
</Card>
