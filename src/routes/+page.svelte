<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    import { toast } from 'svoast';
    import AOS from 'aos';

    import Banner from '$lib/component/Banner.svelte';
    import Membership from '$lib/component/Membership.svelte';
    import Statistics from '$lib/component/Statistics.svelte';
    import GitHubCard from '$lib/component/GitHubCard.svelte';
    import Pagination from '$lib/component/Pagination.svelte';

    // const globalSearchModalEl = document.querySelector('#global-search');
    // const globalSearchModal =
    //   globalSearchModalEl && new bootstrap.Modal(globalSearchModalEl, {});

    let dataLoading = true;
    let chartCanvas = '';
    let techStacks = [];
    let techLanguages = {};
    let discord = [];
    let github = [];
    let currentPage = 1;
    let pageSize = parseInt(import.meta.env.VITE_PAGINATION_ITEMS || '12', 10);

    // globalSearch: {
    //   query: '',
    //   queryModal: '',
    //   toggle: false,
    //   loading: false,
    //   backend: import.meta.env.VITE_SEARCH_URL,
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

    function getPageItems() {
        const startIndex = (currentPage - 1) * pageSize;
        return github.slice(startIndex, startIndex + pageSize);
    }

    function getTotalPages() {
        return Math.ceil(github.length / pageSize);
    }

    function navigate(page) {
        if (page !== currentPage && page >= 1 && page <= getTotalPages()) {
            currentPage = page;
        }
    }

    onMount(async () => {
        AOS.init();

        try {
            const response = await fetch(import.meta.env.VITE_BACKEND);
            const { data } = await response.json();

            techStacks = data.techStacks;
            techLanguages = data.techLanguages;
            discord = data.discord;
            github = data.github;
            dataLoading = false;

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
</script>

<Banner {techStacks} />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <Membership {discord} />
    <Statistics bind:chartCanvas />
    <div class="flex flex-col gap-6 w-full">
        <h2 class="pb-2 text-lg border-b-[1px] border-gray-300">
            Project Repositories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {#each getPageItems() as item, i}
                <GitHubCard {item} />
            {/each}
        </div>
        {#if github.length}
            <Pagination {currentPage} {getTotalPages} {navigate} />
        {/if}
    </div>
</main>
