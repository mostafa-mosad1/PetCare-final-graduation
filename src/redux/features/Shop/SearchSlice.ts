import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  SearchText: string | null;
} = {
  SearchText: null,
};

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    getSearch :(state,action)=>{
        state.SearchText = action.payload;
    }
  },
});
export const SearchReducer = SearchSlice.reducer;
export const {getSearch} = SearchSlice.actions;
