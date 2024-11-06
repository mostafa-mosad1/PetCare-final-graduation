import { IVets } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

interface IProps {
  doctorDetails: IVets | null;
}
const initialState: IProps = {
  doctorDetails: null,
};

const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    getDoctorDetails: (state, action) => {
      state.doctorDetails = action.payload;
    },
  },
});
export const { getDoctorDetails } = DoctorSlice.actions;
export default DoctorSlice.reducer;
