import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import DashboardPage from "./pages/DashboardPage"; // Import DashboardPage

const App = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<LoginPage />} />

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
