import dayjs from "dayjs";
import React from "react";
import { formatNumbers } from "../../../utils/utils";

const SalesOffCanvas = ({ invoice, setInvoice }) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Sale Invoice</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => setInvoice(undefined)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <p className="detail">
          <span id="label">Date:</span>{" "}
          {dayjs(invoice.timestamp).format("DD/MM/YYYY")}
        </p>
        <p className="detail">
          <span id="label">Description:</span> {invoice.description}
        </p>
        <p className="detail">
          <span id="label">Product:</span> {invoice.product.name}
        </p>
        <p className="detail">
          <span id="label">Quantity:</span> {formatNumbers(invoice.quantity)}{" "}
          {invoice.product.unitOfMeasurement}
        </p>
        <p className="detail">
          <span id="label">Customer/Buyer:</span>
          {invoice.buyer}
        </p>
        <p className="detail">
          <span id="label">Social Media:</span> {invoice.socialMedia}
        </p>
      </div>
    </div>
  );
};

export default SalesOffCanvas;
