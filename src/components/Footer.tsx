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
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Palette
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  
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

  const socialMedia = [
    { 
      name: t('instagram'), 
      icon: Instagram, 
      url: "https://www.instagram.com/almashhadsky?igsh=MWlzMGc2azBqc3Iyeg==",
      color: "hover:text-pink-500" 
    },
    { 
      name: t('tiktok'), 
      icon: Palette, 
      url: "https://www.tiktok.com/@almashhadsky",
      color: "hover:text-black" 
    },
    { 
      name: t('youtube'), 
      icon: Youtube, 
      url: "https://www.youtube.com/@almashhadsky/shorts",
      color: "hover:text-red-500" 
    },
    { 
      name: t('twitter'), 
      icon: Twitter, 
      url: "https://x.com/almashhadsky",
      color: "hover:text-blue-400" 
    },
    { 
      name: t('pinterest'), 
      icon: ExternalLink, 
      url: "https://www.pinterest.com/almashhadsky/_profile/",
      color: "hover:text-red-600" 
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-dark to-blue-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c4ceef4c-569b-404e-b7f2-bb64353527d2.png" 
                alt="المشهد سكاي للخدمات الفنية - ALMASHHAD SKY FOR TECHNICAL SERVICES"
                className="h-16 w-auto mb-4"
              />
            </div>
            
            <p className="text-blue-light mb-6 leading-relaxed">
              شركة رائدة في مجال المقاولات العامة والخدمات الفنية المتخصصة في دولة الإمارات العربية المتحدة.
            </p>

            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Award className="h-4 w-4 ml-2" />
              {t('licenseText')}
            </Badge>

            <div className="space-y-3 mb-6">
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
                <span>{t('allEmirates')}</span>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h5 className="text-sm font-semibold mb-4">{t('followUs')}</h5>
              <div className="flex items-center gap-3 flex-wrap">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-blue-light text-xs mt-3">
                {t('socialMediaText')}
              </p>
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
            <Button 
              variant="hero" 
              size="sm" 
              className="mt-6"
              onClick={() => window.open('https://wa.me/971507323644?text=Hello, I would like to see all your services', '_blank')}
            >
              عرض جميع الخدمات
            </Button>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6">{t('serviceAreas')}</h4>
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
            <h3 className="text-2xl font-bold mb-4">{t('readyToStart')}</h3>
            <p className="text-blue-light mb-6 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://wa.me/971507323644?text=Hello, I would like a free consultation', '_blank')}
              >
                {t('freeConsultation')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-primary"
                onClick={() => window.open('https://wa.me/971507323644?text=Hello, I would like to request a quote', '_blank')}
              >
                {t('getQuote')}
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