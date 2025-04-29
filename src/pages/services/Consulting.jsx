import consultImage from '../../assets/consult.jpg';

export default function Consulting() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Consulting</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={consultImage} alt="Consulting" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            Our expert consultants provide guidance to help you successfully navigate your digital transformation journey. We work closely with your team to identify opportunities and implement effective strategies.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Consulting Services</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Digital Strategy:</strong> Crafting a roadmap for your digital initiatives.</li>
            <li><strong>Technology Assessment:</strong> Evaluating your current technology landscape.</li>
            <li><strong>Process Optimization:</strong> Improving business processes for efficiency.</li>
            <li><strong>Change Management:</strong> Supporting organizational change and adoption.</li>
            <li><strong>Training & Support:</strong> Empowering your team with necessary skills.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/5MgBikgcWnY"
          title="Digital Transformation Consulting"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/3V8v6v6xk"
          title="Business Process Optimization"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our Consulting Services?</h2>
      <p>
        We provide tailored consulting solutions that align with your business goals, helping you achieve successful digital transformation and sustainable growth.
      </p>
    </div>
  );
}
