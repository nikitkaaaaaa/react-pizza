import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { ingredients } from "../ingredientsApi/ingredientsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ingredients.reducerPath]: ingredients.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(productsApi.middleware, ingredients.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
