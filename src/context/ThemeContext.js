import React, { createContext, useContext, useState, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  // Update the body class and save theme to localStorage whenever it changes
  useEffect(() => {
    console.log(`Current theme applied to body: ${theme}`);
    document.body.className = theme; // Body ku theme class apply pannudhu
    localStorage.setItem("theme", theme); // LocalStorage la save pannudhu
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(`Theme changed to: ${theme}`);
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {/* Wrap the entire app with a div having the theme class */}
    <div className={theme}>
      {children}
    </div>
  </ThemeContext.Provider>
  );
};
