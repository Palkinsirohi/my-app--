import React from 'react';

import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Empower Your Career with Free Online Courses</h1>
        <p className="text-xl mb-8">Gain skills and certificates for free to advance your career.</p>
        <div className="space-x-4">
          <Link
            to="/services"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Start Learning
          </Link>
          <Link
            to="/courses"
            className="inline-block bg-indigo-700 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold px-8 py-4 rounded-lg shadow transition"
          >
            Browse Courses
          </Link>
        </div>
        {/* Optional search bar */}
        <div className="mt-10">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="w-full max-w-md px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </section>
  );
}
