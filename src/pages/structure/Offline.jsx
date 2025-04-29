import offlineImage from '../../assets/offline.jpg';

export default function Offline() {
  return (
    <div className="text-gray-900 dark:text-gray-200 max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Offline Structure</h1>
      <img src={offlineImage} alt="Offline Structure" className="w-full max-h-96 object-contain rounded-lg mb-6" />
      <p>
        Our offline structure provides in-person learning experiences with hands-on training and direct interaction.
      </p>
    </div>
  );
}
