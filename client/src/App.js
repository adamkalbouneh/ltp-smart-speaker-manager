import React, { useState } from 'react';
import axios from 'axios';

function SkillToggle(props) {
  const [enabled, setEnabled] = useState(props.enabled);
  
  const toggleSkill = () => {
    // Build the request URL for the Flask server
    const url = `/skill/${props.skillName}`;
    
    // Send the request to the Flask server with the skill state
    axios.post(url, { state: !enabled })
      .then(response => setEnabled(response.data.enabled))
      .catch(error => console.error(error));
  };
  
  return (
    <div>
      <p>{props.skillName}: {enabled ? 'Enabled' : 'Disabled'}</p>
      <button onClick={toggleSkill}>{enabled ? 'Disable' : 'Enable'}</button>
    </div>
  );
}

export default SkillToggle;
