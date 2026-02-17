<script lang="ts">
    import Modal from '../ui/Modal.svelte';
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
        isOpen: boolean;
        log: Log | null;
    };

    let { isOpen = $bindable(), log }: Props = $props();
</script>

<Modal bind:isOpen title="Audit Log Details">
    {#if log}
        <div class="flex flex-col gap-6 p-6">
            <!-- Header Info -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Action Performed</span>
                    <h3 class="text-xl font-extrabold text-white tracking-tight">{log.action}</h3>
                </div>
                <SeverityBadge severity={log.severity} className="w-fit" />
            </div>

            <!-- Grid Details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col gap-1.5">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Actor</span>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span class="text-sm font-bold text-slate-200">{log.actor}</span>
                    </div>
                </div>
                <div class="flex flex-col gap-1.5">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Target Module</span>
                    <span class="text-sm font-bold text-indigo-400">{log.module}</span>
                </div>
                <div class="flex flex-col gap-1.5">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Timestamp</span>
                    <span class="text-sm font-bold text-slate-200">{log.timestamp}</span>
                </div>
                <div class="flex flex-col gap-1.5">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Source IP Address</span>
                    <span class="text-sm font-bold text-slate-500 font-mono tracking-tighter">{log.ip}</span>
                </div>
                {#if log.device}
                <div class="flex flex-col gap-1.5 sm:col-span-2">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Device / User Agent</span>
                    <div class="bg-slate-950/50 border border-white/5 rounded-xl p-3">
                        <span class="text-xs font-medium text-slate-400 font-mono">{log.device}</span>
                    </div>
                </div>
                {/if}
            </div>

            <!-- Description -->
            <div class="flex flex-col gap-2 mt-2">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Extended Log Description</span>
                <div class="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-4">
                    <p class="text-[13px] font-medium text-slate-300 leading-relaxed italic">
                        "{log.description}"
                    </p>
                </div>
            </div>

            <!-- Footer Meta -->
            <div class="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
                <span class="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Log Hash: {Math.random().toString(16).substring(2, 10).toUpperCase()}</span>
                <Button variant="outline" className="h-9 py-0 h-9" onclick={() => isOpen = false}>Dismiss</Button>
            </div>
        </div>
    {/if}
</Modal>
