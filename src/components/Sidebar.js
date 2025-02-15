import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

import mayraAvatar from "../assets/profile-icon.png";
import homeIcon from "../assets/home-icon.png";
import addIcon from "../assets/add-icon.png";
import trackIcon from "../assets/track-icon.png";
import statisticsIcon from "../assets/statistics-icon.png";
import groupsIcon from "../assets/groups-icon.png";
import rewardsIcon from "../assets/rewards-icon.png";
import settingsIcon from "../assets/settings-icon.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <img src={mayraAvatar} alt="Mayra Avatar" className="avatar" />
        <h3 className="username">MAYRARINIY 😊</h3>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <img src={homeIcon} alt="Dashboard Icon" className="menu-icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/create-habit">
            <img src={addIcon} alt="Add Habit Icon" className="menu-icon" />
            <span>Create Habit</span>
          </Link>
        </li>
        <li>
          <Link to="/track-habits">
            <img src={trackIcon} alt="Track Habits Icon" className="menu-icon" />
            <span>Track Habits</span>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <img src={statisticsIcon} alt="Statistics Icon" className="menu-icon" />
            <span>Statistics</span>
          </Link>
        </li>
        <li>
          <Link to="/communities">
            <img src={groupsIcon} alt="Community Icon" className="menu-icon" />
            <span>Community</span>
          </Link>
        </li>
        <li>
          <Link to="/rewards">
            <img src={rewardsIcon} alt="Rewards Icon" className="menu-icon" />
            <span>Rewards</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <img src={settingsIcon} alt="Settings Icon" className="menu-icon" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
