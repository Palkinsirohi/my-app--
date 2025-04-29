import mobileImage from '../../assets/mobile.jpg';
import mobileImage2 from '../../assets/moblie2.jpg';

export default function MobileApps() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Mobile Apps</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={mobileImage} alt="Mobile App Development" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            We develop iOS and Android applications using modern frameworks to deliver seamless and engaging mobile experiences for your users. Our expertise covers native and cross-platform development to meet your business needs.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Key Features of Our Mobile Apps</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Responsive Design:</strong> Apps that work flawlessly on all screen sizes and devices.</li>
            <li><strong>Performance Optimization:</strong> Fast and smooth user experience.</li>
            <li><strong>Push Notifications:</strong> Engage users with timely updates.</li>
            <li><strong>Offline Functionality:</strong> Access app features without internet connection.</li>
            <li><strong>App Store Deployment:</strong> Assistance with publishing on Apple App Store and Google Play Store.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={mobileImage2} alt="Mobile Development Tools" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Popular Mobile Development Tools</h2>
          <p className="mb-6">
            We use tools like React Native, Flutter, Swift, and Kotlin to build high-quality mobile applications. Our team stays updated with the latest trends and technologies.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/fq4N0hgOWzU"
          title="React Native Tutorial for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/1gDhl4leEzA"
          title="Flutter Tutorial for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our Mobile App Development Services?</h2>
      <p>
        Our team delivers custom mobile applications that are user-friendly, scalable, and optimized for performance. We work closely with you to bring your app ideas to life.
      </p>
    </div>
  );
}
