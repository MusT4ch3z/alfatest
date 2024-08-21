import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const cardSlice = createSlice({
   name: "card",
   initialState,
   reducers: {
      getCards: (state, action: PayloadAction<any>) => {
         state = { ...state, ...action.payload};
      },
      showFiltered: (state) => {
         state.filter((card) => card.like === true);
      },
   },
});

// Action creators are generated for each case reducer function
export const { getCards } = cardSlice.actions;

export default cardSlice.reducer;
