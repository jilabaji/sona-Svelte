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
    <Card>
        <h2 class="text-[1.75rem] font-bold mb-2 text-slate-100 italic tracking-tight">Welcome Back</h2>
        <p class="text-[15px] text-slate-400 mb-8 leading-relaxed">Access your RoboCare admin dashboard.</p>

        <form onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <Input label="Email" placeholder="name@company.com" bind:value={email} />
            
            <Input type="password" label="Password" placeholder="••••••••" bind:value={password} showPasswordIcon />

            <div class="flex justify-between items-center mb-6 px-1">
                <label class="flex items-center gap-2 cursor-pointer group">
                    <div class="relative flex items-center justify-center">
                        <input type="checkbox" bind:checked={rememberMe} class="peer sr-only" />
                        <div class="w-[18px] h-[18px] bg-slate-950 border border-white/10 rounded-md transition-all peer-checked:bg-indigo-500 peer-checked:border-indigo-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:left-[6px] after:top-[2px] after:w-[4px] after:height-[8px] after:border-solid after:border-white after:border-r-2 after:border-b-2 after:rotate-45"></div>
                    </div>
                    <span class="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">Stay signed in</span>
                </label>
                <a href="/forgot-password" class="text-[13px] text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">Forgot Password?</a>
            </div>

            <Button type="submit">Sign In to Panel</Button>
        </form>

        <p class="text-center mt-8 text-sm text-slate-500">
            Don't have an account? <span class="text-slate-300 font-semibold cursor-pointer hover:text-indigo-400 transition-colors">Request access</span>
        </p>
    </Card>
</AuthLayout>
