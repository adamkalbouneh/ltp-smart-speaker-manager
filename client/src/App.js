import React, { useState } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./pages/LandingPage.js";
import LoginPage from "./pages/LoginPage.js";
import PairingPage from "./pages/PairingPage.js";
import TestDatabasePage from "./pages/TestDatabasePage.js";
import AccountPage from './pages/AccountPage.js';
import SignUpPage from "./pages/SignUpPage.js";
import HomePage from './pages/HomePage.js';
import SkillsPage from './pages/SkillsPage';
import RoutinePage from './pages/RoutinePage.js';
import SpeakerDashboard from './pages/DashboardPage.js';
import GenericStyling from "./styling/Generic.css";
import LandingStyling from "./styling/Landing.css";
import SkillsStyling from "./styling/Skills.css";
import VolumeControl from './components/VolumeControl.js';



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
        <Route exact path="/account" element={<AccountPage/>}/>
        <Route exact path="/dashboard" element={<SpeakerDashboard/>}/>
        <Route exact path="/routine" element={<RoutinePage/>}/>
        <Route exact path="/skills" element={<SkillsPage/>}/>
        <Route exact path="/volume" element={<VolumeControl/>}/>
      </Routes>
    </Router>
  );
}

export default App;

