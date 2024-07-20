import React from 'react';
import './SocialLearning.css';
import communityData from '../assets/communityData'; 

const SocialLearning = () => {
  return (
    <div className="social-learning">
      <h2>Social Learning and Community Highlights</h2>
      <div className="community-container">
        {communityData.map((highlight, index) => (
          <div className="community-card" key={index}>
            <img src={highlight.image} alt={highlight.title} className="community-image" />
            <div className="community-content">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLearning;