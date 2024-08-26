import { createSlice } from "@reduxjs/toolkit";

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

export const { switchFilter } = likeFilterSlice.actions;

export default likeFilterSlice.reducer;
