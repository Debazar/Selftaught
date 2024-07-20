import React from 'react';
import './UserTestimonials.css';
import testimonialsData from '../assets/testimonial'; 

const UserTestimonials = () => {
  return (
    <div className="user-testimonials">
      <h2>User Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;