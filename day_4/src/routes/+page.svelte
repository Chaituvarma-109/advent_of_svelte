<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { PageData } from "./$types";
    import type { HeartData } from "./+page";
    import { derived, writable } from "svelte/store";
    import { blur } from "svelte/transition";

    import HeartRateChart from "./heartRateChart.svelte";

    export let data: PageData;

    let heartRateList = writable<HeartData[]>([...data.heartRates])

    // $: currentHeartRate = $heartRateList[$heartRateList.length-1].heartRate
    const currentHeartRate = derived(heartRateList, $heartRateList => $heartRateList[$heartRateList.length-1].heartRate)

    const getHeartRate = async () => {
            const res = await fetch("https://advent.sveltesociety.dev/data/2023/day-four.json");
            const resp = await res.json();
            heartRateList.update(v => [...v, {heartRate: resp.heartRate, time: Date.now() }]);
            };

    const interval = setInterval(getHeartRate, 1000);

    onMount(() => {
        getHeartRate()
    });

    onDestroy(() => clearInterval(interval))
</script>

<main class="responsive">
    <h1>Heart-Rate</h1>

    <article>
            <div class="s6">
                <HeartRateChart data={$heartRateList} />
            </div>
            <div class="s6 center-align middle-align">
                <h5 transition:blur>{$currentHeartRate}</h5>
            </div>
    </article>
</main>
