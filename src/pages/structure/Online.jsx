import onlineImage from '../../assets/online.jpg';

export default function Online() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Online Structure</h1>
      <img src={onlineImage} alt="Online Structure" className="w-full max-h-96 object-contain rounded-lg mb-6" />
      <p>
        Our online structure offers flexible and accessible learning options from anywhere in the world.
      </p>
    </div>
  );
}
