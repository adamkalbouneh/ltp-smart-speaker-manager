import React, { useState } from 'react';
import '../styling/Prompt.css';
import axios from 'axios';

const Prompt = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/send-message', { message });
      alert(response.data.message);
      setMessage('');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Prompt Mycroft</h1>
      <form onSubmit={handleSubmit} className="promptForm">
        <textarea
          className="messageInput"
          value={message}
          onChange={handleChange}
          placeholder="Enter your message here..."
        />
        <button type="submit" className="submitButton">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Prompt;
