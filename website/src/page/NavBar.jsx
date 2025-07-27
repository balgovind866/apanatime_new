import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTh, FaPhone, FaChevronDown } from 'react-icons/fa';

const courseCategories = [
  {
    title: "Web Development",
    duration: "24 weeks",
    rating: "4.1",
    learners: "500+",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  {
    title: "Programming with Python",
    duration: "24 weeks",
    rating: "4.1",
    learners: "500+",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
  },
  {
    title: "Digital Marketing",
    duration: "24 weeks",
    rating: "4.1",
    learners: "500+",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    title: "Machine Learning",
    duration: "24 weeks",
    rating: "4.5",
    learners: "1000+",
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
  },
  {
    title: "App Development",
    duration: "24 weeks",
    rating: "4.6",
    learners: "500+",
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    title: "Backend Development",
    duration: "24 weeks",
    rating: "4.4",
    learners: "500+",
    price: "₹5,299",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
];

const NavBar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl text-gray-800">LearnHub</span>
        </div>
        </Link>

        <div className="flex items-center space-x-2 relative">
          <div
            className="relative"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <span>Courses</span>
              <FaTh />
              <FaChevronDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-[1000px] max-h-[80vh] overflow-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn transition-all duration-300">
                {courseCategories.map((category, index) => (
                  <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                    <img src={category.image} alt={category.title} className="w-full h-37 object-cover rounded-t-2xl" />
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 pt-2">{category.duration}</p>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2 space-x-2">
                        <svg className="w-3 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
                        </svg>
                        <span>{category.rating}</span>
                        <span className="text-gray-400">|</span>
                        <span>{category.learners} learners</span>
                      </div>
                      <div className="text-orange-600 font-medium mb-3">{category.price}</div>
                      <Link
                        to={`/course/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, '-'))}`}
                        className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:text-orange-700 transition-colors"
                      >
                        Know more
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="col-span-full pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md">
                    View All Courses →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses"
              className="border border-gray-300 rounded-lg px-4 py-2 pl-10 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Jobs</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Learning Resources</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
          <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <FaPhone />
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            Student Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
