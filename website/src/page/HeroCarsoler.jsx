import React, { useEffect, useState } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const heroSlides = [
  {
    title: "Master Modern Web Development",
    subtitle: "Learn React, Node.js, and build full-stack applications",
    cta: "Start Learning",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    color: "from-gray-900 via-blue-700 to-orange-400"
  },
  {
    title: "AI & Machine Learning Career Path",
    subtitle: "Build intelligent applications with Python and TensorFlow",
    cta: "Explore AI Courses",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    color: "from-blue-700 via-orange-400 to-gray-900"
  },
  {
    title: "Mobile App Development",
    subtitle: "Create stunning iOS and Android apps with Flutter",
    cta: "Build Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    color: "from-orange-400 via-gray-900 to-blue-700"
  },
  {
  title: "Data Science & Data Analyst",
  subtitle: "Master Python, SQL, Machine Learning, Power BI, and real-world data projects",
  cta: "Explore the Data Track",
  image: "https://images.unsplash.com/photo-1664575607092-c044c30b0b52?w=800&h=400&fit=crop",
  color: "from-blue-700 via-gray-900 to-orange-400"
}
];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="relative  h-150 overflow-hidden  shadow-2xl">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className={`relative h-full bg-gradient-to-r ${slide.color} flex items-center`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8 opacity-90">{slide.subtitle}</p>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;


