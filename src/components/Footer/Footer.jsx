import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
        <div className="footer-logo">SPACEDRIFT.CO</div>
        <div className="footer-tagline">
          Empowering Innovation through Data Science and AI.
        </div>
        </div>

        <div className="footer-links">
          <div>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        
      </div>
      <p className="footer-bottom">
          &copy; {new Date().getFullYear()} Spacedrift. All rights reserved.
    </p>
    </footer>
  )
}

export default Footer
