import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetPokemonsResponse, IPokemon } from "../models/pokemon";

export const pokemonApi = createApi({
   reducerPath: "pokemonApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
   endpoints: (builder) => ({
      getPokemons: builder.query<IGetPokemonsResponse, void>({
         query: () => `pokemon?limit=12`,
      }),
      getPokemonByName: builder.query<IPokemon, string>({
         query: (name) => `pokemon/${name}`,
      }),
   }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
