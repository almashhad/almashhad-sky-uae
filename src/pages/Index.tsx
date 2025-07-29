import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  const handleLanguageSelect = (language: 'ar' | 'en') => {
    console.log('Selected language:', language);
    // TODO: Implement language switching logic
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
