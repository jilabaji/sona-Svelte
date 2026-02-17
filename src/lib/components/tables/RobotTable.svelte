<script lang="ts">
    import { goto } from '$app/navigation';
	import testImg from '$lib/assets/test.jpg';
    import StatusBadge from '../ui/StatusBadge.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';
    import RobotMobileCard from '../cards/RobotMobileCard.svelte';

	const robots = [
		{ id: 'RC-9042', name: 'Alpha Care-V1', type: 'Clinical Assist', status: 'ACTIVE', assigned: 'St. Mary Care Home', location: 'Section A - L2', coords: '40.7128° N, 74.0060° W' },
		{ id: 'RC-8219', name: 'Beta Nurse-X', type: 'Patient Transport', status: 'ACTIVE', assigned: 'Green Valley Res.', location: 'Room 204', coords: '34.0522° N, 118.2437° W' },
		{ id: 'RC-7731', name: 'Gamma Guard', type: 'Security Monitoring', status: 'WARNING', assigned: 'Sunset Heights', location: 'Perimeter West', coords: '41.8781° N, 87.6298° W' },
		{ id: 'RC-6540', name: 'Delta Clean-H', type: 'Sanitization', status: 'ACTIVE', assigned: 'Heritage Manor', location: 'Dining Hall', coords: '29.7604° N, 95.3698° W' },
		{ id: 'RC-5102', name: 'Epsilon Med-Z', type: 'Pharmacy Dispenser', status: 'DANGER', assigned: 'Oak Ridge Clinic', location: 'Pharmacy Lab', coords: '33.4484° N, 112.0740° W' },
		{ id: 'RC-4210', name: 'Zeta Helper', type: 'Clinical Assist', status: 'MAINTENANCE', assigned: 'St. Mary Care Home', location: 'Repair Bay 1', coords: '40.7128° N, 74.0060° W' }
	];

    function navigateToRobot(id: string) {
        goto(`/robots/${id}`);
    }

    function handleKeydown(e: KeyboardEvent, id: string) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateToRobot(id);
        }
    }
</script>

<div class="w-full">
    <!-- Desktop Table View -->
	<div class="hidden lg:block overflow-x-auto bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl scrollbar-thin scrollbar-thumb-slate-700">
		<table class="w-full text-left border-collapse min-w-[1000px]">
			<thead>
				<tr class="border-b border-white/5 bg-white/[0.02]">
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Robot Identity</th>
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Model Type</th>
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">System Status</th>
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Assignment</th>
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Tracking</th>
					<th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Operations</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-white/[0.03]">
				{#each robots as robot}
					<tr 
                        class="group hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:scale-[1.002] active:scale-[0.998]"
                        onclick={() => navigateToRobot(robot.id)}
                        onkeydown={(e) => handleKeydown(e, robot.id)}
                        role="button"
                        tabindex="0"
                        aria-label="View details for {robot.name}"
                    >
						<td class="px-6 py-5">
							<div class="flex items-center gap-4">
								<div class="w-11 h-11 rounded-xl overflow-hidden border border-white/10 group-hover:border-indigo-500/30 transition-colors shrink-0 shadow-lg">
									<img src={testImg} alt={robot.name} class="w-full h-full object-cover" />
								</div>
								<div class="flex flex-col gap-0.5">
									<span class="text-[14.5px] font-bold text-slate-200 group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{robot.name}</span>
									<span class="text-[11px] font-bold text-slate-500 font-mono tracking-tighter">{robot.id}</span>
								</div>
							</div>
						</td>
						<td class="px-6 py-5 transition-transform group-hover:translate-x-1">
							<span class="px-3 py-1 bg-white/[0.04] border border-white/5 rounded-lg text-xs font-semibold text-slate-400">
								{robot.type}
							</span>
						</td>
						<td class="px-6 py-5 transition-transform group-hover:translate-x-1">
							<StatusBadge status={robot.status as any} />
						</td>
						<td class="px-6 py-5 transition-transform group-hover:translate-x-1">
							<span class="text-sm font-semibold text-slate-300">{robot.assigned}</span>
						</td>
						<td class="px-6 py-5 transition-transform group-hover:translate-x-1">
							<div class="flex flex-col gap-0.5">
								<span class="text-sm font-bold text-slate-200">{robot.location}</span>
								<span class="text-[11px] font-medium text-slate-600 truncate max-w-[140px]">{robot.coords}</span>
							</div>
						</td>
						<td class="px-6 py-5 transition-transform group-hover:translate-x-1">
							<ActionButtons className="justify-end scale-90" />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

    <!-- Mobile Card View -->
    <div class="lg:hidden flex flex-col gap-4">
        {#each robots as robot}
            <RobotMobileCard {robot} {testImg} />
        {/each}
    </div>
</div>
