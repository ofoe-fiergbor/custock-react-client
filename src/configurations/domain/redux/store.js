import { configureStore } from "@reduxjs/toolkit";
import Authentication from "./Authentication";

export const store = configureStore({
  reducer: {
    auth: Authentication,
  },
});
