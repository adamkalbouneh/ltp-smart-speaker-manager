import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

const SkillsPage = () => {
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
  
  // This is to make the joke slider value change
  const [jokeSliderValue, jokeSetSliderValue] = useState(3);
  const jokeHandleSliderChange = (event) => {
    jokeSetSliderValue(event.target.value);
  };

  // This is to make the compassion slider value change
  const [compassionSliderValue, compassionSetSliderValue] = useState(3);
  const compassionHandleSliderChange = (event) => {
    compassionSetSliderValue(event.target.value);
  };

  return (
    <div className="page">
      <DashboardHeader />
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

      {/* All skills available (hardocded until link to mycorft is enabled) */}
      <div className="skills">
        {/* Breathing exercise skill */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Breathing Skill</h2>
            <input
              type="checkbox"
              id="breathing-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            Breathing exercises help users manage stress and improve mental health. 
            The speaker prompts users to take deep breaths for relaxation when 
            they need to calm down.
            </p>
          </div>
        </div>
        {/* Joke skill */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Joke Skill</h2>
            <input
              type="checkbox"
              id="joke-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            a joke-telling capability to your smart speaker, making it
            feel more like a companion than a machine. 
            The speaker can tell users a joke upon request
            </p>
            <div className="slider-container">
              <label htmlFor="frequency-slider">Frequency:</label>
              <div className="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={jokeSliderValue}
                  className="slider"
                  id="myRange"
                  onChange={jokeHandleSliderChange}
                />
              </div>
              <output htmlFor="frequency-slider">{jokeSliderValue}</output>
            </div>
          </div>
        </div>
        {/* Radio skill */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Radio Skill</h2>
            <input
              type="checkbox"
              id="radio-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            a radio-listening capability to our skill, enabling users to listen to local 
            and UK radio stations of their choice. Users can play, pause and resume radio stations
            </p>
          </div>
        </div>
        {/* Compassion Skill (I love you) */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Compassion Skill</h2>
            <input
              type="checkbox"
              id="compassion-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            a compassion-demonstrating capability to Mycroft, allowing it to respond 
            affectionately when users express love to it. Mycroft understands 
            the "I love you" cue, has a range of replies, and responds back with affection
            </p>
            <div className="slider-container">
              <label htmlFor="frequency-slider">Frequency:</label>
              <div className="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={compassionSliderValue}
                  className="slider"
                  id="myRange"
                  onChange={compassionHandleSliderChange}
                />
              </div>
              <output htmlFor="frequency-slider">{compassionSliderValue}</output>
            </div>
          </div>
        </div>
        {/* Music Skill */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Music Skill</h2>
            <input
              type="checkbox"
              id="music-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            music-listening skill, enabling users to 
            listen to music exclusively and uninterrupted. Users can play specific songs, 
            pause and skip songs through spotify.
            </p>
          </div>
        </div>
        {/* Respond to emotion (conversations) Skill */}
        <div className="skill-container">
          <div className="skill-head">
            <h2>Conversations Skill</h2>
            <input
              type="checkbox"
              id="conversations-checkbox"
              name="enable-checkbox"
            />
            <label htmlFor="enable-checkbox">Enable skill</label>
          </div>
          <div className="skill-body">
            <p>
            feature enables a smart speaker to engage in prompted conversations 
            based on different scenarios, such as sadness, boredom, loneliness, and happiness. 
            The speaker responds appropriately and prompts users to speak back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
