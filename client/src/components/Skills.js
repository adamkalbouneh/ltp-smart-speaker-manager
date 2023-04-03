import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch the list of installed skills using the Mycroft API
  }, []);

  const toggleSkill = async (skill) => {
    // Enable or disable the skill using the Mycroft API
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            <span>{skill.name}</span>
            <input
              type ="checkbox"
              checked={skill.enabled}
              onChange={() => toggleSkill(skill)}
              />
              </li>
              ))}
              </ul>
              </div>
              );
              };
              
              export default Skills;
            


