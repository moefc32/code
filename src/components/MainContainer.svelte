<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    import { toast } from 'svoast';
    import AOS from 'aos';

    import Banner from '../components/Banner.svelte';
    import resetCurrentPage from '../lib/stores/resetCurrentPage';
    import Membership from '../components/Membership.svelte';
    import Statistics from '../components/Statistics.svelte';
    import GitHubCard from '../components/GitHubCard.svelte';
    import Pagination from '../components/Pagination.svelte';

    // const globalSearchModalEl = document.querySelector('#global-search');
    // const globalSearchModal =
    //   globalSearchModalEl && new bootstrap.Modal(globalSearchModalEl, {});

    let dataLoading = true;
    let chartCanvas = '';
    let techStacks = [];
    let techLanguages = {};
    let discord = [];
    let github = [];
    let pageItems = [];
    let currentPage = null;
    let pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '12', 10);

    // globalSearch: {
    //   query: '',
    //   queryModal: '',
    //   toggle: false,
    //   loading: false,
    //   backend: import.meta.env.PUBLIC_SEARCH_URL,
    //   searchTime: 0,
    //   searchResult: [],
    //   loadData: async function () {
    //     searchResult = [];

    //     try {
    //       if (queryModal) {
    //         loading = true;
    //         const response = await fetch(
    //           `${backend}?q=${queryModal}`
    //         );

    //         searchTime = response.data.data.searchTime;
    //         searchResult = response.data.data.searchResult;
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }

    //     loading = false;
    //   },
    //   open: async function () {
    //     try {
    //       if (query) {
    //         queryModal = query;
    //         query = '';

    //         globalSearchModal.show();
    //         await loadData();
    //       }
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   },
    // }

    function getTotalPages() {
        return Math.ceil(github.length / pageSize);
    }

    function navigate(page, scroll = true) {
        if (page !== currentPage && page >= 1 && page <= getTotalPages()) {
            const urlParams = new URLSearchParams(window.location.search);

            currentPage = page;
            if (currentPage > 1) {
                urlParams.set('page', currentPage);
            } else {
                urlParams.delete('page');
            }

            const newUrl =
                urlParams.toString().length > 0
                    ? `?${urlParams.toString()}`
                    : window.location.pathname;
            history.replaceState(null, '', newUrl);

            if (scroll) {
                setTimeout(() => {
                    const container =
                        document.getElementById('github-container');

                    if (container) {
                        const offset = 100;
                        const top = Math.max(
                            0,
                            window.scrollY +
                                container.getBoundingClientRect().top -
                                offset,
                        );

                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 10);
            }
        }
    }

    onMount(async () => {
        AOS.init();

        try {
            const response = await fetch(import.meta.env.PUBLIC_BACKEND);
            const { data } = await response.json();
            console.log(import.meta.env.PUBLIC_BACKEND)
            console.log(data)

            techStacks = data.techStacks;
            techLanguages = data.techLanguages;
            discord = data.discord;
            github = data.github;
            dataLoading = false;

            const urlParams = new URLSearchParams(window.location.search);
            const pageFromUrl = parseInt(urlParams.get('page'));

            if (
                pageFromUrl &&
                pageFromUrl > 1 &&
                pageFromUrl <= getTotalPages()
            ) {
                currentPage = pageFromUrl;
            } else {
                currentPage = 1;

                urlParams.delete('page');
                history.replaceState(null, '', `?${urlParams.toString()}`);
            }

            const ctx = chartCanvas.getContext('2d');
            const languageChart = new Chart(ctx, {
                type: 'bar',
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                display: false,
                            },
                        },
                    },
                },
                data: {
                    labels: techLanguages.labels,
                    datasets: [
                        {
                            data: techLanguages.counts,
                            backgroundColor: techLanguages.colors,
                        },
                    ],
                },
            });
        } catch (e) {
            console.error(e);
            toast.error(
                'Cannot fetch data from the backend, please try again later!',
            );
        }
    });

    $: {
        if ($resetCurrentPage === true && github.length) {
            navigate(1, false);
            resetCurrentPage.set(null);
        }

        pageItems = github.length
            ? github.slice(
                  (currentPage - 1) * pageSize,
                  (currentPage - 1) * pageSize + pageSize,
              )
            : [];
    }
</script>

<Banner {techStacks} {dataLoading} />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <Membership {discord} {dataLoading} />
    <Statistics bind:chartCanvas />
    <div id="github-container" class="flex flex-col gap-6 w-full">
        <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
            Project Repositories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {#if !dataLoading}
                {#if pageItems.length}
                    {#each pageItems as item, i}
                        <GitHubCard {item} />
                    {/each}
                {:else if currentPage !== null}
                    <div class="col-span-full py-24 text-gray-500 text-center">
                        - No repository found -
                    </div>
                {/if}
            {:else}
                {#each Array(pageSize) as _, i}
                    <div class="flex flex-col" data-aos="fade-up">
                        <div
                            class="card bg-gray-200 w-full h-[154px] rounded-lg border-[1px] border-gray-300 shadow-lg animate-pulse"
                        ></div>
                    </div>
                {/each}
            {/if}
        </div>
        {#if pageItems.length}
            <Pagination {currentPage} {getTotalPages} {navigate} />
        {/if}
    </div>
</main>
