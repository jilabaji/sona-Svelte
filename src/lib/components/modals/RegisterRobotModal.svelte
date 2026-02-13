<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
	import testImg from '$lib/assets/test.jpg';

	let { isOpen = $bindable(false) } = $props();

	let robotName = $state('');
	let serialNumber = $state('RC-AUTO-4921-X');
	let robotType = $state('Companion');
	let status = $state('Active');
	let enterprise = $state('');
	let manufacturerInfo = $state('');

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Registering robot:', { robotName, serialNumber, robotType, status, enterprise, manufacturerInfo });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Register New Robot" 
	width="760px"
>
	<form onsubmit={handleSubmit} class="modal-content">
		<div class="modal-grid">
			<!-- Left Column -->
			<div class="grid-col-left">
				<div class="input-group">
					<label>Robot Photo Upload</label>
					<div class="upload-box">
						<div class="upload-blur" style="background-image: url({testImg});"></div>
						<div class="upload-content">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
							<span>Upload Photo</span>
						</div>
					</div>
				</div>

				<div class="input-group">
					<label>Real-time Tracking Map</label>
					<div class="map-box">
						<div class="map-overlay" style="background-image: url({testImg}); opacity: 0.05;"></div>
						<div class="map-content">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
							<span>MAP INTERFACE OFFLINE</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column -->
			<div class="grid-col-right">
				<div class="input-group">
					<label for="serial-number">Serial Number</label>
					<input type="text" id="serial-number" value={serialNumber} readonly class="readonly-input" />
				</div>

				<div class="input-group">
					<label for="robot-type">Robot Type</label>
					<div class="select-wrapper">
						<select id="robot-type" bind:value={robotType}>
							<option>Companion</option>
							<option>Medical</option>
							<option>Security</option>
							<option>Sanitization</option>
						</select>
					</div>
				</div>

				<div class="input-group">
					<label>Status Toggle</label>
					<div class="status-pill active-status">
						<span class="dot"></span>
						Active
					</div>
				</div>

				<div class="input-group">
					<label for="assigned-enterprise">Assigned Enterprise</label>
					<div class="select-wrapper">
						<select id="assigned-enterprise" bind:value={enterprise}>
							<option value="" disabled selected>Select Enterprise...</option>
							<option>St. Mary Care Home</option>
							<option>Green Valley Res.</option>
							<option>Sunset Heights</option>
						</select>
					</div>
				</div>

				<div class="input-group">
					<label for="manufacturer-info">Manufacturer Information</label>
					<textarea id="manufacturer-info" bind:value={manufacturerInfo} placeholder="Enter technical specifications..."></textarea>
				</div>
			</div>
		</div>

		<footer class="modal-footer">
			<Button variant="secondary" onclick={closeModal}>Cancel</Button>
			<Button type="submit">Save Changes</Button>
		</footer>
	</form>
</Modal>

<style>
	.modal-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		margin-bottom: 32px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 20px;
	}

	.input-group:last-child {
		margin-bottom: 0;
	}

	label {
		font-size: 0.85rem;
		font-weight: 600;
		color: #94a3b8;
	}

	input[type="text"],
	select,
	textarea {
		width: 100%;
		background: #020617;
		border: 1px solid #1f2937;
		border-radius: 12px;
		padding: 12px 14px;
		color: #e5e7eb;
		font-size: 0.95rem;
		outline: none;
		transition: all 0.2s ease;
		font-family: inherit;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: #6366f1;
		box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
	}

	.readonly-input {
		color: #64748b !important;
		cursor: not-allowed;
		background: rgba(2, 6, 23, 0.5) !important;
	}

	textarea {
		height: 100px;
		resize: none;
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
		font-size: 0.7rem;
		color: #64748b;
		pointer-events: none;
	}

	select {
		appearance: none;
		cursor: pointer;
	}

	/* Upload Box */
	.upload-box {
		height: 180px;
		border: 2px dashed rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.03);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.2s ease;
	}

	.upload-box:hover {
		border-color: #6366f1;
		background: rgba(99, 102, 241, 0.05);
	}

	.upload-blur {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(20px);
		opacity: 0.1;
	}

	.upload-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		color: #94a3b8;
		font-weight: 500;
	}

	/* Map Box */
	.map-box {
		height: 180px;
		background: #020617;
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.map-overlay {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(10px);
	}

	.map-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		color: #64748b;
		font-size: 0.8125rem;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	/* Status Pill */
	.status-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-radius: 12px;
		font-size: 0.875rem;
		font-weight: 700;
		width: fit-content;
	}

	.active-status {
		background: rgba(34, 197, 94, 0.15);
		color: #22c55e;
	}

	.dot {
		width: 6px;
		height: 6px;
		background: currentColor;
		border-radius: 50%;
		box-shadow: 0 0 8px currentColor;
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		gap: 16px;
		margin-top: 8px;
	}

	@media (max-width: 760px) {
		.modal-grid {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
