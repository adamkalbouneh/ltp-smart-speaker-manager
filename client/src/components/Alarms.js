import React, { useState } from 'react';
//import './Alarms.css';
import axios from 'axios';

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
  const alarms = ['06:00 AM', '07:00 AM', '08:00 AM ', '09:00 AM', '10:00 AM', '11:00 AM'];

  return (
    <div className="alarmsContainer">
      <h1>Alarms</h1>
      {alarms.map((time, index) => (
        <Alarm key={index} time={time} />
      ))}
    </div>
  );
};

export default Alarms;