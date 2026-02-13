<script lang="ts">
</script>

<div class="chart-card health-card">
	<div class="chart-header">
		<div class="header-main">
			<h3 class="chart-title">System Health</h3>
			<span class="chart-subtitle">Last 30 Days</span>
		</div>
		<div class="health-pill-status">
			<span class="pulse-dot-green"></span>
			Optimal
		</div>
	</div>
	
	<!-- Inline Metrics -->
	<div class="health-metrics">
		<div class="metric-pill">Avg Health: <span class="val">82%</span></div>
		<div class="metric-pill">Peak: <span class="val">96%</span></div>
		<div class="metric-pill">Lowest: <span class="val">61%</span></div>
	</div>

	<div class="chart-container health-chart">
		<svg viewBox="0 0 400 150" class="line-svg">
			<defs>
				<linearGradient id="healthLineGradient" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#FB7185" />
					<stop offset="100%" stop-color="#F43F5E" />
				</linearGradient>
				<linearGradient id="healthAreaGradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#F43F5E" stop-opacity="0.18" />
					<stop offset="100%" stop-color="#F43F5E" stop-opacity="0" />
				</linearGradient>
				<radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#F43F5E" stop-opacity="0.2" />
					<stop offset="100%" stop-color="#F43F5E" stop-opacity="0" />
				</radialGradient>
			</defs>
			
			<!-- Radial glow background -->
			<circle cx="200" cy="75" r="100" fill="url(#radialGlow)" opacity="0.4" />
			
			<!-- Grid Lines -->
			<g class="chart-grid">
				<line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.04)" />
				<line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.04)" />
				<line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.04)" />
				<line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.04)" />
			</g>

			<!-- Area Fill -->
			<path 
				d="M0,80 C50,90 100,50 150,60 C200,70 250,110 300,75 C350,30 400,60 L400,150 L0,150 Z" 
				fill="url(#healthAreaGradient)" 
				class="chart-area"
			/>
			
			<!-- Smooth Bezier Line -->
			<path 
				d="M0,80 C50,90 100,50 150,60 C200,70 250,110 300,75 C350,30 400,60" 
				fill="none" 
				stroke="url(#healthLineGradient)" 
				stroke-width="3"
				stroke-linecap="round"
				class="health-line-path"
			/>
			
			<!-- Data Points -->
			<g class="chart-points">
				<circle cx="50" cy="88" r="4" class="point" />
				<circle cx="150" cy="60" r="4" class="point" />
				<circle cx="250" cy="100" r="4" class="point" />
				<circle cx="350" cy="40" r="4" class="point" />
			</g>
		</svg>
	</div>
</div>

<style>
	.health-card {
		border-radius: 20px;
		background: linear-gradient(145deg, #0f172a, #020617);
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		padding: 28px;
	}

	.health-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 35px 80px rgba(0, 0, 0, 0.55);
	}

	.chart-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 24px;
	}

	.chart-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #e5e7eb;
		margin: 0;
	}

	.chart-subtitle {
		display: block;
		font-size: 0.75rem;
		color: #64748b;
		margin-top: 4px;
	}

	.health-pill-status {
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(34, 197, 94, 0.15);
		color: #22c55e;
		border-radius: 999px;
		padding: 6px 12px;
		font-size: 0.8125rem;
		font-weight: 600;
	}

	.pulse-dot-green {
		width: 6px;
		height: 6px;
		background: #22c55e;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
		animation: health-pulse 2s infinite;
	}

	@keyframes health-pulse {
		0% { opacity: 0.5; transform: scale(0.9); }
		50% { opacity: 1; transform: scale(1.1); }
		100% { opacity: 0.5; transform: scale(0.9); }
	}

	.health-metrics {
		display: flex;
		gap: 12px;
		margin-bottom: 24px;
	}

	.metric-pill {
		font-size: 0.75rem;
		color: #94a3b8;
		background: rgba(255, 255, 255, 0.04);
		padding: 4px 10px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.metric-pill .val {
		color: #e5e7eb;
		font-weight: 600;
		margin-left: 4px;
	}

	.chart-container {
		height: 200px;
		position: relative;
	}

	.line-svg {
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	.health-line-path {
		filter: drop-shadow(0 0 8px rgba(244, 63, 94, 0.4));
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: drawPath 1.5s ease-out forwards;
	}

	@keyframes drawPath {
		to { stroke-dashoffset: 0; }
	}

	.chart-area {
		opacity: 0;
		animation: fadeIn 1s ease-out 0.5s forwards;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.point {
		fill: #f43f5e;
		stroke: rgba(244, 63, 94, 0.3);
		stroke-width: 4px;
		transition: all 0.2s;
		cursor: pointer;
	}

	.point:hover {
		r: 6;
		stroke-width: 6px;
	}

	.health-card:hover .health-line-path {
		filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.6));
	}
</style>
