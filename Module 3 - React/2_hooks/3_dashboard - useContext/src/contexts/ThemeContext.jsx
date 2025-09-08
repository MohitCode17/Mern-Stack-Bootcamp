import { createContext, useContext, useState } from "react";

// 1. CREATE CONTEXT
const ThemeContext = createContext();

// 2. CUSTOM HOOK
export const useTheme = () => useContext(ThemeContext);

// 3. CREATE PROVIDER
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
