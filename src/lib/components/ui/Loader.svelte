<script lang="ts">
    type Props = {
        size?: number;
        color?: string;
        className?: string;
    };

    let { size = 40, color = '#8B5CF6', className = '' }: Props = $props();
</script>

<div class="loader-container {className}">
    <div 
        class="loader" 
        style="width: {size}px; height: {size}px; border-top-color: {color}"
    ></div>
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    .loader {
        border: 3px solid rgba(148, 163, 184, 0.1);
        border-radius: 50%;
        animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
</style>
