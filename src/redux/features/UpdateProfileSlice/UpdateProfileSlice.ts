import Cookies from "@/Cookies";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateData = createAsyncThunk(
  "UpdateProfileSlice/UpdateData",
  async ({
    firstname,
    lastname,
    address,
  }: {
    firstname: string;
    lastname: string;
    address: string;
  }) => {
    try {
      const res = await axios.put(
        "http://127.0.0.1:8000/api/update-profile",
        {
          firstname,
          lastname,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const UserProfileData = JSON.parse(
        localStorage.getItem("UserProfileData") ?? "{}"
      );

      const NewUserProfileData = {
        ...UserProfileData,
        firstname,
        lastname,
        address,
      };
      console.log(NewUserProfileData);
      localStorage.setItem(
        "UserProfileData",
        JSON.stringify(NewUserProfileData)
      );
      location.reload();
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {};

const UpdateProfileSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {},
});

export const UpdateProfileSliceReducer = UpdateProfileSlice.reducer;
