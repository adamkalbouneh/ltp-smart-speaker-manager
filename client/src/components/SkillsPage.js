import React, { useState, useEffect } from "react";
import axios from 'axios';

// This makes sure that if the checkbox is enabled even after reloading the page, the text shows
function withSkillToggle(Component) {
  return function SkillToggleWrapper(props) {
    const handleSkillToggle = (skill) => {
      const body = document.getElementById(`${skill}-body`);
      const checkbox = document.getElementById(`${skill}-checkbox`);

      if (body && checkbox) {
        const container = body.parentNode;
        if (checkbox.checked) {
          container.classList.add('expanded');
          body.style.maxHeight = `${body.scrollHeight}px`;
        } else {
          container.classList.remove('expanded');
          body.style.maxHeight = 0;
        }
      }
    };

    useEffect(() => {
      handleSkillToggle(props.id);
    }, [props.id]);

    return <Component {...props} handleSkillToggle={handleSkillToggle} />;
  };
}

function SkillsPage(props) {
  const { handleSkillToggle, url } = props;
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (!installed) {
          await axios.post('/install-skill', { url });
        } else {
          await axios.post('/uninstall-skill', { name: props.title });
        }
        setInstalled(!installed);
      } catch (error) {
        alert('Error: ' + error.message);
      }
      setLoading(false);
    }, 200);
  };


  // Skill container template
  return (
    <div className="skill-container">
       {loading && (
        <div className="loadingScreen">
          <span className="loadingMessage">Loading...</span>
        </div>
      )}
      <div className="skill-head" onClick={() => handleSkillToggle(props.id)}>
        <h2>{props.title}</h2>
        <input
        type="checkbox"
        id={`${props.id}-checkbox`}
        name="enable-checkbox"
        checked={installed}
        onChange={handleToggle}
      />
        <label htmlFor="enable-checkbox">Enable skill</label>
      </div>
      <div className="skill-body" id={`${props.id}-body`}>
        <p>{props.description}</p>
        {props.bodyContent && <div>{props.bodyContent}</div>}
      </div>
    </div>
  );
}

const SkillList = withSkillToggle(SkillsPage);

// Saving the state of the checkbox template
function useEnabledState(key) {
  const [enabled, setEnabled] = useState(
    localStorage.getItem(key) === "true"
  );

  useEffect(() => {
    localStorage.setItem(key, enabled);
  }, [key, enabled]);

  return [enabled, setEnabled];
}

function Skills() {
  // All skill checkbox variable states
  const [jokeEnabled, setJokeEnabled] = useEnabledState("jokeEnabled");
  const [breathingEnabled, setBreathingEnabled] = useEnabledState("breathingEnabled");
  const [happyEnabled, setHappyEnabled] = useEnabledState("happyEnabled");

  return (
    <div className="page">
      {/* All skills */}
      <SkillList
        title="Joke Skill"
        id="joke"
        description="Get a daily dose of laughter with a selection of funny jokes, one-liners, and puns."
        url="https://github.com/adamkalbouneh/joke-skill"
      />
      <SkillList
        title="Happy Skill"
        id="happy"
        description="A skill designed to uplift your mood and bring joy to your day. Provides uplifting music, happy quotes, and positive news to improve
        your emotional wellbeing."
        url="https://github.com/adamkalbouneh/happy-skill"
      />
      <SkillList
        title="Breathing Skill"
        id="breathing"
        description="Guides you through a series of breathing exercises designed to help you reduce stress, improve focus, and promote relaxation."
        url="https://github.com/adamkalbouneh/breathing-exercise-skill"
      />
    </div>
  );
}

export default Skills;