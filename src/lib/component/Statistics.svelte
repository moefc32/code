<script>
    import { Github } from 'lucide-svelte';

    export let chartCanvas;
</script>

<div class="card flex-col gap-6 p-6 bg-black text-white w-full">
    <h2 class="pb-2 text-lg text-center border-b-[1px] border-gray-300">
        Project Statistics
    </h2>
    <div class="flex flex-col md:flex-row gap-3 w-full">
        <div class="flex-1 p-6 bg-white w-full aspect-3/1 rounded-md">
            <canvas bind:this={chartCanvas}></canvas>
        </div>
        <div
            class="flex flex-col justify-between gap-6 w-full md:w-1/2 lg:w-5/12 xl:w-1/3"
        >
            <img
                class="block w-full"
                src="https://github-readme-stats.vercel.app/api?username=moefc32&amp;rank_icon=github&amp;layout=compact&amp;theme=blueberry"
                alt="GitHub statistics"
            />
            <a
                href="https://github.com/moefc32"
                class="btn btn-primary"
                target="_blank"
            >
                <Github size={16} /> View more on GitHub
            </a>
        </div>
    </div>
</div>
