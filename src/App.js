import React from "react";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Nav from "./pages/Nav";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
