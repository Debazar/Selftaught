import React from 'react';
import './RealWorldProblems.css';
import realWorldProblemsData from '../assets/realWorldProblemsData';

const RealWorldProblems = () => {
  return (
    <div className="real-world-problems">
      <h2>Real World Problems and Challenges</h2>
      <div className="problems-container">
        {realWorldProblemsData.map((problem, index) => (
          <div className="problem-card" key={index}>
            <img src={problem.image} alt={problem.title} className="problem-image" />
            <div className="problem-content">
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
              <a href={problem.link} className="cta-button">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealWorldProblems;