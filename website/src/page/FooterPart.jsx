import React from 'react';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt,FaYoutube,FaEnvelope,FaMapMarked, FaMapMarker } from "react-icons/fa";

import Logo from '../images/apanalogo.png';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Top Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={Logo} alt="ApanaTime Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ApanaTime
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Unlock your business potential with ApanaTime's expert web and app development, data analytics, and Power BI solutions—driving innovation, efficiency, and success for your growth.
            </p>
            {/* Social Links */}
           
              <div className="flex space-x-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61562874962761" className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FaFacebookF size={16}  />
              </a>
              <a href="https://x.com/apanatime_in?t=AK1T6d3woHNJ_VFmEwgHtA&s=09" className='w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300' >
                <FaTwitter size={16}/>
              </a>
              <a href="https://www.linkedin.com/company/apana-time/" className='w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300'>
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://www.instagram.com/apanatime.in/" className='w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300'>
                <FaInstagram size={16} />
                
              </a>
               <a href="https://www.youtube.com/@APANATIME-AT" className='w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300'>
                <FaYoutube size={16} />
                
                
              </a>
            <a href="https://instagram.com" className='w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300'>
                <FaYoutube size={16} />
                
                
              </a>
              
            </div>
          </div>

          

          {/* Contact Info */}
           <div className="space-y-2 mt-6">
              <h3 className="text-xl font-semibold relative">
                Contact Info
                <span className="block w-12 h-1 mt-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                 <FaMapMarker size={25} className="text-blue-400" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Madraha Kusmaul, 2rd Floor, Main Road, Kaudi Ram, Madraha, Gorakhpur, Uttar Pradesh – 273401 India
                  </p>
                </div>
                 <div className="flex items-center space-x-3">
      <MdEmail size={16} className="text-blue-400" />
      <a href="mailto:hr@apanatime.in" className="hover:text-white">
        hr@apanatime.in
      </a>
    </div>
                </div>

            </div>
          

          {/* About Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              About Company
              <span className="block w-12 h-1 mt-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {['Contact Us', 'Careers', 'Internship', 'Media', 'Career Transition'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 group hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <ChevronRight size={14} className="group-hover:text-blue-400" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Resources
              <span className="block w-12 h-1 mt-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {['Blogs', 'Mindmap', 'Digital Book', 'Data Science Guide', 'Learning Resources'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 group hover:text-white hover:translate-x-1 transition-all duration-300"
                    >
                      <ChevronRight size={14} className="group-hover:text-blue-400" />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div>
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-slate-300 text-sm">Get the latest updates on courses and career opportunities.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full sm:w-64"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm text-center md:text-left">
            © 2024 ApanaTime Tech Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
