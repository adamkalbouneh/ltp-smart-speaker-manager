import React, { useState } from 'react';

const PairDevice = () => {
  const [pairingCode, setPairingCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/pair', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pairing_code: pairingCode }),
    });

    // Handle the response
  };

  return (
    <div className="pair-device">
      <h1>Pair Device</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Mycroft Pairing Code"
          value={pairingCode}
          onChange={(e) => setPairingCode(e.target.value)}
        />
        <button type="submit">Pair</button>
      </form>
    </div>
  );
};

export default PairDevice;
