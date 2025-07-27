import React from 'react';
import { FaWhatsapp, FaRobot } from 'react-icons/fa';
const BottomScrollBanner = () => {
  return (
    <>
      <a
        href="https://wa.me/7080404594" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-50"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
            <button
        className="fixed bottom-36 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
        title="Chatbot"
      >
        <FaRobot size={24} />
      </button>


     <div className="fixed bottom-0 w-full bg-blue-900 text-white text-sm py-2 px-4 flex justify-center items-center z-50 ">
      <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
        <span className="text-center">
          Transform Your Career with Data Science Placement-Assured Program
        </span>
        <button className="bg-yellow-400 text-black px-3 py-1 rounded shadow hover:bg-yellow-500">
          Enroll Now!
        </button>
      </div>
    </div>
    </>
   
  );
};

export default BottomScrollBanner;
