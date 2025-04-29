import HeroSection from '../components/HeroSection';
import CourseCategories from '../components/CourseCategories';
import PopularCourses from '../components/PopularCourses';
import WhyLearnWithUs from '../components/WhyLearnWithUs';
import CallToActionBanner from '../components/CallToActionBanner';
import TestimonialsSlider from '../components/TestimonialsSlider';


export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseCategories />
     
      <WhyLearnWithUs />
      <CallToActionBanner />
      <TestimonialsSlider />
    
    </>
  );
}
