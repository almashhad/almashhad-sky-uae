import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { setLanguage, dir } = useLanguage();
  
  const handleLanguageSelect = (language: 'ar' | 'en') => {
    setLanguage(language);
  };

  return (
    <div className="min-h-screen" dir={dir}>
      <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      <LanguageToggle />
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
