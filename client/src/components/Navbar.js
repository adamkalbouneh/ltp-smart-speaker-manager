import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/pair-device">Pair Device</Link>
      <Link to="/skills">Skills</Link>
    </nav>
  );
};

export default Navbar;
