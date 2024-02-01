<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData

    let pname = '';
    let ptally: number;

    $: ({ letter } = data)
</script>

<h1>Letters</h1>

<input type="text" bind:value={pname}>
<input type="number" bind:value={ptally} />

<table>
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

<table>
    <tr>
        <th>name</th>
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

<style>
    table, th, td {
        border:1px solid black;
    }
</style>
