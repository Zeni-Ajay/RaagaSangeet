// components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-14">
      {/* Left Section */}
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Where Tradition Meets <br />
          <span className="text-yellow-400">Modern Sound</span>
        </h1>
        <p className="text-gray-300 mt-6 text-lg md:text-xl">
          From timeless ragas to today’s fusion sounds, we help you build a strong classical foundation that supports any genre—be it Coke Studio, Bollywood, or your own indie creations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg">
            Explore Now
          </button>
          <div className="bg-pink-300 text-black px-5 py-2 rounded-full font-semibold text-sm shadow-md">
            🎧 10k+ Happy Learners
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-center">
        <img
          src="https://images.unsplash.com/photo-1519076976365-9c64dbd98317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Teaching music"
          className="w-100 md:w-112 mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />

        {/* ✅ Link added here */}
        <Link to="/contact-us">
          <div className="inline-block mt-6 p-5 border border-white/20 rounded-2xl bg-white/10 text-center backdrop-blur-sm shadow-xl cursor-pointer hover:bg-white/20 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="music instruments"
              className="w-16 mx-auto animate-pulse"
            />
            <p className="mt-3 font-bold text-lg text-white">Book Your Appointment</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
