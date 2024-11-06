import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
};

export const CategoriesFunction = createAsyncThunk(
  "CategoriesSlice/CategoriesFunction",
  async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      return response.data.categories;
    } catch (error) {
      console.log(error);
    }
  }
);

export const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CategoriesFunction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CategoriesFunction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(CategoriesFunction.rejected, (state) => {
      state.loading = false;
      state.data = [];
    });
  },
});

export const CategoriesReducer = CategoriesSlice.reducer;
