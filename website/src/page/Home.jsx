import React from 'react';
import NavBar from './NavBar';
import NavCategoryBar from './NavCategoryBar';
import HeroCarousel from './HeroCarsoler';
import BottomScrollBanner from './ButtomSheet';
import FeaturedCourses from './FeatureCourts';
import WhyChooseUs from './WhyChooseUs';
import SupportCenter from './SupportCenter';
import Footer from './FooterPart';
const Home = () => {
  return (
    <div className ="min-h-screen bg-white">
      //Anish 
      <NavBar/>
      <NavCategoryBar />
      <HeroCarousel />


      <FeaturedCourses />
      
      <WhyChooseUs/>
<      SupportCenter/>
<Footer/>
     <BottomScrollBanner/>
    </div>
  );
};

export default Home;