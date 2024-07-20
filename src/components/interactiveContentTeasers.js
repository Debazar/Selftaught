import React from 'react';
import './interactiveContent.css'
import contentTeasersData from '../assets/contentTeasersData'; 

const InteractiveContentTeasers = () => {
  return (
    <div className="interactive-content-teasers">
      <h2>Interactive and Immersive Content Teasers</h2>
      <div className="teasers-container">
        {contentTeasersData.map((teaser, index) => (
          <div className="teaser-card" key={index}>
            <img src={teaser.image} alt={teaser.title} className="teaser-image" />
            <div className="teaser-content">
              <h3>{teaser.title}</h3>
              <p>{teaser.description}</p>
              <a href={teaser.link} className="cta-button">Check it out</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentTeasers;