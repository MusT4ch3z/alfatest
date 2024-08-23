import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPokemon, IPokemonShort } from "../../models/pokemon";

export interface IPokemonStore extends IPokemonShort {
   like: boolean;
}

const initialState: any = {};

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
      deletePokemon: (state, action: PayloadAction<any>) => {
         return (state = state.filter(
            (pokemon: IPokemon) => pokemon.name !== action.payload
         ));
      },
      switchLike: (state, action: PayloadAction<any>) => {
         state.map((pokemon: IPokemonStore) => {
            return pokemon.name === action.payload
               ? (pokemon.like = !pokemon.like)
               : pokemon.like;
         });
      },
   },
});

// Action creators are generated for each case reducer function
export const { setPokemons, switchLike, deletePokemon } =
   pokemonStoreSlice.actions;

export default pokemonStoreSlice.reducer;
