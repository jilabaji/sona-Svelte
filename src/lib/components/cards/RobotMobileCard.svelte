<script lang="ts">
    import { goto } from '$app/navigation';
    import StatusBadge from '../ui/StatusBadge.svelte';
    import Card from '../ui/Card.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';

    type Robot = {
        id: string;
        name: string;
        type: string;
        status: any;
        assigned: string;
        location: string;
        coords: string;
        image?: string;
    };

    type Props = {
        robot: Robot;
        testImg: string;
    };

    let { robot, testImg }: Props = $props();

    function navigateToRobot() {
        goto(`/robots/${robot.id}`);
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateToRobot();
        }
    }
</script>

<div 
    onclick={navigateToRobot} 
    onkeydown={handleKeydown} 
    role="button" 
    tabindex="0" 
    aria-label="View details for {robot.name}"
    class="block cursor-pointer outline-none focus-within:ring-2 focus-within:ring-indigo-500/40 rounded-2xl transition-all active:scale-[0.98]"
>
    <Card className="p-5 flex flex-col gap-5 border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-xl" hover>
        <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img src={testImg} alt={robot.name} class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col gap-1">
                <h4 class="text-base font-bold text-white tracking-tight leading-tight">{robot.name}</h4>
                <span class="text-[10px] font-bold text-slate-500 bg-white/[0.03] w-fit px-2 py-0.5 rounded-md border border-white/5 uppercase tracking-tighter">{robot.id}</span>
            </div>
            <div class="ml-auto">
                <StatusBadge status={robot.status} />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
            <div class="flex flex-col gap-1">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-widest text-left">Type</span>
                <span class="text-[13px] font-bold text-slate-200 text-left">{robot.type}</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-widest text-left">Assigned To</span>
                <span class="text-[13px] font-bold text-slate-200 text-left">{robot.assigned}</span>
            </div>
            <div class="flex flex-col gap-1 col-span-2">
                <span class="text-[10px] uppercase font-bold text-slate-500 tracking-widest text-left">Current Location</span>
                <div class="flex flex-col">
                    <span class="text-[13px] font-bold text-slate-200 text-left">{robot.location}</span>
                    <span class="text-[11px] text-slate-600 font-medium text-left">{robot.coords}</span>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between">
            <span class="text-[11px] font-extrabold text-indigo-400 uppercase tracking-widest">View Module Profile</span>
            <ActionButtons className="scale-100" />
        </div>
    </Card>
</div>
