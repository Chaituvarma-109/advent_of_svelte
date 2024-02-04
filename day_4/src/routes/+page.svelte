<script lang="ts">
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import type { HeartData } from "./+page";
    import { derived, writable } from "svelte/store";

    export let data: PageData;

    let heartRateList = writable<HeartData[]>([...data.heartRates])

    // $: currentHeartRate = $heartRateList[$heartRateList.length-1].heartRate
    const currentHeartRate = derived(heartRateList, $heartRateList => $heartRateList[$heartRateList.length-1].heartRate)

    onMount(() => {
        const getHeartRate = async () => {
            const res = await fetch("https://advent.sveltesociety.dev/data/2023/day-four.json");
            const resp = await res.json();
            heartRateList.update(v => [...v, resp]);
            };
        const interval = setInterval(getHeartRate, 1000);
        getHeartRate()

        return () => clearInterval(interval)
    });

</script>

<!-- TODO: Heartbeat Chart -->

<h1>Heart Rate</h1>

<h1>{$currentHeartRate}</h1>
