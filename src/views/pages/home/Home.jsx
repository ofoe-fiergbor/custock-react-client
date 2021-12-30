import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import { ApiService } from "../../../configurations/services/api/ApiService";


const Home = () => {
  const {
    user: { firstName },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  return (
    <div className="page">
      <Navbar />
      <div className="inner-ctn">
        <DashboardHeader
          username={firstName}
          handleClick={() => alert("success")}
        />
      </div>
    </div>
  );
};

export default Home;
