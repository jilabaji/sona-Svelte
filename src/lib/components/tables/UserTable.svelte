<script lang="ts">
	import testImg from '$lib/assets/test.jpg';

	const users = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Master Admin', status: 'Active' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Enterprise Admin', status: 'Active' },
		{ id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'CXO', status: 'Inactive' }
	];

	function getStatusClass(status: string) {
		return status === 'Active' ? 'status-active' : 'status-inactive';
	}
</script>

<div class="table-container">
	<div class="table-card">
		<table class="user-table">
			<thead>
				<tr>
					<th>User Info</th>
					<th>Role</th>
					<th>Status</th>
					<th class="text-right">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each users as user}
					<tr class="user-row">
						<td>
							<div class="user-info-cell">
								<div class="avatar-container">
									<img src={testImg} alt={user.name} class="avatar" />
								</div>
								<div class="user-meta">
									<span class="user-name">{user.name}</span>
									<span class="user-email">{user.email}</span>
								</div>
							</div>
						</td>
						<td>
							<div class="role-badge">
								{user.role}
							</div>
						</td>
						<td>
							<div class="status-badge {getStatusClass(user.status)}">
								{user.status}
							</div>
						</td>
						<td class="text-right">
							<div class="action-links">
								<button class="action-link edit">Edit</button>
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
	}

	.user-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.user-table th {
		padding: 16px;
		font-size: 0.75rem;
		font-weight: 600;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.user-row {
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
		transition: all 0.2s ease;
	}

	.user-row:hover {
		background: rgba(255, 255, 255, 0.02);
	}

	.user-row td {
		padding: 20px 16px;
	}

	.user-info-cell {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.avatar-container {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.user-meta {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.user-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.user-email {
		font-size: 0.8125rem;
		color: #64748b;
	}

	.role-badge {
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
	.status-inactive { background: rgba(255, 255, 255, 0.05); color: #64748b; }

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

	.edit { color: #6366f1; }
	.delete { color: #ef4444; }

	.text-right { text-align: right; }
</style>
