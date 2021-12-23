import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <h2>CuStock</h2>
      <Link id="remove-text-decoration" to="/">
        <div className="side-bar-btn">
          <div className="side-bar-btn-inner">
            <i class="fas fa-home"></i>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      <Link id="remove-text-decoration" to="/stockItems">
        <div className="side-bar-btn">
          <div className="side-bar-btn-inner">
            <i class="fas fa-shopping-basket"></i>
            <p>Stock</p>
          </div>
        </div>
      </Link>
      <Link id="remove-text-decoration" to="/transactions">
        <div className="side-bar-btn">
          <div className="side-bar-btn-inner">
            <i class="fas fa-money-check-alt"></i>
            <p>Transactions</p>
          </div>
        </div>
      </Link>
      <Link id="remove-text-decoration" to="/suppliers">
        <div className="side-bar-btn">
          <div className="side-bar-btn-inner">
            <i class="fas fa-user-check"></i>
            <p>Suppliers</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
