import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HomeFeaturedServices() {
  const servicesRef = useRef(null);

  useEffect(() => {
    if (servicesRef.current) {
      gsap.from(servicesRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 0.6,
        ease: 'power3.out',
      });
    }
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      ),
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
        </svg>
      ),
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
  ];

  return (
    <section className="py-12 text-left">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Featured Services</h2>
      <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-start">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
            <p className="text-lg text-gray-800 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
