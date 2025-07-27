import React from 'react';
import HeroCarousel from './HeroCarsoler';
import FeaturedCourses from './FeatureCourts';
import WhyChooseUs from './WhyChooseUs';
import SupportCenter from './SupportCenter';

const Home = () => {
  return (
    <div className="">
      <HeroCarousel />
      <FeaturedCourses />
      <WhyChooseUs />
      <SupportCenter />
    </div>
  );
};

export default Home;