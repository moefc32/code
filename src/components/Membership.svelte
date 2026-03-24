<script>
    import { Users } from 'lucide-svelte';

    export let discord;
    export let dataLoading;
</script>

{#if !dataLoading && discord.length}
    <div class="flex flex-col my-3 w-full">
        <h2 class="pb-2 text-lg text-center border-b-[1px] border-gray-300">
            Currently a Proud
            <span class="hidden sm:inline">Community</span>
            Member of
        </h2>
        <div
            class="flex flex-wrap justify-center items-center gap-4 -mx-2 pt-3"
        >
            {#if !dataLoading}
                {#each discord as item, i}
                    <div class="tooltip tooltip-bottom">
                        <div class="tooltip-content">
                            <div class="flex flex-col gap-1 px-3 py-2 w-28">
                                <span class="a line-clamp-2">
                                    {item.name}
                                </span>
                                <span class="flex justify-center items-center gap-1 text-gray-400 text-sm">
                                    <Users size={12} />
                                    {Intl.NumberFormat('en', {
                                        notation: 'compact',
                                    })
                                        .format(item.member)
                                        .toLowerCase()}
                                </span>
                            </div>
                        </div>
                        <div
                            class="bg-contain! w-20 border-1 border-gray-300 aspect-square rounded-2xl shadow-lg"
                            style="background: url({item.image}) center center no-repeat;"
                        ></div>
                    </div>
                {/each}
            {:else}
                {#each Array(3) as _, i}
                    <div
                        class="mt-4 px-2 w-full md:w-1/2 lg:w-1/3"
                        data-aos="fade-up"
                    >
                        <div
                            class="card px-4 bg-gray-200 w-full h-[95px] border-1 border-gray-300 shadow-lg animate-pulse"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
{/if}
