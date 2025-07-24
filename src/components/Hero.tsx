import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          
          {/* Premium Logo Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/68d130f1-c993-4bcc-8371-14b27802c320.png" 
                alt="المشهد سكاي للخدمات الفنية" 
                className="h-24 sm:h-32 md:h-40 w-auto filter drop-shadow-2xl animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-premium opacity-20 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* License Badge */}
          <Badge className="mb-8 bg-gradient-glass backdrop-blur-md text-white border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-glow text-sm sm:text-base px-6 py-3">
            <Award className="h-4 w-4 ml-2 text-gold-accent" />
            مرخص من دائرة التنمية الاقتصادية - دبي #1478322
          </Badge>

          {/* Revolutionary Main Heading */}
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-light to-blue-secondary bg-clip-text text-transparent animate-pulse">
                نبني ما تتخيله
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-accent font-bold mt-2">
                ننجز ما نعد به
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-premium mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Premium Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            الشريك الرائد في تنفيذ المشاريع الإنشائية الكبرى والصغرى
          </h2>

          {/* Professional Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-blue-light leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            من التصميم إلى التسليم... من الأساسات إلى اللمسة الأخيرة
            <br className="hidden sm:block" />
            نقدم حلول إنشائية متكاملة تحت سقف واحد في جميع إمارات دولة الإمارات
          </p>

          {/* Enhanced Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center bg-gradient-glass backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-gold-accent">+500</div>
              <div className="text-sm sm:text-base text-white/90 font-semibold">مشروع منجز بنجاح</div>
            </div>
            <div className="text-center bg-gradient-glass backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-gold-accent">+10</div>
              <div className="text-sm sm:text-base text-white/90 font-semibold">سنوات من التميز</div>
            </div>
            <div className="text-center bg-gradient-glass backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-gold-accent">7</div>
              <div className="text-sm sm:text-base text-white/90 font-semibold">إمارات نخدمها</div>
            </div>
            <div className="text-center bg-gradient-glass backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-gold-accent">%99</div>
              <div className="text-sm sm:text-base text-white/90 font-semibold">معدل رضا العملاء</div>
            </div>
          </div>

          {/* Premium Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 bg-gradient-glass backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:shadow-glow transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-gold-accent" />
              <span className="text-sm sm:text-base font-semibold">مرخص ومعتمد</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-glass backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:shadow-glow transition-all duration-300">
              <Users className="h-5 w-5 text-gold-accent" />
              <span className="text-sm sm:text-base font-semibold">فريق من الخبراء</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-glass backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:shadow-glow transition-all duration-300">
              <Clock className="h-5 w-5 text-gold-accent" />
              <span className="text-sm sm:text-base font-semibold">التزام بالمواعيد</span>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center max-w-lg mx-auto mb-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/50 text-white hover:bg-gradient-glass hover:border-gold-accent hover:text-gold-accent w-full transition-all duration-300 font-bold backdrop-blur-md hover:shadow-glow hover:scale-105"
            >
              شاهد أعمالنا المميزة
            </Button>
          </div>

          {/* Enhanced Contact Info */}
          <div className="max-w-md mx-auto space-y-4">
            {/* Contact Button with Animation */}
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-6 px-8 rounded-2xl shadow-glow border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse hover:animate-none group"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="group-hover:animate-bounce">📞</span>
                <span>اتصل بنا الآن</span>
                <span className="group-hover:animate-bounce">✨</span>
              </div>
            </Button>
            
            {/* Get Quote Button with Animation */}
            <Button 
              variant="outline"
              className="w-full border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold text-lg py-6 px-8 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow group"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="group-hover:rotate-12 transition-transform duration-300">💰</span>
                <span>احصل على سعر فوري</span>
                <span className="group-hover:-rotate-12 transition-transform duration-300">⚡</span>
              </div>
            </Button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;