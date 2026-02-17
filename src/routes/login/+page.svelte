<script lang="ts">
    import { goto } from '$app/navigation';
    import AuthLayout from '$lib/components/auth/AuthLayout.svelte';
    import Card from '$lib/components/ui/Card.svelte';
    import Input from '$lib/components/ui/Input.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let email = $state('');
    let password = $state('');
    let rememberMe = $state(false);

    function handleLogin() {
        goto('/dashboard'); 
    }
</script>

<svelte:head>
    <title>Login | RoboCare Admin</title>
</svelte:head>

<AuthLayout>
    <Card className="w-full max-w-[420px]">
        <div class="mb-10 text-center sm:text-left">
            <h2 class="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p class="text-sm text-slate-400 mt-2">Access your RoboCare admin dashboard.</p>
        </div>

        <form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="space-y-6">
            <div class="space-y-3">
                <Input label="Email Address" placeholder="name@company.com" bind:value={email} />
                <Input type="password" label="Password" placeholder="••••••••" bind:value={password} showPasswordIcon />
            </div>

            <div class="flex justify-between items-center px-1">
                <label class="flex items-center gap-2.5 cursor-pointer group">
                    <div class="relative flex items-center justify-center">
                        <input type="checkbox" bind:checked={rememberMe} class="peer sr-only" />
                        <div class="w-5 h-5 bg-slate-950 border border-white/10 rounded-md transition-all peer-checked:bg-indigo-500 peer-checked:border-indigo-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:left-[7px] after:top-[3px] after:w-[4px] after:h-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45"></div>
                    </div>
                    <span class="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">Stay signed in</span>
                </label>
                <a href="/forgot-password" class="text-sm text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">Forgot Password?</a>
            </div>

            <Button type="submit" className="mt-4">Sign In to Panel</Button>
        </form>

        <p class="text-center mt-8 text-sm text-slate-500 font-medium leading-relaxed">
            Don't have an account? <span class="text-slate-300 font-bold cursor-pointer hover:text-indigo-400 transition-colors ml-1">Request access</span>
        </p>
    </Card>
</AuthLayout>
