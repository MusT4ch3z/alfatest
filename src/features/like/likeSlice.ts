import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CounterState {
//    value: number;
// }

const initialState: any = {
   value: false,
};

export const counterSlice = createSlice({
   name: "like",
   initialState,
   reducers: {
      switchLike: (state) => {},
   },
});

// Action creators are generated for each case reducer function
export const { switchLike } = counterSlice.actions;

export default counterSlice.reducer;
