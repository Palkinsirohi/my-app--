import ContactForm from './ContactForm';
import StyledImage from '../components/StyledImage';
import companyOffice from '../assets/company-office4.jpg';

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
      <p className="text-2xl text-gray-800 dark:text-gray-300 mb-6">
        Have questions? We'd love to hear from you. Please fill out the form below or use the contact information to reach us directly.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-400 mb-10 max-w-3xl">
        Our team is ready to assist you with any inquiries, support requests, or feedback. We aim to respond promptly and provide the best service possible.
      </p>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
  <div className="flex-1">
    <ContactForm />
  </div>
  <div className="flex-1">
    <StyledImage
      src={companyOffice}
      alt="Company Office"
      shape="rounded-lg"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
    <div className="mt-6 text-gray-800 dark:text-gray-300 text-2xl font-semibold">
      <h3>Location</h3>
      <p>123 Business Ave, Suite 100</p>
      <p>New York, NY 10001</p>
    </div>
  </div>
</div></div>
  );
}
