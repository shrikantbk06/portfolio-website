import React from 'react';
import './About.css';
import profileImage from '../assets/profile.png'; // update filename as needed

export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-flex">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <p>
            I'm Shrikant, a passionate full-stack developer based in Sydney, Australia. I specialize in building interactive and efficient web applications using modern tools like React, Node.js, and Python.
          </p>
          <p>
            I recently completed my Master’s in Software Engineering at the University of Sydney, where I worked on exciting projects involving AI, web apps, and testing strategies.
          </p>
          <p>
            Outside of coding, I enjoy gaming, livestreaming, and exploring creative tech projects.
          </p>
          <div className="skills-list">
            <h3>Tech Stack</h3>
            <ul>
              <li>💻 JavaScript / React / Node.js</li>
              <li>🐍 Python</li>
              <li>☁️ AWS & Deployment</li>
              <li>🧪 Software Testing / DevOps</li>
              <li>📦 Git / GitHub / CI-CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
