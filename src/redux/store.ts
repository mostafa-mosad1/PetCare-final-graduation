import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import signupReducer from "./features/Signup/signupSlice";
import { CategoriesReducer } from "./features/Categories/CategoriesSlice";
import { SignInReducer } from "./features/SignIn/SignInSlice";
import { SubCategoriesReducer } from "./features/SubCategories/SubcategoriesSlice";
import DoctorSlice from "./features/Doctor/DoctorSlice";
import { profileReducer } from "./features/Profile/ProfileSlice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signIn: SignInReducer,
    Categories: CategoriesReducer,
    SubCategories: SubCategoriesReducer,
    doctor: DoctorSlice,
    profile : profileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
