// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import PopularSection from "./components/PopularSection";
import CoursesPage from "./components/CoursesPage";
import ContactUs from "./components/ContactUs";



// Optional: Create a NotFound component for unmatched routes
const NotFound = () => (
  <div className="text-center py-20 text-2xl font-bold text-red-400">
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <div className="  bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white min-h-screen font-sans">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/popular" element={<PopularSection />} />
        <Route
          path="/courses"
          element={
            <div className="px-6 md:px-12">
              <CoursesPage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="px-6 md:px-12 ">
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/popular-section"
          element={
            <div className="px-6 md:px-12 ">
              <PopularSection />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <div className="px-6 md:px-12 py-10">
              <ContactUs />
            </div>
          }
        />
        {/* Add more routes like Plans, Contact, etc. */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
