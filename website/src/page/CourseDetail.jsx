import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'; // Assuming you have this component

const CourseDetail = () => {
  const { courseId } = useParams();
  const [selectedBatch, setSelectedBatch] = useState('26th Jul, 2025');
  const [currentReview, setCurrentReview] = useState(0);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // All course data
  const allCourses = {
    'web-development': {
      id: 'web-development',
      title: 'Web Development Course',
      shortDescription: 'Master full-stack web development',
      description: 'In this comprehensive web development course, you will learn modern web technologies including HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express, and MongoDB. Build real-world projects and deploy them to production.',
      duration: '8 weeks',
      schedule: '1 hr/day (flexible schedule)',
      rating: '4.1',
      students: '124,803',
      price: '₹999',
      originalPrice: '₹4499',
      discount: '₹111',
      languages: ['English', 'हिंदी'],
      features: [
        'Government-certified',
        'AI-Powered',
        'Mobile friendly',
        'Placement Assistance'
      ],
      offer: {
        title: '1+1 Offer:',
        description: 'Get Internship & Job Preparation training FREE on purchase of Web Development training!'
      },
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      modules: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript ES6+',
        'React.js Development',
        'Node.js & Express',
        'Database Design & MySQL',
        'PHP Backend Development',
        'Project Building',
        'Deployment & Hosting'
      ],
      prerequisites: ['Basic computer knowledge', 'No prior coding experience required'],
      instructor: {
        name: 'Dr. Sarah Johnson',
        bio: 'Senior Web Developer with 10+ years of experience',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
      }
    },
    'programming-with-python': {
      id: 'programming-with-python',
      title: 'Programming with Python',
      shortDescription: 'From basics to advanced Python programming',
      description: 'Master Python programming from basics to advanced concepts. Learn data structures, algorithms, web development with Django, and automation. This course will take you from zero to proficient Python developer.',
      duration: '6 weeks',
      schedule: '1.5 hr/day (flexible schedule)',
      rating: '4.1',
      students: '73,600',
      price: '₹799',
      originalPrice: '₹3999',
      discount: '₹89',
      languages: ['English', 'हिंदी'],
      features: [
        'Government-certified',
        'AI-Powered',
        'Mobile friendly',
        'Placement Assistance'
      ],
      offer: {
        title: '1+1 Offer:',
        description: 'Get Data Science fundamentals training FREE on purchase of Python programming training!'
      },
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      modules: [
        'Python Basics & Syntax',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'File Handling & Modules',
        'Django Web Framework',
        'Database Integration',
        'API Development',
        'Testing & Debugging'
      ],
      prerequisites: ['Basic understanding of programming concepts'],
      instructor: {
        name: 'Michael Chen',
        bio: 'Python expert with 8 years of teaching experience',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    },
    'digital-marketing': {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      shortDescription: 'Master digital marketing strategies',
      description: 'Learn comprehensive digital marketing strategies including SEO, SEM, social media marketing, content marketing, and analytics. This course will prepare you for modern marketing roles with hands-on projects.',
      duration: '8 weeks',
      schedule: '1 hr/day (flexible schedule)',
      rating: '4.1',
      students: '56,913',
      price: '₹1199',
      originalPrice: '₹5999',
      discount: '₹150',
      languages: ['English', 'हिंदी'],
      features: [
        'Government-certified',
        'AI-Powered',
        'Mobile friendly',
        'Placement Assistance'
      ],
      offer: {
        title: '1+1 Offer:',
        description: 'Get Google Ads certification training FREE on purchase of Digital Marketing training!'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      modules: [
        'Digital Marketing Fundamentals',
        'Search Engine Optimization (SEO)',
        'Google Ads & PPC',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing',
        'Analytics & Reporting',
        'E-commerce Marketing'
      ],
      prerequisites: ['Basic computer skills', 'Interest in marketing'],
      instructor: {
        name: 'Priya Sharma',
        bio: 'Digital Marketing Consultant with Fortune 500 experience',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1b5?w=100&h=100&fit=crop&crop=face'
      }
    },
    'machine-learning': {
      id: 'machine-learning',
      title: 'Machine Learning',
      shortDescription: 'Dive into AI and machine learning',
      description: 'Master machine learning algorithms, neural networks, and AI development. Build intelligent systems and predictive models with Python. This course includes hands-on projects with real datasets.',
      duration: '6 weeks',
      schedule: '2 hr/day (flexible schedule)',
      rating: '4.5',
      students: '28,103',
      price: '₹1499',
      originalPrice: '₹6499',
      discount: '₹200',
      languages: ['English', 'हिंदी'],
      features: [
        'Government-certified',
        'AI-Powered',
        'Mobile friendly',
        'Placement Assistance'
      ],
      offer: {
        title: '1+1 Offer:',
        description: 'Get Deep Learning specialization training FREE on purchase of Machine Learning training!'
      },
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      modules: [
        'Machine Learning Fundamentals',
        'Supervised Learning Algorithms',
        'Unsupervised Learning',
        'Neural Networks',
        'Deep Learning Basics',
        'Model Evaluation & Optimization',
        'Real-world Projects',
        'Deployment Strategies'
      ],
      prerequisites: ['Python programming', 'Basic statistics knowledge'],
      instructor: {
        name: 'Dr. Raj Patel',
        bio: 'AI Researcher with PhD in Machine Learning',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      }
    }
  };

  const reviews = {
    'web-development': [
      {
        rating: 4.0,
        text: "I got placed in a company for the role of Web Developer! It was only because of this web development course which helped me improve my skills. Assignments and tests checked my training learnings very effectively.",
        name: "Harshit",
        institute: "Federal Institute Of Science And Technology",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      },
      {
        rating: 5.0,
        text: "I learnt Web Development from scratch. The tutorials and topics were well prepared, clearly explained, and easy to grasp. All the queries were answered by the teacher which helped me a lot.",
        name: "Karina",
        institute: "VNR Vigna Jyothi Institute of Engineering and Technology",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b5?w=50&h=50&fit=crop&crop=face"
      },
      {
        rating: 4.0,
        text: "Now I can develop websites with awesome designs! A well-designed training, Internshala Trainings helps you learn website building from scratch. Explanation and doubt clarification are the plus points of the teacher.",
        name: "Mahodhay Reddy Narahari",
        institute: "Bhilai Institute of Technology, Raipur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
      }
    ],
    'programming-with-python': [
      {
        rating: 4.5,
        text: "The Python course was comprehensive and well-structured. I particularly enjoyed the hands-on projects which helped solidify my understanding of the concepts.",
        name: "Amit",
        institute: "IIT Delhi",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=50&h=50&fit=crop&crop=face"
      },
      {
        rating: 5.0,
        text: "Excellent course for beginners! The instructor explains complex topics in a simple manner. The Django section was particularly helpful for my web development projects.",
        name: "Priya",
        institute: "University of Mumbai",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
      }
    ],
    'digital-marketing': [
      {
        rating: 4.0,
        text: "Practical and up-to-date content. The SEO and Google Ads modules helped me improve my company's online presence significantly.",
        name: "Rahul",
        institute: "Entrepreneur",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop&crop=face"
      }
    ],
    'machine-learning': [
      {
        rating: 5.0,
        text: "Challenging but rewarding course. The neural networks section was exceptional. I've already applied what I learned to my research project.",
        name: "Ananya",
        institute: "PhD Candidate, IISc Bangalore",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
      },
      {
        rating: 4.5,
        text: "Great introduction to ML concepts. The real-world projects were the highlight - they helped me understand how to apply the theory.",
        name: "Vikram",
        institute: "Data Analyst",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
      }
    ]
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setCourse(allCourses[courseId] || allCourses['web-development']);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [courseId]);

  if (loading || !course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % (reviews[course.id]?.length || 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + (reviews[course.id]?.length || 1)) % (reviews[course.id]?.length || 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-sm">
                  Government-certified
                </span>
                <span className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                  AI-Powered ✨
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight">
                {course.title}
              </h1>

              <p className="text-xl text-emerald-100 leading-relaxed">
                {course.description}
              </p>

              {/* Languages */}
              <div className="flex items-center gap-2 text-emerald-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>{course.languages.join(', ')}</span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {renderStars(parseFloat(course.rating)).slice(0, 1)}
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span className="font-semibold">{course.students} Students</span>
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                  <span className="font-semibold">Placement Assistance</span>
                </div>
              </div>

              {/* Additional Features */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm">Mobile friendly</span>
                </div>
                
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm">{course.duration}, {course.schedule}</span>
                </div>
              </div>

              {/* Offer Banner */}
              <div className="bg-white rounded-2xl p-6 text-gray-800 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-full p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-purple-600 mb-2">{course.offer.title}</h3>
                    <p className="text-gray-700">{course.offer.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Enrollment Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Sign in or Login with Google
                </button>
                <div className="text-gray-500 text-sm">OR</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Id</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Create password</label>
                  <input
                    type="password"
                    placeholder="Must be at least 6 characters"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name <span className="text-gray-400">(Optional)</span></label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <div className="flex">
                    <select className="px-3 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="8586080747"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-l-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coupon code</label>
                    <input
                      type="text"
                      placeholder="COLLEGE10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose batch</label>
                    <select 
                      value={selectedBatch}
                      onChange={(e) => setSelectedBatch(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>26th Jul, 2025</option>
                      <option>2nd Aug, 2025</option>
                      <option>9th Aug, 2025</option>
                    </select>
                  </div>
                </div>

                <div className="text-green-600 text-sm font-medium">
                  You saved an additional {course.discount}/-
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I want to learn {course.title} to</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Choose your objective</option>
                    <option>Get a job</option>
                    <option>Start freelancing</option>
                    <option>Build personal projects</option>
                    <option>Career change</option>
                  </select>
                </div>

                <div className="flex items-center justify-between text-2xl font-bold">
                  <span className="text-orange-600">{course.price}</span>
                  <span className="text-gray-400 line-through text-lg">{course.originalPrice}</span>
                  <span className="text-sm text-gray-600">Valid till 26th Jul</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By enrolling, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
          <p className="text-xl text-gray-600">What you'll learn in this comprehensive course</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {course.modules.map((module, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{module}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: `${Math.min(100, (index + 1) * 12.5)}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
            <p className="text-xl text-gray-600">Learn from the best in the industry</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
              <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
              <div className="flex justify-center md:justify-start gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prerequisites</h2>
            <p className="text-xl text-gray-600">What you should know before starting this course</p>
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto">
            <ul className="space-y-4">
              {course.prerequisites.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reviews from students</h2>
            
            <div className="mb-8">
              <p className="text-gray-600 text-lg mb-4">AVERAGE RATINGS</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">{course.rating}</span>
                <div className="flex items-center">
                  {renderStars(parseFloat(course.rating))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {reviews[course.id] && reviews[course.id].length > 0 ? (
              <>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {reviews[course.id].map((review, index) => (
                    <div 
                      key={index} 
                      className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-300 ${
                        index === currentReview ? 'ring-2 ring-blue-500 shadow-lg' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-gray-900">{review.rating}</span>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">{review.text}</p>
                      
                      <div className="flex items-center gap-3">
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.institute}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6">
                  <button 
                    onClick={prevReview}
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>

                  <div className="flex gap-2">
                    {reviews[course.id].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextReview}
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No reviews yet for this course. Be the first to review!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of students who have transformed their careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Enroll Now - {course.price}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;