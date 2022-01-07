import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import "./sales.css";
import dayjs from "dayjs";
import SalesOffCanvas from "../../components/saleOffCanvas/SalesOffCanvas";

const Sales = () => {
  const [invoice, setInvoice] = React.useState(undefined);

  const { invoices } = useSelector((state) => state.product);

  const displayDetails = (id) => {
    setInvoice(invoices.filter((receipt) => receipt.id === id)[0]);
  };
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
                <td
                  className="more"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => displayDetails(invoice.id)}
                >
                  {"more>>>"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {invoice && <SalesOffCanvas invoice={invoice} setInvoice={setInvoice}/>}
    </div>
  );
};

export default Sales;
