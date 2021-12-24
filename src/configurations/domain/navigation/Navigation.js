import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../../views/components/sidebar/SideBar";
import Authentication from "../../../views/pages/authentication/Authentication";
import Customers from "../../../views/pages/customers/Customers";
import Home from "../../../views/pages/home/Home";
import StockItems from "../../../views/pages/stockItems/StockItems";
import Suppliers from "../../../views/pages/supplier/Supplier";
import Transactions from "../../../views/pages/transaction/Transaction";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
        }}
      >
        {user && <SideBar />}
        <Routes>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/" element={<PrivateRoute component={<Home />} />} />
          <Route
            path="/suppliers"
            element={<PrivateRoute component={<Suppliers />} />}
          />
          <Route
            path="/transactions"
            element={<PrivateRoute component={<Transactions />} />}
          />
          <Route
            path="/stockItems"
            element={<PrivateRoute component={<StockItems />} />}
          />
          <Route
            path="/customers"
            element={<PrivateRoute component={<Customers />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
