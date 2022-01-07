import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./receipts.css";
import { useSelector } from "react-redux";
import { formatNumbers } from "../../../utils/utils";
import dayjs from "dayjs";
import ReceiptOffCanvas from "../../components/receiptOffCanvas/ReceiptOffCanvas";

const Receipts = () => {
  const [receipt, setReceipt] = React.useState(undefined);
  const { receipts } = useSelector((state) => state.product);

  const displayDetails = (id) => {
    setReceipt(receipts.filter((receipt) => receipt.id === id)[0]);
  };

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
            {receipts && receipts.map((receipt) => (
              <tr key={receipt?.id}>
                <td>{dayjs(receipt?.timestamp).format("DD/MM/YYYY")}</td>
                <td>{receipt?.product?.name}</td>
                <td>{formatNumbers(receipt?.quantity)}</td>
                <td>{receipt?.supplier?.name}</td>
                <td
                  className="more"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => displayDetails(receipt?.id)}
                >
                  {"more>>>"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {receipt && <ReceiptOffCanvas unrenderDetail={setReceipt} receipt={receipt} />}
    </div>
  );
};

export default Receipts;
