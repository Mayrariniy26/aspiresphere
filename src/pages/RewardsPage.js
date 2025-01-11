import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/RewardsPage.css";
import lockOpen from "../assets/lock-open.png";
import lock from "../assets/lock.png";
import fitnessIcon from "../assets/fitness.png";
import bookIcon from "../assets/book.png";
import alarmIcon from "../assets/alarm.png";
import champIcon from "../assets/champ.png";

const RewardsPage = () => {
  return (
    <div className="rewards-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <Topbar />

        {/* Header Section */}
        <div className="header-card">
          <h2>Rewards</h2>
          <p>Unlock achievements and celebrate your progress with exciting rewards!</p>
        </div>

        {/* Total Points Section */}
        <div className="points-section">
          <h3>Total Points</h3>
          <h1>1200</h1>
        </div>

        {/* Badges Section */}
        <div className="badges-section">
          <h3>Badges</h3>
          <div className="badges">
            <div className="badge unlocked">
              <img src={fitnessIcon} alt="Fitness Master" />
              <p>Fitness Master</p>
              <img src={lockOpen} alt="Unlocked" />
            </div>
            <div className="badge unlocked">
              <img src={bookIcon} alt="Bookworm" />
              <p>Bookworm</p>
              <img src={lockOpen} alt="Unlocked" />
            </div>
            <div className="badge locked">
              <img src={alarmIcon} alt="Early Bird" />
              <p>Early Bird</p>
              <img src={lock} alt="Locked" />
            </div>
            <div className="badge locked">
              <img src={champIcon} alt="Consistency Champ" />
              <p>Consistency Champ</p>
              <img src={lock} alt="Locked" />
            </div>
          </div>
        </div>

        {/* Redeem Points Button */}
        <div className="redeem-section">
          <button className="redeem-btn">Redeem Points</button>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
