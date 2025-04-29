import companyOffice from '../assets/company-office.jpg';
import friends from '../assets/friends.jpg';
import girl from '../assets/girl.jpg';

export default function ContactImages() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <img
        src={companyOffice}
        alt="Company Office"
        className="w-full h-32 object-cover rounded-lg shadow-lg"
      />
      <img
        src={friends}
        alt="Friends"
        className="w-full h-32 object-cover rounded-full border-4 border-indigo-600 shadow-md"
      />
      <img
        src={girl}
        alt="Girl"
        className="w-full h-32 object-cover rounded-tl-3xl rounded-br-3xl shadow-lg"
      />
      <img
        src={companyOffice}
        alt="Company Office"
        className="w-full h-32 object-cover rounded-full shadow-inner"
      />
    </div>
  );
}
