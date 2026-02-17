<script lang="ts">
    import testImg from '$lib/assets/test.jpg';
    import StatusBadge from '../ui/StatusBadge.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';
    import EnterpriseMobileCard from '../cards/EnterpriseMobileCard.svelte';

    const enterprises = [
        { id: 1, name: 'St. Mary Care Home', location: 'London, UK', contactName: 'Sarah Jenkins', contactEmail: 'sarah.j@stmarys.co.uk', robots: 42, maxRobots: 50, status: 'Active' },
        { id: 2, name: 'Green Valley Res.', location: 'California, US', contactName: 'Robert Ford', contactEmail: 'r.ford@greenvalley.com', robots: 18, maxRobots: 25, status: 'Active' },
        { id: 3, name: 'Sunset Heights', location: 'Sydney, AU', contactName: 'Emma Watson', contactEmail: 'emma@sunsetheights.au', robots: 5, maxRobots: 50, status: 'Inactive' },
        { id: 4, name: 'Heritage Manor', location: 'Ontario, CA', contactName: 'James Bond', contactEmail: 'j.bond@heritagemanor.ca', robots: 29, maxRobots: 40, status: 'Active' },
        { id: 5, name: 'Oak Ridge Clinic', location: 'Berlin, DE', contactName: 'Hans Muller', contactEmail: 'hans@oakridge.de', robots: 12, maxRobots: 20, status: 'Active' }
    ];
</script>

<div class="w-full">
    <!-- Desktop Table View -->
    <div class="hidden lg:block overflow-x-auto bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        <table class="w-full text-left border-collapse">
            <thead class="sticky top-0 z-10 bg-[#0f172a] shadow-sm">
                <tr class="border-b border-white/5">
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Info</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Primary Contact</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Fleet Capacity</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">System Status</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Operations</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.03]">
                {#each enterprises as ent, i}
                    <tr class="group {i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'} hover:bg-white/[0.03] transition-all duration-300">
                        <td class="px-6 py-5">
                            <div class="flex items-center gap-4">
                                <div class="w-11 h-11 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-colors shrink-0 shadow-lg relative">
                                    <img src={testImg} alt={ent.name} class="w-full h-full object-cover" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                </div>
                                <div class="flex flex-col gap-0.5">
                                    <span class="text-[15px] font-bold text-slate-200 group-hover:text-purple-300 transition-colors tracking-tight">{ent.name}</span>
                                    <span class="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                        {ent.location}
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-5">
                            <div class="flex flex-col gap-0.5">
                                <span class="text-sm font-bold text-slate-200">{ent.contactName}</span>
                                <span class="text-[11px] font-medium text-slate-500">{ent.contactEmail}</span>
                            </div>
                        </td>
                        <td class="px-6 py-5">
                            <div class="flex flex-col gap-2.5 w-44">
                                <div class="flex justify-between items-end gap-2">
                                    <span class="text-[13px] font-extrabold text-white">{ent.robots}</span>
                                    <span class="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">/ {ent.maxRobots} Units</span>
                                </div>
                                <div class="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                                    <div 
                                        class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_8px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-1000"
                                        style="width: {(ent.robots / ent.maxRobots) * 100}%"
                                    ></div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-5">
                            <StatusBadge status={ent.status.toUpperCase() as any} />
                        </td>
                        <td class="px-6 py-5">
                            <ActionButtons className="justify-end scale-90" />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <!-- Mobile Card View -->
    <div class="lg:hidden flex flex-col gap-5">
        {#each enterprises as ent}
            <EnterpriseMobileCard enterprise={ent} {testImg} />
        {/each}
    </div>
</div>
