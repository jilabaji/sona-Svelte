<script lang="ts">
    import testImg from '$lib/assets/test.jpg';
    import StatusBadge from '../ui/StatusBadge.svelte';
    import RoleBadge from '../ui/RoleBadge.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';
    import UserCard from '../cards/UserCard.svelte';

    const users = [
        { id: 1, name: 'Alex Rivera', email: 'alex.rivera@robocare.sh', role: 'MASTER ADMIN', enterprise: 'RoboCare HQ', status: 'ACTIVE', lastLogin: '2 mins ago' },
        { id: 2, name: 'Sarah Jenkins', email: 's.jenkins@stmarys.co.uk', role: 'ENTERPRISE ADMIN', enterprise: 'St. Mary Care Home', status: 'ACTIVE', lastLogin: '45 mins ago' },
        { id: 3, name: 'Michael Chen', email: 'm.chen@greenvalley.com', role: 'STAFF', enterprise: 'Green Valley Res.', status: 'PENDING', lastLogin: 'Invited' },
        { id: 4, name: 'Emma Watson', email: 'emma@sunsetheights.au', role: 'VIEWER', enterprise: 'Sunset Heights', status: 'INACTIVE', lastLogin: '2 days ago' },
        { id: 5, name: 'David Miller', email: 'd.miller@heritage.ca', role: 'STAFF', enterprise: 'Heritage Manor', status: 'ACTIVE', lastLogin: '5 mins ago' },
        { id: 6, name: 'Sophie Taylor', email: 'sophie.t@clinic.de', role: 'VIEWER', enterprise: 'Oak Ridge Clinic', status: 'ACTIVE', lastLogin: '1 hour ago' }
    ];
</script>

<div class="w-full">
    <!-- Desktop Table View -->
    <div class="hidden lg:block overflow-x-auto bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        <table class="w-full text-left border-collapse">
            <thead class="sticky top-0 z-10 bg-[#0f172a] shadow-sm">
                <tr class="border-b border-white/5">
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">User Profile</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Access Role</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Enterprise</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Activity</th>
                    <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.03]">
                {#each users as user, i}
                    <tr class="group {i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'} hover:bg-purple-500/[0.03] transition-all duration-300">
                        <td class="px-6 py-5">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full border border-white/10 group-hover:border-purple-500/50 transition-colors shrink-0 overflow-hidden bg-slate-800">
                                    <img src={testImg} alt={user.name} class="w-full h-full object-cover" />
                                </div>
                                <div class="flex flex-col gap-0.5">
                                    <span class="text-[14px] font-bold text-slate-200 group-hover:text-purple-300 transition-colors tracking-tight">{user.name}</span>
                                    <span class="text-[11px] font-medium text-slate-500">{user.email}</span>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-5">
                            <RoleBadge role={user.role as any} />
                        </td>
                        <td class="px-6 py-5">
                            <span class="text-sm font-bold text-slate-400">{user.enterprise}</span>
                        </td>
                        <td class="px-6 py-5">
                            <StatusBadge status={user.status as any} />
                        </td>
                        <td class="px-6 py-5">
                            <div class="flex flex-col gap-0.5">
                                <span class="text-[13px] font-bold text-slate-300">{user.lastLogin}</span>
                                <span class="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">Last Log</span>
                            </div>
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
    <div class="lg:hidden flex flex-col gap-4">
        {#each users as user}
            <UserCard {user} avatar={testImg} />
        {/each}
    </div>
</div>
