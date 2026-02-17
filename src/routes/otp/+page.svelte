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
    <Card>
        <h2 class="text-[1.75rem] font-bold mb-2 text-slate-100 italic tracking-tight">Verify OTP</h2>
        <p class="text-[15px] text-slate-400 mb-8 leading-relaxed">Enter the 6-digit code sent to your email.</p>

        <form onsubmit={(e) => { e.preventDefault(); handleVerify(); }} class="flex flex-col gap-2">
            <OtpInput bind:value={otpValue} />
            <Button type="submit">Verify Code</Button>
        </form>

        <div class="text-center mt-8">
            <p class="text-sm text-slate-500">
                Didn't receive the code? <span class="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 transition-colors">Resend OTP</span>
            </p>
        </div>
    </Card>
</AuthLayout>
