import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import email from "../email.png";
import "./Enquiry.css"; // Import the CSS

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "website_enquiries",
      "template_352izmm",
      formData,
      "wk2ZZB8SpwaOtQxzc"
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent!");
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      }
    );

    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="enquiry-container">
      <h1>Contact Us</h1>
      <img src={email} alt="Email Icon" height="40" />
      <p>Send us an email at info@builtengineers.com.au</p>
      <h3>Or get in touch by sending us an enquiry:</h3>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Enquiry;
