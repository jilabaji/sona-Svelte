<script lang="ts">
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
</script>

<Card className="p-5 flex flex-col gap-5 border-white/[0.08]" hover>
    <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shrink-0">
            <img src={testImg} alt={robot.name} class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col gap-1">
            <h4 class="text-base font-bold text-white tracking-tight">{robot.name}</h4>
            <span class="text-xs font-semibold text-slate-500 bg-white/[0.03] w-fit px-2 py-0.5 rounded-md border border-white/5">{robot.id}</span>
        </div>
        <div class="ml-auto">
            <StatusBadge status={robot.status} />
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
        <div class="flex flex-col gap-1">
            <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider text-left">Type</span>
            <span class="text-sm font-semibold text-slate-200 text-left">{robot.type}</span>
        </div>
        <div class="flex flex-col gap-1">
            <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider text-left">Assigned To</span>
            <span class="text-sm font-semibold text-slate-200 text-left">{robot.assigned}</span>
        </div>
        <div class="flex flex-col gap-1 col-span-2">
            <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider text-left">Current Location</span>
            <div class="flex flex-col">
                <span class="text-sm font-semibold text-slate-200 text-left">{robot.location}</span>
                <span class="text-[11px] text-slate-600 font-medium text-left">{robot.coords}</span>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <span class="text-[12px] font-bold text-indigo-400">Manage Robot</span>
        <ActionButtons className="scale-110" />
    </div>
</Card>
