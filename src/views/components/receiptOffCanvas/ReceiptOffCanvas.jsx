import React from "react";
import { formatNumbers } from "../../../utils/utils";
import dayjs from "dayjs";
import "./receiptOffCanvas.css";

const ReceiptOffCanvas = ({ receipt, unrenderDetail }) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Transaction Details</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => unrenderDetail(undefined)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <p className="detail">
          <span id="label">Date:</span>{" "}
          {dayjs(receipt?.timestamp).format("DD/MM/YYYY")}
        </p>
        <p className="detail">
          <span id="label">Description:</span> {receipt?.description}
        </p>
        <p className="detail">
          <span id="label">Product:</span> {receipt?.product?.name}
        </p>
        <p className="detail">
          <span id="label">Quantity:</span> {formatNumbers(receipt?.quantity)}{" "}
          {receipt?.product?.unitOfMeasurement}
        </p>
        <p className="detail">
          <span id="label">Current Balance:</span>{" "}
          {formatNumbers(receipt?.product?.balance)}{" "}
          {receipt?.product?.unitOfMeasurement}
        </p>
        <p className="detail">
          <span id="label">Supplier:</span> {receipt?.supplier?.name}
        </p>
        <p className="detail">
          <span id="label">Supplier Contact:</span>{" "}
          {receipt?.supplier?.phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default ReceiptOffCanvas;
