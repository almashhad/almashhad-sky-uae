import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Shield, 
  Users, 
  MapPin, 
  Clock,
  Star,
  CheckCircle,
  Target
} from "lucide-react";
import companyImage from "@/assets/company-building.jpg";

const About = () => {
  const achievements = [
    { number: "500+", label: "مشروع مكتمل بنجاح", icon: Star },
    { number: "10+", label: "سنوات من الخبرة", icon: Award },
    { number: "100%", label: "رضا العملاء", icon: CheckCircle },
    { number: "24/7", label: "دعم فني متواصل", icon: Clock }
  ];

  const features = [
    {
      icon: Shield,
      title: "مرخص ومؤمن بالكامل",
      description: "شركة مرخصة من دائرة التنمية الاقتصادية بدبي ومؤمنة بالكامل لضمان أمان مشاريعكم"
    },
    {
      icon: Users,
      title: "فريق من المختصين",
      description: "نخبة من المهندسين والفنيين المعتمدين ذوي الخبرة الواسعة في مجال الإنشاءات"
    },
    {
      icon: MapPin,
      title: "تغطية شاملة",
      description: "نخدم جميع إمارات دولة الإمارات العربية المتحدة بأعلى معايير الجودة"
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونضمن جودة التنفيذ وفقاً لأعلى المعايير العالمية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-primary text-white">
            من نحن
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            شركة المشهد سكاي للخدمات الفنية
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            رائدون في مجال الخدمات الإنشائية والفنية، نقدم حلولاً متكاملة للبناء والتشطيب في دولة الإمارات
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={companyImage} 
              alt="مبنى شركة المشهد سكاي" 
              className="rounded-2xl shadow-professional w-full h-auto"
            />
          </div>

          {/* Company Story */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              قصة نجاح تمتد لأكثر من عقد
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                تأسست شركة المشهد سكاي للخدمات الفنية كشركة رائدة في مجال المقاولات العامة والخدمات الفنية المتخصصة، 
                برخصة رقم #1478322 من دائرة التنمية الاقتصادية بدبي.
              </p>
              <p>
                نفخر بتقديم خدمات شاملة تشمل البناء والتشطيب والصيانة لجميع أنواع المشاريع السكنية والتجارية 
                في جميع إمارات دولة الإمارات العربية المتحدة.
              </p>
              <p>
                بفضل فريقنا من المهندسين والفنيين المعتمدين، نضمن تنفيذ جميع المشاريع وفقاً لأعلى معايير الجودة 
                والسلامة، مع الالتزام بالمواعيد المحددة وتحقيق رضا عملائنا الكامل.
              </p>
            </div>

            {/* License Info */}
            <div className="mt-8 p-6 bg-gradient-card rounded-lg border border-blue-light">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-primary" />
                معلومات الترخيص
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>رقم الرخصة:</strong> #1478322</p>
                <p><strong>الجهة المرخصة:</strong> دائرة التنمية الاقتصادية - دبي</p>
                <p><strong>نوع النشاط:</strong> المقاولات العامة والخدمات الفنية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0">
              <CardContent className="pt-6">
                <achievement.icon className="h-8 w-8 text-blue-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">رؤيتنا ورسالتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">رؤيتنا</h4>
              <p className="text-blue-light leading-relaxed">
                أن نكون الشركة الرائدة في مجال الخدمات الإنشائية والفنية في دولة الإمارات، 
                ونقدم حلولاً مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">رسالتنا</h4>
              <p className="text-blue-light leading-relaxed">
                تقديم خدمات إنشائية وفنية متميزة بأعلى معايير الجودة والاحترافية، 
                مع الالتزام بالمواعيد والشفافية في التعامل مع جميع عملائنا.
              </p>
            </div>
          </div>
          <Button variant="hero" size="lg" className="mt-8 px-8 py-4 text-base w-full sm:w-auto">
            تواصل معنا اليوم
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;