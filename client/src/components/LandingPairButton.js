import React from "react";

const LandingPairButton = () => {

  const handleClick = () => {
    window.location.assign("https://localhost:3000/login")
  };

  return (
    <div className="landing-button bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl"  onClick={handleClick}>
      Get started!
    </div>
  );
};

export default LandingPairButton;
