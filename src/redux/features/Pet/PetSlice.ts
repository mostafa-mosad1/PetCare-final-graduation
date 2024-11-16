import Cookies from "@/Cookies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petsSlice = createApi({
  tagTypes: ["pets"],
  reducerPath: "pets",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
  endpoints: (builder) => ({
    getPetsUser: builder.query({
      query: () => {
        return {
          url: "/user-pets",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.pets.map(({ id }: { id: number }) => ({
                type: "pets" as const,
                id,
              })),
              { type: "pets", id: "LIST" },
            ]
          : [{ type: "pets", id: "LIST" }],
    }),
    deletePetsUser: builder.mutation({
      query: (id) => {
        return {
          url: `delete-user-pet?id=${id}`,
          method: "Delete",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        };
      },
      invalidatesTags: [{ type: "pets", id: "LIST" }],
    }),
    addNewPet: builder.mutation({
      query: (body) => {
        return {
          url: `/store-user-pet`,
          method: "POST",
          body,
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        };
      },
      invalidatesTags: [{ type: "pets", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPetsUserQuery,
  useDeletePetsUserMutation,
  useAddNewPetMutation,
} = petsSlice;
