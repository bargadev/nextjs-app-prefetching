import { queryOptions } from "@tanstack/react-query";

export const pokemonOptions = queryOptions({
  queryKey: ["pokemon"],
  queryFn: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");

    console.log(`response ===>`, response);

    return response.json();
  },
});
