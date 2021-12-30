import Product from "./serverApis/Product";
import Suppliers from "./serverApis/Supplier";
import Transaction from "./serverApis/Transaction";
import Authentication from "./serverApis/Authentication";

export const ApiService = {
  product: Product,
  suppliers: Suppliers,
  auth: Authentication,
  transaction: Transaction,
};

