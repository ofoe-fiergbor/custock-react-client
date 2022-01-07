import React from "react";
import { formatNumbers } from "../../../utils/utils";
import "./dashboardProductCard.css";

const DashboardProductCard = ({ product }) => {
  return (
    <div key={product.id} className="col-3 dbpcard">
      <div className="dbpcard-balance">
        <h1>{formatNumbers(product.balance)}</h1>
        <p>/{product.unitOfMeasurement}</p>
      </div>
      <p className="dbpcard-product">{product.name}</p>
      <p className="dbpcard-product">{product.supplier.name}</p>
    </div>
  );
};

export default DashboardProductCard;
