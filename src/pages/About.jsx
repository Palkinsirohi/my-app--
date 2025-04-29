import john from '../assets/john.jpg';
import jane from '../assets/jane.jpg';
import mike from '../assets/mike.jpg';
import companyImage from '../assets/company-office.jpg';

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 text-left text-gray-900 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Story</h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Founded in 2020, our company has been dedicated to providing exceptional services to clients worldwide. 
            We started as a small team with a big vision and have grown into a trusted name in our industry.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            Our journey has been marked by innovation, customer satisfaction, and a commitment to excellence.
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden max-h-96">
          <img src={companyImage} alt="Company" className="object-contain w-full h-full rounded-lg" />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'John Doe', img: john },
            { name: 'Jane Smith', img: jane },
            { name: 'Mike Johnson', img: mike }
          ].map(({ name, img }, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={img} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">{name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-center mb-2">Position</p>
              <p className="text-lg text-gray-800 dark:text-gray-300 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
