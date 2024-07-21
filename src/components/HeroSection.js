import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/heroimg.jpg'; // Add an image in the assets folder

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Learning" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Selftaught</h1>
        <p>Empowering self-teaching through personalized</p> <p> learning paths and community support.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;