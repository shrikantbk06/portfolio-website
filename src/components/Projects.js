// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; 
import './Projects.css';

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  // Load from public/projects.json
  useEffect(() => {
    const url = `${process.env.PUBLIC_URL}/projects.json?v=1`; 
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => setProjectList(Array.isArray(data) ? data : []))
      .catch((e) => setErr(`Failed to load projects.json (${e.message})`))
      .finally(() => setLoading(false));
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  const getThumbUrl = (filename) =>
    filename ? `${process.env.PUBLIC_URL}/project-thumbs/${filename}` : null;

  const placeholder =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#6fd3ff"/><stop offset="1" stop-color="#22c55e"/>
        </linearGradient></defs>
        <rect width="640" height="360" fill="url(#g)"/>
      </svg>`
    );

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      {loading && <p className="project-tech">Loading projects…</p>}
      {err && !loading && (
        <p className="project-tech" style={{ color: '#f87171' }}>
          {err}
        </p>
      )}

      <div className="projects-grid">
        {!loading &&
          !err &&
          projectList.map((proj) => {
            const thumb = getThumbUrl(proj.image) || placeholder;

            return (
              <motion.div
                key={proj.id || proj.title}
                className="project-card"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === 'Enter' || e.key === ' ') && setActive(proj)
                }
                aria-label={`Open details for ${proj.title}`}
              >
                <div className="project-thumb-wrapper">
                  <img
                    className="project-thumb"
                    src={thumb}
                    alt={`${proj.title} thumbnail`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 className="project-title-only">{proj.title}</h3>
                {proj.duration && (
                  <p className="project-duration">{proj.duration}</p>
                )}

                {/* Show quick links if available */}
                {(proj.demoLink || proj.githubLink) && (
                  <div className="project-links">
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub Repo">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {proj.demoLink && (
                      <a href={proj.demoLink} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <FiExternalLink size={20} />
                      </a>
                    )}                    
                  </div>
                )}

                {/* <div className="project-cta">Click to view details</div> */}
              </motion.div>
            );
          })}
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="modal-backdrop"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="modal-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <div
                className="modal-card"
                role="dialog"
                aria-modal="true"
                aria-label="Project details"
              >
                <header className="modal-header">
                  <h3>{active.title}</h3>
                  <button
                    className="close-btn"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </header>

                {/* Scrollable body so long descriptions don't push the header */}
                <div className="modal-body">
                  {active.duration && (
                    <p className="project-duration">{active.duration}</p>
                  )}
                  {active.tech && (
                    <p className="project-tech">
                      <strong>Tech:</strong> {active.tech}
                    </p>
                  )}

                  <div className="modal-desc">
                    {active.description
                      .split('\n\n')
                      .map((para, i) => (
                        <p key={i}>
                          {para.split('\n').map((line, j, arr) => (
                            <React.Fragment key={j}>
                              {line}
                              {j < arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                  </div>

                  <div className="modal-links">
                    {active.githubLink && (
                      <a
                        href={active.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repo"
                      >
                        <FaGithub size={22} />
                      </a>
                    )}
                    {active.demoLink && (
                      <a
                        href={active.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
