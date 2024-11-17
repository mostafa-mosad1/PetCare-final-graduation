import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopSlice = createApi({
  tagTypes: ["shop"],
  reducerPath: "shop",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getProudctShop: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ id }: { id: number }) => ({
                type: "shop" as const,
                id,
              })),
              { type: "shop", id: "LIST" },
            ]
          : [{ type: "shop", id: "LIST" }],
    }),
  }),
});

export const { useGetProudctShopQuery } = shopSlice;
