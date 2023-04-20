import React, { useState } from "react";
import "../styling/Prompt.css";
import axios from "axios";
import NavBar from "../components/SideNavbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Prompt = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/send-message", { message });
      alert(response.data.message);
      setMessage("");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <div className=" min-h-screen bg-indigo-950 text-lg text-white">
        {/* Top NAV */}
        <div>
          <div className="mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center rounded-2xl">
            <Link to="/home" className="logo-box-image" />
            <div style={{ fontSize: "30px", paddingLeft: "100px" }}>Skills</div>
            <div>Marwa</div>
          </div>
        </div>
        {/* Left Side Bar Nav */}
        <div className="flex mt-10">
          <NavBar />
          <div id="prompt">
            <h1>Prompt Mycroft</h1>
            <form onSubmit={handleSubmit} className="promptForm">
              <textarea
                className="messageInput"
                value={message}
                onChange={handleChange}
                placeholder="Enter your message here..."
              />
              <button type="submit" className="submitButton">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
