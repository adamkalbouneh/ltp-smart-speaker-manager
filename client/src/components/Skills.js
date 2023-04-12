import React, { useState } from 'react';
import axios from 'axios';
import './Skills.css';

const Skill = ({ name, url }) => {
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    setTimeout(async () => {
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
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="skill">
      {loading && (
        <div className="loadingScreen">
          <span className="loadingMessage">Loading...</span>
        </div>
      )}
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
      <Skill
        name="Good Night Skill"
        url="https://github.com/adamkalbouneh/good-night-skill"
      />
      <Skill
        name="Sad Skill"
        url="https://github.com/adamkalbouneh/sad-skill"
      />
      <Skill
        name="I love you Skill"
        url="https://github.com/adamkalbouneh/i-love-you-skill"
      />
      <Skill
        name="Joke Skill"
        url="https://github.com/adamkalbouneh/joke-skill"
      />
      <Skill
        name="chatGPT skill"
        url="https://github.com/adamkalbouneh/chatgpt-skill"
      />
      <Skill
        name="Breathing Exercise Skill"
        url="https://github.com/adamkalbouneh/breathing-exercise-skill"
      />
      <Skill
        name="Affirmations Skill"
        url="https://github.com/adamkalbouneh/affirmations-skill"
      />
      <Skill
        name="Compliment Me Skill"
        url="https://github.com/adamkalbouneh/compliment-me-skill"
      />
      <Skill
        name="Happy Skill"
        url="https://github.com/adamkalbouneh/happy-skill"
      />
      <Skill
        name="Sad Skill"
        url="https://github.com/adamkalbouneh/sad-skill"
      />
    </div>
    

  );
};

export default Skills;
