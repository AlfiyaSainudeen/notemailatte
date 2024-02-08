import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const MessageBox = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_wwrf9fp';
    const templateID = 'template_83w86lb';
    const userID = 'yR1v6BxTVpy_AC1mT';

    emailjs.send(serviceID, templateID, { to, subject, message }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <h1>Message Box</h1>
      <form onSubmit={sendEmail}>
        <label>
          To:
          <input type="email" name="to" value={to} onChange={(e) => setTo(e.target.value)} required />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageBox;