import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationForm = () => {
  const { sendNotification } = useContext(NotificationContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    sendNotification(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <input type="text" id="message" name="message" />
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationForm;