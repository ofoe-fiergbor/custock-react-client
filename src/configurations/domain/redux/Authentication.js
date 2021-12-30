import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: undefined,
  user: undefined,
  authToken: undefined,
};

const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setAuthToken:(state, action) => {
      state.authToken = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, setRoles, logout, setAuthToken } = Authentication.actions;

export default Authentication.reducer;
