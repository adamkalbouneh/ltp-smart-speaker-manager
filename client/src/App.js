import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/LandingPage.js";
import LoginPage from "./components/LoginPage.js";
import PairingPage from "./components/PairingPage.js";
import TestDatabasePage from "./components/TestDatabasePage.js";
import SignUpPage from "./components/SignUpPage.js";
import HomePage from './components/HomePage.js';
import GenericStyling from "./styling/Generic.css";
import LandingStyling from "./styling/Landing.css";
import SpeakerDashboard from './components/SpeakerDashboard.js';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/pair" element={<PairingPage/>}/>
        <Route exact path="/database" element={<TestDatabasePage/>}/>
        <Route exact path="/signup" element={<SignUpPage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/dashboard" element={<SpeakerDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

