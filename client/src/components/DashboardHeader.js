import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardHeader;
