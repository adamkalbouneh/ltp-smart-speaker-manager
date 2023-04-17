import React from "react";
import DashboardHeader from './DashboardHeader';
import Routine from './Routine';

const LandingPage = () => {
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
        routineTime="14:00" />

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
        routineTime="12:00" />


       
    </div>
    

  </div>
};

export default LandingPage;