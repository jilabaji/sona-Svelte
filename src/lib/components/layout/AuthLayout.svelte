<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    type Props = {
        children?: any;
    };

    let { children }: Props = $props();
</script>

<main class="auth-layout">
    <div class="background-effects">
        <div class="glow glow-left"></div>
        <div class="glow glow-right"></div>
        <div class="subtle-overlay"></div>
    </div>
    
    <div class="content" in:fade={{ duration: 400 }}>
        {@render children?.()}
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #020617;
        font-family: 'Inter', 'Poppins', sans-serif;
        color: #E5E7EB;
        overflow: hidden;
    }

    .auth-layout {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 1rem;
        background: #020617;
    }

    .background-effects {
        position: fixed;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
    }

    .glow {
        position: absolute;
        width: 50vw;
        height: 50vw;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.08;
    }

    .glow-left {
        top: 20%;
        left: -10%;
        background: radial-gradient(circle, #6366F1 0%, transparent 70%);
    }

    .glow-right {
        bottom: 10%;
        right: -10%;
        background: radial-gradient(circle, #8B5CF6 0%, transparent 70%);
    }

    .subtle-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(15, 23, 42, 0) 0%, #020617 100%);
    }

    .content {
        position: relative;
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
