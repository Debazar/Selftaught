import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import FeaturedCourses from './components/FeaturedCourses';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import UserTestimonials from './components/UserTestimonials';
import UpcomingEvents from './components/UpcomingEvents';
import GamificationRewards from './components/GamificationRewards';
import SocialLearning from './components/SocialLearning';
import InteractiveContentTeasers from './components/interactiveContentTeasers';
import RealWorldProblems from './components/RealWorldProblems';
import MentorshipAccess from './components/MentorshipAccess';
import BlogHighlights from './components/BlogHighlights';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedCourses/>
      <PersonalizedRecommendations/>
      <UpcomingEvents />
      <GamificationRewards/>
      <SocialLearning/>
      <InteractiveContentTeasers/>
      <RealWorldProblems/>
      <BlogHighlights/>
      <MentorshipAccess/>
      <UserTestimonials/>
      <Footer/>
    </div>
  );
}

export default App;