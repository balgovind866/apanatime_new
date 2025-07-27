import React, { useState } from 'react';
import { 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaBrain, 
  FaDatabase, 
  FaPalette, 
  FaShieldAlt, 
  FaCloud,
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';

const MaterialCoursesDropdown = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const courseCategories = [
    {
      title: "Web Development",
      icon: <FaCode className="text-blue-600" />,
      color: "blue",
      courses: [
        "Frontend Development (React, Vue, Angular)",
        "HTML, CSS & JavaScript Fundamentals",
        "Responsive Web Design",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-emerald-600" />,
      color: "emerald",
      courses: [
        "Flutter Development",
        "React Native",
        "iOS Development (Swift)",
        "Android Development (Kotlin)"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-purple-600" />,
      color: "purple",
      courses: [
        "Node.js & Express",
        "Python Django/Flask",
        "Java Spring Boot",
        "PHP Laravel"
      ]
    },
    {
      title: "Artificial Intelligence",
      icon: <FaBrain className="text-rose-600" />,
      color: "rose",
      courses: [
        "Machine Learning Fundamentals",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-indigo-600" />,
      color: "indigo",
      courses: [
        "SQL & Database Design",
        "MongoDB & NoSQL",
        "AWS Cloud Services",
        "Docker & Kubernetes"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="text-pink-600" />,
      color: "pink",
      courses: [
        "User Interface Design",
        "User Experience Research",
        "Figma & Design Tools",
        "Design Systems"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt className="text-orange-600" />,
      color: "orange",
      courses: [
        "Ethical Hacking",
        "Network Security",
        "Web Application Security",
        "Incident Response"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaCloud className="text-teal-600" />,
      color: "teal",
      courses: [
        "Git & Version Control",
        "CI/CD Pipelines",
        "Linux System Administration",
        "Monitoring & Logging"
      ]
    }
  ];

  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        hoverBg: 'hover:bg-blue-100',
        text: 'text-blue-600',
        hoverText: 'hover:text-blue-700',
        border: 'border-blue-200',
        shadow: 'shadow-blue-100'
      },
      emerald: {
        bg: 'bg-emerald-50',
        hoverBg: 'hover:bg-emerald-100',
        text: 'text-emerald-600',
        hoverText: 'hover:text-emerald-700',
        border: 'border-emerald-200',
        shadow: 'shadow-emerald-100'
      },
      purple: {
        bg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-100',
        text: 'text-purple-600',
        hoverText: 'hover:text-purple-700',
        border: 'border-purple-200',
        shadow: 'shadow-purple-100'
      },
      rose: {
        bg: 'bg-rose-50',
        hoverBg: 'hover:bg-rose-100',
        text: 'text-rose-600',
        hoverText: 'hover:text-rose-700',
        border: 'border-rose-200',
        shadow: 'shadow-rose-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        hoverBg: 'hover:bg-indigo-100',
        text: 'text-indigo-600',
        hoverText: 'hover:text-indigo-700',
        border: 'border-indigo-200',
        shadow: 'shadow-indigo-100'
      },
      pink: {
        bg: 'bg-pink-50',
        hoverBg: 'hover:bg-pink-100',
        text: 'text-pink-600',
        hoverText: 'hover:text-pink-700',
        border: 'border-pink-200',
        shadow: 'shadow-pink-100'
      },
      orange: {
        bg: 'bg-orange-50',
        hoverBg: 'hover:bg-orange-100',
        text: 'text-orange-600',
        hoverText: 'hover:text-orange-700',
        border: 'border-orange-200',
        shadow: 'shadow-orange-100'
      },
      teal: {
        bg: 'bg-teal-50',
        hoverBg: 'hover:bg-teal-100',
        text: 'text-teal-600',
        hoverText: 'hover:text-teal-700',
        border: 'border-teal-200',
        shadow: 'shadow-teal-100'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Explore Our Courses</h1>
          <p className="text-slate-600 text-lg">Discover cutting-edge technology courses designed for your success</p>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            className="mb-4 px-6 py-3 bg-white rounded-xl shadow-lg border border-slate-200 text-slate-700 font-medium hover:shadow-xl transition-all duration-300"
          >
            {isCoursesOpen ? 'Hide Courses' : 'Show Courses'}
          </button>

          {isCoursesOpen && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-top-4 duration-500">
              {courseCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div 
                    key={index} 
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.border} ${colors.shadow}`}
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 ${colors.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <div className="text-xl">
                            {category.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold text-lg ${category.color === 'blue' ? 'text-slate-800' : 'text-slate-800'} group-hover:${colors.text} transition-colors duration-300`}>
                            {category.title}
                          </h3>
                          <div className={`h-0.5 ${colors.bg} rounded-full mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                        </div>
                      </div>

                      {/* Courses list */}
                      <div className="space-y-2">
                        {category.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className={`group/course flex items-center justify-between p-3 rounded-xl hover:${colors.bg} hover:${colors.hoverBg} transition-all duration-200 cursor-pointer transform hover:translate-x-2`}
                            style={{
                              animationDelay: `${(index * 100) + (courseIndex * 50)}ms`
                            }}
                          >
                            <span className={`text-sm font-medium text-slate-700 group-hover/course:${colors.text} transition-colors flex-1`}>
                              {course}
                            </span>
                            <FaChevronRight className={`text-xs text-slate-400 group-hover/course:${colors.text} opacity-0 group-hover/course:opacity-100 transition-all duration-200 transform group-hover/course:translate-x-1`} />
                          </div>
                        ))}
                      </div>

                      {/* Hover indicator */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                    </div>
                  </div>
                );
              })}

              {/* Call to action */}
              <div className="lg:col-span-4 pt-8 border-t border-slate-200/50 mt-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 flex items-center space-x-3">
                    <span>Explore All Courses</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-700 rounded-2xl font-semibold border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Get Free Consultation
                  </button>
                </div>
                
                {/* Stats */}
                <div className="flex justify-center mt-6 space-x-8 text-center">
                  <div className="group">
                    <div className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">50+</div>
                    <div className="text-sm text-slate-600">Courses</div>
                  </div>
                  <div className="group">
                    <div className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">10k+</div>
                    <div className="text-sm text-slate-600">Students</div>
                  </div>
                  <div className="group">
                    <div className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">95%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialCoursesDropdown;