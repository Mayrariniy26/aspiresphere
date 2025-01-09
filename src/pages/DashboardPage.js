import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardContent from "../components/DashboardContent";
import "../styles/Dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
