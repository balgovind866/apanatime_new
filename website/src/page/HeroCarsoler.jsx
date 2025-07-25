import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Logo from '../images/hero.jpg'
const HeroCarousel = () => {
  return (
   
      <div className="h-[500px] w-full">
          <img
            src={Logo}
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
        </div>
   
  );
};

export default HeroCarousel;

