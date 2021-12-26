import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import { ApiService } from "../../../configurations/services/api/ApiService";
import {
  setStocks,
  setCustomers,
  setTransaction,
} from "../../../configurations/domain/redux/Stock";

const Home = () => {
  const {
    user: { username },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const fetchAllStock = async () => {
    const { data } = await ApiService.items.fetchAll();
    console.log("Stock ==>  ", data);
    dispatch(setStocks(data));
  };

  const fetchAllCustomers = async () => {
    const { data } = await ApiService.customers.fetchAll();
    console.log("customers ==>", data);
    dispatch(setCustomers(data));
  };

  const fetchAllTransactions = async () => {
    const { data } = await ApiService.transaction.fetchAll();
    console.log("transactions ==> ", data);
    dispatch(setTransaction(data));
  };

  useEffect(() => {
    fetchAllStock();
    fetchAllCustomers();
    fetchAllTransactions()
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
