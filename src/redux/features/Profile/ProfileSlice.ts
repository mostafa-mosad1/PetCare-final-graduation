import { IProfile } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  profileData: IProfile | null;
} = {
  profileData: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    GetUserProfile: (state, action:PayloadAction<IProfile>) => {
      state.profileData = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { GetUserProfile } = profileSlice.actions;
