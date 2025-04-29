import React from 'react';
import { FaLaptopCode, FaBusinessTime, FaHeartbeat, FaLanguage, FaUserGraduate, FaFlask } from 'react-icons/fa';

const categories = [
  {
    icon: <FaLaptopCode className="text-blue-600 w-10 h-10" />,
    title: 'IT & Software',
    description: 'Learn programming, networking, and more.',
  },
  {
    icon: <FaBusinessTime className="text-green-600 w-10 h-10" />,
    title: 'Business',
    description: 'Develop skills in management, marketing, and finance.',
  },
  {
    icon: <FaHeartbeat className="text-red-600 w-10 h-10" />,
    title: 'Health',
    description: 'Explore courses on wellness, nutrition, and healthcare.',
  },
  {
    icon: <FaLanguage className="text-yellow-600 w-10 h-10" />,
    title: 'Language',
    description: 'Master new languages and communication skills.',
  },
  {
    icon: <FaUserGraduate className="text-purple-600 w-10 h-10" />,
    title: 'Personal Development',
    description: 'Enhance your soft skills and personal growth.',
  },
  {
    icon: <FaFlask className="text-indigo-600 w-10 h-10" />,
    title: 'Science',
    description: 'Dive into physics, chemistry, biology, and more.',
  },
];

export default function CourseCategories() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Course Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map(({ icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
