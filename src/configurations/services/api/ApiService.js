import Items from "./serverApis/Items";
import Customers from "./serverApis/Customers";
import Suppliers from "./serverApis/Suppliers";
import Transactions from "./serverApis/Transactions";
import Authentication from "./serverApis/Authentication";

const ApiService = {
  items: Items,
  customers: Customers,
  suppliers: Suppliers,
  auth: Authentication,
  transactions: Transactions,
}();

export default ApiService;