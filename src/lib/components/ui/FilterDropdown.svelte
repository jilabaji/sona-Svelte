<script lang="ts">
    type Option = { label: string; value: string };
    type Props = {
        label?: string;
        options: Option[];
        value?: string;
        className?: string;
    };

    let { label = 'Filter', options, value = $bindable(''), className = '' }: Props = $props();
</script>

<div class="flex flex-col gap-1.5 {className}">
    <select 
        bind:value={value}
        class="h-11 px-4 bg-slate-900/50 border border-white/5 rounded-xl text-sm text-slate-300 outline-none focus:border-indigo-500/50 transition-all cursor-pointer hover:bg-slate-900/80"
    >
        <option value="">{label}: All</option>
        {#each options as option}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>
</div>
