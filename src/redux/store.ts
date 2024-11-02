import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import signupReducer from "./features/Signup/signupSlice";
export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
