<script lang="ts">
	import DashboardLayout from '$lib/components/layout/DashboardLayout.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import UserTable from '$lib/components/tables/UserTable.svelte';
	import CreateUserModal from '$lib/components/modals/CreateUserModal.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let showInviteModal = $state(false);
</script>

<svelte:head>
	<title>User Management | RoboCare Admin</title>
</svelte:head>

<DashboardLayout>
	<Header>
		<Button onclick={() => showInviteModal = true}>
			<span class="btn-icon">+</span>
			Invite User
		</Button>
	</Header>

	<div class="content-body">
		<section class="page-intro">
			<h1 class="page-title">User Management</h1>
			<p class="page-subtitle">Configure system access and administrative roles.</p>
		</section>

		<div class="user-management-grid">
			<div class="table-container">
				<UserTable />
			</div>

			<aside class="role-overview">
				<div class="glass-card">
					<h3 class="card-title">Role Overview</h3>
					<div class="role-list">
						<div class="role-stat">
							<span class="role-name">Master Admins</span>
							<span class="role-count">4</span>
						</div>
						<div class="role-stat">
							<span class="role-name">Enterprise Admins</span>
							<span class="role-count">12</span>
						</div>
						<div class="role-stat">
							<span class="role-name">CXO / Viewers</span>
							<span class="role-count">8</span>
						</div>
					</div>
					<div class="card-footer">
						<p>Total system users: 24</p>
					</div>
				</div>
			</aside>
		</div>
	</div>
</DashboardLayout>

<CreateUserModal bind:isOpen={showInviteModal} />

<style>
	.page-title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 8px;
		letter-spacing: -0.01em;
	}

	.page-subtitle {
		font-size: 1rem;
		color: #94a3b8;
		margin-bottom: 40px;
	}

	.user-management-grid {
		display: grid;
		grid-template-columns: 1fr 300px;
		gap: 32px;
		align-items: start;
	}

	.glass-card {
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 24px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 24px;
		color: #e5e7eb;
	}

	.role-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 24px;
	}

	.role-stat {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 12px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.role-name {
		font-size: 0.875rem;
		color: #94a3b8;
	}

	.role-count {
		font-size: 0.9375rem;
		font-weight: 700;
		color: #6366f1;
	}

	.card-footer p {
		font-size: 0.8125rem;
		color: #64748b;
		text-align: center;
	}

	.btn-icon {
		font-size: 1.2rem;
		line-height: 1;
	}

	@media (max-width: 1200px) {
		.user-management-grid {
			grid-template-columns: 1fr;
		}
		
		.role-overview {
			order: -1;
		}
	}
</style>
