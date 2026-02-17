<script lang="ts">
    import { goto } from '$app/navigation';
    import AuthLayout from '$lib/components/auth/AuthLayout.svelte';
    import Card from '$lib/components/ui/Card.svelte';
    import Input from '$lib/components/ui/Input.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let newPassword = $state('');
    let confirmPassword = $state('');

    function handleReset() {
        goto('/login'); 
    }
</script>

<svelte:head>
    <title>Create New Password | RoboCare Admin</title>
</svelte:head>

<AuthLayout>
    <Card className="w-full max-w-[420px]">
        <div class="mb-10 text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white tracking-tight">Create Password</h2>
            <p class="text-sm text-slate-400 mt-2">Set a secure password for your account.</p>
        </div>

        <form onsubmit={(e) => { e.preventDefault(); handleReset(); }} class="space-y-6">
            <div class="space-y-3">
                <Input type="password" label="New Password" placeholder="••••••••" bind:value={newPassword} showPasswordIcon />
                <Input type="password" label="Confirm Password" placeholder="••••••••" bind:value={confirmPassword} showPasswordIcon />
            </div>
            
            <Button type="submit" className="mt-4">Reset Password</Button>
        </form>
    </Card>
</AuthLayout>
