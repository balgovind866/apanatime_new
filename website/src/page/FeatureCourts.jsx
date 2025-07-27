import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedCoursesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning Course",
      duration: "6 Months",
      mode: "Online",
      image: "/api/placeholder/400/250",
      gradient: "from-blue-900 to-blue-700"
    },
     {
      id: 2,
      title: "Data Science & Data Analyst Course",
      duration: "6 Months",
      mode: "Online",
      image: "/api/placeholder/400/250",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      id: 2,
      title: "App Development Course",
      duration: "6 Months",
      mode: "Online",
      image: "/api/placeholder/400/250",
      gradient: "from-blue-800 to-blue-600"
    },
    {
      id: 3,
      title: "Web Development Course",
      duration: "6 Month",
      mode: "Online",
      image: "/api/placeholder/400/250",
      gradient: "from-blue-900 to-blue-700"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
              <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Featured Courses</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <button className="text-orange-500 border-b-2 border-orange-500 pb-2 font-medium">
              For Working Professionals
            </button>
            <button className="text-gray-500 hover:text-orange-500 pb-2">
              For Corporates
            </button>
            <button className="text-gray-500 hover:text-orange-500 pb-2">
              For Freshers
            </button>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Apana Time Tech Solutions, our specialized programs in Data Analysis, Data Science, App Development, Web Development, Python, and Power BI are designed to be flexible, practical, and aligned with current industry demands—empowering you to grow your skills and advance your career.
          </p>
        </div>

        {/* Course Cards Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${courses.length * 25}%`
              }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Course Image with Overlay */}
                    <div className={`relative h-64 bg-gradient-to-r ${course.gradient}`}>
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {course.duration}
                        </span>
                      </div>
                      <div className="absolute right-8 bottom-8 w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full"></div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                        {course.title}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">
                          Mode: <span className="font-medium text-gray-800">{course.mode}</span>
                        </span>
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                        Know More &gt;
                      </button>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button   onClick={prevSlide} className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow'>
            
  Styled Button
</button>



          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button> */}
        </div>

        {/* Carousel Indicators */}
        
        <div className="flex justify-center mt-8 space-x-2">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoursesPage;
