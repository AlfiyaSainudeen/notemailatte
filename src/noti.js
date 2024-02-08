import React from 'react';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
export default function Nm() {
  const sendEmail=(e)=>{
    e.preventDefault();
    alert("message sented");
emailjs.sendForm('service_wwrf9fp','template_6n022gj',e.target,'yR1v6BxTVpy_AC1mT');

  }
  return (
    <div>
    <h1 className="page__title">Contact Us</h1>
    <form className="contact__form" onSubmit={sendEmail}>
      <label htmlFor="emailFrom">Email:</label>
      <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" className="message__box"></textarea>
      <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}}>
      Send
    </Button>
    </form>
    </div>
  )
}
