import DashboardHeader from './DashboardHeader';
import Routine from './Routine';
import React, { useState } from "react";

const RoutinePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [editingRoutine, setEditingRoutine] = useState(null);

    const popupClose = () => {
        setShowPopup(false);
    };
    

    return <div className="page">
        <DashboardHeader/>
        <div className="landing-header">Routine</div>
        <p>It seems you have no routines set</p>
        <div className="routine-container">
            <Routine 
            daysOfWeek={{ 
                monday: true, 
                tuesday: false, 
                wednesday: true, 
                thursday: false, 
                friday: true, 
                saturday: false, 
                sunday: true }} 
            routineName="Walk the dog" 
            routineTime="14:00"
            setShowPopup={setShowPopup}
            setEditingRoutine={setEditingRoutine} />

            <Routine
            daysOfWeek={{ 
                monday: false, 
                tuesday: false, 
                wednesday: false, 
                thursday: false, 
                friday: false, 
                saturday: true, 
                sunday: true }} 
            routineName="Gym" 
            routineTime="12:00"
            setShowPopup={setShowPopup} 
            setEditingRoutine={setEditingRoutine}/>

            <Routine
            daysOfWeek={{ 
                monday: false, 
                tuesday: false, 
                wednesday: true, 
                thursday: true, 
                friday: false, 
                saturday: false, 
                sunday: false }} 
            routineName="Landscaping" 
            routineTime="11:00"
            setShowPopup={setShowPopup} 
            setEditingRoutine={setEditingRoutine}/>

            <Routine
            daysOfWeek={{ 
                monday: true, 
                tuesday: false, 
                wednesday: false, 
                thursday: false, 
                friday: false, 
                saturday: false, 
                sunday: false }} 
            routineName="Tennis" 
            routineTime="15:45"
            setShowPopup={setShowPopup} 
            setEditingRoutine={setEditingRoutine}/>

            <Routine
            daysOfWeek={{ 
                monday: false, 
                tuesday: true, 
                wednesday: false, 
                thursday: true, 
                friday: true, 
                saturday: false, 
                sunday: false }} 
            routineName="Pickup kids" 
            routineTime="15:55"
            setShowPopup={setShowPopup} 
            setEditingRoutine={setEditingRoutine}/>
        </div>

        <div className={`popup ${showPopup ? '' : 'hide'}`} id="routine-edit">
            <div onClick={popupClose}>close</div>
            <div className="popup-content">
                {editingRoutine}
            </div>
        </div>
        

    </div>
};

export default RoutinePage;