<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData
    let totalWeight = 0;

    $: ({elfPresents} = data)
</script>

<main class="container">
    <article>
        <h1>Current Sleigh Weight {totalWeight.toFixed(2)}</h1>

        {#if totalWeight === 0}
            <p>No presents</p>
        {:else if totalWeight > 0 && totalWeight < 99}
            <p>Add some Presents</p>
        {:else if totalWeight >= 99 && totalWeight <= 100}
            <p>You are good to go</p>
        {:else if totalWeight > 100}
            <p>Exceeding the maximum weight, please remove some presents</p>
        {/if}
    </article>
    <table role="grid">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Add to SLB</th>
            </tr>
        </thead>
        <tbody>
            {#each elfPresents as {name, weight}, i}
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{name}</td>
                    <td>{weight}</td>
                    <td><button class="btn" on:click={() => totalWeight += weight}>+</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<style>
    .btn {
        width: 25%;
        border: 50px;
    }
</style>
