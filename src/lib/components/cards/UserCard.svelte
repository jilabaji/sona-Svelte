<script lang="ts">
    import RoleBadge from '../ui/RoleBadge.svelte';
    import StatusBadge from '../ui/StatusBadge.svelte';
    import ActionButtons from '../ui/ActionButtons.svelte';

    type User = {
        name: string;
        email: string;
        role: any;
        status: any;
        enterprise: string;
        lastLogin: string;
    };

    type Props = {
        user: User;
        avatar: string;
    };

    let { user, avatar }: Props = $props();
</script>

<div class="group bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex flex-col gap-5 hover:border-purple-500/30 transition-all duration-300">
    <div class="flex items-start justify-between">
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full border-2 border-indigo-500/50 p-0.5 shrink-0 overflow-hidden shadow-lg group-hover:border-purple-500 transition-colors">
                <img src={avatar} alt={user.name} class="w-full h-full rounded-full object-cover" />
            </div>
            <div class="flex flex-col">
                <h3 class="font-bold text-white tracking-tight leading-tight">{user.name}</h3>
                <span class="text-xs font-medium text-slate-500 mb-1">{user.email}</span>
                <RoleBadge role={user.role} />
            </div>
        </div>
        <StatusBadge status={user.status} />
    </div>

    <div class="grid grid-cols-2 gap-4 py-3 border-y border-white/[0.03]">
        <div class="flex flex-col gap-0.5">
            <span class="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">Enterprise</span>
            <span class="text-xs font-bold text-slate-300">{user.enterprise}</span>
        </div>
        <div class="flex flex-col gap-0.5">
            <span class="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">Last Activity</span>
            <span class="text-xs font-bold text-slate-300">{user.lastLogin}</span>
        </div>
    </div>

    <div class="flex items-center justify-between gap-3">
        <ActionButtons className="gap-2" />
        <button class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all border border-white/5">
            Login Logs
        </button>
    </div>
</div>
