import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonStoreSlice } from "./features/pokemonStore/pokemonStoreSlice";
import { likeFilterSlice } from "./features/like/likeFilterSlice";

export const store = configureStore({
   reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      pokemonStore: pokemonStoreSlice.reducer,
      likeFilter: likeFilterSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
