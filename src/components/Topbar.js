import React from "react";
import "../styles/Topbar.css";
import { useTheme } from "../context/ThemeContext";
import aspireLogo from "../assets/AspireSphere_Logo.png";

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`top-bar ${theme}`}>
      {/* Logo on the left */}
      <div className="top-bar-logo">
        <img src={aspireLogo} alt="AspireSphere Logo" className="logo-image" />
      </div>

      {/* Centered Title */}
      <h1 className="top-bar-title">ASPIRESPHERE</h1>

      {/* Toggle Button on the right */}
      <button className="dark-mode-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default Topbar;
