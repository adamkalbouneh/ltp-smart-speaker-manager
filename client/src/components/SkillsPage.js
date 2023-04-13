import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

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
  const { handleSkillToggle } = props;

  // Skill container template
  return (
    <div className="skill-container">
      <div className="skill-head" onClick={() => handleSkillToggle(props.id)}>
        <h2>{props.title}</h2>
        <input
          type="checkbox"
          id={`${props.id}-checkbox`}
          name="enable-checkbox"
          checked={props.checked}
          onChange={props.onChange}
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
  const [radioEnabled, setRadioEnabled] = useEnabledState("radioEnabled");
  const [musicEnabled, setMusicEnabled] = useEnabledState("musicEnabled");
  const [morningEnabled, setMorningEnabled] = useEnabledState("morningEnabled");
  const [nightEnabled, setNightEnabled] = useEnabledState("nightEnabled");
  const [jokeEnabled, setJokeEnabled] = useEnabledState("jokeEnabled");
  const [chatgptEnabled, setChatgptEnabled] = useEnabledState("chatgptEnabled");
  const [breathingEnabled, setBreathingEnabled] = useEnabledState("breathingEnabled");
  const [complimentEnabled, setComplimentEnabled] = useEnabledState("complimentEnabled");
  const [affirmationsEnabled, setAffirmationsEnabled] = useEnabledState("affirmationsEnabled");
  const [happyEnabled, setHappyEnabled] = useEnabledState("happyEnabled");
  const [sadEnabled, setSadEnabled] = useEnabledState("sadEnabled");
  const [boredEnabled, setBoredEnabled] = useEnabledState("boredEnabled");
  const [loveEnabled, setLoveEnabled] = useEnabledState("loveEnabled");
  const [unpromptedEnabled, setUnpromptedEnabled] = useEnabledState("unpromptedEnabled");

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

  const [morninghour, setMorningHour] = useState(localStorage.getItem('morning-hour') || '1');
  const [morningminute, setMorningMinute] = useState(localStorage.getItem('morning-minute') || '00');
  const [morningampm, setMorningAmpm] = useState(localStorage.getItem('morning-ampm') || 'am');

  useEffect(() => {
    // Get references to the select elements
    const morningHourSelect = document.getElementById('morning-hour');
    const morningMinuteSelect = document.getElementById('morning-minute');
    const morningAmpmSelect = document.getElementById('morning-am-pm');

    // Save the selected values to localStorage when the user changes them
    morningHourSelect.addEventListener('change', function() {
      localStorage.setItem('morning-hour', morningHourSelect.value);
      setMorningHour(morningHourSelect.value);
    });

    morningMinuteSelect.addEventListener('change', function() {
      localStorage.setItem('morning-minute', morningMinuteSelect.value);
      setMorningMinute(morningMinuteSelect.value);
    });

    morningAmpmSelect.addEventListener('change', function() {
      localStorage.setItem('morning-ampm', morningAmpmSelect.value);
      setMorningAmpm(morningAmpmSelect.value);
    });
  }, []);

  const [hour, setHour] = useState(localStorage.getItem('hour') || '1');
  const [minute, setMinute] = useState(localStorage.getItem('minute') || '00');
  const [ampm, setAmpm] = useState(localStorage.getItem('ampm') || 'am');

  useEffect(() => {
    // Get references to the select elements
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');
    const ampmSelect = document.getElementById('am-pm');

    // Save the selected values to localStorage when the user changes them
    hourSelect.addEventListener('change', function() {
      localStorage.setItem('hour', hourSelect.value);
      setHour(hourSelect.value);
    });

    minuteSelect.addEventListener('change', function() {
      localStorage.setItem('minute', minuteSelect.value);
      setMinute(minuteSelect.value);
    });

    ampmSelect.addEventListener('change', function() {
      localStorage.setItem('ampm', ampmSelect.value);
      setAmpm(ampmSelect.value);
    });
  }, []);


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
      </div>

      <button className="blue-button content" id="submit-button">
        Submit
      </button>

      {/* All skills */}
      <div className="skills">
          <SkillList
            title="Good morning Skill"
            id="morning"
            checked={morningEnabled}
            onChange={(e) => setMorningEnabled(e.target.checked)}
            description="A personalized skill to start your day with positivity. 
            With warm greetings it helps you start your day with a smile."
            bodyContent={
   <div className="clock">
      <label htmlFor="morning-hour">Hour:</label>
      <select name="morning-hour" id="morning-hour" value={morninghour}>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>

      <label htmlFor="morning-minute">Minute:</label>
      <select name="morning-minute" id="morning-minute" value={morningminute}>
        <option value="00">00</option>
        <option value="05">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </select>

      <select name="morning-am-pm" id="morning-am-pm" value={morningampm}>
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    </div>
}
          />
          <SkillList
            title="Good Night Skill"
            id="night"
            checked={nightEnabled}
            onChange={(e) => setNightEnabled(e.target.checked)}
            description="A skill designed to help you wind down and get ready for sleep. 
            With a calming bedtime routine, it includes soothing relaxation techniques."
            bodyContent={
              <div className="clock">
                 <label htmlFor="hour">Hour:</label>
                 <select name="hour" id="hour" value={hour}>
                   <option value="1">01</option>
                   <option value="2">02</option>
                   <option value="3">03</option>
                   <option value="4">04</option>
                   <option value="5">05</option>
                   <option value="6">06</option>
                   <option value="7">07</option>
                   <option value="8">08</option>
                   <option value="9">09</option>
                   <option value="10">10</option>
                   <option value="11">11</option>
                   <option value="12">12</option>
                 </select>
           
                 <label htmlFor="minute">Minute:</label>
                 <select name="minute" id="minute" value={minute}>
                   <option value="00">00</option>
                   <option value="05">05</option>
                   <option value="10">10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
                   <option value="25">25</option>
                   <option value="30">30</option>
                   <option value="35">35</option>
                   <option value="40">40</option>
                   <option value="45">45</option>
                   <option value="50">50</option>
                   <option value="55">55</option>
                 </select>
           
                 <label htmlFor="am-pm">AM/PM:</label>
                 <select name="am-pm" id="am-pm" value={ampm}>
                   <option value="am">AM</option>
                   <option value="pm">PM</option>
                 </select>
               </div>
           }
          />
          <SkillList
            title="Conversation Skill"
            id="unprompted"
            checked={unpromptedEnabled}
            onChange={(e) => setUnpromptedEnabled(e.target.checked)}
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
          />
          <SkillList
            title="Joke Skill"
            id="joke"
            checked={jokeEnabled}
            onChange={(e) => setJokeEnabled(e.target.checked)}
            description="Get a daily dose of laughter with a selection of funny jokes, one-liners, and puns."
          />
          <SkillList
            title="ChatGPT Skill"
            id="chatgpt"
            checked={chatgptEnabled}
            onChange={(e) => setChatgptEnabled(e.target.checked)}
            description="Have natural conversations with ChatGPT, an AI language model that can answer your questions, give advice, or engage in small talk. 
            Get human-like responses that are fun and engaging to interact with your smart speaker."
          />
          <SkillList
            title="Music Skill"
            id="music"
            checked={musicEnabled}
            onChange={(e) => setMusicEnabled(e.target.checked)}
            description="Music-listening skill, enabling users to listen to music exclusively and uninterrupted. Users can play specific songs, pause and skip songs through Spotify."
          />
          <SkillList
            title="Radio Skill"
            id="radio"
            checked={radioEnabled}
            onChange={(e) => setRadioEnabled(e.target.checked)}
            description="Radio-listening skill, enabling users to listen to a radio station of their choosing, whether it being regional or national."
          />
          <SkillList
            title="Affirmations Skill"
            id="affirmations"
            checked={affirmationsEnabled}
            onChange={(e) => setAffirmationsEnabled(e.target.checked)}
            description="A skill that helps you build self-confidence and positive thinking. Provides affirmations and positive statements that encourage 
            self-love, motivation, and success. Customize the affirmations to fit your personal goals and needs."
          />
          <SkillList
            title="I love you Skill"
            id="love"
            checked={loveEnabled}
            onChange={(e) => setLoveEnabled(e.target.checked)}
            description="A skill designed to express love and gratitude. Provides sweet messages, romantic quotes, and heartfelt compliments."
          />
          <SkillList
            title="Happy Skill"
            id="happy"
            checked={happyEnabled}
            onChange={(e) => setHappyEnabled(e.target.checked)}
            description="A skill designed to uplift your mood and bring joy to your day. Provides uplifting music, happy quotes, and positive news to improve 
            your emotional wellbeing."
          />
          <SkillList
            title="Breathing Skill"
            id="breathing"
            checked={breathingEnabled}
            onChange={(e) => setBreathingEnabled(e.target.checked)}
            description="Guides you through a series of breathing exercises designed to help you reduce stress, improve focus, and promote relaxation."
          />
          <SkillList
            title="Bored Skill"
            id="bored"
            checked={boredEnabled}
            onChange={(e) => setBoredEnabled(e.target.checked)}
            description="A skill that provides entertainment and engagement when you're feeling bored. Provides fun trivia games, brain teasers, 
            and interactive quizzes to keep you entertained and engaged."
          />
          <SkillList
            title="Compliment me Skill"
            id="compliment"
            checked={complimentEnabled}
            onChange={(e) => setComplimentEnabled(e.target.checked)}
            description="Boost your confidence and self-esteem with daily compliments. Get positive affirmations and compliments that remind you of your 
            strengths and achievements, and start your day with a positive mindset."
          />
          <SkillList
            title="Sad Skill"
            id="sad"
            checked={sadEnabled}
            onChange={(e) => setSadEnabled(e.target.checked)}
            description="A skill that provides emotional support during difficult times. Provides soothing music and comforting words to help 
            you cope with sadness and anxiety."
          />
      </div>
    </div>
  );
}

export default Skills;
