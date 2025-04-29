import cloudImage from '../../assets/cloud.jpg';
import cloudImage2 from '../../assets/cloud2.jpg';

export default function CloudSolutions() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Cloud Solutions</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={cloudImage} alt="Cloud Solutions" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            We offer scalable cloud infrastructure solutions to support your growing business needs, ensuring reliability and performance. Our cloud services help you optimize costs and improve agility.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Key Features of Our Cloud Solutions</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Scalability:</strong> Easily scale resources up or down based on demand.</li>
            <li><strong>Security:</strong> Robust security measures to protect your data.</li>
            <li><strong>Cost Efficiency:</strong> Pay-as-you-go pricing models to optimize expenses.</li>
            <li><strong>Disaster Recovery:</strong> Reliable backup and recovery solutions.</li>
            <li><strong>Multi-Cloud Support:</strong> Integration with major cloud providers like AWS, Azure, and Google Cloud.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={cloudImage2} alt="Cloud Tools" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Popular Cloud Tools</h2>
          <p className="mb-6">
            We utilize tools such as Kubernetes, Docker, Terraform, and cloud provider native services to build and manage your cloud infrastructure efficiently.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/2LaAJq1lB1Q"
          title="Cloud Computing Full Course"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/3hLmDS179YE"
          title="AWS Cloud Practitioner Essentials"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our Cloud Solutions?</h2>
      <p>
        Our cloud experts design and implement solutions that align with your business goals, ensuring high availability, security, and cost-effectiveness.
      </p>
    </div>
  );
}
