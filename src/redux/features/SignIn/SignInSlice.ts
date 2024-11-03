import Cookies from "@/Cookies";
import { IErrorResponse, ILoginInput } from "@/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  data: {},
};

export const SignInFuncation = createAsyncThunk(
  "SignInFuncation/SignIn",
  async (data: ILoginInput, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/login`,
        data
      );
      if (response.status === 200) {
        toast.success("Successfully", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        const date = new Date();
        const DAYS = 3;
        const EXPIRE_IN = 1000 * 60 * 60 * 24 * DAYS;
        date.setTime(date.getTime() + EXPIRE_IN);
        const options = { path: "/", expires: date };
        Cookies.set("token", response.data.token, options);
        Cookies.set("type", response.data.user.type, options);
      }
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      const errorobj = error as AxiosError<IErrorResponse>;
      const errorMessages = errorobj.response?.data.error;
      if (errorMessages) {
        const allErrors = Object.values(errorMessages).flat().join(", "); // دمج الأخطاء
        console.log(allErrors);
        toast.error(allErrors, {
          position: "bottom-center",
          duration: 1500,
        });
        return rejectWithValue(allErrors);
      }
    }
  }
);

export const SignInSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignInFuncation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(SignInFuncation.fulfilled, (state, action) => {
      state.loading = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.data = action.payload as any;
    });
    builder.addCase(SignInFuncation.rejected, (state) => {
      state.loading = false;
      state.data = {};
    });
  },
});

export const SignInReducer = SignInSlice.reducer;
