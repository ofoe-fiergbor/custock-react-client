import React from "react";
import CreateButton from "../createButton/CreateButton";
import CreateModal from "../modal/CreateModal";
import "./dashboardHeader.css";

const DashboardHeader = ({username, handleClick }) => {
  return (
    <header className="dashboard-header-cta">
      <div className="welcome-ctn">
        <div className="welcome">
          <h1>Welcome back,</h1>
          <h1>{username}!</h1>
        </div>
        <p>Manage your inventory.</p>
      </div>
      <CreateButton handleClick={()=> handleClick()} />

      <CreateModal />
    </header>
  );
};

export default DashboardHeader;
