import React, { useState } from "react";
import axios from "axios";
import "./SkillList.css";

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [macAddress, setMacAddress] = useState("");

  const mainColor = "#22A7F0";

  const fetchSkills = async () => {
    try {
      console.log('Fetching skills for MAC address:', macAddress);
      const response = await axios.get(`/api/skills?mac_address=${macAddress}`);
      console.log('Response:', response);
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (macAddress.length === 17) {
      fetchSkills();
    }
  };

  const toggleSkill = async (skillId, isEnabled) => {
    try {
      await axios.patch(`/api/skills/${skillId}`, { enabled: isEnabled });
      setSkills(skills.map((skill) => skill.id === skillId ? { ...skill, enabled: isEnabled } : skill));
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  return (
    <div className="skill-container">
      <h2 style={{ marginBottom: "20px", color: mainColor }}>Skills</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mac-address">MAC Address</label>
        <input
          type="text"
          id="mac-address"
          value={macAddress}
          onChange={(e) => setMacAddress(e.target.value)}
          style={{ display: "block", width: "100%" }}
        />
        <button type="submit">Submit</button>
      </form>
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <span>{skill.name}</span>
          <input
            type="checkbox"
            checked={skill.enabled}
            onChange={() => toggleSkill(skill.id, !skill.enabled)}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillList;
