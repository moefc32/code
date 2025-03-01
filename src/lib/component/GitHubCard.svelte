<script>
    import { GitCommitHorizontal } from 'lucide-svelte';
    export let item;
</script>

<div class="flex flex-col gap-3" data-aos="fade-up">
    <div
        class="card flex-row gap-3 p-4 w-full rounded-lg border-[1px] border-gray-300 shadow-lg relative"
        title={item.title}
    >
        <GitCommitHorizontal size={28} />
        <div class="flex flex-1 flex-col overflow-hidden">
            <div class="text-lg">{item.title}</div>
            <div class="flex flex-col gap-1 mt-2 mb-4">
                <div class="truncate">{item.description}</div>
                <div class="text-sm truncate">
                    <a href={item.url} target="_blank" class="text-blue-600">
                        {item.url}
                    </a>
                </div>
            </div>
            <span class="badge badge-sm bg-green-700 text-white font-semibold">
                {item.language || 'Other'}
            </span>
        </div>
    </div>
</div>
