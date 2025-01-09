import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Import global styles
import App from './App'; // Import App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the App in ThemeProvider */}
      <Router> {/* Wrap App in BrowserRouter */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
