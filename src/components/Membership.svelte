<script>
    export let discord;
    export let dataLoading;
</script>

{#if !dataLoading && discord.length}
    <div class="flex flex-col my-6 w-full">
        <h2 class="pb-2 text-lg text-center border-b-[1px] border-gray-300">
            Currently a Community Member of
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-4 -mx-2">
            {#if !dataLoading}
                {#each discord as item, i}
                    <div class="dropdown dropdown-hover mt-4">
                        <div
                            tabindex="0"
                            role="button"
                            class="bg-contain! w-20 aspect-square rounded-full"
                            style="background: url({item.image}) center center no-repeat;"
                        ></div>
                        <div
                            tabindex="-1"
                            class="dropdown-content menu px-2 max-w-full sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 rounded-box z-1"
                        >
                            <div class="">
                                <div
                                    class="card flex flex-row items-center gap-3 px-4 w-[280px] max-w-screen h-16 bg-white border-1 border-gray-300 shadow-lg"
                                    title={item.name}
                                >
                                    <div
                                        class="flex flex-1 flex-col w-full overflow-hidden"
                                    >
                                        <span class="truncate w-full">
                                            {item.name}
                                        </span>
                                        <span class="text-gray-500 text-sm">
                                            {Intl.NumberFormat('en', {
                                                notation: 'compact',
                                            })
                                                .format(item.member)
                                                .toLowerCase()}
                                            {item.member > 1
                                                ? 'members'
                                                : 'member'}
                                        </span>
                                    </div>
                                </div>
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
                            class="card px-4 bg-gray-200 w-full h-[95px] border-1 border-gray-300 shadow-lg animate-pulse"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
{/if}
