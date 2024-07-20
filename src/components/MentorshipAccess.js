import React from 'react';
import './MentorshipAccess.css';
import mentorshipData from '../assets/mentorshipData';

const MentorshipAccess = () => {
  return (
    <div className="mentorship-access">
      <h2>Mentorship and Expert Access</h2>
      <div className="mentors-container">
        {mentorshipData.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <img src={mentor.image} alt={mentor.name} className="mentor-image" />
            <div className="mentor-content">
              <h3>{mentor.name}</h3>
              <p className="mentor-title">{mentor.title}</p>
              <p>{mentor.description}</p>
              <a href={mentor.link} className="cta-button">Connect</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipAccess;