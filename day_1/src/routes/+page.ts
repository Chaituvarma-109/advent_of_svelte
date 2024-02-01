import type { PageLoad } from "./$types";

type Letter = {
  name: string;
  tally: number;
};

export const load: PageLoad = async ({ fetch }) => {
  const letters = await fetch(
    "https://advent.sveltesociety.dev/data/2023/day-one.json"
  );

  const letter: Letter[] = await letters.json();

  return { letter };
};
