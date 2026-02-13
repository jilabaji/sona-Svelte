<script lang="ts">
	import testImg from '$lib/assets/test.jpg';

	const robots = [
		{ id: 'RC-9042', name: 'Alpha Care-V1', type: 'Clinical Assist', status: 'ACTIVE', assigned: 'St. Mary Care Home', location: 'Section A - L2', coords: '40.7128° N, 74.0060° W' },
		{ id: 'RC-8219', name: 'Beta Nurse-X', type: 'Patient Transport', status: 'ACTIVE', assigned: 'Green Valley Res.', location: 'Room 204', coords: '34.0522° N, 118.2437° W' },
		{ id: 'RC-7731', name: 'Gamma Guard', type: 'Security Monitoring', status: 'WARNING', assigned: 'Sunset Heights', location: 'Perimeter West', coords: '41.8781° N, 87.6298° W' },
		{ id: 'RC-6540', name: 'Delta Clean-H', type: 'Sanitization', status: 'ACTIVE', assigned: 'Heritage Manor', location: 'Dining Hall', coords: '29.7604° N, 95.3698° W' },
		{ id: 'RC-5102', name: 'Epsilon Med-Z', type: 'Pharmacy Dispenser', status: 'DANGER', assigned: 'Oak Ridge Clinic', location: 'Pharmacy Lab', coords: '33.4484° N, 112.0740° W' }
	];

	function getStatusClass(status: string) {
		switch (status) {
			case 'ACTIVE': return 'status-active';
			case 'WARNING': return 'status-warning';
			case 'DANGER': return 'status-danger';
			default: return '';
		}
	}
</script>

<div class="table-container">
	<div class="table-card">
		<table class="robot-table">
			<thead>
				<tr>
					<th>Robot Info</th>
					<th>Type</th>
					<th>Status</th>
					<th>Assigned To</th>
					<th>Location</th>
					<th class="text-right">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each robots as robot}
					<tr class="robot-row">
						<td>
							<div class="robot-info-cell">
								<div class="robot-thumb-container">
									<img src={testImg} alt={robot.name} class="robot-thumb" />
								</div>
								<div class="robot-meta">
									<span class="robot-name">{robot.name}</span>
									<span class="robot-id">{robot.id}</span>
								</div>
							</div>
						</td>
						<td>
							<div class="type-badge">
								{robot.type}
							</div>
						</td>
						<td>
							<div class="status-badge {getStatusClass(robot.status)}">
								{robot.status}
							</div>
						</td>
						<td>
							<span class="assigned-text">{robot.assigned}</span>
						</td>
						<td>
							<div class="location-cell">
								<span class="location-name">{robot.location}</span>
								<span class="location-coords">{robot.coords}</span>
							</div>
						</td>
						<td class="text-right">
							<div class="action-links">
								<button class="action-link deactivate">Deactivate</button>
								<button class="action-link delete">Delete</button>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.table-container {
		width: 100%;
		animation: fadeInUp 0.5s ease-out;
	}

	@keyframes fadeInUp {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.table-card {
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 24px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		overflow-x: auto;
	}

	.robot-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.robot-table th {
		padding: 16px;
		font-size: 0.75rem;
		font-weight: 600;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.robot-row {
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
		transition: all 0.2s ease;
	}

	.robot-row:hover {
		background: rgba(255, 255, 255, 0.02);
	}

	.robot-row td {
		padding: 20px 16px;
	}

	.robot-info-cell {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.robot-thumb-container {
		width: 44px;
		height: 44px;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.robot-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.robot-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.robot-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.robot-id {
		font-size: 0.75rem;
		color: #64748b;
	}

	.type-badge {
		font-size: 0.8125rem;
		color: #94a3b8;
		background: rgba(255, 255, 255, 0.05);
		padding: 4px 10px;
		border-radius: 6px;
		width: fit-content;
	}

	.status-badge {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 6px 12px;
		border-radius: 99px;
		width: fit-content;
	}

	.status-active { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
	.status-warning { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
	.status-danger { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

	.assigned-text {
		font-size: 0.875rem;
		color: #94a3b8;
	}

	.location-cell {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.location-name {
		font-size: 0.875rem;
		color: #e5e7eb;
	}

	.location-coords {
		font-size: 0.75rem;
		color: #64748b;
	}

	.action-links {
		display: flex;
		gap: 16px;
		justify-content: flex-end;
	}

	.action-link {
		background: transparent;
		border: none;
		font-size: 0.8125rem;
		font-weight: 600;
		cursor: pointer;
		padding: 0;
		transition: opacity 0.2s;
	}

	.action-link:hover {
		opacity: 0.8;
	}

	.deactivate { color: #f59e0b; }
	.delete { color: #ef4444; }

	.text-right { text-align: right; }
</style>
