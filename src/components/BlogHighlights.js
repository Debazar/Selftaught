import React from 'react';
import './BlogHighlights.css';
import blogData from '../assets/blogData';

const BlogHighlights = () => {
  return (
    <div className="blog-highlights">
      <h2>Blog/Resource Highlights</h2>
      <div className="blog-container">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link} className="cta-button">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHighlights;