import React from 'react';
import './About.css';
import profileImage from '../assets/profile.png';

export default function About() {
  const getPublicImagePath = (fileName) => {
    if (process.env.NODE_ENV !== 'production') {
      return `/${fileName}`; // dev server
    }
    // production: GitHub Pages project site → /portfolio-website/...
    return `${process.env.PUBLIC_URL}/${fileName}`;
  };
  const profilePublic = getPublicImagePath('profile.png');

  const handleImgError = (e) => {
    if (e.target.src !== profilePublic) {
      e.target.src = profilePublic;
      e.currentTarget.dataset.fallback = 'true';
    }
  };
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-flex">
        <div className="about-image">
          <img src={profileImage} 
            alt="Profile" 
            width="240"
            height="240"
            decoding="async"
            loading="eager"
            onError={handleImgError}
            style={{ backgroundColor: 'transparent', display: 'block' }}/>
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
              <li><b>Programming Languages:</b> Java, Python, JavaScript, SQL, C, C++, C#, HTML, CSS</li>
              <li><b>Frameworks & Libraries:</b> Spring Boot, React, Node.js</li>
              <li><b>Cloud & DevOps:</b> AWS, Docker, CI/CD</li>
              <li><b>Tools:</b> Git, JUnit, Mockito</li>
              <li><b>Databases:</b> MySQL, PostgreSQL, DynamoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
