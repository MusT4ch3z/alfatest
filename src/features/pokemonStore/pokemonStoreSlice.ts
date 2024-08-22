import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "../../models/pokemon";

interface initialStateInterface extends IPokemon {
   like: boolean;
}

const initialState: any = {};

export const pokemonStoreSlice = createSlice({
   name: "pokemonStore",
   initialState,
   reducers: {
      setPokemons: (state, action: PayloadAction<any>) => {
         const data = action.payload?.map((item: any) => {
            return { ...item, like: false };
         });
         return (state = data);
      },
      deletePokemon: (state, action: PayloadAction<any>) => {
         return (state = state.filter(
            (pokemon: any) => pokemon.name !== action.payload
         ));
      },
      switchLike: (state, action: PayloadAction<any>) => {
         state.map((pokemon: any) => {
            return pokemon.name === action.payload
               ? (pokemon.like = !pokemon.like)
               : pokemon.like;
         });
      },
      // showFiltered: (state) => {
      //    state.filter((card) => card.like === true);
      // },
   },
});

// Action creators are generated for each case reducer function
export const { setPokemons, switchLike, deletePokemon } =
   pokemonStoreSlice.actions;

export default pokemonStoreSlice.reducer;
