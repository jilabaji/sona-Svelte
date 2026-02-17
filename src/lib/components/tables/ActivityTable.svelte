<script lang="ts">
    import SeverityBadge from '../ui/SeverityBadge.svelte';
    import Button from '../ui/Button.svelte';

    type Log = {
        id: string;
        timestamp: string;
        actor: string;
        action: string;
        module: string;
        severity: 'info' | 'success' | 'warning' | 'error';
        ip: string;
        description: string;
        device?: string;
    };

    type Props = {
        logs: Log[];
        onViewDetail: (log: Log) => void;
    };

    let { logs, onViewDetail }: Props = $props();
</script>

<div class="hidden lg:block overflow-x-auto bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl scrollbar-thin scrollbar-thumb-slate-700">
    <table class="w-full text-left border-collapse min-w-[1000px]">
        <thead>
            <tr class="border-b border-white/5 bg-white/[0.02]">
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Timestamp</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Actor</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Action</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Module</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Severity</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">IP Source</th>
                <th class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Operations</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-white/[0.03]">
            {#each logs as log}
                <tr class="group hover:bg-white/[0.04] transition-all duration-300">
                    <td class="px-6 py-5">
                        <span class="text-[13px] font-bold text-slate-400 font-mono tracking-tighter">{log.timestamp}</span>
                    </td>
                    <td class="px-6 py-5">
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform"></div>
                            <span class="text-sm font-bold text-slate-200">{log.actor}</span>
                        </div>
                    </td>
                    <td class="px-6 py-5">
                        <span class="text-sm font-bold text-white tracking-tight">{log.action}</span>
                    </td>
                    <td class="px-6 py-5">
                        <span class="px-2.5 py-1 bg-white/[0.04] border border-white/5 rounded-lg text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none">
                            {log.module}
                        </span>
                    </td>
                    <td class="px-6 py-5">
                        <SeverityBadge severity={log.severity} />
                    </td>
                    <td class="px-6 py-5">
                        <span class="text-[11px] font-semibold text-slate-500 font-mono italic">{log.ip}</span>
                    </td>
                    <td class="px-6 py-5 text-right">
                        <Button 
                            variant="outline" 
                            className="h-8 py-0 px-3 text-[10px] uppercase font-extrabold border-slate-700 hover:border-indigo-500/50"
                            onclick={() => onViewDetail(log)}
                        >
                            Audit
                        </Button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
