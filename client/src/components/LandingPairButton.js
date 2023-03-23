import React from "react";

const LandingPairButton = () => {

  const handleClick = () => {
    window.location.assign("http://localhost:3000/pair")
  };

  return (
    <div className="landing-button" onClick={handleClick}>
      Pair
    </div>
  );
};

export default LandingPairButton;
