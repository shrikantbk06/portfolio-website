import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Shrikant</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
} 
