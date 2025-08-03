import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-text">
        <h1>Hi, I'm Shrikant 👋</h1>
        <h2 className="typewriter-text">
            <Typewriter
                words={['Software Engineer', 'Full-Stack Developer', 'Cloud Enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h2>
        <p>
          I'm a Master's graduate from the University of Sydney with hands-on experience in building scalable web applications, cloud-based microservices, and intelligent systems using React, Node.js, Java, and Python. Passionate about crafting efficient, secure, and user-centric solutions.
        </p>
        <Link to="/projects" className="hero-btn">My Projects</Link>
        <a
            href={`${process.env.PUBLIC_URL}/Shrikant_Resume.pdf`}
            download
            className="hero-btn resume-btn"
        >
            Download Resume
        </a>
      </div>
    </div>
  );
}

