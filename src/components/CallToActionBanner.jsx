import React from 'react';

export default function CallToActionBanner() {
  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16 px-6 md:px-12 rounded-lg max-w-6xl mx-auto my-16 text-center shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
        Join millions of learners worldwide
      </h2>
      <p className="text-lg mb-8 drop-shadow-md">
        Start your learning journey today and unlock your potential with our free courses.
      </p>
      <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
        Get Started Now
      </button>
    </section>
  );
}
