<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData

    let pname = 'johnny';
    let ptally: number = 0;

    $: ({ letter } = data)
</script>


<div class="flex justify-center mb-10">
    <h1 class="text-lg font-medium">Letters</h1>
</div>

<div class="flex m-10">
    <div class="overflow-x-auto basis-1/2">
        <table class="table-md">
            <tr>
                <th>Name</th>
                <th>tally</th>
                <th>NaughtyorNice</th>
            </tr>
            {#each letter as {name, tally} }
                <tr>
                    <td>{name}</td>
                    <td>{tally}</td>
                    <td>{tally > 0 ? 'Nice' : 'Naughty'}</td>
                </tr>
            {/each}
        </table>
    </div>

    <div class="divider divider-horizontal"></div>

    <div class="flex flex-col basis-1/2">
        <div class="flex">
            <input type="text" bind:value={pname} class="input input-bordered w-full max-w-xs">
            <input type="number" bind:value={ptally} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="overflow-x-auto">
            <table class="table-md">
                <tr>
                    <th>name</th>
                    <th>tally</th>
                    <th>NaughtyorNice</th>
                </tr>
                <tr>
                    <td>{pname}</td>
                    <td>{ptally}</td>
                    <td>{ptally > 0 ? 'Nice' : 'Naughty'}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
