<script lang="ts">
    import Card from '../ui/Card.svelte';
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
	const fleetData = [45, 62, 85, 110, 124];
</script>

<Card className="p-7">
	<div class="mb-8">
		<h3 class="text-lg font-bold text-slate-100">Fleet Growth</h3>
        <p class="text-sm text-slate-500 font-medium">Monthly active robot fleet count</p>
	</div>
    
	<div class="h-[200px] relative flex flex-col justify-end">
		<div class="flex justify-between items-end h-full px-2 relative z-10">
			{#each fleetData as val, i}
				<div class="flex flex-col items-center gap-3 w-10 group cursor-pointer">
					<div class="w-full h-[140px] flex items-end justify-center relative">
						<div 
                            class="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg rounded-b-sm transition-all duration-1000 ease-out group-hover:scale-x-110 group-hover:brightness-110 shadow-[0_0_20px_rgba(99,102,241,0.2)]" 
                            style="height: {(val / 130) * 100}%;"
                        ></div>
                        <!-- Tooltip on hover -->
                        <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] px-2 py-1 rounded pointer-events-none z-20">
                            {val}
                        </div>
					</div>
					<span class="text-[12px] font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">{months[i]}</span>
				</div>
			{/each}
		</div>

		<!-- Background Grid Lines -->
		<div class="absolute inset-0 flex flex-col justify-between py-2.5 pointer-events-none">
			{#each Array(5) as _}
                <div class="w-full h-px bg-white/[0.03]"></div>
            {/each}
		</div>
	</div>
</Card>
