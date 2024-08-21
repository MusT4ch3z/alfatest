// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon } from "../models/pokemon";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
   reducerPath: "pokemonApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
   endpoints: (builder) => ({
      getPokemons: builder.query<any, void>({
         query: () => `pokemon?limit=12`,
      }),
      getPokemonByName: builder.query<IPokemon, string>({
         query: (name) => `pokemon/${name}`,
      }),
   }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
