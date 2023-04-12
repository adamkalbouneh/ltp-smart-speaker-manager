import React, { useState } from 'react';
import axios from 'axios';
import './Skills.css';

const Skill = ({ name, url }) => {
  const [installed, setInstalled] = useState(false);

  const handleToggle = async () => {
    try {
      if (!installed) {
        const response = await axios.post('/install-skill', { url });
        alert(response.data.message);
      } else {
        const response = await axios.post('/uninstall-skill', { name });
        alert(response.data.message);
      }
      setInstalled(!installed);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="skill">
      <label className="skillName">{name}</label>
      <input
        className="skillToggle"
        type="checkbox"
        onChange={handleToggle}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>Skills</h1>
      
    
      <Skill
        name="Bored Skill"
        url="https://github.com/adamkalbouneh/bored-skill"
      />
      <Skill
        name="Good Morning Skill"
        url="https://github.com/adamkalbouneh/good-morning-skill"
      />
    </div>
  );
};

export default Skills;
