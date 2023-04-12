import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Routines from './components/Routines';
import Alarms from './components/Alarms';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/alarms" element={<Alarms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
