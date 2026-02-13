<script lang="ts">
	import testImg from '$lib/assets/test.jpg';

	const enterprises = [
		{ id: 1, name: 'St. Mary Care Home', location: 'London, UK', contactName: 'Sarah Jenkins', contactEmail: 'sarah.j@stmarys.co.uk', robots: 42, maxRobots: 50, status: 'Active' },
		{ id: 2, name: 'Green Valley Res.', location: 'California, US', contactName: 'Robert Ford', contactEmail: 'r.ford@greenvalley.com', robots: 18, maxRobots: 25, status: 'Active' },
		{ id: 3, name: 'Sunset Heights', location: 'Sydney, AU', contactName: 'Emma Watson', contactEmail: 'emma@sunsetheights.au', robots: 5, maxRobots: 50, status: 'Inactive' },
		{ id: 4, name: 'Heritage Manor', location: 'Ontario, CA', contactName: 'James Bond', contactEmail: 'j.bond@heritagemanor.ca', robots: 29, maxRobots: 40, status: 'Active' },
		{ id: 5, name: 'Oak Ridge Clinic', location: 'Berlin, DE', contactName: 'Hans Muller', contactEmail: 'hans@oakridge.de', robots: 12, maxRobots: 20, status: 'Active' }
	];

	function getStatusClass(status: string) {
		return status === 'Active' ? 'status-active' : 'status-inactive';
	}
</script>

<div class="table-container">
	<div class="table-card">
		<div class="table-wrapper">
			<table class="enterprise-table">
				<thead>
					<tr>
						<th>Name & Location</th>
						<th>Primary Contact</th>
						<th>Robots Active</th>
						<th>Status</th>
						<th class="text-right">Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each enterprises as ent}
						<tr class="ent-row">
							<td>
								<div class="ent-info-cell">
									<div class="ent-thumb">
										<img src={testImg} alt={ent.name} />
									</div>
									<div class="ent-meta">
										<span class="ent-name">{ent.name}</span>
										<span class="ent-location">{ent.location}</span>
									</div>
								</div>
							</td>
							<td>
								<div class="contact-cell">
									<span class="contact-name">{ent.contactName}</span>
									<span class="contact-email">{ent.contactEmail}</span>
								</div>
							</td>
							<td>
								<div class="robots-cell">
									<div class="progress-container">
										<div class="progress-bar">
											<div class="progress-fill" style="width: {(ent.robots / ent.maxRobots) * 100}%"></div>
										</div>
										<span class="progress-value">{ent.robots}</span>
									</div>
									<span class="max-robots">of {ent.maxRobots} capacity</span>
								</div>
							</td>
							<td>
								<div class="status-badge {getStatusClass(ent.status)}">
									{ent.status}
								</div>
							</td>
							<td class="text-right">
								<div class="action-links">
									{#if ent.status === 'Active'}
										<button class="action-link deactivate">Deactivate</button>
									{:else}
										<button class="action-link activate">Activate</button>
									{/if}
									<button class="action-link edit">Edit</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.table-container {
		width: 100%;
		animation: fadeInUp 0.6s ease-out;
	}

	@keyframes fadeInUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.table-card {
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 18px;
		padding: 20px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
		overflow: hidden;
	}

	.table-wrapper {
		overflow-x: auto;
	}

	.enterprise-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		min-width: 800px;
	}

	.enterprise-table th {
		padding: 16px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		color: #64748b;
		letter-spacing: 0.05em;
		background: rgba(255, 255, 255, 0.02);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.ent-row {
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
		transition: all 0.25s ease;
	}

	.ent-row:hover {
		background: rgba(99, 102, 241, 0.06);
		transform: translateY(-2px);
	}

	.ent-row td {
		padding: 20px 16px;
		vertical-align: middle;
	}

	.ent-info-cell {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.ent-thumb {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		border: 2px solid rgba(99, 102, 241, 0.2);
	}

	.ent-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.ent-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.ent-name {
		font-size: 1rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.ent-location {
		font-size: 0.8125rem;
		color: #64748b;
	}

	.contact-cell {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.contact-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.contact-email {
		font-size: 0.8125rem;
		color: #64748b;
	}

	.robots-cell {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 160px;
	}

	.progress-container {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.progress-bar {
		flex-grow: 1;
		height: 6px;
		background: #1f2937;
		border-radius: 6px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #6366f1, #7c83ff);
		border-radius: inherit;
		box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
	}

	.progress-value {
		font-size: 0.8125rem;
		font-weight: 700;
		color: #e5e7eb;
		min-width: 20px;
	}

	.max-robots {
		font-size: 0.75rem;
		color: #64748b;
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		padding: 6px 14px;
		border-radius: 99px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.status-active {
		background: rgba(34, 197, 94, 0.15);
		color: #22c55e;
	}

	.status-inactive {
		background: rgba(239, 68, 68, 0.15);
		color: #ef4444;
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
		transition: all 0.2s;
	}

	.action-link:hover {
		text-decoration: underline;
	}

	.deactivate { color: #ef4444; }
	.activate { color: #22c55e; }
	.edit { color: #7c83ff; }

	.text-right { text-align: right; }

	@media (max-width: 768px) {
		.enterprise-table thead {
			display: none;
		}

		.enterprise-table, .enterprise-table tbody, .enterprise-table tr, .enterprise-table td {
			display: block;
			width: 100%;
			min-width: 0;
		}

		.ent-row {
			background: #0f172a;
			border: 1px solid rgba(255, 255, 255, 0.05);
			border-radius: 16px;
			margin-bottom: 20px;
			padding: 20px;
		}

		.ent-row td {
			padding: 8px 0;
			border: none;
		}

		.ent-row td:first-child {
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			padding-bottom: 16px;
			margin-bottom: 12px;
		}

		.robots-cell {
			width: 100%;
			margin: 12px 0;
		}

		.action-links {
			justify-content: flex-start;
			margin-top: 16px;
		}
	}
</style>
