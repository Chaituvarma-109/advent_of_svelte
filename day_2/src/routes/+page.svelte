<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    let count = 0;
</script>

<div class="container m-4">
    <div class="flex">
        <Button class="m-4" on:click={() => count++}>+</Button>
        <h1 class="text-2xl m-4">{count}</h1>
        <Button class='m-4' on:click={() => count--}>-</Button>
    </div>
    <div class="m-4 px-8">
        <Button  on:click={() => count = 0}>Reset</Button>
    </div>
    {#if count === 0}
        <p class="text-md">Santa hasn't eaten any cookies yet.</p>
    {:else if count > 0 && count < 4}
        <p class="text-md">Santa has eaten some cookies.</p>
    {:else if count >= 4 && count < 10}
        <p class="text-md">Santa has eaten a few cookies.</p>
    {:else if count >= 10 && count < 25}
        <p class="text-md">Santa has eaten a lot of cookies!</p>
    {:else if count >= 25 && count < 50}
        <p class="text-md">Santa is merry and full of cookies!</p>
    {:else if count >= 50 && count < 100}
        <p class="text-md">Santa is going to be sick!</p>
    {:else}
        <p class="text-md">Santa is definitely sick now.</p>
    {/if}
</div>
