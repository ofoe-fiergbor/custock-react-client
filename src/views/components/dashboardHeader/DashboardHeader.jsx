import React from "react";
import "./dashboardHeader.css";

const DashboardHeader = ({ username }) => {
  return (
    <header className="dashboard-header-cta">
      <div className="welcome-ctn">
        <div className="welcome">
          <h1>Welcome back,</h1>
          <h1>{username}!</h1>
        </div>
        <p>Manage your inventory.</p>
      </div>
      <div onClick={()=> alert("yoh")} className="create-btn">
        <p>Create</p>
        <i className="bi bi-plus" />
      </div>
    </header>
  );
};

export default DashboardHeader;
