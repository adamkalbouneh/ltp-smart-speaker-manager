import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

const SkillsPage = () => {
  const [selectedOption, setSelectedOption] = useState(
    parseInt(localStorage.getItem("selectedOption")) || 0
  );
  const [sliderValue, setSliderValue] = useState(50);

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

  const handleSelectChange = (event) => {
    const optionValue = parseInt(event.target.value);
    localStorage.setItem("selectedOption", optionValue);
    setSelectedOption(optionValue);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
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

      <div className="skill-container">
        <div className="skill-head">
          <h2>Skill</h2>
          <input
            type="checkbox"
            id="enable-checkbox"
            name="enable-checkbox"
          />
          <label htmlFor="enable-checkbox">Enable skill</label>
        </div>
        <div className="skill-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!{" "}
          </p>
          <div className="slider-container">
            <label htmlFor="frequency-slider">Frequency:</label>
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="5"
                value={sliderValue}
                className="slider"
                id="myRange"
                onChange={handleSliderChange}
              />
            </div>
            <output htmlFor="frequency-slider">{sliderValue}</output>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
