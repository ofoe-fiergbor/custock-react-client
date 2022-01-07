import React from "react";
import { useSelector } from "react-redux";
import { formatNumbers } from "../../../utils/utils";
import Navbar from "../../components/navbar/Navbar";
import "./stockItems.css";

const StockItems = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="page">
      <Navbar />
      <div className="stock-inner-ctn">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Balance</th>
              <th scope="col">Measure</th>
              <th scope="col">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products && products?.map((product) => (
              <tr key={product?.id}>
                <th scope="row">{product?.id}</th>
                <td>{product?.name}</td>
                <td>{formatNumbers(product?.balance)}</td>
                <td className="uom">{product?.unitOfMeasurement}</td>
                <td>{product?.supplier?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockItems;
