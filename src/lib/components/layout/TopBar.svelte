<script lang="ts">
    import testImg from '$lib/assets/test.jpg';
    import { fade } from 'svelte/transition';

    type Props = {
        title?: string;
        children?: any;
    };

    let { title = "Dashboard", children }: Props = $props();
</script>

<header class="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 lg:px-10">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0">
        <!-- Row 1: Title & Mobile Profile Actions -->
        <div class="flex items-center justify-between w-full sm:w-auto">
            <h2 class="text-lg font-bold text-white tracking-tight" in:fade>{title}</h2>
            
            <!-- Mobile User Actions (Bell + Avatar) -->
            <div class="flex sm:hidden items-center gap-3">
                <button class="relative p-2 text-slate-400" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
                </button>
                <div class="w-9 h-9 rounded-full border-2 border-indigo-500 p-[1px] overflow-hidden">
                    <img src={testImg} alt="Admin" class="w-full h-full rounded-full object-cover" />
                </div>
            </div>
        </div>

        <!-- Row 2 (Mobile) / Right Section (Desktop) -->
        <div class="flex items-center justify-end gap-3 sm:gap-6 w-full sm:w-auto">
            <!-- Action Buttons Area -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 justify-end flex-1 sm:flex-none">
                {@render children?.()}
            </div>

            <!-- Desktop Profile Actions -->
            <div class="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6 h-8">
                <!-- Notification Bell -->
                <button class="relative text-slate-400 hover:text-white transition-colors" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <span class="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
                </button>

                <!-- User Session Card -->
                <button 
                    class="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:bg-slate-700/40 transition-all duration-300 group hover:-translate-y-0.5"
                    aria-label="User profile"
                >
                    <div class="flex flex-col items-end leading-tight">
                        <span class="text-sm font-semibold text-white tracking-tight">Master Admin</span>
                        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden lg:block">System Root</span>
                    </div>
                    <div class="w-8 h-8 rounded-full border-2 border-indigo-500 p-[1px] overflow-hidden group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
                        <img src={testImg} alt="Admin" class="w-full h-full rounded-full object-cover" />
                    </div>
                </button>
            </div>
        </div>
    </div>
</header>
