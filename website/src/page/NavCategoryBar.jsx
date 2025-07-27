import React from 'react';

const NavCategoryBar = () => {
  return (
    <div className="fixed top-14 left-0 w-full bg-blue-800 text-white text-sm py-2 z-40 shadow">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        <span className="whitespace-nowrap">Data Science & Data Analyst</span>
        <span>|</span>
        <span className="whitespace-nowrap">Gen AI</span>
        <span>|</span>
        <span className="whitespace-nowrap">App Development</span>
        <span>|</span>
        <span className="whitespace-nowrap">Power BI & Advance Excel</span>
        <span>|</span>
        <span className="whitespace-nowrap">Full Stack Development</span>
        <span>|</span>
        <span className="whitespace-nowrap">Python</span>
        <span>|</span>
        <span className="whitespace-nowrap">Data Structures</span>
      </div>
    </div>
  );
};

export default NavCategoryBar;

