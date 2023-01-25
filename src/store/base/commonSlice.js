import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentRouteKey: "",
  planModalOpen: false,
};

export const commonSlice = createSlice({
  name: "base/common",
  initialState,
  reducers: {
    setCurrentRouteKey: (state, action) => {
      state.currentRouteKey = action.payload;
    },
    setPlanModalOpen: (state, action) => {
      state.planModalOpen = action.payload;
    },
  },
});

export const { setCurrentRouteKey, setPlanModalOpen } = commonSlice.actions;

export default commonSlice.reducer;
