import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import DashboardPage from "./pages/DashboardPage"; // Import DashboardPage
import CreateHabitPage from "./pages/CreateHabitPage";

const App = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<LoginPage />} />

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Create Habit Route */}
      <Route path="/create-habit" element={<CreateHabitPage />} />
    </Routes>
  );
};

export default App;
