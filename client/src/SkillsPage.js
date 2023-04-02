import React, { useState, useEffect } from "react";

const SkillsPage = ({ raspberryPiIp, onRaspberryPiIpSubmit }) => {
  const [skills, setSkills] = useState([]);
  const [ipInput, setIpInput] = useState("");

  useEffect(() => {
    if (!raspberryPiIp) return;

    fetch(`/api/skills?ip=${raspberryPiIp}`)
      .then((response) => response.json())
      .then((data) => setSkills(data.skills));
  }, [raspberryPiIp]);

  const handleIpInputChange = (event) => {
    setIpInput(event.target.value);
  };

  const handleIpFormSubmit = (event) => {
    event.preventDefault();
    onRaspberryPiIpSubmit(ipInput);
  };

  return (
    <div>
      <h2>Skills</h2>
      {!raspberryPiIp && (
        <form onSubmit={handleIpFormSubmit}>
          <label>
            Raspberry Pi IP:
            <input type="text" value={ipInput} onChange={handleIpInputChange} />
          </label>
          <button type="submit">Connect</button>
        </form>
      )}
      <div className="skills-container">
        {skills.map((skill) => (
          // Render skill components
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
