import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import AIRecommendations from "./components/AIRecommendations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <HeroSection />
      <HowItWorks />
      <AIRecommendations />
      <Testimonials />
      <Footer />
    </div>
  );
}