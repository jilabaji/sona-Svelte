<script lang="ts">
	import './layout.css';
</script>

<div class="welcome-container">
	<div class="glow"></div>
	<h1>RoboCare SaaS Framework</h1>
	<p class="subtitle">Select a view to explore the futuristic interface:</p>
	
	<div class="links">
		<a href="/login" class="link-card">
			<span class="title">Login Page</span>
			<span class="desc">Enterprise split-layout gate</span>
		</a>
		<a href="/dashboard" class="link-card">
			<span class="title">Admin Dashboard</span>
			<span class="desc">Real-time fleet monitoring</span>
		</a>
		<a href="/robots" class="link-card">
			<span class="title">Fleet Management</span>
			<span class="desc">Robot inventory and status</span>
		</a>
		<a href="/enterprises" class="link-card">
			<span class="title">Partner Enterprises</span>
			<span class="desc">Enterprise accounts & allocation</span>
		</a>
		<a href="/users" class="link-card">
			<span class="title">User Management</span>
			<span class="desc">Roles, permissions & access</span>
		</a>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background-color: #020617;
		color: #e5e7eb;
		font-family: 'Outfit', sans-serif;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.welcome-container {
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
		z-index: -1;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 12px;
		background: linear-gradient(to right, #e5e7eb, #94a3b8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		color: #94a3b8;
		font-size: 1.25rem;
		margin-bottom: 48px;
	}

	.links {
		display: flex;
		gap: 24px;
		justify-content: center;
	}

	.link-card {
		padding: 24px 32px;
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 260px;
	}

	.link-card:hover {
		transform: translateY(-8px);
		border-color: #6366f1;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(99, 102, 241, 0.1);
	}

	.title {
		font-size: 1.25rem;
		font-weight: 700;
		color: #e5e7eb;
	}

	.desc {
		font-size: 0.9375rem;
		color: #64748b;
	}

	@media (max-width: 600px) {
		.links {
			flex-direction: column;
			align-items: center;
		}
		
		h1 {
			font-size: 2rem;
		}
	}
</style>
