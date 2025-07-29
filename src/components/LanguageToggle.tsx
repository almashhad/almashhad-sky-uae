import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
  };

  const handleToggleClick = () => {
    if (window.innerWidth <= 768) {
      // On mobile, show mini popup
      setIsOpen(!isOpen);
    } else {
      // On desktop, toggle directly
      toggleLanguage();
    }
  };

  const currentFlag = language === 'ar' ? '🇦🇪' : '🇺🇸';
  const otherFlag = language === 'ar' ? '🇺🇸' : '🇦🇪';
  const currentLang = language === 'ar' ? 'عربي' : 'EN';
  const otherLang = language === 'ar' ? 'EN' : 'عربي';

  return (
    <>
      {/* Main Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <Button
          onClick={handleToggleClick}
          variant="outline"
          size="lg"
          className="h-14 w-14 rounded-full bg-white/95 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 shadow-professional hover:shadow-hover transition-all duration-300 group-hover:scale-110 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl animate-pulse group-hover:animate-bounce">{currentFlag}</span>
            <span className="text-xs font-bold text-primary">{currentLang}</span>
          </div>
        </Button>

        {/* Mobile Mini Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 md:hidden animate-scale-in">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-professional border border-primary/20 p-4 min-w-[200px]">
              <p className="text-sm text-muted-foreground text-center mb-3">
                {t('chooseLanguage')}
              </p>
              
              <div className="space-y-2">
                <Button
                  onClick={() => {
                    setLanguage('ar');
                    setIsOpen(false);
                  }}
                  variant={language === 'ar' ? 'default' : 'outline'}
                  className="w-full justify-start gap-3 h-12"
                >
                  <span className="text-xl">🇦🇪</span>
                  <div className="text-right">
                    <div className="font-medium">العربية</div>
                  </div>
                </Button>
                
                <Button
                  onClick={() => {
                    setLanguage('en');
                    setIsOpen(false);
                  }}
                  variant={language === 'en' ? 'default' : 'outline'}
                  className="w-full justify-start gap-3 h-12"
                >
                  <span className="text-xl">🇺🇸</span>
                  <div className="text-left">
                    <div className="font-medium">English</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Hover Tooltip */}
        <div className="hidden md:block absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            {language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
          </div>
        </div>
      </div>

      {/* Click outside to close mobile popup */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default LanguageToggle;