<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
    import Input from '../ui/Input.svelte';
    import StatusBadge from '../ui/StatusBadge.svelte';

	let { isOpen = $bindable(false) } = $props();

	let name = $state('');
	let location = $state('');
	let contactPerson = $state('');
	let email = $state('');
	let phone = $state('');
	let status = $state<'ACTIVE' | 'INACTIVE' | 'SUSPENDED'>('ACTIVE');
	let notes = $state('');

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Adding Enterprise:', { name, location, contactPerson, email, phone, status, notes });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Add New Enterprise" 
    subtitle="Register a new care home or clinical partner account."
	width="820px"
>
	<form id="add-enterprise-form" onsubmit={handleSubmit} class="space-y-6 sm:space-y-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
			<!-- Left Column -->
			<div class="space-y-4 sm:space-y-5">
				<Input label="Enterprise Name" placeholder="e.g. St. Mary Care Home" bind:value={name} />
				<Input label="Global Location" placeholder="e.g. London, UK" bind:value={location} />
                
                <div class="space-y-2">
                    <label class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">System Status</label>
                    <div class="h-12 flex items-center gap-3">
                        <button 
                            type="button" 
                            onclick={() => status = 'ACTIVE'}
                            class="flex-1 h-full rounded-xl border transition-all flex items-center justify-center gap-2 {status === 'ACTIVE' ? 'bg-green-500/10 border-indigo-500 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.15)]' : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-500'}"
                        >
                            <span class="w-2 h-2 rounded-full bg-current"></span>
                            <span class="text-xs font-bold uppercase tracking-wider">Active</span>
                        </button>
                        <button 
                            type="button" 
                            onclick={() => status = 'INACTIVE'}
                            class="flex-1 h-full rounded-xl border transition-all flex items-center justify-center gap-2 {status === 'INACTIVE' ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]' : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-500'}"
                        >
                            <span class="w-2 h-2 rounded-full bg-current"></span>
                            <span class="text-xs font-bold uppercase tracking-wider">Inactive</span>
                        </button>
                    </div>
                </div>

                <div class="space-y-2">
					<label for="ent-notes" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Administrative Notes</label>
					<textarea 
                        id="ent-notes" 
                        bind:value={notes} 
                        placeholder="Internal notes about this enterprise partner..."
                        class="w-full h-32 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none font-medium"
                    ></textarea>
				</div>
			</div>

			<!-- Right Column -->
			<div class="space-y-4 sm:space-y-5">
                <div class="p-4 sm:p-5 bg-indigo-500/[0.03] border border-slate-700/50 rounded-2xl mb-2">
                    <h4 class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Main Point of Contact
                    </h4>
                    <div class="space-y-4">
                        <Input label="Full Name" placeholder="Contact person name" bind:value={contactPerson} />
                        <Input label="Email Address" type="email" placeholder="email@enterprise.com" bind:value={email} />
                        <Input label="Phone Number" type="tel" placeholder="+1 (000) 000-0000" bind:value={phone} />
                    </div>
                </div>
			</div>
		</div>
	</form>

    {#snippet footer()}
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" onclick={closeModal} className="w-full sm:w-auto sm:px-8 order-2 sm:order-1">Cancel</Button>
            <Button type="submit" form="add-enterprise-form" className="w-full sm:w-auto sm:px-10 order-1 sm:order-2">Create Account</Button>
        </div>
    {/snippet}
</Modal>
