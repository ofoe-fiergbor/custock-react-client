import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: undefined,
  user: undefined,
};

const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => (state.user = action.payload),
    setUserType: (state, action) => (state.userType = action.payload),
    logout: () => initialState,
  },
});

export const { setUser, setUserType, logout } = Authentication.actions;

export default Authentication.reducer;
