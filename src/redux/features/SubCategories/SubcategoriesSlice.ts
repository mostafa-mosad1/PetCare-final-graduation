import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
};

export const SubCategoriesFunction = createAsyncThunk(
  "SubCategoriesSlice/SubCategoriesFunction",
  async (id:string) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/subcategories/${id}`);
    //   console.log(response.data.subCategories)
      return response.data.subCategories;
    } catch (error) {
      console.log(error);
    }
  }
);

export const SubCategoriesSlice = createSlice({
  name: "SubCategoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SubCategoriesFunction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(SubCategoriesFunction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(SubCategoriesFunction.rejected, (state) => {
      state.loading = false;
      state.data = [];
    });
  },
});

export const SubCategoriesReducer = SubCategoriesSlice.reducer;
