<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import testImg from '$lib/assets/test.jpg';

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

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeModal();
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Creating user:', { name, email, role, permissions });
		closeModal();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div 
		class="modal-overlay" 
		transition:fade={{ duration: 250 }}
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Enter' && closeModal()}
		role="button"
		tabindex="-1"
	>
		<div class="decorative-blur" style="background-image: url({testImg});"></div>
		
		<div 
			class="modal-card" 
			transition:scale={{ duration: 200, start: 0.95 }}
			onclick={(e) => e.stopPropagation()}
			onkeydown={() => {}}
			role="dialog"
			tabindex="0"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<header class="modal-header">
				<div class="header-top">
					<h2 id="modal-title">Create New User</h2>
					<button class="close-btn" onclick={closeModal} aria-label="Close modal">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
					</button>
				</div>
				<p class="modal-subtitle">Configure system access and administrative roles.</p>
			</header>

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
					<button type="button" class="btn-discard" onclick={closeModal}>Discard</button>
					<button type="submit" class="btn-submit">Create User Account</button>
				</footer>
			</form>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(2, 6, 23, 0.75);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

	.decorative-blur {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		filter: blur(80px);
		opacity: 0.06;
		pointer-events: none;
	}

	.modal-card {
		width: 480px;
		max-width: 100%;
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 24px;
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
		padding: 32px;
		position: relative;
		z-index: 1000;
	}

	.modal-header {
		margin-bottom: 28px;
	}

	.header-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.close-btn {
		background: transparent;
		border: none;
		color: #64748b;
		cursor: pointer;
		transition: color 0.2s;
		display: flex;
		align-items: center;
		padding: 4px;
	}

	.close-btn:hover {
		color: #e5e7eb;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #e5e7eb;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.modal-subtitle {
		font-size: 0.875rem;
		color: #64748b;
		margin: 0;
	}

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

	.btn-discard {
		background: transparent;
		border: none;
		color: #64748b;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: color 0.2s;
	}

	.btn-discard:hover {
		color: #94a3b8;
	}

	.btn-submit {
		background: linear-gradient(135deg, #6366f1, #7c83ff);
		border: none;
		border-radius: 14px;
		padding: 14px 24px;
		color: white;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 0 25px rgba(99, 102, 241, 0.35);
	}

	.btn-submit:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
		box-shadow: 0 4px 30px rgba(99, 102, 241, 0.45);
	}

	.btn-submit:active {
		transform: translateY(0);
	}

	@media (max-width: 480px) {
		.form-row {
			grid-template-columns: 1fr;
		}
		
		.permissions-grid {
			grid-template-columns: 1fr;
		}

		.modal-card {
			padding: 24px;
		}
	}
</style>
