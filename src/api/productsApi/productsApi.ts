import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Iproducts from "./Iproducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      Iproducts[],
      {
        page?: number;
        limit?: number;
        title?: string;
        sort?: string;
        typeDough?: string[];
        weigth?: string[];
        size?: string[];
        priceFrom?: string;
        priceTo?: string;
        category?: string;
        feature?: string[];
      }
    >({
      query: ({
        title,
        sort,
        typeDough,
        weigth,
        size,
        priceFrom,
        priceTo,
        category,
        feature,
      }) => {
        const params = new URLSearchParams();

        if (title) params.append("title", `*${title}*`);

        if (sort) params.append("sortBy", sort);

        if (priceFrom) params.append("price[from]", priceFrom);

        if (priceTo) params.append("price[to]", priceTo);

        if (category) params.append("category", category);

        if (feature) {
          feature.forEach((item) => {
            params.append("feature[]", item);
          });
        }

        if (typeDough) {
          typeDough.forEach((item) => {
            params.append("typeDough[]", item);
          });
        }

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
