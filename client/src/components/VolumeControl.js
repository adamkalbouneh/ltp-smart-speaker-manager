import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VolumeControl.css';

const VolumeControl = () => {
  // Volume-related states
  const [volume, setVolume] = useState(5);
  const [tempVolume, setTempVolume] = useState(volume);

  // Mute-related state
  const [isMuted, setIsMuted] = useState(false);

  // Volume update logic
  useEffect(() => {
    const timer = setTimeout(async () => {
      const difference = tempVolume - volume;
      const action = difference > 0 ? 'increase' : 'decrease';
      const steps = Math.abs(difference);

      for (let i = 0; i < steps; i++) {
        await axios.post('/mycroft-volume', { action, play_sound: true });
      }

      setVolume(tempVolume);
    }, 300);

    return () => clearTimeout(timer);
  }, [tempVolume, volume]);

  // Slider change handler
  const onSliderChange = (event) => {
    const newVolume = parseInt(event.target.value, 10);
    setTempVolume(newVolume);
  };

  // Mute/unmute button click handler
  const toggleMute = async () => {
    try {
      await axios.post('/mycroft-mute', { mute: !isMuted });
      setIsMuted(!isMuted);
    } catch (error) {
      console.error('Error:', error);
    }
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
      <button
        className={`muteButton ${isMuted ? 'muted' : 'unmuted'}`}
        onClick={toggleMute}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default VolumeControl;
