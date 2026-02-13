<script lang="ts">
	let { children, onclick, type = "button", variant = "primary", class: className = "" } = $props();

	const variants = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		danger: 'btn-danger',
		ghost: 'btn-ghost'
	};
</script>

<button {type} class="btn {variants[variant]} {className}" {onclick}>
	{@render children()}
</button>

<style>
	.btn {
		border-radius: 12px;
		padding: 12px 22px;
		font-size: 0.9375rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		border: none;
		outline: none;
	}

	.btn-primary {
		background: linear-gradient(135deg, #6366f1, #7c83ff);
		color: white;
		box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
	}

	.btn-primary:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
		box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
	}

	.btn-secondary {
		background: #1f2937;
		color: #94a3b8;
	}

	.btn-secondary:hover {
		background: #273244;
		color: #e5e7eb;
	}

	.btn-danger {
		background: rgba(239, 68, 68, 0.1);
		color: #ef4444;
		border: 1px solid rgba(239, 68, 68, 0.2);
	}

	.btn-danger:hover {
		background: rgba(239, 68, 68, 0.2);
	}

	.btn-ghost {
		background: transparent;
		color: #64748b;
	}

	.btn-ghost:hover {
		color: #e5e7eb;
		background: rgba(255, 255, 255, 0.05);
	}

	.btn:active {
		transform: translateY(0);
	}
</style>
