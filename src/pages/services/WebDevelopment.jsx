import webImage from '../../assets/web.jpg';
import webImage2 from '../../assets/web2.jpg';

export default function WebDevelopment() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-8 px-4 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Web Development</h1>
      
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={webImage} alt="Web Development" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <p className="mb-4">
            Web development is the work involved in developing a website for the Internet or an intranet. It can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Key Areas of Web Development</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Front-end Development:</strong> Focuses on the user interface and user experience using HTML, CSS, and JavaScript.</li>
            <li><strong>Back-end Development:</strong> Deals with server-side logic, databases, and application integration.</li>
            <li><strong>Full-stack Development:</strong> Combines both front-end and back-end development skills.</li>
            <li><strong>Web Design:</strong> Involves designing the layout, visual appearance, and usability of a website.</li>
            <li><strong>Content Management Systems (CMS):</strong> Platforms like WordPress, Joomla, and Drupal that simplify website management.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={webImage2} alt="Web Development Tools" className="w-40 rounded-lg shadow-md mb-4 md:mb-0 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Popular Web Development Tools</h2>
          <p className="mb-6">
            Developers use various tools and frameworks such as React, Angular, Vue.js for front-end, and Node.js, Django, Ruby on Rails for back-end development. Version control systems like Git and deployment platforms like Netlify and Heroku are also widely used.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Tutorial Videos</h2>
      <div className="space-y-8 md:flex md:space-x-6 md:space-y-0">
        <iframe
          src="https://www.youtube.com/embed/0pThnRneDjw"
          title="Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/Ff4f2b2pJgk"
          title="Web Development Tutorial for Beginners | Full Course"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full md:w-1/2 h-64 rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose Our Web Development Services?</h2>
      <p>
        We provide custom website development tailored to your business needs. Our team specializes in creating responsive, user-friendly, and high-performance websites that help you achieve your online goals.
      </p>
    </div>
  );
}
