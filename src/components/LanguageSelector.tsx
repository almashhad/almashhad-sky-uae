import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, X } from "lucide-react";

interface LanguageSelectorProps {
  onLanguageSelect: (language: 'ar' | 'en') => void;
}

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
      // Show dialog after a short delay for smooth page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (language: 'ar' | 'en') => {
    localStorage.setItem('selectedLanguage', language);
    setIsOpen(false);
    onLanguageSelect(language);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto p-0 gap-0 overflow-hidden border-0 bg-transparent shadow-none">
        {/* Custom backdrop with blur */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-primary/20 via-premium-gray/10 to-blue-secondary/20 backdrop-blur-md animate-fade-in" />
        
        {/* Main content */}
        <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-professional border border-white/20 animate-scale-in">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 h-8 w-8 rounded-full bg-white/80 hover:bg-white z-10"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header */}
          <div className="text-center pt-12 pb-8 px-8">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-premium-gray mb-2">
              اختر لغتك المفضلة
            </h2>
            <p className="text-muted-foreground text-sm">
              Choose Your Preferred Language
            </p>
          </div>

          {/* Language options */}
          <div className="px-8 pb-8 space-y-4">
            {/* Arabic Option */}
            <Button
              onClick={() => handleLanguageSelect('ar')}
              variant="outline"
              className="w-full h-20 border-2 border-border hover:border-primary hover:bg-gradient-to-r hover:from-blue-light/20 hover:to-primary/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="text-3xl">🇦🇪</div>
                <div className="text-right">
                  <div className="font-bold text-lg text-premium-gray">العربية</div>
                  <div className="text-sm text-muted-foreground">اللغة العربية</div>
                </div>
              </div>
            </Button>

            {/* English Option */}
            <Button
              onClick={() => handleLanguageSelect('en')}
              variant="outline"
              className="w-full h-20 border-2 border-border hover:border-secondary hover:bg-gradient-to-r hover:from-blue-light/20 hover:to-secondary/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="text-3xl">🇺🇸</div>
                <div className="text-left">
                  <div className="font-bold text-lg text-premium-gray">English</div>
                  <div className="text-sm text-muted-foreground">English Language</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-blue-light/30 to-primary/10 px-8 py-4 rounded-b-3xl">
            <p className="text-xs text-muted-foreground text-center">
              يمكنك تغيير اللغة في أي وقت • You can change the language anytime
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelector;