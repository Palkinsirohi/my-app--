import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This platform helped me gain new skills and land my dream job!',
    name: 'Emily R.',
    location: 'New York, USA',
  },
  {
    id: 2,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The courses are well-structured and easy to follow. Highly recommend!',
    name: 'James T.',
    location: 'London, UK',
  },
  {
    id: 3,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'I love the flexibility of learning at my own pace with recognized certificates.',
    name: 'Sophia L.',
    location: 'Sydney, Australia',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        What Our Learners Say
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="flex space-x-6 overflow-hidden">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map(({ id, photo, text, name, location }) => (
              <div key={id} className="flex-shrink-0 w-full sm:w-1/3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={photo}
                    alt={name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{text}"</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonials"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonials"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
