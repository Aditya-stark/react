import { configureStore } from "@reduxjs/toolkit";
import slice from "./authSlice";

export default store = configureStore({
  reducer: {
    auth: slice,
  },
});
