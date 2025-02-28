<script>
    import { GitCommitHorizontal } from 'lucide-svelte';
    export let item;
</script>

<div class="flex flex-col gap-3" data-aos="fade-up">
    <div
        class="card flex-row gap-3 p-4 w-full rounded-lg border-[1px] border-gray-300 shadow-lg relative"
        title={item.name}
    >
        <GitCommitHorizontal size={28} />
        <div class="flex flex-1 flex-col overflow-hidden">
            <div class="text-lg">{item.name}</div>
            <div class="flex flex-col gap-1 mt-2 mb-4">
                <div class="truncate">{item.description}</div>
                <div class="text-sm truncate">
                    <a href={item.url} class="text-blue-600" target="_blank">
                        {item.url}
                    </a>
                </div>
            </div>
            <span class="badge badge-sm bg-green-700 text-white">
                {item.language || 'Other'}
            </span>
        </div>
    </div>
</div>
