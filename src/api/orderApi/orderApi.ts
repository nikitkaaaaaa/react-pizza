import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import IOrderApi from "./IOrderApi";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    getOrderProducts: builder.query<IOrderApi[], void>({
      query: () => "order",
      providesTags: [{ type: "Order", id: "LIST" }],
    }),

    addProductToOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),
  }),
});

export const { useGetOrderProductsQuery, useAddProductToOrderMutation } =
  orderApi;
