import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import uiSlice from "./features/uiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiSlice,
  },

  devTools: true,
});

export default store;
