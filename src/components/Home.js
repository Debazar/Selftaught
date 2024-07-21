import React from "react";

import Footer from "./Footer";
import HeroSection from "./HeroSection";
import FeaturedCourses from "./FeaturedCourses";
import GamificationRewards from "./GamificationRewards";
import InteractiveContentTeasers from "./interactiveContentTeasers";
import Navbar from "./Navbar";
import PersonalizedRecommendations from "./PersonalizedRecommendations";
import BlogHighlights from "./BlogHighlights";
import MentorshipAccess from "./MentorshipAccess";
import RealWorldProblems from "./RealWorldProblems";
import SocialLearning from "./SocialLearning";
import UserTestimonials from "./UserTestimonials";
import UpcomingEvents from "./UpcomingEvents";


function Home() {
  return (
    <div>
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

export default Home;