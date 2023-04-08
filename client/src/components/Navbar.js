import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Mycroft Core Manager
      </Link>
      <Link to="/skills" className="nav-link">
        Skills
      </Link>
    </nav>
  );
};

export default Navbar;
