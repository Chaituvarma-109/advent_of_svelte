<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData

    let elfSelected: string;
    let tallySelected: number;

    $: ({ letter } = data)
</script>


<div class="flex justify-center mb-10">
    <h1 class="text-lg font-medium">Letters</h1>
</div>

<div class="flex m-10">
    <div class="overflow-x-auto basis-1/2">
        <table class="table table-xs table-zebra border border-slate-500">
            <tr>
                <th class="border border-slate-600">Name</th>
                <th class="border border-slate-600">tally</th>
                <th class="border border-slate-600">NaughtyorNice</th>
            </tr>
            {#each letter as {name, tally} }
                <tr>
                    <td class="border border-slate-700">{name}</td>
                    <td class="border border-slate-700">{tally}</td>
                    <td class="border border-slate-700">{tally > 0 ? 'Nice' : 'Naughty'}</td>
                </tr>
            {/each}
        </table>
    </div>

    <div class="divider divider-horizontal"></div>

    <div class="flex flex-col basis-1/2">
        <div class="flex">
            <select bind:value={elfSelected} class="select select-sm w-full max-w-xs">
                {#each letter as {name, tally}}
                    <option value={name}>{name}</option>
                {/each}
            </select>
            <div class="divider divider-horizontal"></div>
            <select bind:value={tallySelected} class="select select-sm w-full max-w-xs">
                {#each letter as {tally}}
                    <option value={tally}>{tally}</option>
                {/each}
            </select>
        </div>
        <div class="divider"></div>
        <div>
            <p><strong>{elfSelected}</strong> has been <strong>{tallySelected > 0 ? 'Nice' : 'Naughty'}</strong> this year</p>
        </div>
    </div>
</div>
