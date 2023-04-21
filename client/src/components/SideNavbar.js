import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faRobot,
  faListUl,
  faLink,
  faTableColumns,
  faHome,
  faUser,
  faClock,
  faQuestion,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import connectedImage from "../img/connected_image.png";
import disconnectedImage from "../img/disconnected_image.png";

const socket = io("http://localhost:5000");

function SideNavbar() {
  const [showVolumeDropdown, setShowVolumeDropdown] = useState(false);

  const toggleVolumeDropdown = () => {
    setShowVolumeDropdown(!showVolumeDropdown);
  };

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setConnected(false);
    });

    const flaskTerminal = new EventSource("http://localhost:5000/terminal");

    flaskTerminal.addEventListener("message", (event) => {
      const message = event.data;

      if (message.includes("websocket connected")) {
        socket.connect();
      }
    });

    flaskTerminal.addEventListener("message", (event) => {
      const message = event.data;

      if (message.includes("[WARNING] Message Bus Client will reconnect in")) {
        socket.disconnect();
      }
    });

    return () => {
      flaskTerminal.close();
    };
  }, []);

  return (
    <div className="navBox my-0 flex justify-between h-25 w-38 flex-col items-center px-5">
      <div>
        <Link
          to="/home"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Home</span>
          <FontAwesomeIcon size="md" icon={faHome} />
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Dashboard</span>
          <FontAwesomeIcon size="md" icon={faTableColumns} />
        </Link>
        <Link
          to="/skills"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Skills</span>
          <FontAwesomeIcon size="md" icon={faRobot} />
        </Link>
        <Link
          to="/routine"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Routines</span>
          <FontAwesomeIcon size="md" icon={faListUl} />
        </Link>
        <Link
          to="/alarms"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Alarms</span>
          <FontAwesomeIcon size="md" icon={faClock} />
        </Link>
        <Link
          to="/prompt"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Ask Mycroft</span>
          <FontAwesomeIcon size="md" icon={faQuestion} />
        </Link>
        <Link
          to="/account"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Account</span>
          <FontAwesomeIcon size="md" icon={faUser} />
        </Link>
        {/* Modified Link for Device Volume */}
        <div className="relative">
          <button
            onClick={toggleVolumeDropdown}
            className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
          >
            <span>Device Volume</span>
            <FontAwesomeIcon icon={faVolumeHigh} />
          </button>
          {showVolumeDropdown && (
            <div className="absolute left-0 mt-2 rounded-md shadow-lg bg-white z-10">
              <div className="rounded-md">
                <VolumeControl />
              </div>
            </div>
          )}
        </div>
        {/* End of Device Volume */}
        <div className="nav-icon">
          <img
            src={connected ? connectedImage : disconnectedImage}
            alt="Connection Status"
          />
        </div>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2"
        >
          <span>Log out</span>
          <FontAwesomeIcon size="md" icon={faArrowRightFromBracket} />
        </Link>
      </div>
    </div>
  );
}

export default SideNavbar;
