import React from "react";
import { Bar } from "react-chartjs-2"; // Import Bar chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HabitChart = ({ chartData, chartOptions }) => {
  return (
    <div className="chart-container">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default HabitChart;
