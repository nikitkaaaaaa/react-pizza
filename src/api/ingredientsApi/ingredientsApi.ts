import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Iingredients from "./Iingredients";

export const ingredients = createApi({
  reducerPath: "ingredients",
  baseQuery: fetchBaseQuery({ baseUrl: "https://8d3ce5b52258abb8.mokky.dev/" }),
  endpoints: (builder) => ({
    getIngredients: builder.query<Iingredients[], void>({
      query: () => "ingredients",
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredients;
