import React from "react";
import "../styles/Topbar.css";
import { useTheme } from "../context/ThemeContext";

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="topbar">
      <h1 className="topbar-title">ASPIRESPHERE</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Topbar;
