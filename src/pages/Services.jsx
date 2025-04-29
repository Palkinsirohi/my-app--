import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Web Development",
            description: "Custom website development tailored to your business needs.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3 8 4-16 3 8h4" />
              </svg>
            ),
            link: "/services/web-development",
          },
          {
            title: "Mobile Apps",
            description: "iOS and Android app development with modern frameworks.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
              </svg>
            ),
            link: "/services/mobile-apps",
          },
          {
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces for your products.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
              </svg>
            ),
            link: "/services/ui-ux-design",
          },
          {
            title: "SEO Optimization",
            description: "Improve your search engine rankings and online visibility.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            ),
            link: "/services/seo-optimization",
          },
          {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure for your growing business.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4h4a3 3 0 0 1 0 6H7a4 4 0 0 1-4-4z" />
              </svg>
            ),
            link: "/services/cloud-solutions",
          },
          {
            title: "Consulting",
            description: "Expert advice to guide your digital transformation.",
            icon: (
              <svg
                className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 0 1 4 0v6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-4" />
              </svg>
            ),
            link: "/services/consulting",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              {service.icon}
            </div>
            <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{service.description}</p>
            <Link
              to={service.link}
              className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Learn more →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
