import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import "./sales.css";
import dayjs from "dayjs";

const Sales = () => {
  const { invoices } = useSelector((state) => state.product);
  return (
    <div className="page">
      <Navbar />
      <div className="sales-inner-ctn">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Buyer</th>
              <th scope="col">Social Media</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{dayjs(invoice.timestamp).format("DD/MM/YYYY")}</td>
                <td>{invoice.buyer}</td>
                <td>{invoice.socialMedia}</td>
                <td>{invoice.product?.name}</td>
                <td>{invoice.quantity}</td>
                <td>{"more>>>"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
