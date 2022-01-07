import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../../views/components/sidebar/SideBar";
import Authentication from "../../../views/pages/authentication/Authentication";
import Suppliers from "../../../views/pages/suppliers/Suppliers";
import Home from "../../../views/pages/home/Home";
import StockItems from "../../../views/pages/stockItems/StockItems";
import Sales from "../../../views/pages/sales/Sales";
import Receipts from "../../../views/pages/receipts/Receipts";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  const { authToken } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
        }}
      >
        {authToken && <SideBar />}
        <Routes>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/" element={<PrivateRoute component={<Home />} />} />
          <Route
            path="/sales"
            element={<PrivateRoute component={<Sales />} />}
          />
          <Route
            path="/receipts"
            element={<PrivateRoute component={<Receipts />} />}
          />
          <Route
            path="/stockItems"
            element={<PrivateRoute component={<StockItems />} />}
          />
          <Route
            path="/suppliers"
            element={<PrivateRoute component={<Suppliers />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
