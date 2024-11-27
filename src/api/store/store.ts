import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";

import { cartApi } from "../cartApi/cartApi";
import { ingredientsApi } from "../ingredientsApi/ingredientsApi";
import { orderApi } from "../orderApi/orderApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      productsApi.middleware,
      ingredientsApi.middleware,
      cartApi.middleware,
      orderApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
