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
          description="A personalized skill to start your day with positivity. With warm greetings, weather, news, and events of the day, it provides 
          inspirational quotes, affirmations, and jokes to help you start your day with a smile."
        />
        <SkillList
          title="Good Night Skill"
          id="night"
          checked={nightEnabled}
          onChange={(e) => setNightEnabled(e.target.checked)}
          description="A skill designed to help you wind down and get ready for sleep. With a calming bedtime routine, it includes soothing sounds, guided meditations, 
          and relaxation techniques. Set reminders for your morning routine or to-do list for the next day."
        />
        <SkillList
          title="Unprompted Conversation Skill"
          id="unprompted"
          checked={unpromptedEnabled}
          onChange={(e) => setUnpromptedEnabled(e.target.checked)}
          description="A skill that allows for spontaneous and natural conversation with your smart speaker. This skill is designed to engage in small talk, 
          ask and answer open-ended questions, and provide personalized responses to your interests and preferences. This skill can keep you entertained, provide companionship, and help you practice your conversational skills."
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
          description="A skill that helps you build self-confidence and positive thinking. Provides daily affirmations and positive statements that encourage 
          self-love, motivation, and success. Customize the affirmations to fit your personal goals and needs."
        />
        <SkillList
          title="I love you Skill"
          id="love"
          checked={loveEnabled}
          onChange={(e) => setLoveEnabled(e.target.checked)}
          description="A skill designed to express love and gratitude to your loved ones. Provides sweet messages, romantic quotes, and heartfelt compliments 
          to show how much you care. Customize the messages to fit your relationship and express your love anytime you want."
        />
        <SkillList
          title="Joke Skill"
          id="joke"
          checked={jokeEnabled}
          onChange={(e) => setJokeEnabled(e.target.checked)}
          description="Get a daily dose of laughter with a selection of funny jokes, one-liners, and puns. Choose the type of jokes you want to hear, 
          such as dad jokes, knock-knock jokes, or silly jokes, and brighten up your day."
        />
        <SkillList
          title="Happy Skill"
          id="happy"
          checked={happyEnabled}
          onChange={(e) => setHappyEnabled(e.target.checked)}
          description="A skill designed to uplift your mood and bring joy to your day. Provides uplifting music, happy quotes, and positive news to improve 
          your emotional wellbeing. Customize the content to fit your preferences and listen whenever you need a quick pick-me-up."
        />
        <SkillList
          title="Breathing Skill"
          id="breathing"
          checked={breathingEnabled}
          onChange={(e) => setBreathingEnabled(e.target.checked)}
          description="Guides you through a series of breathing exercises designed to help you reduce stress, improve focus, and promote relaxation. 
          Practice at your own pace with techniques such as box breathing, alternate nostril breathing, or belly breathing."
        />
        <SkillList
          title="Bored Skill"
          id="bored"
          checked={boredEnabled}
          onChange={(e) => setBoredEnabled(e.target.checked)}
          description="A skill that provides entertainment and engagement when you're feeling bored. Provides fun trivia games, brain teasers, 
          and interactive quizzes to keep you entertained and engaged. Customize the content to fit your preferences and have fun whenever you need it."
        />
        <SkillList
          title="Compliment me Skill"
          id="compliment"
          checked={complimentEnabled}
          onChange={(e) => setComplimentEnabled(e.target.checked)}
          description="Boost your confidence and self-esteem with daily compliments. Get positive affirmations and compliments that remind you of your 
          strengths and achievements, and start your day with a positive mindset. Customize the compliments on your appearance, skills, or personality traits."
        />
        <SkillList
          title="Sad Skill"
          id="sad"
          checked={sadEnabled}
          onChange={(e) => setSadEnabled(e.target.checked)}
          description="A skill that provides emotional support during difficult times. Provides soothing music and comforting words to help 
          you cope with sadness and anxiety. Also includes helpful resources and tips for improving your mental health and wellbeing."
        />
      </div>
    </div>
  );
}

export default Skills;
