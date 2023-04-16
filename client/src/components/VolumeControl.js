import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VolumeControl = () => {
  // `volume` represents the confirmed volume level after user interaction
  const [volume, setVolume] = useState(5);
  // `tempVolume` represents the current slider value while the user is interacting
  const [tempVolume, setTempVolume] = useState(volume);

  // `useEffect` hook to trigger a delay for sending requests to update the volume
  useEffect(() => {
    // Set a timer with a 300ms delay
    const timer = setTimeout(async () => {
      // Calculate the difference in volume
      const difference = tempVolume - volume;
      // Determine if it's an increase or decrease in volume
      const action = difference > 0 ? 'increase' : 'decrease';
      // Calculate the number of steps needed to update the volume
      const steps = Math.abs(difference);

      // Send a request to update the volume for each step
      for (let i = 0; i < steps; i++) {
        await axios.post('/mycroft-volume', { action, play_sound: true });
      }

      // Update the confirmed volume level after the user interaction
      setVolume(tempVolume);
    }, 300);

    // Clear the timer when the component is unmounted or when the tempVolume changes
    return () => clearTimeout(timer);
  }, [tempVolume, volume]);

  // Function to handle changes in the slider
  const onSliderChange = (event) => {
    // Update the temporary volume to the current slider value
    const newVolume = parseInt(event.target.value, 10);
    setTempVolume(newVolume);
  };

  return (
    <div className="volumeControl">
      <label htmlFor="volumeSlider">Volume</label>
      <input
        type="range"
        id="volumeSlider"
        min="0"
        max="10"
        value={tempVolume}
        onChange={onSliderChange}
      />
    </div>
  );
};

export default VolumeControl;
