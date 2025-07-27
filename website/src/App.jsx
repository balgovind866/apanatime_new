import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './page/components/Layout';
import Home from './page/Home';
import CourseDetail from './page/CourseDetail';

const NotFound = () => (
  <div className="flex items-center justify-center h-screen bg-red-50">
    <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Fixed: 'index' instead of 'in' */}
          <Route path="course/:courseId" element={<CourseDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;