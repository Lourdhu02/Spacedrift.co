import React from 'react';
import './Footer.css';

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
            <strong>Explore</strong>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/inner-circle">Inner Circle</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <strong>Internships</strong>
            <a href="/services/internships/data-science">Data Science</a>
            <a href="/services/internships/machine-learning">Machine Learning</a>
            <a href="/services/internships/web-development">Web Development</a>
            <a href="/services/internships/deep-learning">Deep Learning</a>
            <a href="/services/internships/apply-now">Apply Now</a>
          </div>
          <div>
            <strong>Solutions</strong>
            <a href="/services/predictive-analytics">Predictive Analytics</a>
            <a href="/services/nlp">NLP Solutions</a>
            <a href="/services/computer-vision">Computer Vision</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookies Policy</a>
            <a href="/terms">Terms & Conditions</a>
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
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} Spacedrift. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
