import DashboardHeader from './DashboardHeader';
import Routine from './Routine';
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const RoutinePage = () => {
    
    const [routines, setRoutines] = useState([]);

    const [showPopup, setShowPopup] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showError, setShowError] = useState(true);
    const [selectedRoutine, setSelectedRoutine] = useState(null);

    let routineList = []

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
    }

    const deleteRoutine = async () => {

        setShowPopup(false);
        setShowEdit(false);
        setShowRemove(false);
        setShowNew(false);

        // Construct the data object to send in the GET request
        const data = {
            routine: selectedRoutine
        };
    
        // Send a POST request to the Flask API endpoint
        const response = await fetch('/deleteRoutine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const serverResponse = await response.text();

        alert(serverResponse);
    }

    const editRoutine = async () => {
        const monday = document.getElementById("monday-edit").checked ;
        const tuesday = document.getElementById("tuesday-edit").checked ;
        const wednesday = document.getElementById("wednesday-edit").checked ;
        const thursday = document.getElementById("thursday-edit").checked ;
        const friday = document.getElementById("friday-edit").checked ;
        const saturday = document.getElementById("saturday-edit").checked ;
        const sunday = document.getElementById("sunday-edit").checked ;

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
            "days": {
            "monday":monday,
            "tuesday":tuesday,
            "wednesday":wednesday,
            "thursday":thursday,
            "friday":friday,
            "saturday":saturday,
            "sunday":sunday
            },
            "name":selectedRoutine.toLowerCase(),
            "time":time
        };

        // Send a POST request to the Flask API endpoint
        const response = await fetch('/editRoutine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const serverResponse = await response.json();

        console.log(serverResponse);


    }


    const newRoutine = async () => {
        const monday = document.getElementById("monday-new").checked ;
        const tuesday = document.getElementById("tuesday-new").checked ;
        const wednesday = document.getElementById("wednesday-new").checked ;
        const thursday = document.getElementById("thursday-new").checked ;
        const friday = document.getElementById("friday-new").checked ;
        const saturday = document.getElementById("saturday-new").checked ;
        const sunday = document.getElementById("sunday-new").checked ;

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
            "days": {
              "monday":monday,
              "tuesday":tuesday,
              "wednesday":wednesday,
              "thursday":thursday,
              "friday":friday,
              "saturday":saturday,
              "sunday":sunday
            },
            "name":name.toLowerCase(),
            "time":time
        };

        // Send a POST request to the Flask API endpoint
        const response = await fetch('/newRoutine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const serverResponse = await response.json();
        
        console.log(serverResponse);


    }



    useEffect(() => {
        //Fetch routines from API/RaspberryPi here
        

        routineList = [
            {
              daysOfWeek: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true,
                saturday: false,
                sunday: true,
              },
              routineName: "Walk the dog",
              routineTime: "14:00",
            },
            // add more routines here...
          ];
          setRoutines(routineList);
    }, []);



    return <div className="page">
        <DashboardHeader/>
        <div>
            <div className="routine-header">Routine</div>
            <div className='new-routine-button' onClick={handleNewClick}>Add new</div>
        </div>
        <div className="routine-container" id="routineContainer">
            {/* Routines go in here */}
            {routines.length === 0 ? (
            <div className='routine-page-text-container'>
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
                setSelectedRoutine={setSelectedRoutine} />
            ))
            )}
        </div>

        {/* Routine edit popup */}


        <div className={`popup ${showPopup ? '' : 'hide'}`} id="routine-edit">
            <div className='popup-content'>
                <div className='popup-banner'>
                    <a><div className='popup-banner-text'>{selectedRoutine}</div></a>
                    <div className='popup-close-btn' onClick={popupClose}>X</div>
                </div>
                
                
                <div className={`${showEdit ? 'popup-set-routine-container' : 'hide'}`}>   
                            <div className='popup-half-container'>Days
                                <label><input type="checkbox" name="day" id="monday-edit" value="monday"/>Monday</label>
                                <label><input type="checkbox" name="day" id="tuesday-edit" value="tuesday"/>Tuesday</label>
                                <label><input type="checkbox" name="day" id="wednesday-edit" value="wednesday"/>Wednesday</label>
                                <label><input type="checkbox" name="day" id="thursday-edit" value="thursday"/>Thursday</label>
                                <label><input type="checkbox" name="day" id="friday-edit" value="friday"/>Friday</label>
                                <label><input type="checkbox" name="day" id="saturday-edit" value="saturday"/>Saturday</label>
                                <label><input type="checkbox" name="day" id="sunday-edit" value="sunday"/>Sunday</label>
                            </div>
                            <div className='popup-half-container'>
                                <p className='thick-text'>Time</p>
                                <input type="time" id="editRoutineTime" required></input>
                                <div className='popup-submit-btn thick-text' onClick={editRoutine}>submit</div>
                            </div>
                    
                </div>
                
                <div className={`${showRemove ? '' : 'hide'}`}>
                    <div className='popup-text large-margin-top'>Are you sure you want to delete</div>
                    <div className='popup-text'>{selectedRoutine}?</div>
                    <div className='popup-yesno-container'>
                        <div className='popup-yes-btn' onClick={deleteRoutine}>Yes</div>
                        <div className='popup-no-btn' onClick={popupClose}>No</div>
                    </div>
                </div>

                <div className={`${showNew ? 'popup-set-routine-container' : 'hide'}`}> 
                    <div className='popup-half-container'>Days
                        <label><input type="checkbox" name="day" id="monday-new" value="monday"/>Monday</label>
                        <label><input type="checkbox" name="day" id="tuesday-new" value="tuesday"/>Tuesday</label>
                        <label><input type="checkbox" name="day" id="wednesday-new" value="wednesday"/>Wednesday</label>
                        <label><input type="checkbox" name="day" id="thursday-new" value="thursday"/>Thursday</label>
                        <label><input type="checkbox" name="day" id="friday-new" value="friday"/>Friday</label>
                        <label><input type="checkbox" name="day" id="saturday-new" value="saturday"/>Saturday</label>
                        <label><input type="checkbox" name="day" id="sunday-new" value="sunday"/>Sunday</label>
                    </div>
                    <div className='popup-half-container'>
                        <p className='thick-text'>Routine name</p>
                        <input className='popup-text-input' id="newRoutineName" required></input>
                        <p className='thick-text'>Time</p>
                        <input type="time" id="newRoutineTime" required></input>
                        <div className='popup-submit-btn thick-text popup-new-margin-top' onClick={newRoutine}>submit</div>
                    </div>
                </div>
                <p id="error" className={`${showError ? 'error-text small-margin-top' : 'hide'}`}></p>
            </div>

        </div>
        

    </div>
};

export default RoutinePage;