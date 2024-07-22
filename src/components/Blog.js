import React from 'react';
import './Blog.css';
import blogData from '../assets/blogData';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <div>
       <Navbar />
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Stay updated with our latest articles and insights.</p>
      </div>
      <div className="blog-content">
        {blogData.map((item, index) => (
          <div key={index} className="blog-post">
            <img src={item.image} alt={item.title} className="blog-image" />
            <div className="blog-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;