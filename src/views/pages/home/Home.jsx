import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";

// username
const Home = () => {
  const {
    user: { username },
  } = useSelector((state) => state.auth);

  return (
    <div className="page">
      <Navbar />
      <div className="dashboard-ctn">
        <DashboardHeader username={username} />
      </div>
    </div>
  );
};

export default Home;
