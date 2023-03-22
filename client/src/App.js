import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/LandingPage.js";
import GenericStyling from "./styling/Generic.css";
//Maybe make a default set of styles/classes


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
