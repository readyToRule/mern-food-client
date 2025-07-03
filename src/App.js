import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./pages/HomePage"; // Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;
