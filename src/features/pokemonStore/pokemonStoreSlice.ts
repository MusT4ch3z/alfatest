import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPokemonShort } from "../../models/pokemon";

export interface IPokemonStore extends IPokemonShort {
   like: boolean;
}

const initialState: IPokemonStore[] = [];

export const pokemonStoreSlice = createSlice({
   name: "pokemonStore",
   initialState,
   reducers: {
      setPokemons: (state, action: PayloadAction<IPokemonStore[]>) => {
         const data = action.payload?.map((item: IPokemonStore) => {
            return { ...item, like: false };
         });
         return (state = data);
      },
      deletePokemon: (state, action: PayloadAction<string>) => {
         return (state = state.filter(
            (pokemon: IPokemonStore) => pokemon.name !== action.payload
         ));
      },
      switchLike: (state, action: PayloadAction<string>) => {
         state.map((pokemon: IPokemonStore) => {
            return pokemon.name === action.payload
               ? (pokemon.like = !pokemon.like)
               : pokemon.like;
         });
      },
   },
});

export const { setPokemons, switchLike, deletePokemon } =
   pokemonStoreSlice.actions;

export default pokemonStoreSlice.reducer;
