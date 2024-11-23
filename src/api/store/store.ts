import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { ingredients } from "../ingredientsApi/ingredientsApi";
import { cartApi } from "../cartApi/cartApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ingredients.reducerPath]: ingredients.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      productsApi.middleware,
      ingredients.middleware,
      cartApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
