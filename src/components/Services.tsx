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
  Star
} from "lucide-react";
import servicesImage from "@/assets/new-services-image.jpg";

const Services = () => {
  const serviceCategories = [
    {
      title: "الخدمات الإنشائية العامة",
      icon: Building,
      color: "bg-blue-primary",
      services: [
        "المقاولات العامة",
        "البناء السكني والتجاري", 
        "التجديد والتطوير",
        "صيانة المباني"
      ]
    },
    {
      title: "الخدمات الفنية المتخصصة",
      icon: Hammer,
      color: "bg-blue-secondary",
      services: [
        "الطلاء والديكور",
        "تركيب البلاط والسيراميك",
        "الخدمات الكهربائية",
        "السباكة والصحي"
      ]
    },
    {
      title: "التشطيبات والديكور الداخلي",
      icon: Palette,
      color: "bg-gradient-primary",
      services: [
        "التصميم الداخلي",
        "تركيب ورق الجدران",
        "اللياسة والتنعيم",
        "النقش والزخرفة"
      ]
    },
    {
      title: "الخدمات المتخصصة",
      icon: Star,
      color: "bg-blue-dark",
      services: [
        "صيانة المسابح",
        "خدمات الهدم",
        "ترميم العقارات",
        "النجارة والأخشاب"
      ]
    }
  ];

  const detailedServices = [
    { name: "البناء والإنشاء", icon: Building, desc: "مشاريع البناء الكاملة" },
    { name: "الطلاء والديكور", icon: Paintbrush, desc: "طلاء داخلي وخارجي احترافي" },
    { name: "الكهرباء", icon: Zap, desc: "تركيب وصيانة الأنظمة الكهربائية" },
    { name: "السباكة", icon: Droplets, desc: "أنظمة المياه والصرف الصحي" },
    { name: "النجارة", icon: TreePine, desc: "أعمال النجارة والأرضيات الخشبية" },
    { name: "التكييف", icon: Wrench, desc: "تركيب وصيانة أنظمة التكييف" },
    { name: "البلاط والسيراميك", icon: Home, desc: "تركيب جميع أنواع البلاط" },
    { name: "المسابح", icon: Waves, desc: "تنظيف وصيانة المسابح" },
    { name: "الهدم", icon: Scissors, desc: "خدمات الهدم الآمن" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-primary text-white">
            خدماتنا المتخصصة
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            حلول شاملة لجميع احتياجاتك
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            نقدم مجموعة كاملة من الخدمات الإنشائية والفنية بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-muted-foreground text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-primary rounded-full ml-2 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="bg-white rounded-2xl shadow-professional p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            خدماتنا بالتفصيل
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-blue-light/20 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Image & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={servicesImage} 
              alt="خدماتنا المتخصصة" 
              className="rounded-2xl shadow-professional w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              لماذا تختار المشهد سكاي؟
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">فريق من المتخصصين المعتمدين</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">ضمان الجودة على جميع الأعمال</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">أسعار تنافسية ومدروسة</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground">خدمة عملاء متميزة 24/7</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto sm:max-w-none sm:mx-0">
              <Button variant="professional" size="lg" className="w-full sm:w-auto py-4 text-base">
                احصل على استشارة مجانية
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto py-4 text-base">
                اطلب عرض سعر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;