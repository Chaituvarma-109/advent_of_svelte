import type { PageLoad } from "./$types";

type Elfs = {
  name: string;
  weight: number;
};

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(
    "https://advent.sveltesociety.dev/data/2023/day-three.json"
  );
  const elfWeights: Elfs[] = await res.json();

  return { elfPresents: elfWeights };
};
