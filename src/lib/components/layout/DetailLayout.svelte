<script lang="ts">
    import { goto } from '$app/navigation';
    import { fade, fly } from 'svelte/transition';
    import testImg from '$lib/assets/test.jpg';

    type Props = {
        title: string;
        backUrl: string;
        backLabel?: string;
        children?: any;
        actions?: any;
    };

    let { title, backUrl, backLabel = "Back", children, actions }: Props = $props();
</script>

<div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden w-full max-w-full" in:fade={{ duration: 300 }}>
    <!-- Focused Header -->
    <header class="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div class="max-w-[1536px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0 min-w-0">
            <!-- Left Side: Back Nav + Title -->
            <div class="flex items-center gap-4 sm:gap-8">
                <button 
                    onclick={() => goto(backUrl)}
                    class="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 py-2 px-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5"
                    aria-label="Back to {backLabel}"
                >
                    <div class="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.2)] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </div>
                    <span class="text-sm font-bold tracking-tight uppercase hidden sm:block">Back to {backLabel}</span>
                    <span class="text-sm font-bold tracking-tight uppercase sm:hidden">Back</span>
                </button>

                <div class="hidden md:block w-px h-8 bg-white/5"></div>

                <div class="flex flex-col gap-0.5">
                    <h1 class="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">{title}</h1>
                    <div class="flex sm:hidden items-center gap-1.5 mt-0.5">
                        <span class="w-1 h-1 rounded-full bg-indigo-500"></span>
                        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{backLabel} Details</span>
                    </div>
                </div>
            </div>

            <!-- Right Side: User Menu + Actions (Optional) -->
            <div class="flex items-center justify-end gap-3 sm:gap-6">
                {#if actions}
                    <div class="hidden sm:flex items-center gap-4">
                        {@render actions()}
                    </div>
                {/if}

                <div class="flex items-center gap-4 border-l border-white/10 pl-6 h-8">
                    <!-- Notification Bell -->
                    <button class="relative text-slate-400 hover:text-white transition-colors" aria-label="Notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <span class="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
                    </button>

                    <!-- User Entry -->
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full border-2 border-indigo-500 p-[1px] overflow-hidden">
                            <img src={testImg} alt="Admin" class="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Content Wrapper -->
    <main class="w-full max-w-[1536px] mx-auto p-4 sm:p-6 lg:p-10" in:fly={{ y: 20, duration: 400, delay: 100 }}>
        {@render children()}
    </main>
</div>
