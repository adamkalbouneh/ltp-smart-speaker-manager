import React, { useState, useEffect } from "react";
import axios from 'axios';
import DashboardHeader from '../components/DashboardHeader';

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
    <div className="skill-container text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
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

  // This is to get the previous selected device name 
  const [selectedOption, setSelectedOption] = useState(
    parseInt(localStorage.getItem("selectedOption")) || 0
  );

  // This is to change the shape displayed 
  useEffect(() => {
    const deviceSelect = document.getElementById("device-select");
    const shape = document.getElementById("shape");

    deviceSelect.value = selectedOption;
    shape.className = "";

    switch (selectedOption) {
      case 1:
        shape.classList.add("mycroft");
        break;
      case 2:
        shape.classList.add("mykie");
        break;
      case 3:
        shape.classList.add("jarvis");
        break;
      case 4:
        shape.classList.add("lifeline");
        break;
      case 5:
        shape.classList.add("sally");
        break;
    }
  }, [selectedOption]);

   // This stores the selected name 
   const handleSelectChange = (event) => {
    const optionValue = parseInt(event.target.value);
    localStorage.setItem("selectedOption", optionValue);
    setSelectedOption(optionValue);
  };


  const [conversationSliderValue, conversationSetSliderValue] = useState(
    localStorage.getItem("conversationSliderValue") || 5
  );

   const handleSliderChange = (event) => {
    const value = event.target.value;
    conversationSetSliderValue(value);
    localStorage.setItem("conversationSliderValue", value);
  };
 
  const renderOutput = () => {
    switch (conversationSliderValue) {
      case "1":
        return "Every 30m";
      case "2":
        return "Every 1h";
      case "3":
        return "Every 1:30";
      case "4":
        return "Every 2h";
      case "5":
        return "Every 2:30h";
      case "6":
        return "Every 3h";
      case "7":
        return "Every 3:30";
      case "8":
        return "Every 4h";
      case "9":
        return "Every 4:30h";
      case "10":
        return "Every 5h";
      default:
        return "";
    }
  };



  return (
    <div className="page">
      <DashboardHeader />
      {/* Device name, with different options and a submit button */}
      <div id="shape"></div>
      <div className="text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-2xl textBox ">
        <div className="landing-header content">Your device name</div>
      <div className="custom-select">
        <select id="device-select" onChange={handleSelectChange}>
          <option value="0">Select The Device Name:</option>
          <option value="1">Mycroft</option>
          <option value="2">Mykie</option>
          <option value="3">Jarvis</option>
          <option value="4">Lifeline</option>
          <option value="5">Sally</option>
        </select>
        <button className="blue-button content" id="submit-button">
        Submit
      </button>
      </div>
      
      </div>

      
      {/* All skills */}
      <div className="skills">
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
      <SkillList
          title="Good morning Skill"
          id="morning"
          description="A personalized skill to start your day with positivity. With warm greetings it helps you start your day with a smile."
          url="https://github.com/adamkalbouneh/good-morning-skill"
        />
        <SkillList
            title="Good Night Skill"
            id="night"
            description="A skill designed to help you wind down and get ready for sleep. With a calming bedtime routine, it includes soothing relaxation techniques."
            url="https://github.com/adamkalbouneh/good-night-skill"
          />
          <SkillList
            title="Conversation Skill"
            id="unprompted"
            description="A skill that allows for spontaneous and natural conversation with your smart speaker. This skill is designed to engage in small talk, 
            ask and answer open-ended questions, and provide personalized responses to your interests and preferences."
            bodyContent={
              <div>
              <label htmlFor="frequency-slider">Frequency:</label><div className="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={conversationSliderValue}
                  className="slider"
                  id="myRange"
                  onChange={handleSliderChange} />
              </div><output htmlFor="frequency-slider">{renderOutput()}</output>
              </div>
            }
            url="https://github.com/ethanallenharris/unprompted-dialog-skill"
          />
          <SkillList
            title="ChatGPT Skill"
            id="chatgpt"
            description="Have natural conversations with ChatGPT, an AI language model that can answer your questions, give advice, or engage in small talk. 
            Get human-like responses that are fun and engaging to interact with your smart speaker."
            url="https://github.com/adamkalbouneh/chatgpt-skill"
          />
          <SkillList
            title="Radio Skill"
            id="radio"
            description="Radio-listening skill, enabling users to listen to a radio station of their choosing, whether it being regional or national."
            url="https://github.com/johnbartkiw/mycroft-skill-tunein"
          />
          <SkillList
            title="Affirmations Skill"
            id="affirmations"
            description="A skill that helps you build self-confidence and positive thinking. Provides affirmations and positive statements that encourage 
            self-love, motivation, and success. Customize the affirmations to fit your personal goals and needs."
            url="https://github.com/adamkalbouneh/affirmations-skill"
          />
          <SkillList
            title="I love you Skill"
            id="love"
            description="A skill designed to express love and gratitude. Provides sweet messages, romantic quotes, and heartfelt compliments."
            url="https://github.com/adamkalbouneh/i-love-you-skill"
          />
          <SkillList
            title="Bored Skill"
            id="bored"
            description="A skill that provides entertainment and engagement when you're feeling bored. Provides fun trivia games, brain teasers, 
            and interactive quizzes to keep you entertained and engaged."
            url="https://github.com/adamkalbouneh/bored-skill"
          />
          <SkillList
            title="Compliment me Skill"
            id="compliment"
            description="Boost your confidence and self-esteem with daily compliments. Get positive affirmations and compliments that remind you of your 
            strengths and achievements, and start your day with a positive mindset."
            url="https://github.com/adamkalbouneh/compliment-me-skill"
          />
          <SkillList
            title="Sad Skill"
            id="sad"
            description="A skill that provides emotional support during difficult times. Provides soothing music and comforting words to help 
            you cope with sadness and anxiety."
            url="https://github.com/adamkalbouneh/sad-skill"
          />
      </div>
    </div>
  );
}

export default Skills;