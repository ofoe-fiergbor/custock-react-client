import Items from "./serverApis/Items";
import Customers from "./serverApis/Customers";
import Suppliers from "./serverApis/Suppliers";
import Transactions from "./serverApis/Transactions";
import Authentication from "./serverApis/Authentication";

export const ApiService = {
  items: Items,
  customers: Customers,
  suppliers: Suppliers,
  auth: Authentication,
  transaction: Transactions,
};

