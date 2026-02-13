<script lang="ts">
	import { goto } from '$app/navigation';
	import testImg from '$lib/assets/test.jpg';

	let email = $state('');
	let password = $state('');
	let rememberMe = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Logging in with:', { email, password, rememberMe });
		goto('/dashboard');
	}
</script>

<svelte:head>
	<title>Login | RoboCare SaaS</title>
	<meta name="description" content="Login to RoboCare SaaS admin panel" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="login-container">
	<!-- Left Panel: Branding -->
	<div class="left-panel">
		<!-- Decorative Background -->
		<div class="decorative-blur" style="background-image: url({testImg});"></div>
		
		<!-- Floating Glows -->
		<div class="glow glow-1"></div>
		<div class="glow glow-2"></div>

		<div class="branding-content">
			<div class="logo-block">
				<div class="logo-icon"></div>
				<span class="logo-text">RoboCare SaaS</span>
			</div>

			<h1 class="hero-title">
				Intelligent Elder <br /> Care <span class="accent-text">At Scale.</span>
			</h1>

			<p class="hero-description">
				The ultimate AI-powered operating system for modern elderly care facilities. 
				Manage residents, staff, and medical data with futuristic precision.
			</p>

			<div class="glass-card">
				<div class="avatar-group">
					<div class="avatar-ring">
						<img src={testImg} alt="User" class="avatar" />
					</div>
					<div class="avatar-ring">
						<img src={testImg} alt="User" class="avatar" />
					</div>
					<div class="avatar-ring">
						<img src={testImg} alt="User" class="avatar" />
					</div>
				</div>
				<p class="glass-card-text">Joined by 50+ leading care homes globally</p>
			</div>
		</div>
	</div>

	<!-- Right Panel: Login Form -->
	<div class="right-panel">
		<div class="form-wrapper">
			<div class="form-header">
				<h2 class="form-title">Welcome Back</h2>
				<p class="form-subtitle">Enter your credentials to access the master admin panel.</p>
			</div>

			<form onsubmit={handleSubmit} class="login-form">
				<div class="input-group">
					<label for="email" class="label">Work Email</label>
					<input
						type="text"
						id="email"
						placeholder="name@company.com"
						bind:value={email}
						class="input"
					/>
				</div>

				<div class="input-group">
					<div class="label-row">
						<label for="password" class="label">Password</label>
						<a href="/forgot-password" class="forgot-link">Forgot password?</a>
					</div>
					<input
						type="password"
						id="password"
						placeholder="••••••••"
						bind:value={password}
						class="input"
					/>
				</div>

				<div class="checkbox-group">
					<div class="checkbox-container">
						<input type="checkbox" id="remember" bind:checked={rememberMe} class="checkbox" />
					</div>
					<label for="remember" class="checkbox-label">Keep me signed in for 30 days</label>
				</div>

				<button type="submit" class="submit-btn">
					Sign In to Panel
				</button>

				<p class="footer-text">
					Need a specialized enterprise account? <a href="/contact" class="contact-link">Contact Sales</a>
				</p>
			</form>
		</div>
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Outfit', sans-serif;
		background-color: #020617;
		color: #e5e7eb;
		overflow-x: hidden;
	}

	.login-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 100vh;
		width: 100%;
		background: linear-gradient(135deg, #0b1220 0%, #0f172a 50%, #020617 100%);
		position: relative;
	}

	/* Left Panel Styles */
	.left-panel {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 80px;
		overflow: hidden;
		border-right: 1px solid rgba(255, 255, 255, 0.05);
	}

	.decorative-blur {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 140%;
		height: 140%;
		background-size: cover;
		background-position: center;
		filter: blur(60px);
		opacity: 0.08;
		z-index: 0;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		z-index: 0;
		opacity: 0.15;
	}

	.glow-1 {
		top: 20%;
		left: 10%;
		width: 300px;
		height: 300px;
		background: #6366f1;
		animation: pulse 8s infinite alternate;
	}

	.glow-2 {
		bottom: 10%;
		right: 10%;
		width: 400px;
		height: 400px;
		background: #7c83ff;
		animation: pulse 12s infinite alternate-reverse;
	}

	@keyframes pulse {
		0% { transform: scale(1) translate(0, 0); opacity: 0.1; }
		100% { transform: scale(1.2) translate(10%, 10%); opacity: 0.2; }
	}

	.branding-content {
		position: relative;
		z-index: 1;
		max-width: 540px;
	}

	.logo-block {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 56px;
	}

	.logo-icon {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #6366f1, #7c83ff);
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.2);
		position: relative;
	}

	.logo-icon::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent);
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #e5e7eb;
	}

	.hero-title {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.05;
		margin-bottom: 28px;
		letter-spacing: -0.04em;
		color: #e5e7eb;
	}

	.accent-text {
		background: linear-gradient(to right, #6366f1, #7c83ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
	}

	.hero-description {
		font-size: 1.25rem;
		line-height: 1.6;
		color: #94a3b8;
		margin-bottom: 80px;
		max-width: 480px;
	}

	.glass-card {
		display: flex;
		align-items: center;
		gap: 24px;
		padding: 18px 28px;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		width: fit-content;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
	}

	.avatar-group {
		display: flex;
		margin-left: 8px;
	}

	.avatar-ring {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: #0f172a;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: -14px;
		padding: 2px;
	}

	.avatar-ring:first-child {
		margin-left: 0;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.glass-card-text {
		font-size: 1rem;
		font-weight: 500;
		color: #94a3b8;
		margin: 0;
	}

	/* Right Panel Styles */
	.right-panel {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px;
		z-index: 1;
		background: radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.03), transparent 50%);
	}

	.form-wrapper {
		width: 100%;
		max-width: 420px;
		animation: fadeInUp 0.8s ease-out;
	}

	@keyframes fadeInUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.form-header {
		margin-bottom: 48px;
	}

	.form-title {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 14px;
		color: #e5e7eb;
		letter-spacing: -0.02em;
	}

	.form-subtitle {
		font-size: 1.125rem;
		color: #94a3b8;
		line-height: 1.5;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.label-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.label {
		font-size: 0.9375rem;
		font-weight: 600;
		color: #e5e7eb;
	}

	.forgot-link {
		font-size: 0.875rem;
		font-weight: 500;
		color: #6366f1;
		text-decoration: none;
		transition: all 0.2s;
	}

	.forgot-link:hover {
		color: #7c83ff;
		text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
	}

	.input {
		width: 100%;
		background-color: #0f172a;
		border: 1px solid #1f2937;
		border-radius: 12px;
		padding: 16px 18px;
		color: #e5e7eb;
		font-size: 1rem;
		outline: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.input::placeholder {
		color: #64748b;
	}

	.input:focus {
		border-color: #6366f1;
		background-color: #111a30;
		box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.2);
		transform: translateY(-1px);
	}

	.checkbox-group {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.checkbox {
		width: 20px;
		height: 20px;
		border-radius: 6px;
		accent-color: #6366f1;
		cursor: pointer;
		margin: 0;
	}

	.checkbox-label {
		font-size: 0.9375rem;
		color: #94a3b8;
		cursor: pointer;
		user-select: none;
		transition: color 0.2s;
	}

	.checkbox-label:hover {
		color: #e5e7eb;
	}

	.submit-btn {
		width: 100%;
		padding: 18px;
		background: linear-gradient(90deg, #6366f1, #7c83ff);
		border: none;
		border-radius: 14px;
		color: white;
		font-size: 1.125rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 25px rgba(99, 102, 241, 0.35);
		margin-top: 12px;
		position: relative;
		overflow: hidden;
	}

	.submit-btn:hover {
		filter: brightness(1.1);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
	}

	.submit-btn:active {
		transform: translateY(0);
	}

	.footer-text {
		text-align: center;
		font-size: 0.9375rem;
		color: #64748b;
		margin-top: 24px;
	}

	.contact-link {
		color: #94a3b8;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 4px;
		transition: all 0.2s;
	}

	.contact-link:hover {
		color: #e5e7eb;
		text-decoration-color: #6366f1;
	}

	/* Responsiveness */
	@media (max-width: 1024px) {
		.login-container {
			grid-template-columns: 1fr;
		}

		.left-panel {
			display: none;
		}

		.right-panel {
			padding: 40px 24px;
			background: linear-gradient(135deg, #0b1220 0%, #0f172a 50%, #020617 100%);
		}

		.form-wrapper {
			max-width: 480px;
			background: rgba(15, 23, 42, 0.4);
			padding: 48px;
			border-radius: 32px;
			border: 1px solid rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(24px);
			-webkit-backdrop-filter: blur(24px);
			box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
		}
	}

	@media (max-width: 480px) {
		.right-panel {
			padding: 24px 16px;
		}

		.form-wrapper {
			padding: 32px 20px;
			background: transparent;
			border: none;
			backdrop-filter: none;
			box-shadow: none;
		}
		
		.form-title {
			font-size: 1.85rem;
		}

		.hero-title {
			font-size: 2.75rem;
		}
	}
</style>
