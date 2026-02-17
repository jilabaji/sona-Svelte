<script lang="ts">
	import testImg from '$lib/assets/test.jpg';
    import Badge from '../ui/Badge.svelte';
	let { children } = $props();
</script>

<header class="flex justify-between items-center mb-10 w-full">
	<div class="flex items-center gap-4">
        <!-- System Health Badge -->
		<div class="flex items-center gap-2.5 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[13px] font-semibold">
			<span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </span>
			System Health: Optimal
		</div>
	</div>

	<div class="flex items-center gap-4 sm:gap-6">
		{@render children?.()}
        
        <!-- Notification Bell -->
        <div class="flex items-center h-8 pr-4 sm:pr-6 border-r border-white/5">
            <button class="relative p-2 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110" aria-label="Notifications">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <span class="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
            </button>
        </div>

        <!-- Admin Profile -->
		<button 
            class="group flex items-center gap-3.5 pl-2 sm:pl-3.5 pr-2 py-1.5 sm:py-2 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-indigo-500/10"
            aria-label="Admin Profile: Master Admin"
        >
			<div class="hidden sm:flex flex-col items-end">
				<span class="text-[14px] font-semibold text-slate-100 leading-tight">Master Admin</span>
				<span class="text-[11px] font-medium text-slate-500 mt-0.5 tracking-wide">System Root</span>
			</div>
			<div class="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-br from-indigo-500 to-purple-600 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:scale-105">
				<img 
                    src={testImg} 
                    alt="Master Admin" 
                    class="w-full h-full rounded-full object-cover border-[1.5px] border-slate-900" 
                />
                <!-- Active dot -->
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full shadow-sm"></span>
			</div>
		</button>
	</div>
</header>
