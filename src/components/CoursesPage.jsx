import React from 'react';

const courses = [
  {
    title: 'Hindustani Classical Vocals',
    description: 'Master the timeless art of Hindustani classical music with Raaga-certified instructors.',
    image: 'https://images.unsplash.com/photo-1653246458437-fd78a9265711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwY2xhc3NpY2FsJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Tabla & Percussion',
    description: 'Learn rhythm and beats from professional tabla players and percussionists.',
    image: 'https://images.unsplash.com/photo-1633411988188-6e63354a9019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2xhc3NpY2FsJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Western Vocals',
    description: 'Develop tone, pitch, and style with western music vocal training.',
    image: 'https://images.unsplash.com/photo-1627686996821-1af7b53ad5cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlc3Rlcm4lMjB2b2NhbHN8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Keyboard & Piano',
    description: 'From classical to pop, learn piano in a structured and fun way.',
    image: 'https://images.unsplash.com/photo-1652201102182-84d3c4f965bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkJTIwYW5kJTIwcGlhbm98ZW58MHx8MHx8fDA%3D',
  },
];

const CoursesPage = () => {
  return (
    <div className="bg-[#1b1b2f] text-white min-h-screen px-6 md:px-12 font-sans">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Music Courses</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Whether you're a beginner or advanced learner, we have the perfect course to elevate your musical journey.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{course.title}</h3>
            <p className="text-gray-300 text-sm">{course.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200">
          Explore All Programs
        </button>
      </div>
    </div>
  );
};

export default CoursesPage;
