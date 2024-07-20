import React from 'react';
import './GamificationRewards.css';
import rewardsData from '../assets/rewardsData';

const GamificationRewards = () => {
  return (
    <div className="gamification-rewards">
      <h2>Gamification and Rewards</h2>
      <div className="rewards-container">
        {rewardsData.map((reward, index) => (
          <div className="reward-card" key={index}>
            <img src={reward.image} alt={reward.title} className="reward-image" />
            <div className="reward-content">
              <h3>{reward.title}</h3>
              <p>{reward.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamificationRewards;