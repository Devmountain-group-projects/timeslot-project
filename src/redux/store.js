import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/authSlice";
import userReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: userReducer,
})