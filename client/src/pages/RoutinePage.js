import DashboardHeader from "../components/DashboardHeader";
import Routine from "../components/Routine";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styling/Routine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Authenticate from "../components/Authenticate";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "../components/SideNavbar";

const RoutinePage = () => {
  const [routines, setRoutines] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showError, setShowError] = useState(true);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const [userID, setUserID] = useState();

  let routineList = [];

  const errorText = document.getElementById("error");

  const popupClose = () => {
    setShowPopup(false);
    setShowEdit(false);
    setShowRemove(false);
    setShowNew(false);
    errorText.style.display = "none";
  };

  const handleNewClick = () => {
    setShowPopup(true);
    setShowEdit(false);
    setShowRemove(false);
    setShowNew(true);
    setSelectedRoutine("New routine");
  };

  const deleteRoutine = async () => {
    setShowPopup(false);
    setShowEdit(false);
    setShowRemove(false);
    setShowNew(false);

    // Construct the data object to send in the GET request
    const data = {
      routine: selectedRoutine,
    };

    // Send a POST request to the Flask API endpoint
    const response = await fetch("/deleteRoutine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const serverResponse = await response.text();

    popupClose();
  };

  const editRoutine = async () => {
    const monday = document.getElementById("monday-edit").checked;
    const tuesday = document.getElementById("tuesday-edit").checked;
    const wednesday = document.getElementById("wednesday-edit").checked;
    const thursday = document.getElementById("thursday-edit").checked;
    const friday = document.getElementById("friday-edit").checked;
    const saturday = document.getElementById("saturday-edit").checked;
    const sunday = document.getElementById("sunday-edit").checked;

    const time = document.getElementById("editRoutineTime").value;

    //if no routine time has been provided
    if (time == "") {
      errorText.style.display = "block";
      errorText.innerText = "Enter a routine time";
      return;
    }

    //passed validation, so hide previously activated error message
    errorText.style.display = "none";

    const data = {
      days: {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      },
      name: selectedRoutine.toLowerCase(),
      time: time,
    };

    // Send a POST request to the Flask API endpoint
    const response = await fetch("/editRoutine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const serverResponse = await response.json();

    console.log(serverResponse);

    popupClose();
  };

  const newRoutine = async () => {
    const monday = document.getElementById("monday-new").checked;
    const tuesday = document.getElementById("tuesday-new").checked;
    const wednesday = document.getElementById("wednesday-new").checked;
    const thursday = document.getElementById("thursday-new").checked;
    const friday = document.getElementById("friday-new").checked;
    const saturday = document.getElementById("saturday-new").checked;
    const sunday = document.getElementById("sunday-new").checked;

    const name = document.getElementById("newRoutineName").value;
    const time = document.getElementById("newRoutineTime").value;

    //validation for name and time

    //if no routine name has been provided
    if (name.length == 0) {
      errorText.style.display = "block";
      errorText.innerText = "Enter a routine name";
      return;
    }

    //if no routine time has been provided
    if (time == "") {
      errorText.style.display = "block";
      errorText.innerText = "Enter a routine time";
      return;
    }

    //passed validation, so hide previously activated error message
    errorText.style.display = "none";

    const data = {
      user: userID,
      days: {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      },
      name: name.toLowerCase(),
      time: time,
    };

    // Send a POST request to the Flask API endpoint
    const response = await fetch("/newRoutine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const serverResponse = await response.json();

    console.log(serverResponse);

    popupClose();
  };

  const getRoutines = async () => {
    let data = {
      user: userID,
    };

    // Send a POST request to the Flask API endpoint
    let response = await fetch("/getRoutine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Convert respone to text format
    let serverResponse = await response.text();

    let parsedResponse = JSON.parse(serverResponse);

    parsedResponse.forEach((routine) => {
      let [id, routineName, routineTime, daysOfWeek] = routine;
      let daysArr = daysOfWeek.split(",");

      let daysOfWeekObj = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      };

      daysArr.forEach((day) => {
        daysOfWeekObj[day] = true;
      });

      routineList.push({
        id: id,
        routineName: routineName,
        routineTime: routineTime,
        daysOfWeek: daysOfWeekObj,
      });

      setRoutines([]);
      setRoutines(routineList);
    });
  };

  useEffect(() => {
    async function fetchUserID() {
      const response = await axios.get("/get_user_id");
      if (response.data.userID === "No user") {
        window.location.href = "/login";
      } else {
        setUserID(response.data.userID);
      }
    }

    fetchUserID();

    async function getRoutines() {
      let data = {
        user: userID,
      };

      // Send a POST request to the Flask API endpoint
      let response = await fetch("/getRoutine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Convert respone to text format
      let serverResponse = await response.text();

      let parsedResponse = JSON.parse(serverResponse);

      parsedResponse.forEach((routine) => {
        let [id, routineName, routineTime, daysOfWeek] = routine;
        let daysArr = daysOfWeek.split(",");

        let daysOfWeekObj = {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        };

        daysArr.forEach((day) => {
          daysOfWeekObj[day] = true;
        });

        routineList.push({
          id: id,
          routineName: routineName,
          routineTime: routineTime,
          daysOfWeek: daysOfWeekObj,
        });
        setRoutines([]);
        setRoutines(routineList);
      });
    }

    getRoutines();
  }, []);

  return (
    <div className=" min-h-screen bg-indigo-950 text-lg text-white">
      {/* Top NAV */}
      <div>
        <div className="mb-4 flex h-20 items-center justify-between bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-md px-5 py-2.5 text-center rounded-2xl">
          <Link to="/home" className="logo-box-image" />
          <div style={{ fontSize: "30px", paddingLeft: "100px" }}>Skills</div>
          <div>Marwa</div>
        </div>
      </div>
      {/* Left Side Bar Nav */}
      <div className="flex mt-10">
        <NavBar />
        <div className="content-routine" onMouseEnter={getRoutines}>
          <div>
            <div className="routine-header">Routine</div>
            <div className="new-routine-button" onClick={handleNewClick}>
              Add new
            </div>
          </div>
          <div className="routine-container" id="routineContainer">
            {/* Routines go in here */}
            {routines.length === 0 ? (
              <div className="routine-page-text-container">
                <p>It seems you have no routines set.</p>
                <p>Would you like to add a new routine?</p>
              </div>
            ) : (
              routines.map((routine) => (
                <Routine
                  key={routine.id}
                  daysOfWeek={routine.daysOfWeek}
                  routineName={routine.routineName}
                  routineTime={routine.routineTime}
                  setShowPopup={setShowPopup}
                  setShowEdit={setShowEdit}
                  setShowRemove={setShowRemove}
                  setSelectedRoutine={setSelectedRoutine}
                />
              ))
            )}
          </div>

          {/* Routine edit popup */}

          <div className={`popup ${showPopup ? "" : "hide"}`} id="routine-edit">
            <div className="popup-content">
              <div className="popup-banner bg-gradient-to-br from-teal-600 to-indigo-700">
                <a>
                  <div className="popup-banner-text">{selectedRoutine}</div>
                </a>
                <div className="popup-close-btn" onClick={popupClose}>
                  <FontAwesomeIcon icon={faX} />
                </div>
              </div>

              <div
                className={`${
                  showEdit ? "popup-set-routine-container" : "hide"
                }`}
              >
                <div className="popup-half-container">
                  Days
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="monday-edit"
                      value="monday"
                    />
                    Monday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="tuesday-edit"
                      value="tuesday"
                    />
                    Tuesday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="wednesday-edit"
                      value="wednesday"
                    />
                    Wednesday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="thursday-edit"
                      value="thursday"
                    />
                    Thursday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="friday-edit"
                      value="friday"
                    />
                    Friday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="saturday-edit"
                      value="saturday"
                    />
                    Saturday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="sunday-edit"
                      value="sunday"
                    />
                    Sunday
                  </label>
                </div>
                <div className="popup-half-container">
                  <p className="thick-text">Time</p>
                  <input
                    type="time"
                    className="bg-lightgray"
                    id="editRoutineTime"
                    required
                  ></input>
                  <div
                    className="popup-submit-btn thick-text"
                    onClick={editRoutine}
                  >
                    submit
                  </div>
                </div>
              </div>

              <div className={`${showRemove ? "" : "hide"}`}>
                <div className="popup-text large-margin-top">
                  Are you sure you want to delete
                </div>
                <div className="popup-text">{selectedRoutine}?</div>
                <div className="popup-yesno-container">
                  <div className="popup-yes-btn" onClick={deleteRoutine}>
                    yes
                  </div>
                  <div className="popup-no-btn" onClick={popupClose}>
                    No
                  </div>
                </div>
              </div>

              <div
                className={`${
                  showNew ? "popup-set-routine-container" : "hide"
                }`}
              >
                <div className="popup-half-container">
                  Days
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="monday-new"
                      value="monday"
                    />
                    Monday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="tuesday-new"
                      value="tuesday"
                    />
                    Tuesday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="wednesday-new"
                      value="wednesday"
                    />
                    Wednesday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="thursday-new"
                      value="thursday"
                    />
                    Thursday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="friday-new"
                      value="friday"
                    />
                    Friday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="saturday-new"
                      value="saturday"
                    />
                    Saturday
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="day"
                      id="sunday-new"
                      value="sunday"
                    />
                    Sunday
                  </label>
                </div>
                <div className="popup-half-container">
                  <p className="thick-text">Routine name</p>
                  <input
                    className="popup-text-input"
                    id="newRoutineName"
                    required
                  ></input>
                  <p className="thick-text">Time</p>
                  <input
                    type="time"
                    className="bg-lightgray"
                    id="newRoutineTime"
                    required
                  ></input>
                  <div
                    className="popup-submit-btn thick-text popup-new-margin-top"
                    onClick={newRoutine}
                  >
                    submit
                  </div>
                </div>
              </div>
              <p
                id="error"
                className={`${
                  showError ? "error-text small-margin-top" : "hide"
                }`}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinePage;
