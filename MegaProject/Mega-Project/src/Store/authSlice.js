import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logoutState: (state, action) => {
      state.status = false;
      state.userData = null;
    },


  },
});

export default slice.reducer;
export const { loginState, logoutState } = slice.actions;
