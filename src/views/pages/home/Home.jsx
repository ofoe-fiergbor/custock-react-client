import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import { ApiService } from "../../../configurations/services/api/ApiService";

const Home = () => {
  const {
    user: { username },
  } = useSelector((state) => state.auth);

  const fetchAllStock = async () => {
    const result = await ApiService.items.fetchAll();
    console.log(result);
  };

  const fetchAllSuppliers = async () => {
    const result = await ApiService.suppliers.fetchAll();
    console.log(result);
  };

  useEffect(() => {
    fetchAllStock();
    fetchAllSuppliers();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="inner-ctn">
        <DashboardHeader
          username={username}
          handleClick={() => alert("success")}
        />
      </div>
    </div>
  );
};

export default Home;
