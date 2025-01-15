import React from 'react';
import email from '../email.png';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us and Schedule a Consultation</h1>

      <div className="container2">

        <div className="column">
          <div className="contact-box">
            <h3>Email</h3>
            <img src={email} alt="Email Icon" height="50" />
            <p>Send us an email at info@builtengineers.com.au for inquiries and project details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
