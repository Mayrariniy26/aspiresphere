import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import HabitChart from "../components/HabitChart"; // Import the HabitChart component
import "../styles/HabitTracking.css"; // Ensure you have the CSS file

const HabitTrackingPage = () => {
  const [filter, setFilter] = useState("Today");
  const [chartData, setChartData] = useState(getChartData("Today"));

  const habits = [
    { name: "Exercise", progress: 80 },
    { name: "Reading", progress: 50 },
    { name: "Meditation", progress: 30 },
  ];

  // Function to get chart data based on the filter
  function getChartData(filter) {
    switch (filter) {
      case "Today":
        return {
          labels: ["Morning", "Afternoon", "Evening"],
          datasets: [
            {
              label: "Habits Progress",
              data: [50, 80, 40],
              backgroundColor: ["#6a5acd", "#836fff", "#9370db"],
            },
          ],
        };
      case "This Week":
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Habits Progress",
              data: [60, 70, 50, 90, 80, 40, 100],
              backgroundColor: ["#6a5acd", "#836fff", "#9370db", "#6a5acd", "#836fff", "#9370db", "#6a5acd"],
            },
          ],
        };
      case "This Month":
        return {
          labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Habits Progress",
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
              backgroundColor: "#6a5acd",
            },
          ],
        };
      default:
        return {};
    }
  }

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    setChartData(getChartData(selectedFilter)); // Update chart data
  };

  return (
    <div className="habit-tracking-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        {/* Header Section */}
        <div className="header-card">
          <h2>Habit Progress</h2>
          <p>
            Track your journey and celebrate every milestone as you build better
            habits!
          </p>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <label htmlFor="filter">Filter By:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>

        {/* Tracked Habits Section */}
        <div className="tracked-habits">
          <h3>Tracked Habits</h3>
          {habits.map((habit, index) => (
            <div className="habit-item" key={index}>
              <span>{habit.name}</span>
              <progress value={habit.progress} max="100"></progress>
              <span>{habit.progress}%</span>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <h3>Habit Completion Overview</h3>
          <HabitChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default HabitTrackingPage;
