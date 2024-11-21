import Cookies from "@/Cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopSlice = createApi({
  tagTypes: ["shop"],
  reducerPath: "shop",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getProudctShop: builder.query({
      query: ({ category, type, search }) => {
        let allApi = "/products";

        if (category) {
          allApi += `?category=${category}`;
        }
        if (type) {
          allApi += `${category ? "&" : "?"}type=${type}`;
        }
        if (search) {
          allApi += `?search=${search}`;
        }
        return { url: allApi };
      },
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
    AddProductShop: builder.mutation({
      query: (body) => {
        return {
          url: `/store-product`,
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        };
      },
      invalidatesTags: [{ type: "shop", id: "LIST" }],
    }),
    deleteProudct: builder.mutation({
      query: (id) => ({
        url: `/delete-product?id=${id}`,
        method: "Delete",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [{ type: "shop", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProudctShopQuery,
  useAddProductShopMutation,
  useDeleteProudctMutation,
} = shopSlice;
