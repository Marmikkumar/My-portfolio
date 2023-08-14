import React from "react";
import "./styles.css";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>Submit the form below to get in touch with me:- </p>
      </div>

      <form className="contact-form" action="">
        <input type="text" placeholder="Enter your name"></input>
        <input type="email" placeholder="Enter your e-mail"></input>
        <textarea placeholder="Enter Text" id="" cols="30" rows="10"></textarea>
        <button type="submit">Let's Talk</button>
      </form>
    </div>
  );
}
