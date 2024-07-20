import React from 'react';
import './PersonalizedRecommendations.css';
import courseData from '../assets/courseData'; 

const PersonalizedRecommendations = () => {
  return (
    <div className="personalized-recommendations">
      <h2>Personalized Recommendations</h2>
      <div className="recommendations-container">
        {courseData.map((course, index) => (
          <div className="recommendation-card" key={index}>
            <img src={course.image} alt={course.title} className="recommendation-image" />
            <div className="recommendation-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;