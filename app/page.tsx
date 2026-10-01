
import HeroSection from "./components/HeroSection";

import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";

import FAQSection from "./components/FAQSection";
import InsuranceSection from "./components/InsuranceSection";

import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection />
      <ServicesSection />
      <InsuranceSection />
      <AboutSection />

      <FAQSection />
      <TestimonialsSection />

    </main>
  );
}