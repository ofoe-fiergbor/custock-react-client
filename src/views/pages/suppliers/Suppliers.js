import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import "./suppliers.css"

const Suppliers = () => {
  const { suppliers } = useSelector((state) => state.product);
  return (
    <div className="page">
      <Navbar />
      <div className="supplier-inner-ctn">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {suppliers && suppliers?.map((supplier) => (
              <tr key={supplier?.id}>
                <th scope="row">{supplier?.id}</th>
                <td>{supplier?.name}</td>
                <td>{supplier?.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
