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




    const popupClose = () => {
        setShowPopup(false);
        setShowEdit(false);
        setShowRemove(false);
        setShowNew(false);
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


    const newRoutine = async () => {
        const monday = document.getElementById("monday").checked ;
        const tuesday = document.getElementById("tuesday").checked ;
        const wednesday = document.getElementById("wednesday").checked ;
        const thursday = document.getElementById("thursday").checked ;
        const friday = document.getElementById("friday").checked ;
        const saturday = document.getElementById("saturday").checked ;
        const sunday = document.getElementById("sunday").checked ;

        const name = document.getElementById("newRoutineName").value;
        const time = document.getElementById("newRoutineTime").value;
        
        //validation for name and time



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

    const errorText = document.getElementById("error");

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
                                <label><input type="checkbox" name="day" value="monday"/>Monday</label>
                                <label><input type="checkbox" name="day" value="tuesday"/>Tuesday</label>
                                <label><input type="checkbox" name="day" value="wednesday"/>Wednesday</label>
                                <label><input type="checkbox" name="day" value="thursday"/>Thursday</label>
                                <label><input type="checkbox" name="day" value="friday"/>Friday</label>
                                <label><input type="checkbox" name="day" value="saturday"/>Saturday</label>
                                <label><input type="checkbox" name="day" value="sunday"/>Sunday</label>
                            </div>
                            <div className='popup-half-container'>
                                <p className='thick-text'>Time</p>
                                <input type="time" required></input>
                                <div className='popup-submit-btn thick-text'>submit</div>
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
                        <label><input type="checkbox" name="day" id="monday" value="monday"/>Monday</label>
                        <label><input type="checkbox" name="day" id="tuesday" value="tuesday"/>Tuesday</label>
                        <label><input type="checkbox" name="day" id="wednesday" value="wednesday"/>Wednesday</label>
                        <label><input type="checkbox" name="day" id="thursday" value="thursday"/>Thursday</label>
                        <label><input type="checkbox" name="day" id="friday" value="friday"/>Friday</label>
                        <label><input type="checkbox" name="day" id="saturday" value="saturday"/>Saturday</label>
                        <label><input type="checkbox" name="day" id="sunday" value="sunday"/>Sunday</label>
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