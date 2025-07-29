import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Paintbrush, 
  Zap, 
  Wrench, 
  Hammer, 
  Home,
  Palette,
  Droplets,
  Waves,
  Scissors,
  TreePine,
  Star,
  Brush,
  Grid3X3,
  Settings,
  ShowerHead,
  Sofa,
  Plus,
  Drill,
  MoreHorizontal
} from "lucide-react";
import servicesImage from "/lovable-uploads/86d97892-3432-4ede-85a9-e2c17de16293.png";
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      title: t('painting'),
      icon: Brush,
      color: "bg-blue-primary",
      description: t('paintingDesc'),
      services: [
        "دهانات مقاومة للرطوبة",
        "دهانات ديكورية", 
        "طلاء الخشب والمعادن",
        "دهانات مضادة للحريق"
      ]
    },
    {
      title: t('tiles'),
      icon: Grid3X3,
      color: "bg-blue-secondary",
      description: t('tilesDesc'),
      services: [
        "بورسلين ورخام",
        "سيراميك للحمامات",
        "بلاط للأرضيات",
        "موزاييك وحجر طبيعي"
      ]
    },
    {
      title: t('electrical'),
      icon: Zap,
      color: "bg-gradient-primary",
      description: t('electricalDesc'),
      services: [
        "تمديدات المنازل",
        "إضاءة ديكورية",
        "صيانة كهربائية",
        "أنظمة الأمان والإنذار"
      ]
    },
    {
      title: t('plumbing'),
      icon: ShowerHead,
      color: "bg-blue-dark",
      description: t('plumbingDesc'),
      services: [
        "تمديدات المياه",
        "أدوات صحية",
        "صيانة شاملة",
        "حل مشاكل التسريبات"
      ]
    },
    {
      title: t('carpentry'),
      icon: TreePine,
      color: "bg-blue-primary",
      description: t('carpentryDesc'),
      services: [
        "أرضيات باركيه",
        "نجارة مخصصة",
        "صيانة الخشب",
        "خزائن ومطابخ"
      ]
    },
    {
      title: t('decoration'),
      icon: Sofa,
      color: "bg-blue-secondary",
      description: t('decorationDesc'),
      services: [
        "تصميم مخصص",
        "ورق جدران",
        "نقش وزخرفة",
        "إضاءة ديكورية"
      ]
    }
  ];

  const additionalServices = [
    { name: t('buildingMaintenance'), icon: Settings, desc: "صيانة شاملة لجميع أنواع المباني" },
    { name: t('concreteWork'), icon: Building, desc: "صب وتشكيل الخرسانة المسلحة" },
    { name: t('demolition'), icon: Drill, desc: "هدم آمن وإزالة المخلفات" },
    { name: t('poolMaintenance'), icon: Waves, desc: "تنظيف وصيانة شاملة للمسابح" }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-blue-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header with Slogan */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-primary text-white text-sm sm:text-base px-4 py-2">
            {t('ourServices')}
          </Badge>
          
          {/* Main Slogan */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-primary to-blue-secondary bg-clip-text text-transparent mb-4">
              {t('buildWhatYouImagine')}
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('ourServices')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-primary rounded-full ml-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-2xl shadow-professional p-6 sm:p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('additionalServices')}
            </h3>
            <p className="text-muted-foreground">
              {t('additionalServicesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 hover:bg-blue-light/20 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{service.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Image & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={servicesImage} 
              alt={t('buildWhatYouImagine')} 
              className="rounded-2xl shadow-professional w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {t('whyChooseUs')}
              </h3>
              <p className="text-lg font-semibold text-blue-primary">
                {t('buildWhatYouImagine')}
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('certifiedTeam')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('qualityGuarantee')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('competitivePrices')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('customerService')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('onTimeDelivery')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground text-sm sm:text-base">{t('afterServiceGuarantee')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <Button 
                variant="professional" 
                size="lg" 
                className="w-full sm:w-auto py-3 sm:py-4 text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/971507323644?text=Hello, I would like to get a free consultation', '_blank')}
              >
                {t('getFreeConsultation')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto py-3 sm:py-4 text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/971507323644?text=Hello, I would like to request a detailed quote', '_blank')}
              >
                {t('getQuote')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;