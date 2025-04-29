import uiuxImage from '../../assets/uiux.jpg';

export default function UiUxDesign() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">UI/UX Design</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={uiuxImage} alt="UI/UX Design" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            Our team creates beautiful and intuitive user interfaces that enhance user satisfaction and drive engagement for your products. We focus on user-centered design principles to deliver seamless experiences.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our UI/UX Design Process</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Research & Analysis:</strong> Understanding user needs and business goals.</li>
            <li><strong>Wireframing & Prototyping:</strong> Creating interactive mockups for feedback.</li>
            <li><strong>Visual Design:</strong> Crafting appealing and consistent visual elements.</li>
            <li><strong>User Testing:</strong> Validating designs with real users for improvements.</li>
            <li><strong>Implementation Support:</strong> Collaborating with developers for smooth delivery.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/3j0Yxk6v6xk"
          title="UI/UX Design Tutorial for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/9Bzjv7v6q6k"
          title="User Experience Design Fundamentals"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our UI/UX Design Services?</h2>
      <p>
        We deliver designs that not only look great but also provide intuitive and enjoyable user experiences. Our approach ensures your product stands out and meets user expectations.
      </p>
    </div>
  );
}
