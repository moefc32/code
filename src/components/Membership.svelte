<script>
    export let discord;
    export let dataLoading;
</script>

{#if !discord || dataLoading}
    <div class="flex flex-col w-full">
        <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
            Community Membership
        </h2>
        <div class="flex flex-wrap justify-center items-center -mx-2">
            {#if !dataLoading}
                {#each discord as item, i}
                    <div
                        class="mt-4 px-2 w-full md:w-1/2 lg:w-1/3"
                        data-aos="fade-up"
                    >
                        <div
                            class="card flex flex-row items-center gap-3 px-4 w-full h-[95px] border-[1px] border-gray-300 shadow-lg"
                            title={item.name}
                        >
                            <div
                                class="bg-contain! w-[75px] min-w-[70px] aspect-square rounded-full border-[1px] border-gray-300"
                                style="background: url({item.image}) center center no-repeat;"
                            ></div>
                            <div
                                class="flex flex-1 flex-col w-full overflow-hidden"
                            >
                                <span class="text-lg truncate w-full">
                                    {item.name}
                                </span>
                                <span class="text-gray-500 text-sm">
                                    {Intl.NumberFormat('en', {
                                        notation: 'compact',
                                    }).format(item.member)}
                                    {item.member > 1 ? 'members' : 'member'}
                                </span>
                            </div>
                        </div>
                    </div>
                {/each}
            {:else}
                {#each Array(3) as _, i}
                    <div
                        class="mt-4 px-2 w-full md:w-1/2 lg:w-1/3"
                        data-aos="fade-up"
                    >
                        <div
                            class="card px-4 bg-gray-200 w-full h-[95px] border-[1px] border-gray-300 shadow-lg animate-pulse"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
{/if}
