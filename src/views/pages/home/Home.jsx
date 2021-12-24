import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";


const Home = () => {
  const {
    user: { username },
  } = useSelector((state) => state.auth);

 

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
