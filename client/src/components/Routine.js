import React from "react";
import "../styling/Routine.css"

const Routine = ({ daysOfWeek, routineName, routineTime, setShowPopup, setSelectedRoutine, setShowEdit, setShowRemove }) => {

  const handleEditClick = () => {
    setShowPopup(true);
    setShowEdit(true);
    setSelectedRoutine(routineName);
  };

  const handleDeleteClick = () => {
    setShowPopup(true);
    setShowRemove(true);
    setSelectedRoutine(routineName);
  }

  return (
    <div className="routine-panel bg-gradient-to-br from-teal-600 to-indigo-700">
        <div className="routine-panel-row">
            <div className="routine-name">{routineName}</div>
            <div className="routine-time">{routineTime}</div>
            <div className="routine-edit-button"><p className="routine-button-text" onClick={handleEditClick}>edit</p></div>
            <div className="routine-delete-button"><p className="routine-button-text" onClick={handleDeleteClick}>delete</p></div>
        </div>
        <div className="routine-panel-row">
        <div className={daysOfWeek.monday ? "routine-day" : "routine-day-hidden"}>
                Monday
            </div>
            <div className={daysOfWeek.tuesday ? "routine-day" : "routine-day-hidden"}>
                Tuesday
            </div>
            <div className={daysOfWeek.wednesday ? "routine-day" : "routine-day-hidden"}>
                Wednesday
            </div>
            <div className={daysOfWeek.thursday ? "routine-day" : "routine-day-hidden"}>
                Thursday
            </div>
            <div className={daysOfWeek.friday ? "routine-day" : "routine-day-hidden"}>
                Friday
            </div>
            <div className={daysOfWeek.saturday ? "routine-day" : "routine-day-hidden"}>
                Saturday
            </div>
            <div className={daysOfWeek.sunday ? "routine-day" : "routine-day-hidden"}>
                Sunday
            </div>
        </div> 
    </div>
  );
};

export default Routine;