import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PopularSection from '../components/PopularSection';
import AboutUs from '../components/AboutUs';
import CoursesPage from '../components/CoursesPage';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white font-sans">

      <main className="px-6 md:px-12 space-y-20 py-10">
        <HeroSection />
        <PopularSection />
        <AboutUs />
        <CoursesPage />
      </main>

    </div>
  );
};

export default LandingPage;
