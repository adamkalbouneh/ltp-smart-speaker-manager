import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/skills" className="nav-item">Skills</Link>
      <Link to="/routines" className="nav-item">Routines</Link>
      <Link to="/alarms" className="nav-item">Alarms</Link>
    </nav>
  );
};

export default Navbar;
