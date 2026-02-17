<script lang="ts">
    import testImg from '$lib/assets/test.jpg';
    import { fade } from 'svelte/transition';

    type Props = {
        children?: any;
    };

    let { children }: Props = $props();
</script>

<div class="flex min-h-screen w-full font-['Outfit',_inter,_sans-serif] bg-slate-950 text-slate-200">
    <!-- Left Panel: Branding (Hidden on Mobile) -->
    <div class="hidden lg:flex flex-1 relative items-center justify-center p-20 overflow-hidden border-r border-white/5 bg-gradient-to-br from-[#0b1220] to-slate-950">
        <!-- Background Glows -->
        <div class="absolute top-1/5 left-1/10 w-[300px] h-[300px] rounded-full bg-indigo-500/15 blur-[100px] z-0"></div>
        <div class="absolute bottom-1/10 right-1/10 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[100px] z-0"></div>
        
        <div class="relative z-10 max-w-[520px]">
            <div class="flex items-center gap-3 mb-[60px]">
                <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[10px] shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
                <span class="text-2xl font-bold tracking-tight">RoboCare SaaS</span>
            </div>

            <h1 class="text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tighter">
                Intelligent Elder <br /> Care <span class="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent italic">At Scale.</span>
            </h1>

            <p class="text-lg leading-relaxed text-slate-400 mb-20 max-w-[440px]">
                The ultimate AI-powered operating system for modern elderly care facilities. 
                Manage residents, staff, and medical data with futuristic precision.
            </p>

            <div class="inline-flex items-center gap-5 p-4 pl-6 pr-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl">
                <div class="flex -space-x-3">
                    <div class="w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                        <img src={testImg} alt="User" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                        <img src={testImg} alt="User" class="w-full h-full object-cover" />
                    </div>
                    <div class="w-8 h-8 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                        <img src={testImg} alt="User" class="w-full h-full object-cover" />
                    </div>
                </div>
                <p class="text-sm font-medium text-slate-400 m-0">Joined by 50+ leading care homes globally</p>
            </div>
        </div>
    </div>

    <!-- Right Panel: Forms -->
    <div class="flex-1 flex items-center justify-center p-5 sm:p-10 bg-slate-950">
        <div class="w-full flex justify-center" in:fade={{ duration: 400 }}>
            {@render children?.()}
        </div>
    </div>
</div>
