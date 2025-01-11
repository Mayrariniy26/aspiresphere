import React from "react";
import { Bar } from "react-chartjs-2"; // Example with Bar chart

const HabitChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bar data={chartData} />
    </div>
  );
};

export default HabitChart;
