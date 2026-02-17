<script lang="ts">
    import Input from '../ui/Input.svelte';
    import Button from '../ui/Button.svelte';
    import { validateEmail } from '../../utils/validators';

    type Props = {
        loading?: boolean;
        onsubmit?: (data: { email: string }) => void;
    };

    let { loading = false, onsubmit }: Props = $props();
    
    let email = $state('');
    let error = $state<string | null>(null);

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        error = validateEmail(email);
        
        if (!error && onsubmit) {
            onsubmit({ email });
        }
    };
</script>

<form onsubmit={handleSubmit} class="email-form">
    <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        name="email"
        bind:value={email}
        {error}
        required
    />

    <Button type="submit" {loading} className="submit-btn" children={() => "Send OTP"} />
</form>

<style>
    .email-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        margin-top: 1rem;
    }
</style>
