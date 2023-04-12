import React from 'react';
import './Alarms.css';

const AlarmButton = ({ text }) => {
    const handleClick = async () => {
        try {
          const response = await fetch('/trigger-alarm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ alarmName: "10AM" }),
          });
          const data = await response.json();
          console.log(data.message);
        } catch (err) {
          console.error(err);
        }
      };
      
};


const Alarms = () => {
  const alarmsList = ['Alarm 1', 'Alarm2', 'Alarm 3'];

  return (
  <div className="alarms">
  <h2>Default Alarms</h2>
  <div className="alarm-buttons">
  {alarmsList.map((alarm, index) => (
  <AlarmButton key={index} text={alarm} />
  ))}
  </div>
  </div>
  );
  };
  
  export default Alarms;
