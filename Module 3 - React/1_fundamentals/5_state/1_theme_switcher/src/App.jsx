import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="card">
        <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
        <p>Click the button below to toggle between themes.</p>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <>
              <FaSun /> Switch to Light Mode
            </>
          ) : (
            <>
              <FaMoon /> Switch to Dark Mode
            </>
          )}
        </button>

        <div className="info-box">
          <h2>About This App</h2>
          <p>
            This is a simple React app demonstrating how to toggle between dark
            and light themes using the <b>useState</b> hook.
          </p>
        </div>

        <div className="info-box">
          <h2>Features 🚀</h2>
          <ul>
            <li>React functional components</li>
            <li>useState for theme toggling</li>
            <li>Custom CSS for smooth transitions</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
