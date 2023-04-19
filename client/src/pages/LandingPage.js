import React from "react";
import "../styling/Landing.css"
import DashboardHeader from '../components/DashboardHeader';
import LandingPairButton from '../components/LandingPairButton';

const LandingPage = () => {
  return <div className="page">
    <DashboardHeader/>
    <div className="landing-header">Say hello to Mycroft</div>
    <div className="raspberry-pi-image"/>
    <LandingPairButton/>
  </div>
};

export default LandingPage;
