import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I'm always open to collaboration, freelance opportunities, or just a friendly tech chat.
      </p>

      <div className="contact-methods">
        <p><strong>Email:</strong> <a href="mailto:shrikantbk06@gmail.com">shrikantbk06@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shrikant-bipinkumar-65ba3b1a4" target="_blank" rel="noreferrer">Shrikant Bipinkumar</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/shrikantbk06" target="_blank" rel="noreferrer">shrikantbk06</a></p>
      </div>
    </div>
  );
}
