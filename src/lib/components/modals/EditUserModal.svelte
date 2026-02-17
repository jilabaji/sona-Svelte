<script lang="ts">
	import Modal from '../ui/Modal.svelte';
	import Button from '../ui/Button.svelte';
    import Input from '../ui/Input.svelte';

	let { isOpen = $bindable(false), user = null } = $props();

    let name = $state(user?.name || '');
	let email = $state(user?.email || '');
	let role = $state(user?.role || 'VIEWER');
	let status = $state(user?.status || 'ACTIVE');

	function closeModal() {
		isOpen = false;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Updating User:', { name, email, role, status });
		closeModal();
	}
</script>

<Modal 
	bind:isOpen 
	onclose={closeModal} 
	title="Edit User Access" 
    subtitle="Update account settings, roles, and system status."
	width="600px"
>
	<form id="edit-user-form" onsubmit={handleSubmit} class="space-y-6 sm:space-y-8">
		<div class="space-y-5">
			<Input label="Full Name" placeholder="e.g. John Doe" bind:value={name} />
			<Input label="Email Address" type="email" placeholder="john@enterprise.com" bind:value={email} />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="edit-role" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Adjust Role</label>
                <select 
                    id="edit-role" 
                    bind:value={role}
                    class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer"
                >
                    <option value="MASTER ADMIN">Master Admin</option>
                    <option value="ENTERPRISE ADMIN">Enterprise Admin</option>
                    <option value="STAFF">Staff</option>
                    <option value="VIEWER">Viewer</option>
                </select>
            </div>

            <div class="space-y-2">
                <label for="edit-status" class="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Account Status</label>
                <select 
                    id="edit-status" 
                    bind:value={status}
                    class="w-full h-12 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all cursor-pointer"
                >
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                    <option value="PENDING">Pending</option>
                    <option value="SUSPENDED">Suspended</option>
                </select>
            </div>
		</div>

        <div class="pt-2">
            <button type="button" class="text-xs font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 uppercase tracking-widest">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                Revoke All Access
            </button>
        </div>
	</form>

    {#snippet footer()}
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" onclick={closeModal} className="w-full sm:w-auto sm:px-8 order-2 sm:order-1">Cancel</Button>
            <Button type="submit" form="edit-user-form" className="w-full sm:w-auto sm:px-10 order-1 sm:order-2">Save Changes</Button>
        </div>
    {/snippet}
</Modal>
