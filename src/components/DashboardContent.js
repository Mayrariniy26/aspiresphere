import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Dashboard.css";

const DashboardContent = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="dashboard-content">
      <h2 className="welcome">WELCOME MAYRA !!</h2>
      <p className="dashboard-description">
        Your journey to success starts here—tick off your habits, conquer
        challenges, and unlock your best self!
      </p>
      {/* Add Habit Button */}
      <button
        className="add-habit-btn"
        onClick={() => navigate("/create-habit")} // Navigate to Create Habit page
      >
        + Add Habit
      </button>
      <div className="habit-progress">
        <h3>Your Habits</h3>
        <div className="habit">
          <span>Exercise: 60%</span>
          <progress value="60" max="100"></progress>
        </div>
        <div className="habit">
          <span>Read a Book: 40%</span>
          <progress value="40" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
