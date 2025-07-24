import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr" className="text-xs sm:text-sm">+971 50 732 3644</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr" className="text-xs sm:text-sm">info@almashhadsky.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-center">جميع إمارات دولة الإمارات العربية المتحدة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c4ceef4c-569b-404e-b7f2-bb64353527d2.png" 
              alt="المشهد سكاي للخدمات الفنية - ALMASHHAD SKY FOR TECHNICAL SERVICES"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              من نحن
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              خدماتنا
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              مشاريعنا
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              اتصل بنا
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              طلب عرض سعر
            </Button>
            <Button variant="professional" size="sm">
              استشارة مجانية
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </a>
              <a 
                href="#projects" 
                className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                مشاريعنا
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </a>
              <div className="flex flex-col gap-3 mt-6 pt-4 border-t">
                <Button variant="outline" size="lg" className="w-full py-4 text-base">
                  طلب عرض سعر
                </Button>
                <Button variant="professional" size="lg" className="w-full py-4 text-base">
                  استشارة مجانية
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;