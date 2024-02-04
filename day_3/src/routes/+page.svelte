<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData
    let totalWeight = 0;

    $: ({elfPresents} = data)
</script>

<main class="responsive max">
    <div class="grid">
        <div class="s6">
            <article class="no-padding round border small tertiary-container center-align middle-align">
                <div class="padding absolute center middle">
                    <h5>Current Sleigh Weight {totalWeight.toFixed(2)}</h5>
                    {#if totalWeight === 0}
                        <p>No presents</p>
                    {:else if totalWeight > 0 && totalWeight < 99}
                        <p>Add some Presents</p>
                    {:else if totalWeight >= 99 && totalWeight <= 100}
                        <p>You are good to go</p>
                    {:else if totalWeight > 100}
                        <p>Exceeding the maximum weight, please remove some presents</p>
                    {/if}
                </div>
            </article>
        </div>
        <div class="s6">
            <div class="large-height scroll">
                <table class="border medium-space center-align">
                    <thead class="fixed">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Add to SLB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each elfPresents as {name, weight}, i}
                            <tr>
                                <th>{i+1}</th>
                                <td>{name}</td>
                                <td>{weight}</td>
                                <td><button class="btn" on:click={() => totalWeight += weight}>+</button></td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
