<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import testImg from '$lib/assets/test.jpg';

	let { isOpen, onclose, children, title, subtitle, width = "480px" } = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div 
		class="modal-overlay" 
		transition:fade={{ duration: 250 }}
		onclick={onclose}
		onkeydown={(e) => e.key === 'Enter' && onclose()}
		role="button"
		tabindex="-1"
	>
		<div class="decorative-blur" style="background-image: url({testImg});"></div>
		
		<div 
			class="modal-card" 
			style="width: {width};"
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
					<h2 id="modal-title">{title}</h2>
					<button class="close-btn" onclick={onclose} aria-label="Close modal">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
					</button>
				</div>
				{#if subtitle}
					<p class="modal-subtitle">{subtitle}</p>
				{/if}
			</header>

			{@render children()}
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(2, 6, 23, 0.78);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
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
		filter: blur(90px);
		opacity: 0.05;
		pointer-events: none;
	}

	.modal-card {
		max-width: 100%;
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 22px;
		box-shadow: 0 40px 100px rgba(0, 0, 0, 0.65);
		padding: 32px;
		position: relative;
		z-index: 1000;
		outline: none;
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
</style>
