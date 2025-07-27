import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import NavCategoryBar from '../NavCategoryBar';
import Footer from '../FooterPart';
import BottomScrollBanner from '../ButtomSheet';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <NavCategoryBar />

      <div className="flex-1">
        <Outlet /> {}
      </div>

      <Footer />
      <BottomScrollBanner />
    </div>
  );
};

export default Layout;