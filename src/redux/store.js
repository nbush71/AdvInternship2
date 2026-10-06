import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./authModalSlice";

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
  },
});
