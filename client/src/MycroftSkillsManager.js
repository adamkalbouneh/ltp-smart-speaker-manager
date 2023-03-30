import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MycroftSkillsManager.css';

const MycroftSkillsManager = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const toggleSkill = async (skillName) => {
    const currentState = skills.find((skill) => skill.name === skillName).enabled;
    const newState = !currentState;
    const action = newState ? 'enable' : 'disable';

    try {
      await axios.post(`/skill/${action}/${skillName}`);
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.name === skillName ? { ...skill, enabled: newState } : skill
        )
      );
    } catch (error) {
      console.error(`Error ${action}ing skill ${skillName}:`, error);
    }
  };

  return (
    <div className="mycroft-skills-manager">
      <h2>Mycroft Skills Manager</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <label className="switch">
              <input
                type="checkbox"
                checked={skill.enabled}
                onChange={() => toggleSkill(skill.name)}
              />
              <span className="slider round"></span>
            </label>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MycroftSkillsManager;
