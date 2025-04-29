import React from 'react';

const courses = [
  {
    id: 1,
    thumbnail: 'https://via.placeholder.com/300x180?text=Course+1',
    title: 'Introduction to Programming',
    rating: 4.5,
    duration: '6h 30m',
  },
  {
    id: 2,
    thumbnail: 'https://via.placeholder.com/300x180?text=Course+2',
    title: 'Business Management Basics',
    rating: 4.7,
    duration: '5h 15m',
  },
  {
    id: 3,
    thumbnail: 'https://via.placeholder.com/300x180?text=Course+3',
    title: 'Health and Wellness',
    rating: 4.6,
    duration: '4h 45m',
  },
  {
    id: 4,
    thumbnail: 'https://via.placeholder.com/300x180?text=Course+4',
    title: 'Learn Spanish Language',
    rating: 4.8,
    duration: '7h 00m',
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"/></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"/>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z"/></svg>
      ))}
    </div>
  );
}

export default function PopularCourses() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Popular Courses
      </h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
        {courses.map(({ id, thumbnail, title, rating, duration }) => (
          <div key={id} className="min-w-[280px] bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer">
            <img src={thumbnail} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
              <StarRating rating={rating} />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{duration}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                Enroll for Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
