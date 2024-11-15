import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Iproducts from "./Iproducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Iproducts[], { sort?: string }>({
      query: ({ sort }) => {
        const params = new URLSearchParams();

        if (sort) params.append("sortBy", sort);

        return `products?${params}`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
