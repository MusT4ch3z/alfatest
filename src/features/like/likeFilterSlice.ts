import { createSlice } from "@reduxjs/toolkit";

// export interface CounterState {
//    value: number;
// }

const initialState: { filterIsActive: Boolean } = {
   filterIsActive: false,
};

export const likeFilterSlice = createSlice({
   name: "likeFilter",
   initialState,
   reducers: {
      switchFilter: (state) => {
         state.filterIsActive = !state.filterIsActive;
      },
   },
});

// Action creators are generated for each case reducer function
export const { switchFilter } = likeFilterSlice.actions;

export default likeFilterSlice.reducer;
