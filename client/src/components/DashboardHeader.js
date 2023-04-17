import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import connectedImage from '../img/connected_image.png';
import disconnectedImage from '../img/disconnected_image.png';

const DashboardHeader = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('mycroft_connected', (data) => {
      console.log('Received mycroft_connected event:', data);
      setConnected(true);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="header landing-banner">
      <div className="nav-icon">
        <img src={connected ? connectedImage : disconnectedImage} alt="Connection Status" />
      </div>
      <a href="login">Login</a>
      <a href="skills">Skills</a>
      <a href="/">Home</a>
    </div>
  );
};

export default DashboardHeader;
