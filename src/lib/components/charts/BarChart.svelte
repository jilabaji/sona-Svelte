<script lang="ts">
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
	const fleetData = [45, 62, 85, 110, 124];
</script>

<div class="chart-card">
	<div class="chart-header">
		<h3 class="chart-title">Fleet Growth</h3>
	</div>
	<div class="chart-container fleet-chart">
		<div class="bar-grid">
			{#each fleetData as val, i}
				<div class="bar-col">
					<div class="bar-wrapper">
						<div class="bar" style="height: {(val / 130) * 100}%;">
							<div class="bar-gradient"></div>
						</div>
					</div>
					<span class="bar-label">{months[i]}</span>
				</div>
			{/each}
		</div>
		<!-- Background Grid Lines -->
		<div class="chart-grid-lines">
			<span></span><span></span><span></span><span></span>
		</div>
	</div>
</div>

<style>
	.chart-card {
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 18px;
		padding: 28px;
		transition: all 0.3s ease;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.chart-header {
		margin-bottom: 32px;
	}

	.chart-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #e5e7eb;
		margin: 0;
	}

	.chart-container {
		height: 200px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.bar-grid {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		height: 100%;
		padding: 0 10px;
		position: relative;
		z-index: 2;
	}

	.bar-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		width: 40px;
	}

	.bar-wrapper {
		width: 100%;
		height: 140px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.bar {
		width: 100%;
		border-radius: 8px 8px 2px 2px;
		position: relative;
		transition: height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.bar-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, #6366f1, #7c83ff);
		border-radius: inherit;
		box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
	}

	.bar-label {
		font-size: 0.75rem;
		color: #64748b;
		font-weight: 500;
	}

	.chart-grid-lines {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 0;
		pointer-events: none;
	}

	.chart-grid-lines span {
		width: 100%;
		height: 1px;
		background: rgba(255, 255, 255, 0.03);
	}
</style>
