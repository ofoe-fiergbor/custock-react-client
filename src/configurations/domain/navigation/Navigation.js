import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "../../../views/pages/authentication/Authentication";
import Home from "../../../views/pages/home/Home";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/" element={<PrivateRoute component={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
