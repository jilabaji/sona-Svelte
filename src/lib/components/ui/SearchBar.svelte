<script lang="ts">
    type Props = {
        value?: string;
        placeholder?: string;
        className?: string;
    };

    let { value = $bindable(''), placeholder = 'Search robots...', className = '' }: Props = $props();
</script>

<div class="relative group {className}">
    <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
    <input 
        type="text"
        bind:value={value}
        {placeholder}
        class="w-full h-11 pl-11 pr-4 bg-slate-900/50 border border-white/5 rounded-xl text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
    />
</div>
