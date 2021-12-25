import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStock: undefined,
  allSuppliers: undefined,
  allTransactions: undefined,
  allCustomers: undefined,
};

const Stock = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStocks: (state, action) => {
      state.allStock = action.payload;
    },
    setSuppliers: (state, action) => {
      state.allSuppliers = action.payload;
    },
    setTransaction: (state, action) => {
      state.allTransactions = action.payload;
    },
    setCustomers: (state, action) => {
      state.allCustomers = action.payload;
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const {
  setStocks,
  setSuppliers,
  setTransaction,
  setCustomers,
  clearState,
} = Stock.actions;

export default Stock.reducer;
