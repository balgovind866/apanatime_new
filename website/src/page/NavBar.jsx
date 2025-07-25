
import React, { useState } from 'react';
import { FaSearch, FaTh, FaPhone, FaChevronDown, FaCode, FaServer, FaBrain, FaMobile, FaDatabase, FaCloud, FaPalette, FaShieldAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const courseCategories = [
    {
      title: "Web Development",
      icon: <FaCode className="text-blue-500" />,
      courses: [
        "Frontend Development (React, Vue, Angular)",
        "HTML, CSS & JavaScript Fundamentals",
        "Responsive Web Design",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-green-500" />,
      courses: [
        "Flutter Development",
        "React Native",
        "iOS Development (Swift)",
        "Android Development (Kotlin)"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-purple-500" />,
      courses: [
        "Node.js & Express",
        "Python Django/Flask",
        "Java Spring Boot",
        "PHP Laravel"
      ]
    },
    {
      title: "Artificial Intelligence",
      icon: <FaBrain className="text-red-500" />,
      courses: [
        "Machine Learning Fundamentals",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-indigo-500" />,
      courses: [
        "SQL & Database Design",
        "MongoDB & NoSQL",
        "AWS Cloud Services",
        "Docker & Kubernetes"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="text-pink-500" />,
      courses: [
        "User Interface Design",
        "User Experience Research",
        "Figma & Design Tools",
        "Design Systems"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt className="text-orange-500" />,
      courses: [
        "Ethical Hacking",
        "Network Security",
        "Web Application Security",
        "Incident Response"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaCloud className="text-teal-500" />,
      courses: [
        "Git & Version Control",
        "CI/CD Pipelines",
        "Linux System Administration",
        "Monitoring & Logging"
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl text-gray-800">LearnHub</span>
        </div>

        {/* Center: Courses Button & Search Bar */}
        <div className="flex items-center space-x-2 relative">
          <div 
            className="relative"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>Courses</span>
              <FaTh />
              <FaChevronDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Courses Dropdown */}
            {isCoursesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6 animate-fadeIn">
                {courseCategories.map((category, index) => (
                  <div key={index} className="space-y-3 group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">{category.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <a
                          key={courseIndex}
                          href="#"
                          className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-md transition-all duration-200 hover:translate-x-1"
                        >
                          {course}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* View All Courses Button */}
                <div className="col-span-2 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:shadow-lg">
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

        {/* Right: Links & Login */}
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
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;