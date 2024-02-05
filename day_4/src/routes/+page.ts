import type { PageLoad } from "./$types";

export type HeartData = {
  heartRate: number;
  time: number;
};

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(
    "https://advent.sveltesociety.dev/data/2023/day-four.json"
  );
  const heartdata = await res.json();

  return {
    heartRates: [
      { heartRate: heartdata.heartRate, time: Date.now() },
    ] as HeartData[],
  };
};
