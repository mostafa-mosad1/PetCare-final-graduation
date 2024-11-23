import Cookies from "@/Cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartSlice = createApi({
  tagTypes: ["cart"],
  reducerPath: "cart",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => {
        return {
          url: "/cart",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.cartItems.map(({ id }: { id: number }) => ({
                type: "cart" as const,
                id,
              })),
              { type: "cart", id: "LIST" },
            ]
          : [{ type: "cart", id: "LIST" }],
    }),
    addProudctCart: builder.mutation({
      query: (id) => ({
        url: `/add-to-cart?product_id=${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    IncreaseProductNumber: builder.mutation({
      query: (body: { quantity: number; cart_id: number }) => ({
        url: `/increase-items`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    DecreaseProductNumber: builder.mutation({
      query: (body: { quantity: number; cart_id: number }) => ({
        url: `/decrease-items`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    ConfirmCart: builder.mutation({
      query: () => ({
        url: `/confirm`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
  }),
});

export const {
  useAddProudctCartMutation,
  useGetCartQuery,
  useIncreaseProductNumberMutation,
  useDecreaseProductNumberMutation,
  useConfirmCartMutation
} = cartSlice;
