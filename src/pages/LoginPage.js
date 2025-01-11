import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Login from "../components/Login";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    alert("Login Successful!"); // Simulate successful login
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div>
      <Login onLogin={handleLogin} /> {/* Pass handleLogin as a prop */}
    </div>
  );
};

export default LoginPage;
