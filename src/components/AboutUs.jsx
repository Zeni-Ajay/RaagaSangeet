// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">About Raaga Sangeet Academy</h1>

      <div className="max-w-5xl mx-auto space-y-10 text-gray-200 text-lg leading-relaxed">

        <section>
          <p>
            Established in <span className="text-yellow-300 font-semibold">2013</span>, Raaga Sangeet Academy has been a sanctuary for music lovers across all age groups. We believe music is not just a skill — it’s a journey of the soul. Over the years, we've nurtured thousands of students into confident performers, expressive artists, and lifelong learners of melody and rhythm.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🎼 What We Offer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vocal training in Hindustani & Carnatic classical music</li>
            <li>Instrumental training (Guitar, Tabla, Harmonium, Keyboard)</li>
            <li>Voice modulation, playback singing, and performance confidence</li>
            <li>Online & offline classes with flexible plans</li>
            <li>Music theory, notation reading, and sound production basics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🎯 Our Mission</h2>
          <p>
            Our mission is to make quality music education accessible, enjoyable, and deeply personal. We strive to blend <span className="text-yellow-300">Indian tradition with modern pedagogy</span>, helping students develop not just skill, but also expression, discipline, and confidence through music.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🌟 Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>More than <strong>10,000+ happy learners</strong> globally</li>
            <li>Experienced mentors & personalized guidance</li>
            <li>Affordable plans & scholarship opportunities</li>
            <li>Performance opportunities, recitals, and competitions</li>
            <li>Certification upon course completion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">📍 Location & Community</h2>
          <p>
            Based in India, with students from across the globe, Raaga Sangeet is not just a school — it's a <span className="text-yellow-300">community of artists</span> growing together. Whether you're a beginner or an aspiring professional, there's a space for your voice here.
          </p>
        </section>

        <section className="text-center mt-10">
          <p className="text-xl font-semibold text-white">🎤 Come. Learn. Express. Perform.</p>
          <p className="text-yellow-400 text-lg mt-2">Join the Raaga Sangeet family today!</p>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
