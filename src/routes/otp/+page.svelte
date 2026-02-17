<script lang="ts">
    import { goto } from '$app/navigation';
    import AuthLayout from '$lib/components/auth/AuthLayout.svelte';
    import Card from '$lib/components/ui/Card.svelte';
    import OtpInput from '$lib/components/ui/OtpInput.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let otpValue = $state(['', '', '', '', '', '']);

    function handleVerify() {
        goto('/reset-password'); 
    }
</script>

<svelte:head>
    <title>Verify OTP | RoboCare Admin</title>
</svelte:head>

<AuthLayout>
    <Card className="w-full max-w-[420px]">
        <div class="mb-10 text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white tracking-tight">Verify OTP</h2>
            <p class="text-sm text-slate-400 mt-2">Enter the 6-digit code sent to your email.</p>
        </div>

        <form onsubmit={(e) => { e.preventDefault(); handleVerify(); }} class="space-y-6">
            <div class="space-y-3">
                <span class="block text-sm font-semibold text-slate-400 pl-1 uppercase tracking-wider text-[11px]">Security Code</span>
                <OtpInput bind:value={otpValue} />
            </div>
            
            <Button type="submit" className="mt-4">Verify Code</Button>
        </form>

        <div class="text-center mt-8">
            <p class="text-sm font-medium text-slate-500">
                Didn't receive the code? <span class="text-indigo-400 font-bold cursor-pointer hover:text-indigo-300 transition-colors ml-1">Resend OTP</span>
            </p>
        </div>
    </Card>
</AuthLayout>
