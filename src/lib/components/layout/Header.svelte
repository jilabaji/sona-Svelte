<script lang="ts">
	import testImg from '$lib/assets/test.jpg';
	let { children } = $props();
</script>

<header class="top-header">
	<div class="header-left">
		<div class="health-pill">
			<span class="pulse-dot"></span>
			System Health: Optimal
		</div>
	</div>
	<div class="header-right">
		{@render children?.()}
		<div class="admin-profile">
			<div class="profile-info">
				<span class="admin-name">Master Admin</span>
				<span class="admin-role">System Root</span>
			</div>
			<div class="avatar-container">
				<img src={testImg} alt="Admin" class="avatar" />
			</div>
		</div>
	</div>
</header>

<style>
	.top-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 48px;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.health-pill {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 16px;
		background: rgba(34, 197, 94, 0.1);
		border: 1px solid rgba(34, 197, 94, 0.2);
		border-radius: 99px;
		color: #22c55e;
		font-size: 0.8125rem;
		font-weight: 600;
	}

	.pulse-dot {
		width: 8px;
		height: 8px;
		background: #22c55e;
		border-radius: 50%;
		box-shadow: 0 0 10px #22c55e;
		animation: dot-pulse 2s infinite;
	}

	@keyframes dot-pulse {
		0% { transform: scale(0.95); opacity: 0.5; }
		50% { transform: scale(1.1); opacity: 1; }
		100% { transform: scale(0.95); opacity: 0.5; }
	}

	.admin-profile {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.profile-info {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.admin-name {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.admin-role {
		font-size: 0.75rem;
		color: #64748b;
		font-weight: 500;
	}

	.avatar-container {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 2px;
		background: linear-gradient(135deg, #6366f1, #7c83ff);
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid #0f172a;
	}
</style>
