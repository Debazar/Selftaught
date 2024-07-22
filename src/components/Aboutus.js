import React from 'react';
import './Aboutus.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
       <Navbar />
    <div className="about-us-page">
      <div className="about-us-header">
        <h1>About Selftaught</h1>
        <p>Empowering Self-directed Learning for Everyone</p>
      </div>
      <div className="about-us-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Selftaught, our mission is to empower individuals to take control of their own learning journeys. We believe that everyone has the potential to learn and grow, and our platform provides the tools and resources to make self-directed learning accessible to all.
          </p>
        </section>
        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where learning is not confined to traditional classrooms. Through Selftaught, we aim to create a global community of lifelong learners who are equipped with the skills and knowledge they need to succeed in an ever-changing world.
          </p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Accessibility:</strong> Making learning resources available to everyone, everywhere.</li>
            <li><strong>Community:</strong> Fostering a supportive and collaborative learning environment.</li>
            <li><strong>Innovation:</strong> Continuously improving and evolving our platform to meet the needs of our learners.</li>
            <li><strong>Empowerment:</strong> Encouraging learners to take charge of their own education and personal growth.</li>
          </ul>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>
            Selftaught is made possible by a dedicated team of educators, technologists, and lifelong learners who are passionate about making education accessible to all. We work tirelessly to develop innovative tools and resources that support self-directed learning.
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;