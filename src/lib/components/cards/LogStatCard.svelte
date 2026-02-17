<script lang="ts">
    type Props = {
        label: string;
        value: string | number;
        icon: any;
        color?: string;
        className?: string;
    };

    let { label, value, icon: Icon, color = 'indigo', className = '' }: Props = $props();

    const colorVariants = {
        indigo: 'text-indigo-400 group-hover:shadow-indigo-500/20',
        success: 'text-green-400 group-hover:shadow-green-500/20',
        warning: 'text-amber-400 group-hover:shadow-amber-500/20',
        danger: 'text-red-400 group-hover:shadow-red-500/20',
        info: 'text-blue-400 group-hover:shadow-blue-500/20'
    };
</script>

<div class="group bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-all duration-300 {className}">
    <div class="flex justify-between items-start mb-4">
        <div class="flex flex-col gap-1">
            <span class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            <div class="text-3xl font-extrabold text-white tracking-tight">
                {value}
            </div>
        </div>
        <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5 {colorVariants[color]} transition-colors group-hover:bg-white/[0.06]">
            {@html Icon}
        </div>
    </div>
    
    <div class="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-transparent to-current opacity-20 {colorVariants[color]} transition-all duration-1000" style="width: 100%"></div>
    </div>
</div>
