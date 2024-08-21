import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./features/card/cardSlice";
import likeSlice from "./features/like/likeSlice";
import { pokemonApi } from "./services/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
   reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      cards: cardSlice.reducer,
      // like: likeSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
