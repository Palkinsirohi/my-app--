import React from 'react';

const logos = [
  { src: 'https://via.placeholder.com/120x40?text=Partner+1', alt: 'Partner 1' },
  { src: 'https://via.placeholder.com/120x40?text=Partner+2', alt: 'Partner 2' },
  { src: 'https://via.placeholder.com/120x40?text=Partner+3', alt: 'Partner 3' },
  { src: 'https://via.placeholder.com/120x40?text=Partner+4', alt: 'Partner 4' },
  { src: 'https://via.placeholder.com/120x40?text=Partner+5', alt: 'Partner 5' },
];

export default function TrustedBy() {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-700 dark:text-gray-300">
        Trusted by
      </h2>
      <div className="flex justify-center items-center space-x-8">
        {logos.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} className="h-10 object-contain" />
        ))}
      </div>
    </section>
  );
}
