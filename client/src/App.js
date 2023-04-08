import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SkillList from "./components/SkillList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/skills" element={<SkillList />} />
      </Routes>
    </Router>
  );
}

export default App;
