import React, { useState } from 'react';
import axios from 'axios';


const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = async (event) => {
    const newVolume = parseInt(event.target.value, 10);
    await axios.post('/mycroft-volume', { current_volume: volume, target_volume: newVolume });
    setVolume(newVolume);
  };

  return (
    <div className="volumeControl">
      <label htmlFor="volumeSlider">Volume</label>
      <input
        type="range"
        id="volumeSlider"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default VolumeControl;
