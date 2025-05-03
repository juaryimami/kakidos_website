import Header from "../header/Header";
import HeroSection from "../herosection/HeroSection";
import StatsSection from "../statesection/StatsSection";
import ServicesSection from "../servicesection/ServicesSection";
import WhyChooseUs from "../whychooseus/WhyChooseUs";
import Testimonials from "../testimonials/Testimonials";
import AboutUs from "../aboutus/AboutUs";
import Footer from "../footer/Footer";
import VideoSection from "../video/VideoSection";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}
