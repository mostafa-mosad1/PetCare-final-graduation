import { IErrorResponse, IRegister } from "@/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
export interface IProps {
  isloading: boolean;
  data: {
    success: string;
  };
}
const initialState: IProps = {
  isloading: false,
  data: {
    success: "",
  },
};

export const setAccount = createAsyncThunk(
  "signup/setAccount",
  async (data: IRegister, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/register?email=${data.email}&password=${data.password}&firstname=${data.firstname}&lastname=${data.lastname}&username=${data.username}&contact_number=${data.contact_number}&address=${data.address}&type=${data.type}&c_password=${data.password}`
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("You will navgite to Login page!", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
      }
      return res.data;
    } catch (error) {
      console.log(error);
      const errorobj = error as AxiosError<IErrorResponse>;
      const errorMessages = errorobj.response?.data.error;
      if (errorMessages) {
        const allErrors = Object.values(errorMessages).flat().join(", "); // دمج الأخطاء
        toast.error(allErrors, {
          position: "bottom-center",
          duration: 1500,
        });
        return rejectWithValue(allErrors);
      }
    }
  }
);
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setAccount.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(setAccount.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    });
    builder.addCase(setAccount.rejected, (state) => {
      state.isloading = false;
    });
  },
});
export default signupSlice.reducer;
