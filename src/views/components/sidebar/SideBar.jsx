import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { menuItems } from "../../../configurations/constants/menuItems";

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <div className="sidebar">
      <div className="main-logo">
        <h2>custock</h2>
      </div>

      <ul className="menu-container">
        <div className="mini-title">
          <p>Dashboards</p>
        </div>
        {menuItems.map((item) => (
          <li key={item.label} className="menu-item-ctn">
            <Link id="text-decoration" to={item.path}>
              <span className={`${isActive(item.path) && "active"}`}>
                <i className={item?.icon} />
                <p>{item.label}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
