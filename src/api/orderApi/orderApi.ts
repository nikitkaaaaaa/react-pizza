import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IorderApi from "./IOrderApi";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  endpoints: (builder) => ({
    getOrderProducts: builder.query<IorderApi[], void>({
      query: () => "order",
    }),

    addProductToOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetOrderProductsQuery, useAddProductToOrderMutation } =
  orderApi;
