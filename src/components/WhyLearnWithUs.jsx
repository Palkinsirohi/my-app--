import React from 'react';
import { FaCheckCircle, FaCertificate, FaClock, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-green-500 w-8 h-8" />,
    title: '100% Free Learning',
    description: 'Access all courses without any cost.',
  },
  {
    icon: <FaCertificate className="text-blue-500 w-8 h-8" />,
    title: 'Globally Recognized Certificates',
    description: 'Earn certificates that boost your career worldwide.',
  },
  {
    icon: <FaClock className="text-yellow-500 w-8 h-8" />,
    title: 'Self-Paced Flexibility',
    description: 'Learn at your own pace, anytime and anywhere.',
  },
  {
    icon: <FaRocket className="text-red-500 w-8 h-8" />,
    title: 'Career Boosting Opportunities',
    description: 'Gain skills that open new job prospects.',
  },
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Why Learn with Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
