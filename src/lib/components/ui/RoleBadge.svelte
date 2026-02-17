<script lang="ts">
    type Role = 'MASTER ADMIN' | 'ENTERPRISE ADMIN' | 'STAFF' | 'VIEWER';

    type Props = {
        role: Role;
        className?: string;
    };

    let { role, className = '' }: Props = $props();

    const variants = {
        'MASTER ADMIN': 'bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]',
        'ENTERPRISE ADMIN': 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]',
        'STAFF': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        'VIEWER': 'bg-slate-500/10 text-slate-400 border-slate-500/20'
    };
</script>

<div class="inline-flex items-center px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold uppercase tracking-widest {variants[role]} {className}">
    {role}
</div>
