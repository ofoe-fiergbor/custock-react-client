import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./receipts.css";
import { useSelector } from "react-redux";
import { formatNumbers } from "../../../utils/utils";
import dayjs from "dayjs";

const Receipts = () => {
  const { receipts } = useSelector((state) => state.product);

  return (
    <div className="page">
      <Navbar />
      <div className="stock-inner-ctn">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Supplier</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt) => (
              <tr key={receipt.id}>
                <td>{dayjs(receipt.timestamp).format("DD/MM/YYYY")}</td>
                <td>{receipt.product.name}</td>
                <td>{formatNumbers(receipt.quantity)}</td>
                <td>{receipt.supplier.name}</td>
                <td>{"more>>>"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipts;
