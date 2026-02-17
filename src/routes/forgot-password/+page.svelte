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
    <Card>
        <h2 class="text-[1.75rem] font-bold mb-2 text-slate-100 italic tracking-tight">Forgot Password</h2>
        <p class="text-[15px] text-slate-400 mb-8 leading-relaxed">Enter your email to receive OTP.</p>

        <form onsubmit={(e) => { e.preventDefault(); handleSendOtp(); }} class="flex flex-col gap-2">
            <Input label="Email" placeholder="name@company.com" bind:value={email} />
            <Button type="submit">Send OTP</Button>
        </form>

        <div class="text-center mt-8">
            <a href="/login" class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Login
            </a>
        </div>
    </Card>
</AuthLayout>
