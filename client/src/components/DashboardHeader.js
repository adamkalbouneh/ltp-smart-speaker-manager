import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
