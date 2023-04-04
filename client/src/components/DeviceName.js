import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";

const DeviceName = () => {
  const [selectedOption, setSelectedOption] = useState(
    parseInt(localStorage.getItem("selectedOption")) || 0
  );

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

      <button className="blue-button content" id="submit-button">Submit</button>
    </div>
  );
};

export default DeviceName;
