<script lang="ts">
    type Props = {
        value?: string[];
        onComplete?: (code: string) => void;
    };

    let { value = $bindable(['', '', '', '', '', '']), onComplete }: Props = $props();
    let inputs = $state<HTMLInputElement[]>([]);

    const handleInput = (e: Event, index: number) => {
        const target = e.target as HTMLInputElement;
        const val = target.value.slice(-1);
        value[index] = val;

        if (val && index < 5) {
            inputs[index + 1].focus();
        }

        if (value.every(v => v !== '') && onComplete) {
            onComplete(value.join(''));
        }
    };

    const handleKeyDown = (e: KeyboardEvent, index: number) => {
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            inputs[index - 1].focus();
        }
    };

    const handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();
        const data = e.clipboardData?.getData('text').slice(0, 6).split('') || [];
        data.forEach((char, i) => {
            if (i < 6) value[i] = char;
        });
        const nextIndex = Math.min(data.length, 5);
        inputs[nextIndex]?.focus();
    };
</script>

<div class="flex justify-center gap-2 sm:gap-3 mb-8">
    {#each value as _, i}
        <input
            type="text"
            inputmode="numeric"
            maxlength="1"
            bind:this={inputs[i]}
            value={value[i]}
            oninput={(e) => handleInput(e, i)}
            onkeydown={(e) => handleKeyDown(e, i)}
            onpaste={handlePaste}
            class="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] bg-slate-900 border border-white/5 rounded-xl text-center text-xl font-bold text-slate-200 outline-none transition-all duration-300 focus:border-indigo-500 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.15)] focus:bg-slate-900/50"
        />
    {/each}
</div>
