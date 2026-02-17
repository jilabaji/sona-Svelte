<script lang="ts">
    type Event = {
        title: string;
        time: string;
        description: string;
        type: 'info' | 'warning' | 'success' | 'danger' | 'error';
        onclick?: () => void;
    };

    type Props = {
        events: Event[];
        className?: string;
    };

    let { events, className = '' }: Props = $props();

    const colors = {
        info: 'bg-blue-500 shadow-blue-500/40',
        warning: 'bg-amber-500 shadow-amber-500/40',
        success: 'bg-green-500 shadow-green-500/40',
        danger: 'bg-red-500 shadow-red-500/40',
        error: 'bg-red-500 shadow-red-500/40'
    };
</script>

<div class="space-y-8 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-white/10 {className}">
    {#each events as event}
        <div 
            class="relative pl-10 group {event.onclick ? 'cursor-pointer' : ''}"
            onclick={event.onclick}
        >
            <!-- Timeline Dot -->
            <div class="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-slate-900 z-10 {colors[event.type || 'info']} shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            
            <div class="flex flex-col gap-1.5">
                <div class="flex items-center justify-between gap-4">
                    <h4 class="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{event.title}</h4>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-tighter whitespace-nowrap">{event.time}</span>
                </div>
                <p class="text-xs font-medium text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{event.description}</p>
            </div>
            
            <!-- Hover highlight background -->
            <div class="absolute -inset-x-2 -inset-y-3 bg-white/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
    {/each}
</div>
