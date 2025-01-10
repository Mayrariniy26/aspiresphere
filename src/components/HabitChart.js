import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const HabitChart = () => {
  const chartRef = useRef(null); // Reference for the canvas element
  const chartInstance = useRef(null); // Reference for the Chart.js instance

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "Habits Completed",
          data: [3, 4, 5, 2, 3, 6, 7], // Sample data
          backgroundColor: "rgba(106, 90, 205, 0.8)", // Purple
          borderRadius: 5,
        },
      ],
    };

    // Options for the chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Habit Completion Overview (Weekly)",
        },
      },
    };

    // Destroy the existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data,
      options,
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default HabitChart;
