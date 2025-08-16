import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Features from "./Components/Features";
import Dashboard from "./Components/Dashboard";
import Tasks from "./Components/Tasks";
import Profile from "./Components/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("uplift_dark_mode");
    // Set dark mode as default if nothing is saved
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("uplift_dark_mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className={
        (darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-black") +
        " min-h-screen transition-colors duration-300"
      }
    >
      <Navbar
        className="overflow-hidden"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/About"
          element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/Features"
          element={<Features darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/Contact"
          element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/Dashboard"
          element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/Login"
          element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/Register"
          element={<Register darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/tasks"
          element={<Tasks darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/profile"
          element={<Profile darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;