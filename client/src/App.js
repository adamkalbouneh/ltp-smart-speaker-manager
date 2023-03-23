import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/LandingPage.js";
import LoginPage from "./components/LoginPage.js";
import PairingPage from "./components/PairingPage.js";
import GenericStyling from "./styling/Generic.css";
import LandingStyling from "./styling/Landing.css";
//Maybe make a default set of styles/classes


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/pair" element={<PairingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
