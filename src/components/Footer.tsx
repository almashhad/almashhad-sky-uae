import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  Building,
  Paintbrush,
  Zap,
  Wrench,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const services = [
    { name: "البناء والإنشاء", icon: Building },
    { name: "الطلاء والديكور", icon: Paintbrush },
    { name: "الخدمات الكهربائية", icon: Zap },
    { name: "السباكة والصيانة", icon: Wrench }
  ];

  const quickLinks = [
    "الرئيسية",
    "من نحن", 
    "خدماتنا",
    "مشاريعنا",
    "اتصل بنا"
  ];

  const serviceAreas = [
    "أبوظبي", "دبي", "الشارقة", "عجمان",
    "أم القيوين", "رأس الخيمة", "الفجيرة"
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-dark to-blue-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">المشهد سكاي</h3>
              <p className="text-blue-light text-lg">للخدمات الفنية</p>
            </div>
            
            <p className="text-blue-light mb-6 leading-relaxed">
              شركة رائدة في مجال المقاولات العامة والخدمات الفنية المتخصصة في دولة الإمارات العربية المتحدة.
            </p>

            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Award className="h-4 w-4 ml-2" />
              مرخص #1478322
            </Badge>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-light" />
                <span dir="ltr">+971 50 732 3644</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-light" />
                <span dir="ltr">info@almashhadsky.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-light" />
                <span>جميع إمارات دولة الإمارات</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-light hover:text-white transition-colors flex items-center group"
                  >
                    <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">خدماتنا الرئيسية</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-blue-light">
                  <service.icon className="h-4 w-4 text-blue-light" />
                  {service.name}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="sm" className="mt-6">
              عرض جميع الخدمات
            </Button>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6">مناطق الخدمة</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {serviceAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 justify-center py-2">
                  {area}
                </Badge>
              ))}
            </div>
            <p className="text-blue-light text-sm">
              نخدم جميع إمارات دولة الإمارات بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">جاهز لبدء مشروعك؟</h3>
            <p className="text-blue-light mb-6 max-w-2xl mx-auto">
              احصل على استشارة مجانية وعرض سعر مفصل لمشروعك اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                استشارة مجانية
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-primary">
                طلب عرض سعر
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-light text-sm">
              © 2024 المشهد سكاي للخدمات الفنية. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center gap-4 text-blue-light text-sm">
              <span>رخصة #1478322</span>
              <span>•</span>
              <span>دائرة التنمية الاقتصادية - دبي</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;