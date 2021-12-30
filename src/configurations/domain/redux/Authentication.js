import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: undefined,
  user: undefined,
  authToken: undefined
};

const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setAuthToken:(state, action) => {
      state.authToken = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, setUserType, logout, setAuthToken } = Authentication.actions;

export default Authentication.reducer;
