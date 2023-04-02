import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./App.css";
import SkillsPage from "./SkillsPage";

function App() {
  const [raspberryPiIp, setRaspberryPiIp] = useState("");

  const handleSkillsClick = () => {
    // Add logic to handle the Skills button click event, e.g., navigate to the skills page
  };

  const handleRaspberryPiIpSubmit = (ip) => {
    setRaspberryPiIp(ip);
  };

  return (
    <div className="App">
      <NavigationBar onSkillsClick={handleSkillsClick} />
      <SkillsPage raspberryPiIp={raspberryPiIp} onRaspberryPiIpSubmit={handleRaspberryPiIpSubmit} />
    </div>
  );
}

export default App;
