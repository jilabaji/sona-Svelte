<script lang="ts">
    type Props = {
        label?: string;
        type?: string;
        placeholder?: string;
        value?: string;
        error?: string | null;
        name?: string;
        required?: boolean;
        showPasswordIcon?: boolean;
        className?: string;
        id?: string;
    };

    let {
        label = '',
        type = 'text',
        placeholder = '',
        value = $bindable(''),
        error = null,
        name = '',
        required = false,
        showPasswordIcon = false,
        className = '',
        id = ''
    }: Props = $props();

    let isPasswordVisible = $state(false);
    let inputType = $derived(showPasswordIcon ? (isPasswordVisible ? 'text' : 'password') : type);

    const togglePassword = () => {
        isPasswordVisible = !isPasswordVisible;
    };
</script>

<div class="flex flex-col gap-2 w-full mb-5 {className}">
    {#if label}
        <label for={id || name} class="text-sm font-medium text-slate-400 pl-0.5">{label}</label>
    {/if}
    
    <div class="relative flex items-center bg-slate-900 border border-white/5 rounded-xl transition-all duration-300 focus-within:border-indigo-500 focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]">
        <input
            id={id || name}
            {name}
            type={inputType}
            {placeholder}
            bind:value={value}
            class="w-full py-3.5 px-4 bg-transparent border-none outline-none text-slate-200 text-[15px] placeholder:text-slate-600"
        />
        
        {#if showPasswordIcon}
            <button 
                type="button" 
                class="flex items-center px-4 bg-transparent border-none text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
                onclick={togglePassword}
            >
                {#if isPasswordVisible}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                {/if}
            </button>
        {/if}
    </div>
</div>
