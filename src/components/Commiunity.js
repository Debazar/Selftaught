import React from 'react';
import './Community.css';
import communityData from '../assets/communityData';
import Navbar from './Navbar';
import Footer from './Footer';

const Community = () => {
  return (
    <div>
    <Navbar />
    <div className="community-page">
      <div className="community-header">
        <h1>Community</h1>
        <p>Connect with peers, share knowledge, and grow together.</p>
      </div>
      <div className="community-content">
        {communityData.map((item, index) => (
          <div key={index} className="community-section">
            <img src={item.image} alt={item.title} className="community-image" />
            <div className="community-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Community;