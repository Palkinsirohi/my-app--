import moreImage from '../../assets/more.jpg';

export default function More() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">More Information</h1>
      <img src={moreImage} alt="More Information" className="w-full max-h-96 object-contain rounded-lg mb-6" />
      <p>
        Additional information and resources to help you make the best decisions for your needs.
      </p>
    </div>
  );
}
