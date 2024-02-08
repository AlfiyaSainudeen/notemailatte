import React, { useState } from 'react';

const CommunicationModule = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRecipientChange = (e) => {
    setRecipientEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Add logic to send the message via email (backend integration needed)
    // For simplicity, let's just log the message for now
    console.log(`Sending email to ${recipientEmail}: ${message}`);

    // Clear the input fields after sending the message
    setRecipientEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Communication Module</h2>
      <label htmlFor="recipientEmail">Recipient Email:</label>
      <input
        type="email"
        id="recipientEmail"
        value={recipientEmail}
        onChange={handleRecipientChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={handleMessageChange}
      ></textarea>

      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default CommunicationModule;