import "./home.css";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import { ApiService } from "../../../configurations/services/api/ApiService";
import {
  setSuppliers,
  setProducts,
  setInvoices,
} from "../../../configurations/domain/redux/Product";
import DashboardProductCard from "../../components/dashboardProductCard/DashboardProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const {
    user: { firstName },
  } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.product);

  const fetchSuppliers = async () => {
    const { data, status, message } = await ApiService.suppliers.fetchAll();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setSuppliers(data));
    }
  };

  const fetchProducts = async () => {
    const { data, status, message } = await ApiService.product.fetchAll();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setProducts(data));
    }
  };

  const fetchAllSales = async () => {
    const { data, status, message } =
      await ApiService.transaction.fetchAllInvoices();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setInvoices(data));
    }
  };

  useEffect(() => {
    fetchSuppliers();
    fetchProducts();
    fetchAllSales();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="inner-ctn">
        <DashboardHeader
          username={firstName}
          handleClick={() => alert("success")}
        />

        <div className="container-fluid dashboard">
          <div className="row">
            {products.map((product) => (
              <DashboardProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
