// Components (Sections)
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesBigCardsSection from "./components/sections/ServicesBigCardsSection";
import ServicesCardsSection from "./components/sections/ServicesCardsSection";
// Smooth Scrooling
import SmoothScroll from "./components/other/SmoothScrollProvider";


function App() {
  return (
    <SmoothScroll>
      <div className="relative w-full">
        {/* Header */}
        <Header />
        {/* Content */}
        <HeroSection />
        <ServicesCardsSection />
        <ServicesBigCardsSection />
        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
