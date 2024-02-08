import React, { useState } from "react";
import "./Message.css";
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const sendEmail = async () => {
  //   // Your email sending logic here
  //   console.log("Sending email...", { email, subject, message });
  // };
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_72gib7o',
    'template_nrrbtt3',
    e.target,
    'yR1v6BxTVpy_AC1mT').then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

}

  return (
    <div className="email-form">
      <h1>Send an Email Message </h1>

      
      <form       onSubmit={sendEmail}>
        <label htmlFor="email">From Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Sender's Email Address"
          name="senderemail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email" spacing={4}> To Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Receiver's Email Address"
          name="useremail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
name="subject"
          placeholder="Enter the subject here..."
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message here..."
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;