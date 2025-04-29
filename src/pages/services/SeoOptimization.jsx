import seoImage from '../../assets/seo.jpg';
import seoImage2 from '../../assets/seo2.jpg';

export default function SeoOptimization() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">SEO Optimization</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={seoImage} alt="SEO Optimization" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            Improve your search engine rankings and online visibility with our expert SEO optimization services tailored to your business. We use proven strategies to increase organic traffic and boost your online presence.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Key SEO Services</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Keyword Research:</strong> Identifying the best keywords to target for your niche.</li>
            <li><strong>On-Page SEO:</strong> Optimizing website content and structure for search engines.</li>
            <li><strong>Off-Page SEO:</strong> Building high-quality backlinks and improving domain authority.</li>
            <li><strong>Technical SEO:</strong> Enhancing website speed, mobile-friendliness, and crawlability.</li>
            <li><strong>Content Marketing:</strong> Creating valuable content to attract and engage your audience.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={seoImage2} alt="SEO Tools" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Popular SEO Tools</h2>
          <p className="mb-6">
            We utilize tools like Google Analytics, SEMrush, Ahrefs, and Moz to analyze and improve your SEO performance effectively.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/xsVT4f6v6xk"
          title="SEO Tutorial for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/2Xc9gXyf2G4"
          title="Advanced SEO Techniques"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our SEO Services?</h2>
      <p>
        Our SEO experts develop customized strategies to improve your search rankings, drive qualified traffic, and increase conversions, helping your business grow online.
      </p>
    </div>
  );
}
