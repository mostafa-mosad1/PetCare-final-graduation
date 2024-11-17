import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import signupReducer from "./features/Signup/signupSlice";
import { CategoriesReducer } from "./features/Categories/CategoriesSlice";
import { SignInReducer } from "./features/SignIn/SignInSlice";
import { SubCategoriesReducer } from "./features/SubCategories/SubcategoriesSlice";
import DoctorSlice from "./features/Doctor/DoctorSlice";
import { profileReducer } from "./features/Profile/ProfileSlice";
import { petsSlice } from "./features/Pet/PetSlice";
import { shopSlice } from "./features/Shop/ShopSlice";
import { UpdateProfileSliceReducer } from "./features/UpdateProfileSlice/UpdateProfileSlice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signIn: SignInReducer,
    Categories: CategoriesReducer,
    SubCategories: SubCategoriesReducer,
    doctor: DoctorSlice,
    profile: profileReducer,
    UpdateProfile: UpdateProfileSliceReducer,
    [petsSlice.reducerPath]: petsSlice.reducer,
    [shopSlice.reducerPath]: shopSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      petsSlice.middleware,
      shopSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
