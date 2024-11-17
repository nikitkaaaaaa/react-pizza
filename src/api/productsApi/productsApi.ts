import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Iproducts from "./Iproducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      Iproducts[],
      {
        sort?: string;
        typeDough?: string;
        weigth?: string[];
        size?: string[];
        priceFrom?: string;
        priceTo?: string;
        category?: string;
      }
    >({
      query: ({
        sort,
        typeDough,
        weigth,
        size,
        priceFrom,
        priceTo,
        category,
      }) => {
        const params = new URLSearchParams();

        if (sort) params.append("sortBy", sort);

        if (typeDough) params.append("typeDough", typeDough);

        if (priceFrom) params.append("price[from]", priceFrom);

        if (priceTo) params.append("price[to]", priceTo);

        if (category) params.append("category", category);

        if (weigth) {
          weigth.forEach((item) => {
            params.append("weigth[]", item);
          });
        }

        if (size) {
          size.forEach((item) => params.append("size[]", item));
        }

        return `products?${params}`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
