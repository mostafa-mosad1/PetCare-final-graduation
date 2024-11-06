import { IProfile } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState:{
    loading:boolean,
    data:IProfile |null
} = {
    loading:false,
    data:null
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userProfile :(state,action)=>{
        state.data = action.payload
    }
  },
});

export const profileReducer = profileSlice.reducer;
export const {userProfile} = profileSlice.actions
