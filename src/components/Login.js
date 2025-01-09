import React, { useState, useEffect } from "react";
import "../styles/Login.css"; // Import your CSS
import loginImage from "../assets/login.png"; // Left-side image
import aspireLogo from "../assets/AspireSphere_Logo.png"; // AspireSphere logo

const Login = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the body
  useEffect(() => {
    document.body.className = theme; // Dynamically set the class on <body>
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setError(""); // Clear error on success
      alert("Logged in successfully!"); // Simulate login success
    } else {
      setError("Please enter valid credentials"); // Show error
    }
  };

  return (
    <div className="login-container">
      {/* Left section for the image */}
      <div className="left-section">
        <img src={loginImage} alt="Progress" />
      </div>

      {/* Right section for the login form */}
      <div className="right-section">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>

        {/* AspireSphere Logo and Name */}
        <div className="logo-container">
          <img src={aspireLogo} alt="AspireSphere Logo" className="aspire-logo" />
          <h1 className="aspire-name">AspireSphere</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back!</h2>
          {error && <p className="error-text">{error}</p>} {/* Error message */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
          <button type="submit">Login</button>
          <div className="form-links">
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
            <a href="/sign-up" className="sign-up">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
