import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Icart from "./Icart";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartProducts: builder.query<Icart[], void>({
      query: () => "cart",
      providesTags: [{ type: "Cart", id: "LIST" }],
    }),

    addProductToCart: builder.mutation<void, Icart>({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),

    removeOrAddOneProductToCart: builder.mutation<
      void,
      { id: number; count: number }
    >({
      query: ({ id, count }) => ({
        url: `cart/${id}`,
        method: "PATCH",
        body: { id, count },
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),

    removeProductFromCart: builder.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCartProductsQuery,
  useAddProductToCartMutation,
  useRemoveOrAddOneProductToCartMutation,
  useRemoveProductFromCartMutation,
} = cartApi;
