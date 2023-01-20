import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "createProfileForm/state",
  initialState: {
    user: {
      avatar: "",
      title: "",
      organization: "",
      industry: "",
      language: "en",
      timeZone: "GMT",
      country: "AF",
    },
  },
  reducers: {
    setCreateProfile: (state, action) => {
      state.user = {
        ...state.user,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { setCreateProfile } = dataSlice.actions;

export default dataSlice.reducer;
