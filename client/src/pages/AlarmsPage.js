import React, { useState } from 'react';
import '../styling/Alarms.css';
import axios from 'axios';
import NavBar from "../components/SideNavbar";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Alarm = ({ time }) => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      if (!enabled) {
        /*const response = */await axios.post('/set-alarm', { time });
        //alert(response.data.message);
      } else {
        /*const response = */await axios.post('/delete-alarm', { time });
        //alert(response.data.message);
      }
      setTimeout(() => {
        setEnabled(!enabled);
        setLoading(false);
      }, 200);
    } catch (error) {
      alert('Error: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="alarm">
      <label className="alarmTime">{time}</label>
      <input type="checkbox" onChange={handleToggle} />
      {loading && (
        <div className="loadingScreen">
          <p className="loadingMessage">Loading...</p>
        </div>
      )}
    </div>
  );
};

const Alarms = () => {
  const alarms = ['06:00 AM', '07:00 AM', '08:00 AM ', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  return (
    <div>  
      <div>
        <div className="mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center rounded-2xl">
          <Link to="/home" className="logo-box-image" />
          <div style={{ fontSize: "30px", paddingLeft: "100px" }}>Alarms</div>
        <div>Marwa</div>
    </div>
</div>
    <div className="alarmsPage">
      <NavBar />
      <div className="alarmsContainer">
       
        {alarms.map((time, index) => (
          <Alarm key={index} time={time} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Alarms;


