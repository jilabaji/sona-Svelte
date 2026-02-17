<script lang="ts">
    import Card from '../ui/Card.svelte';
</script>

<Card className="p-7" hover>
	<div class="flex justify-between items-start mb-6">
		<div>
			<h3 class="text-lg font-bold text-slate-100">System Health</h3>
			<span class="text-xs font-semibold text-slate-500">Fleet performance - Last 30 Days</span>
		</div>
		<div class="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[12px] font-bold">
			<span class="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
			Optimal
		</div>
	</div>
	
	<!-- Inline Metrics -->
	<div class="flex gap-3 mb-8">
		<div class="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[11px] text-slate-400 font-medium">
            Avg Health: <span class="text-slate-100 font-bold ml-1">82%</span>
        </div>
		<div class="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[11px] text-slate-400 font-medium">
            Peak: <span class="text-slate-100 font-bold ml-1">96%</span>
        </div>
		<div class="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[11px] text-slate-400 font-medium">
            Lowest: <span class="text-slate-100 font-bold ml-1">61%</span>
        </div>
	</div>

	<div class="h-[180px] relative">
		<svg viewBox="0 0 400 150" class="w-full h-full overflow-visible">
			<defs>
				<linearGradient id="healthLineGradient" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#FB7185" />
					<stop offset="100%" stop-color="#F43F5E" />
				</linearGradient>
				<linearGradient id="healthAreaGradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#F43F5E" stop-opacity="0.15" />
					<stop offset="100%" stop-color="#F43F5E" stop-opacity="0" />
				</linearGradient>
			</defs>
			
			<!-- Grid Lines -->
			<g class="stroke-white/[0.03]">
				<line x1="0" y1="30" x2="400" y2="30" />
				<line x1="0" y1="60" x2="400" y2="60" />
				<line x1="0" y1="90" x2="400" y2="90" />
				<line x1="0" y1="120" x2="400" y2="120" />
			</g>

			<!-- Area Fill -->
			<path 
				d="M0,80 C50,90 100,50 150,60 C200,70 250,110 300,75 C350,30 400,60 L400,150 L0,150 Z" 
				fill="url(#healthAreaGradient)" 
                class="animate-[fadeIn_1s_ease-out_0.5s_forwards] opacity-0"
			/>
			
			<!-- Smooth Bezier Line -->
			<path 
				d="M0,80 C50,90 100,50 150,60 C200,70 250,110 300,75 C350,30 400,60" 
				fill="none" 
				stroke="url(#healthLineGradient)" 
				stroke-width="3"
				stroke-linecap="round"
                class="[stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_2s_ease-out_forwards] filter drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]"
			/>
			
			<!-- Data Points -->
			<g class="transition-all">
				<circle cx="50" cy="88" r="4" class="fill-rose-500 stroke-rose-500/30 stroke-[4px] cursor-pointer hover:r-6 hover:stroke-[6px]" />
				<circle cx="150" cy="60" r="4" class="fill-rose-500 stroke-rose-500/30 stroke-[4px] cursor-pointer hover:r-6 hover:stroke-[6px]" />
				<circle cx="250" cy="100" r="4" class="fill-rose-500 stroke-rose-500/30 stroke-[4px] cursor-pointer hover:r-6 hover:stroke-[6px]" />
				<circle cx="350" cy="40" r="4" class="fill-rose-500 stroke-rose-500/30 stroke-[4px] cursor-pointer hover:r-6 hover:stroke-[6px]" />
			</g>
		</svg>
	</div>
</Card>

<style>
    @keyframes drawPath {
		to { stroke-dashoffset: 0; }
	}
    @keyframes fadeIn {
		to { opacity: 1; }
	}
</style>
