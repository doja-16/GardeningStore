// src/Navbar.js

import React, { useState } from 'react';
import './styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  const loginButton = () => { navigate("/") }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Ugaoo</h1>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Plants</a>
          <a href="#about">Seeds</a>
          <a href="#services">Planters</a>
          <a href="#services">Cart</a>
          <a href="#contact">Services</a>
          <Link to={'/'}>Log Out</Link>

        </div>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
