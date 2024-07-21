import React, { useState } from 'react';
import './Courses.css';
import courseData from '../assets/courseData';
import Navbar from './Navbar';
import Footer from './Footer';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredCourses = courseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
        <Navbar/>
    <div className="courses-page">
      <h2>Our Courses</h2>
      <div className="filter-search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Data Science">Data Science</option>
          <option value="Design">Design</option>
        </select>
      </div>
      <div className="courses-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a href={course.link} className="cta-button">View Course</a>
              </div>
            </div>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Courses;