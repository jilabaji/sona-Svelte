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
    <Card>
        <h2 class="text-[1.75rem] font-bold mb-2 text-slate-100 italic tracking-tight">Create Password</h2>
        <p class="text-[15px] text-slate-400 mb-8 leading-relaxed">Set a secure password for your account.</p>

        <form onsubmit={(e) => { e.preventDefault(); handleReset(); }} class="flex flex-col gap-2">
            <Input type="password" label="New Password" placeholder="••••••••" bind:value={newPassword} showPasswordIcon />
            <Input type="password" label="Confirm Password" placeholder="••••••••" bind:value={confirmPassword} showPasswordIcon />
            
            <Button type="submit">Reset Password</Button>
        </form>
    </Card>
</AuthLayout>
