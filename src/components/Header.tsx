import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span dir="ltr">+971 50 732 3644</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span dir="ltr">info@almashhadsky.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>جميع إمارات دولة الإمارات العربية المتحدة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <div className="text-lg">المشهد سكاي</div>
              <div className="text-sm text-muted-foreground">للخدمات الفنية</div>
            </div>
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
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
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
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" size="sm">
                  طلب عرض سعر
                </Button>
                <Button variant="professional" size="sm">
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