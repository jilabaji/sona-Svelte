<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
    import Input from '../ui/Input.svelte';

	let { isOpen = $bindable(false) } = $props();

	let name = $state('');
	let email = $state('');
	let role = $state('VIEWER');
	let enterprise = $state('');
	let notes = $state('');

    const permissions = [
        { id: 'view_fleet', label: 'View Fleet Metrics', checked: true },
        { id: 'manage_robots', label: 'Manage Robots', checked: false },
        { id: 'manage_users', label: 'Manage Users', checked: false },
        { id: 'export_data', label: 'Export Data', checked: false },
    ];

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Inviting User:', { name, email, role, enterprise, notes });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Invite New User" 
    subtitle="Send a platform invitation with specific role and permissions."
	width="640px"
>
	<form id="invite-user-form" onsubmit={handleSubmit} class="space-y-6 sm:space-y-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			<Input label="Full Name" placeholder="e.g. John Doe" bind:value={name} />
			<Input label="Email Address" type="email" placeholder="john@enterprise.com" bind:value={email} />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="user-role" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Assign Role</label>
                <select 
                    id="user-role" 
                    bind:value={role}
                    class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer shadow-sm"
                >
                    <option value="MASTER ADMIN">Master Admin</option>
                    <option value="ENTERPRISE ADMIN">Enterprise Admin</option>
                    <option value="STAFF">Staff</option>
                    <option value="VIEWER">Viewer</option>
                </select>
            </div>

            <div class="space-y-2">
                <label for="assign-ent" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Assign Enterprise</label>
                <select 
                    id="assign-ent" 
                    bind:value={enterprise}
                    class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer shadow-sm"
                >
                    <option value="" disabled selected>Select enterprise...</option>
                    <option>St. Mary Care Home</option>
                    <option>Green Valley Res.</option>
                    <option>Global Admin (No association)</option>
                </select>
            </div>
		</div>

        <div class="space-y-3">
            <label class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Permissions Override</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
                {#each permissions as perm}
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <div class="relative flex items-center">
                            <input type="checkbox" class="peer h-5 w-5 appearance-none rounded-md border border-slate-600 bg-slate-900 checked:bg-indigo-500 checked:border-indigo-500 transition-all" checked={perm.checked} />
                            <svg class="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{perm.label}</span>
                    </label>
                {/each}
            </div>
        </div>

        <div class="space-y-2">
            <label for="invite-notes" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Invitation Note (Optional)</label>
            <textarea 
                id="invite-notes" 
                bind:value={notes} 
                placeholder="Message for the user..."
                class="w-full h-24 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none font-medium"
            ></textarea>
        </div>
	</form>

    {#snippet footer()}
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" onclick={closeModal} className="w-full sm:w-auto sm:px-8 order-2 sm:order-1">Discard</Button>
            <Button type="submit" form="invite-user-form" className="w-full sm:w-auto sm:px-10 order-1 sm:order-2">Send Invitation</Button>
        </div>
    {/snippet}
</Modal>
