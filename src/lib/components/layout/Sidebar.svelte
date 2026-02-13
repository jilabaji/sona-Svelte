<script lang="ts">
	import testImg from '$lib/assets/test.jpg';
	import { page } from '$app/state';

	const navItems = [
		{ name: 'Dashboard', path: '/dashboard' },
		{ name: 'Robots', path: '/robots' },
		{ name: 'Enterprises', path: '/enterprises' },
		{ name: 'Users', path: '/users' }
	];
</script>

<aside class="sidebar">
	<div class="sidebar-blur" style="background-image: url({testImg});"></div>
	
	<div class="sidebar-content">
		<div class="sidebar-header">
			<div class="logo-box">
				<div class="logo-glow"></div>
			</div>
			<span class="logo-text">RoboCare Admin</span>
		</div>

		<nav class="sidebar-nav">
			{#each navItems as item}
				<a href={item.path} class="nav-item" class:active={page.url.pathname === item.path}>
					<span class="nav-icon"></span>
					{item.name}
					{#if page.url.pathname === item.path}
						<div class="active-glow"></div>
					{/if}
				</a>
			{/each}
		</nav>

		<div class="sidebar-footer">
			<a href="/login" class="sign-out-btn">
				<span class="sign-out-icon"></span>
				Sign Out
			</a>
		</div>
	</div>
</aside>

<style>
	.sidebar {
		width: 240px;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(15, 23, 42, 0.4);
		border-right: 1px solid rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(20px);
		z-index: 100;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.sidebar-blur {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200%;
		height: 200%;
		background-size: cover;
		background-position: center;
		filter: blur(80px);
		opacity: 0.05;
		z-index: 0;
	}

	.sidebar-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 32px 16px;
	}

	.sidebar-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 48px;
		padding: 0 8px;
	}

	.logo-box {
		width: 32px;
		height: 32px;
		background: linear-gradient(135deg, #6366f1, #7c83ff);
		border-radius: 8px;
		position: relative;
		box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
	}

	.logo-glow {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
	}

	.logo-text {
		font-size: 1.125rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: #e5e7eb;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-grow: 1;
	}

	.nav-item {
		width: 100%;
		background: transparent;
		border: 1px solid transparent;
		padding: 12px 16px;
		border-radius: 12px;
		color: #94a3b8;
		font-size: 0.9375rem;
		font-weight: 500;
		text-align: left;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 12px;
		transition: all 0.2s ease;
		position: relative;
		text-decoration: none;
	}

	.nav-icon {
		width: 18px;
		height: 18px;
		background: rgba(148, 163, 184, 0.1);
		border-radius: 4px;
	}

	.nav-item:hover {
		color: #e5e7eb;
		background: rgba(255, 255, 255, 0.03);
	}

	.nav-item.active {
		background: rgba(99, 102, 241, 0.1);
		border-color: rgba(99, 102, 241, 0.2);
		color: #e5e7eb;
	}

	.active-glow {
		position: absolute;
		right: 12px;
		width: 6px;
		height: 6px;
		background: #6366f1;
		border-radius: 50%;
		box-shadow: 0 0 10px #6366f1;
	}

	.sidebar-footer {
		padding-top: 24px;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.sign-out-btn {
		width: 100%;
		background: transparent;
		border: none;
		padding: 12px 16px;
		border-radius: 12px;
		color: #64748b;
		font-size: 0.9375rem;
		font-weight: 500;
		text-align: left;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 12px;
		transition: all 0.2s;
		text-decoration: none;
	}

	.sign-out-btn:hover {
		color: #ef4444;
		background: rgba(239, 68, 68, 0.05);
	}

	@media (max-width: 1024px) {
		.sidebar {
			width: 80px;
		}
		
		.sidebar-header .logo-text, .nav-item span:not(.nav-icon), .sidebar-footer {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.sidebar {
			display: none;
		}
	}
</style>
