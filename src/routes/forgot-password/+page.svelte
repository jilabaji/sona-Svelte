<script lang="ts">
    import { goto } from '$app/navigation';
    import AuthLayout from '$lib/components/auth/AuthLayout.svelte';
    import Card from '$lib/components/ui/Card.svelte';
    import Input from '$lib/components/ui/Input.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let email = $state('');

    function handleSendOtp() {
        goto('/otp'); 
    }
</script>

<svelte:head>
    <title>Forgot Password | RoboCare Admin</title>
</svelte:head>

<AuthLayout>
    <Card className="w-full max-w-[420px]">
        <div class="mb-8 text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white tracking-tight">Forgot Password</h2>
            <p class="text-sm text-slate-400 mt-1">Enter your email to receive OTP.</p>
        </div>

        <form onsubmit={(e) => { e.preventDefault(); handleSendOtp(); }} class="space-y-6">
            <Input label="Email Address" placeholder="name@company.com" bind:value={email} />
            <Button type="submit" className="mt-4">Send OTP</Button>
        </form>

        <div class="text-center mt-8">
            <a href="/login" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Login
            </a>
        </div>
    </Card>
</AuthLayout>
