<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    type Props = {
        isOpen: boolean;
        onclose?: () => void;
        title: string;
        subtitle?: string;
        children: any;
        footer?: any;
        width?: string;
    };

    let { isOpen = $bindable(), onclose, title, subtitle, children, footer, width = "480px" }: Props = $props();

    function handleClose() {
        if (onclose) {
            onclose();
        } else {
            isOpen = false;
        }
    }

    $effect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape' && isOpen) handleClose();
    }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
    <!-- Overlay -->
    <div 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4"
        transition:fade={{ duration: 200 }}
        onclick={handleClose}
        onkeydown={(e) => e.key === 'Enter' && handleClose()}
        role="button"
        tabindex="-1"
    >
        <!-- Modal Card -->
        <div 
            class="relative w-full flex flex-col max-h-[95vh] rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style="max-width: {width};"
            transition:scale={{ duration: 200, start: 0.95, easing: quintOut }}
            onclick={(e) => e.stopPropagation()}
            onkeydown={() => {}}
            role="dialog"
            tabindex="0"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <!-- Sticky Header -->
            <header class="sticky top-0 z-20 bg-slate-900/95 backdrop-blur border-b border-slate-700 p-4 sm:p-6 flex items-start justify-between gap-4">
                <div class="flex flex-col gap-1">
                    <h2 id="modal-title" class="text-lg sm:text-xl font-bold text-white tracking-tight">{title}</h2>
                    {#if subtitle}
                        <p class="text-xs sm:text-sm font-medium text-slate-400">{subtitle}</p>
                    {/if}
                </div>
                <button 
                    class="p-2 -mr-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-xl transition-all" 
                    onclick={handleClose} 
                    aria-label="Close modal"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </header>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                <div class="space-y-6 sm:space-y-8 pb-[env(safe-area-inset-bottom)]">
                    {@render children()}
                </div>
            </div>

            <!-- Sticky Footer -->
            {#if footer}
                <footer class="sticky bottom-0 z-20 bg-slate-900/90 backdrop-blur border-t border-slate-700 p-4 sm:px-8 sm:py-6 flex items-center justify-end gap-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
                    {@render footer()}
                </footer>
            {/if}
        </div>
    </div>
{/if}

<style>
    /* Custom scrollbar for better visuals */
    .scrollbar-thin::-webkit-scrollbar {
        width: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
        background: #334155;
        border-radius: 10px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
        background: transparent;
    }
</style>
