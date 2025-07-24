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
          <Badge className="mb-4 bg-gradient-primary text-white">
            من نحن
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            🏗️ شركة المشهد سكاي للخدمات الفنية
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            نحن شركة مقاولات شاملة نقدم خدمات واسعة في جميع مجالات البناء والتشطيب.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Philosophy */}
          <Card className="mb-8 bg-gradient-card border-0 shadow-glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                💡 <span>فلسفتنا بسيطة:</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                نحول تصوركم إلى واقع ملموس، مهما كان معقداً.
              </p>
            </CardContent>
          </Card>

          {/* Expertise */}
          <Card className="mb-8 bg-gradient-card border-0 shadow-glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                🎯 <span>خبرتنا تشمل:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <Badge variant="secondary" className="py-2 px-4 text-sm">الإنشاءات الكبرى</Badge>
                <Badge variant="secondary" className="py-2 px-4 text-sm">التشطيبات الفاخرة</Badge>
                <Badge variant="secondary" className="py-2 px-4 text-sm">الأنظمة التقنية</Badge>
                <Badge variant="secondary" className="py-2 px-4 text-sm">الأعمال الحرفية</Badge>
                <Badge variant="secondary" className="py-2 px-4 text-sm">الديكور والتصميم</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Work Process */}
          <Card className="mb-8 bg-gradient-card border-0 shadow-glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                ⚡ <span>طريقة عملنا:</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold">فهم رؤيتكم</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold">تخطيط دقيق</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold">تنفيذ متقن</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold">تسليم مثالي</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Statement */}
          <Card className="mb-8 bg-gradient-card border-0 shadow-glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                🌟 شعارنا: "نبني ما تتخيله"
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                من الفكرة الأولى إلى اللمسة الأخيرة، نحن شريككم في تحويل الأحلام إلى مشاريع حقيقية.
              </p>
              <p className="text-base text-foreground font-semibold">
                🏆 لأننا نؤمن أن كل مشروع يستحق فريق متخصص يحقق أهدافه بجودة عالمية.
              </p>
            </CardContent>
          </Card>

          {/* License Info */}
          <Card className="bg-gradient-primary text-white border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h4 className="font-bold text-xl mb-4 flex items-center justify-center gap-2">
                <Award className="h-6 w-6" />
                مرخص من دائرة التنمية الاقتصادية - دبي #1478322
              </h4>
              <p className="text-gold-accent">
                شركة معتمدة ومرخصة رسمياً لضمان أعلى معايير الجودة والثقة
              </p>
            </CardContent>
          </Card>
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