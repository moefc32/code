<script>
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";
  import { toast } from "svoast";

  import Title from "$lib/component/Title.svelte";

  // const globalSearchModalEl = document.querySelector("#global-search");
  // const globalSearchModal =
  //   globalSearchModalEl && new bootstrap.Modal(globalSearchModalEl, {});

  let dataLoading = true;
  let chartCanvas = "";
  let techStacks = [];
  let techLanguages = {};
  let discord = [];
  let github = [];
  let githubCurrentPage = 1;
  let githubPageSize = 12;

  // globalSearch: {
  //   query: "",
  //   queryModal: "",
  //   toggle: false,
  //   loading: false,
  //   backend: "https://api.mf-chan.com/search",
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
  //         query = "";

  //         globalSearchModal.show();
  //         await loadData();
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // }

  function getPageItems() {
    const startIndex = (githubCurrentPage - 1) * githubPageSize;
    return github.slice(startIndex, startIndex + githubPageSize);
  }

  function totalPages() {
    return Math.ceil(github.length / githubPageSize);
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages()) {
      githubCurrentPage = page;
    }
  }

  function prevPage() {
    if (githubCurrentPage > 1) githubCurrentPage--;
  }

  function nextPage() {
    if (githubCurrentPage < totalPages()) githubCurrentPage++;
  }

  onMount(async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND);
      const { data } = await response.json();

      techStacks = data.techStacks;
      techLanguages = data.techLanguages;
      discord = data.discord;
      github = data.github;
      dataLoading = false;

      const ctx = chartCanvas.getContext("2d");
      const languageChart = new Chart(ctx, {
        type: "bar",
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
        "Cannot fetch data from the backend, please try again later."
      );
    }
  });
</script>

<Title />

<div class="avatar mx-auto -mt-36">
  <div class="w-44 border-white border-4 rounded-full">
    <img
      src="https://mf-chan.com/og.jpg"
      alt="Faizal Chan."
    />
  </div>
</div>

<main class="flex-1 mx-12 my-6">
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
  </p>
  <div class="card flex flex-1 py-3 h-[450px]">
    <canvas bind:this={chartCanvas}></canvas>
  </div>
</main>
