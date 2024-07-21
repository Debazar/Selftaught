import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Selftaught</h4>
          <p>Selftaught is dedicated to empowering self-taught learners through personalized learning paths, community support, and expert mentorship.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><a href="#">Home</a></Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@Selftaught.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="path_to_facebook_icon" alt="Facebook" /></a>
            <a href="#"><img src="path_to_twitter_icon" alt="Twitter" /></a>
            <a href="#"><img src="path_to_instagram_icon" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Selftaught. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




