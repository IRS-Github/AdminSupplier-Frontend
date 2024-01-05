import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarOpen: JSON.parse(localStorage.getItem("sideBarOpen") || "false"),
};

const uiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      const currentValue = state.sideBarOpen;
      state.sideBarOpen = !currentValue;
      localStorage.setItem("sideBarOpen", JSON.stringify(!currentValue));
    },
  },
});

export const { toggleSideBar } = uiSlice.actions;

export default uiSlice.reducer;
