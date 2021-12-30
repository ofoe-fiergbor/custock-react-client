import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import { ApiService } from "../../../configurations/services/api/ApiService";
import { setSuppliers } from "../../../configurations/domain/redux/Product";

const Home = () => {
  const {
    user: { firstName },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const fetchSuppliers = async () => {
    const { data, status, message } = await ApiService.suppliers.fetchAll();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(setSuppliers(data));
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

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
