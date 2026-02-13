<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';

	let { isOpen = $bindable(false) } = $props();

	let name = $state('');
	let email = $state('');
	let role = $state('Master Admin');
	let permissions = $state([
		{ id: 'view_reports', label: 'View Reports', enabled: true },
		{ id: 'manage_robots', label: 'Manage Robots', enabled: true },
		{ id: 'assign_enterprises', label: 'Assign Enterprises', enabled: false },
		{ id: 'system_config', label: 'System Config', enabled: false },
		{ id: 'manage_billing', label: 'Manage Billing', enabled: false },
		{ id: 'view_logs', label: 'View Logs', enabled: true }
	]);

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Creating user:', { name, email, role, permissions });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Create New User" 
	subtitle="Configure system access and administrative roles."
>
	<form onsubmit={handleSubmit} class="modal-form">
		<div class="form-row">
			<div class="input-group">
				<label for="full-name">Full Name</label>
				<input type="text" id="full-name" bind:value={name} placeholder="John Doe" required />
			</div>
			<div class="input-group">
				<label for="email-address">Email Address</label>
				<input type="email" id="email-address" bind:value={email} placeholder="john@company.com" required />
			</div>
		</div>

		<div class="input-group">
			<label for="role-select">Assign Role</label>
			<div class="select-wrapper">
				<select id="role-select" bind:value={role}>
					<option>Master Admin</option>
					<option>Enterprise Admin</option>
					<option>CXO</option>
				</select>
			</div>
		</div>

		<div class="permissions-section">
			<label>System Permissions</label>
			<div class="permissions-grid">
				{#each permissions as perm}
					<label class="permission-card" class:active={perm.enabled}>
						<div class="checkbox-wrapper">
							<input type="checkbox" bind:checked={perm.enabled} />
							<div class="custom-checkbox"></div>
						</div>
						<span class="permission-label">{perm.label}</span>
					</label>
				{/each}
			</div>
		</div>

		<footer class="modal-footer">
			<Button variant="ghost" onclick={closeModal}>Discard</Button>
			<Button type="submit">Create User Account</Button>
		</footer>
	</form>
</Modal>

<style>
	.modal-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #94a3b8;
	}

	input[type="text"],
	input[type="email"],
	select {
		width: 100%;
		background: #020617;
		border: 1px solid #1f2937;
		border-radius: 12px;
		padding: 12px 14px;
		color: #e5e7eb;
		font-size: 0.95rem;
		outline: none;
		transition: all 0.2s ease;
	}

	input:focus,
	select:focus {
		border-color: #6366f1;
		box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
	}

	.select-wrapper {
		position: relative;
	}

	.select-wrapper::after {
		content: '▼';
		position: absolute;
		right: 14px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 0.75rem;
		color: #64748b;
		pointer-events: none;
	}

	select {
		appearance: none;
		cursor: pointer;
	}

	.permissions-section {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.permissions-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	.permission-card {
		background: #020617;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		padding: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.permission-card:hover {
		border-color: rgba(99, 102, 241, 0.4);
		transform: translateY(-1px);
	}

	.permission-card.active {
		border-color: rgba(99, 102, 241, 0.3);
		background: rgba(99, 102, 241, 0.03);
	}

	.checkbox-wrapper {
		position: relative;
		width: 18px;
		height: 18px;
	}

	.checkbox-wrapper input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.custom-checkbox {
		position: absolute;
		inset: 0;
		background: #0f172a;
		border: 1px solid #1f2937;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.checkbox-wrapper input:checked ~ .custom-checkbox {
		background: #6366f1;
		border-color: #6366f1;
	}

	.checkbox-wrapper input:checked ~ .custom-checkbox::after {
		content: '';
		position: absolute;
		left: 6px;
		top: 2px;
		width: 4px;
		height: 8px;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}

	.permission-label {
		font-size: 0.8125rem;
		color: #e5e7eb;
		font-weight: 500;
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 16px;
		margin-top: 12px;
	}

	@media (max-width: 480px) {
		.form-row {
			grid-template-columns: 1fr;
		}
		
		.permissions-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
