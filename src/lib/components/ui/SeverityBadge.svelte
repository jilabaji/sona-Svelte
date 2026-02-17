<script lang="ts">
    type Severity = 'info' | 'success' | 'warning' | 'error';
    
    type Props = {
        severity: Severity;
        className?: string;
    };

    let { severity, className = '' }: Props = $props();

    const variants = {
        info: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]',
        success: 'bg-green-500/10 text-green-400 border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]',
        warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]',
        error: 'bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
    };
</script>

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border {variants[severity]} {className}">
    <span class="w-1.5 h-1.5 rounded-full mr-1.5 {severity === 'info' ? 'bg-blue-400' : severity === 'success' ? 'bg-green-400' : severity === 'warning' ? 'bg-amber-400' : 'bg-red-400'} animate-pulse"></span>
    {severity}
</span>
