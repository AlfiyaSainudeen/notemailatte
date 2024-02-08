import React, { useState } from 'react';
import MessageForm from './AdminNot';

const MessagePage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h1>Message Page</h1>
      <MessageForm onSubmit={handleSendMessage} />
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagePage;