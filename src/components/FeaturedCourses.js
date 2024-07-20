import React from 'react';
import './FeaturedCourses.css';
import courseData from '../assets/courseData'; 

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2>Featured Courses</h2>
      <div className="courses-container">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;