<script>
    export let techStacks;
    export let dataLoading;
</script>

<section
    class="mb-5 px-3 pt-[120px] pb-5 bg-[linear-gradient(to_bottom_left,rgba(33,150,243,0.75),rgba(76,175,80,0.75))] bg-fixed text-white text-center h-[250px]"
></section>

<div class="flex flex-col items-center gap-4 mx-12 -mt-36">
    <div class="avatar">
        <div class="w-44 border-white border-4 rounded-full">
            <img src="/og.png" alt="Faizal Chan." />
        </div>
    </div>
    <div class="flex flex-col items-center gap-1">
        <div class="text-3xl">Faizal Chan.</div>
        <div class="text-gray-500">UX Engineer, Web Developer</div>
    </div>
    <hr class="my-1 bg-gray-300 w-[50px] h-[5px] border-0" />
    <div class="flex flex-wrap justify-center gap-[2px] max-w-[500px]">
        {#if !dataLoading}
            {#each techStacks as item, i}
                <span
                    class="badge {item.dark ? 'text-black' : 'text-white'}"
                    style="background: {item.color};"
                >
                    {item.name}
                </span>
            {/each}
        {:else}
            {#each Array(9) as _, i}
                <span
                    class="badge bg-gray-200 w-24 border-[1px] border-gray-300 animate-pulse"
                >
                    &nbsp;
                </span>
            {/each}
        {/if}
    </div>
</div>
