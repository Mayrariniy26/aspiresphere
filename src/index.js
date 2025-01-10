import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css"; // Import global styles
import App from "./App"; // Import App component
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Wrap the App with ThemeProvider for theme management */}
    <ThemeProvider>
      {/* Wrap App in Router for routing functionality */}
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
