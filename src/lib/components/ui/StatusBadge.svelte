<script lang="ts">
    type Status = 'ACTIVE' | 'WARNING' | 'DANGER' | 'MAINTENANCE' | 'OFFLINE' | 'PENDING' | 'INACTIVE' | 'SUSPENDED';
    type Props = {
        status: Status;
        className?: string;
    };

    let { status, className = '' }: Props = $props();

    const variants = {
        ACTIVE: 'bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_12px_rgba(34,197,94,0.15)]',
        WARNING: 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
        DANGER: 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_12px_rgba(239,68,68,0.15)]',
        MAINTENANCE: 'bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
        OFFLINE: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
        PENDING: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]',
        INACTIVE: 'bg-slate-800 text-slate-500 border-white/5',
        SUSPENDED: 'bg-red-950/30 text-red-400 border-red-900/40'
    };
</script>

<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all duration-300 {variants[status]} {className}">
    <span class="w-1.5 h-1.5 rounded-full bg-current {status === 'ACTIVE' || status === 'PENDING' ? 'animate-pulse' : ''}"></span>
    {status}
</div>
