import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Import required Chart.js components
import "../styles/StatisticsPage.css";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const StatisticsPage = () => {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Habit Progress",
        backgroundColor: "#6a5acd",
        borderColor: "#4b0082",
        borderWidth: 1,
        data: [60, 80, 70, 90, 50, 40, 80], // Replace with actual data
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "Skipped"],
    datasets: [
      {
        label: "Completion Overview",
        data: [85, 15], // Replace with actual data
        backgroundColor: ["#6a5acd", "#ff7eb3"],
        borderColor: ["#4b0082", "#e0e0e0"],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable legend for bar chart
      },
      title: {
        display: true,
        text: "Weekly Habit Progress",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
      y: {
        title: {
          display: true,
          text: "Progress (%)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Habit Completion Overview",
      },
    },
  };

  return (
    <div className="statistics-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        {/* Header Section */}
        <div className="header-card">
          <h2>Statistics</h2>
          <p>
            Gain insights into your habits with detailed analytics and progress
            trends!
          </p>
        </div>

        {/* Completion Stats */}
        <div className="completion-stats">
          <div className="stat-card">
            <h3>Habits Completed</h3>
            <p>85%</p>
          </div>
          <div className="stat-card">
            <h3>Habits Skipped</h3>
            <p>15%</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart weekly-progress">
            <h3>Weekly Progress</h3>
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="chart completion-overview">
            <h3>Completion Overview</h3>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        {/* Insights Section */}
        <div className="insights-card">
          <h3>Insights</h3>
          <p>You're most consistent with fitness habits. Keep it up!</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
