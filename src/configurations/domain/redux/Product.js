import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: undefined,
  suppliers: undefined,
  invoices: undefined,
  customers: undefined,
  receipts: undefined,
};

const Product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setReceipts: (state, action) => {
      state.customers = action.payload;
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const {
  setProducts,
  setSuppliers,
  setInvoices,
  setCustomers,
  setReceipts,
  clearState,
} = Product.actions;

export default Product.reducer;
