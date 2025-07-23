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
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* License Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Award className="h-4 w-4 ml-2" />
            مرخص من دائرة التنمية الاقتصادية - دبي #1478322
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">شريكك الموثوق</span>
            <span className="block text-blue-light">لجميع الخدمات الإنشائية والفنية</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-light leading-relaxed">
            المشهد سكاي للخدمات الفنية - حلول شاملة للبناء والتشطيب
            <br />
            من التصميم إلى التنفيذ في جميع إمارات دولة الإمارات
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-light">500+</div>
              <div className="text-sm text-white/80">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-light">10+</div>
              <div className="text-sm text-white/80">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-light">7</div>
              <div className="text-sm text-white/80">جميع الإمارات</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-light">24/7</div>
              <div className="text-sm text-white/80">خدمة العملاء</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-blue-light" />
              <span className="text-sm">مرخص ومعتمد</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-blue-light" />
              <span className="text-sm">فريق متخصص</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-5 w-5 text-blue-light" />
              <span className="text-sm">مواعيد التسليم</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              احصل على عرض سعر مجاني
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              تواصل معنا الآن
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-blue-light">
            <p className="text-lg font-semibold">اتصل بنا الآن:</p>
            <p className="text-2xl font-bold" dir="ltr">+971 50 732 3644</p>
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