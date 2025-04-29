import heroImage from '../assets/company-office2.jpg';
import StyledImage from '../components/StyledImage';

export default function HomeHeroSection() {
  return (
    <div className="md:w-1/2 w-full max-h-96">
      <StyledImage src={heroImage} alt="Hero" shape="rounded-lg" className="w-full h-full object-contain" />
    </div>
  );
}
