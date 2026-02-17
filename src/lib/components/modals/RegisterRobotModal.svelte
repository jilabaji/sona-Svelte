<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
    import Input from '../ui/Input.svelte';
    import StatusBadge from '../ui/StatusBadge.svelte';
	import testImg from '$lib/assets/test.jpg';

	let { isOpen = $bindable(false) } = $props();

	let robotName = $state('');
	let serialNumber = $state('RC-AUTO-4921-X');
	let robotType = $state('Clinical Assist');
	let status = $state<'ACTIVE' | 'WARNING' | 'DANGER' | 'MAINTENANCE'>('ACTIVE');
	let enterprise = $state('');
	let notes = $state('');

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Registering robot:', { robotName, serialNumber, robotType, status, enterprise, notes });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Register New Robot" 
    subtitle="Add a new care robot to the fleet management system."
	width="820px"
>
	<form id="register-robot-form" onsubmit={handleSubmit} class="space-y-6 sm:space-y-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
			<!-- Left Column: Media & Specs -->
			<div class="space-y-4 sm:space-y-6">
                <!-- Photo Upload Area -->
				<div class="space-y-2">
					<label class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Robot Identity Photo</label>
					<div class="group relative h-40 sm:h-48 border-2 border-dashed border-slate-700 hover:border-indigo-500/50 rounded-2xl bg-slate-800/50 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 overflow-hidden">
						<div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                            <img src={testImg} alt="Preview" class="w-full h-full object-cover blur-sm" />
                        </div>
                        <div class="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
                            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            </div>
							<span class="text-xs sm:text-sm font-bold text-slate-400">Drag & Drop or Click to Upload</span>
                            <span class="text-[10px] text-slate-600 font-bold uppercase tracking-tight">PNG, JPG up to 10MB</span>
						</div>
					</div>
				</div>

                <div class="space-y-2">
					<label for="robot-notes" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Technical Notes / Specs</label>
					<textarea 
                        id="robot-notes" 
                        bind:value={notes} 
                        placeholder="Sensors, battery capacity, hardware version..."
                        class="w-full h-32 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none shadow-sm"
                    ></textarea>
				</div>
			</div>

			<!-- Right Column: Form Fields -->
			<div class="space-y-4 sm:space-y-5">
				<Input label="Robot Fleet Name" placeholder="e.g. Alpha Care-V1" bind:value={robotName} />
				
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Serial Identifier</label>
                        <div class="h-12 flex items-center px-4 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-400 font-mono text-xs select-none">
                            {serialNumber}
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Current Status</label>
                        <div class="h-12 flex items-center bg-slate-800/30 px-3 rounded-xl border border-slate-700">
                            <StatusBadge {status} />
                        </div>
                    </div>
                </div>

				<div class="space-y-2">
					<label for="robot-type" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Robot Model / Type</label>
					<select 
                        id="robot-type" 
                        bind:value={robotType}
                        class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer shadow-sm"
                    >
						<option>Clinical Assist</option>
						<option>Patient Transport</option>
						<option>Security Monitoring</option>
						<option>Sanitization</option>
                        <option>Pharmacy Dispenser</option>
					</select>
				</div>

				<div class="space-y-2">
					<label for="assigned-enterprise" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Associated Enterprise</label>
					<select 
                        id="assigned-enterprise" 
                        bind:value={enterprise}
                        class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer shadow-sm"
                    >
						<option value="" disabled selected>Select active enterprise...</option>
						<option>St. Mary Care Home</option>
						<option>Green Valley Res.</option>
						<option>Sunset Heights</option>
                        <option>Heritage Manor</option>
					</select>
				</div>
			</div>
		</div>
	</form>

    {#snippet footer()}
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" onclick={closeModal} className="w-full sm:w-auto sm:px-8 order-2 sm:order-1">Cancel</Button>
            <Button type="submit" form="register-robot-form" className="w-full sm:w-auto sm:px-10 order-1 sm:order-2">Register Robot</Button>
        </div>
    {/snippet}
</Modal>
