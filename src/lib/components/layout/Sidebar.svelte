<script lang="ts">
	import { page } from '$app/state';

	const navItems = [
		{ 
            name: 'Dashboard', 
            path: '/dashboard',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`
        },
		{ 
            name: 'Robots Fleet', 
            path: '/robots',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`
        },
		{ 
            name: 'Enterprises', 
            path: '/enterprises',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4Z"/><path d="M5 21V10.85"/><path d="M19 21V10.85"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>`
        },
		{ 
            name: 'User Management', 
            path: '/users',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        }
	];
</script>

<aside class="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-[#0b1220]/80 backdrop-blur-xl border-r border-white/5 z-[100] transition-all duration-300">
	<div class="flex flex-col h-full px-4 py-8">
		<!-- Sidebar Header -->
		<div class="flex items-center gap-3.5 mb-10 px-2">
			<div class="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center justify-center">
				<div class="w-4 h-4 bg-white/20 rounded-sm backdrop-blur-sm"></div>
			</div>
			<span class="text-lg font-bold tracking-tight text-white">RoboCare <span class="text-indigo-400">Admin</span></span>
		</div>

		<!-- Navigation -->
		<nav class="flex flex-col gap-2 flex-1">
			{#each navItems as item}
				{@const isActive = page.url.pathname === item.path}
				<a 
                    href={item.path} 
                    class="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 {isActive ? 'bg-indigo-500/10 text-white shadow-[inset_0_0_12px_rgba(99,102,241,0.05)] border border-indigo-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent'}"
                >
                    <span class="transition-colors {isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}">
                        {@html item.icon}
                    </span>
					<span class="text-[14.5px] font-semibold">{item.name}</span>
					{#if isActive}
						<div class="ml-auto w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
					{/if}
				</a>
			{/each}
		</nav>

		<!-- Sidebar Footer -->
		<div class="mt-auto pt-6 border-t border-white/5">
			<a href="/login" class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 font-semibold transition-all duration-200 rounded-xl hover:bg-red-400/5 group text-[14.5px]">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
				Sign Out
			</a>
		</div>
	</div>
</aside>
