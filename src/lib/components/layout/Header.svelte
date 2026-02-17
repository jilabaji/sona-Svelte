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

	<div class="flex items-center gap-6">
		{@render children?.()}
        
        <!-- Notification Bell -->
        <button class="relative p-2 text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span class="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
        </button>

        <!-- Admin Profile -->
		<div class="flex items-center gap-4 pl-4 border-l border-white/10">
			<div class="hidden sm:flex flex-col items-end">
				<span class="text-[14px] font-bold text-slate-100">Master Admin</span>
				<span class="text-[12px] font-medium text-slate-500">System Root</span>
			</div>
			<div class="w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95">
				<img src={testImg} alt="Admin" class="w-full h-full rounded-full object-cover border-2 border-slate-900" />
			</div>
		</div>
	</div>
</header>
