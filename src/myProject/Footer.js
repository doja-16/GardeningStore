// src/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook">  </i>    </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>   </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">            
          <i className="fa fa-instagram"></i> 
        </a>
        {/* Add more social media icons as needed */}
      </div>
      
      {/* Contact Link */}
      <Link to="/contact" className="footer-link">
        Contact Us
      </Link>
    </footer>
  );
};

export default Footer;
