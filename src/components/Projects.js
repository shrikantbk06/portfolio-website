import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Advanced Group Testing for Community Infection Control",
      duration: "June 2024 – June 2025",
      tech: "Python, Graph Theory, Simulation",
      description: "Simulated infection spread using Erdős–Rényi, Barabási–Albert, and Watts–Strogatz graph models. Implemented Naive, Dorfman, Two-Stage Adaptive, and GCAGT testing strategies. Evaluated test count, accuracy, and error rates across infection scenarios."
    },
    {
      title: "Face Detection-Based Attendance System",
      tech: "Python, OpenCV, Flask",
      description: "Built a camera-based attendance app with over 95% face recognition accuracy using OpenCV. Integrated backend with Flask for real-time logging."
    },
    {
      title: "Fruit Recognition System",
      tech: "Python, TensorFlow",
      description: "Trained a CNN model to classify 22 fruit categories. Preprocessed 2200+ images and achieved 98% accuracy. Visualized predictions using Matplotlib."
    },
    {
      title: "Interactive Cybersecurity Chatbot",
      tech: "Java",
      description: "Developed a Java-based chatbot to simulate cyber threat scenarios using predefined JSON prompts. Aimed to enhance phishing awareness through interactive Q&A."
    },
    {
        title: "Dumb Charades Game",
        tech: "React, HTML, CSS",
        description: "A web-based timer and scorekeeper for Dumb Charades. Built with React and deployed using GitHub Pages. Designed for fun, quick game nights with friends.",
        githubLink: "https://github.com/shrikantbk06/dumb-charades"
    },

  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            {proj.duration && <p className="project-duration">{proj.duration}</p>}
            <p className="project-tech"><strong>Tech:</strong> {proj.tech}</p>
            <p>{proj.description}</p>
                {(proj.demoLink || proj.githubLink) && (
                    <div className="project-links">
                        {proj.demoLink && (
                            <a href={proj.demoLink} target="_blank" rel="noreferrer">🔗 Live Demo</a>
                        )}
                        {proj.githubLink && (
                            <a href={proj.githubLink} target="_blank" rel="noreferrer">💻 GitHub</a>
                        )}
                    </div>
                )}
          </div>
        ))}
      </div>
    </div>
  );
}
