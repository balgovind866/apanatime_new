import React from 'react';
 // or use a static img tag
import Logo from '../images/logo.png';

const WhyChooseUs = () => {
  return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                Why Choose Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover why over 2,500 learners have chosen us for their journey in Data Science, Data Analyst, Web Development, App Development, Python, Power BI and AI . 
                With a focus on real-world applications and a global network, our tailored learning paths 
                not only teach-they transform careers and enhance industry connections. Experience the 
                difference with our commitment to your success and our proven track record in professional advancement.
              </p>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">12+</div>
                  <div className="text-sm text-gray-600 mt-1">Customized Courses</div>
                  <div className="text-xs text-gray-500">offerings</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">2500+</div>
                  <div className="text-sm text-gray-600 mt-1">Active Students</div>
                  <div className="text-xs text-gray-500">satisfied Students</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">&gt;50+</div>
                  <div className="text-sm text-gray-600 mt-1">Batch Completion</div>
                  <div className="text-xs text-gray-500">rate</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600">4.8</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction Rating</div>
                  <div className="text-xs text-gray-500">(Average)</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Word Cloud */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-4">DATA SCIENCE</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-gray-500 opacity-60">
                    <span>WEB MARKETING</span>
                    <span>DATA MINING</span>
                    <span>MACHINE LEARNING</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400 opacity-50">
                    //dfhfdruh
                    <span>NEURAL NETWORKS</span>
                    <span>ANALYTICS</span>
                    <span>BIG DATA</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400 opacity-40">
                    <span>ARTIFICIAL INTELLIGENCE</span>
                    <span>STATISTICS</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300 opacity-30">
                    <span>DESCRIPTIVE BUSINESS</span>
                    <span>VISUALIZATION</span>
                    <span>TECH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WhyChooseUs;