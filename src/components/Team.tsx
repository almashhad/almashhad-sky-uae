import { Card } from "@/components/ui/card";

const Team = () => {
  const teamImages = [
    {
      src: "/lovable-uploads/deaa5756-eff0-478e-b762-fd451fa29b69.png",
      alt: "عامل بناء متخصص يعمل في موقع البناء"
    },
    {
      src: "/lovable-uploads/7e45055c-2380-41e6-86e0-b4a54aac7f97.png", 
      alt: "فني متخصص مع أدوات العمل"
    },
    {
      src: "/lovable-uploads/bb2213fe-3572-4290-9471-179f69f8890d.png",
      alt: "عامل بناء متخصص في أعمال التشطيب"
    },
    {
      src: "/lovable-uploads/fadecc32-5fc0-4353-9202-16ca2ee97836.png",
      alt: "فريق العمل المتخصص"
    },
    {
      src: "/lovable-uploads/164f34d4-0200-4c50-9788-e41706ac464b.png",
      alt: "مهندسون متخصصون في التخطيط والتنفيذ"
    },
    {
      src: "/lovable-uploads/cd4d67db-488f-43a5-ab7e-facd62fb32c0.png",
      alt: "عامل بناء متخصص في المراقبة والجودة"
    },
    {
      src: "/lovable-uploads/e5861fe1-6adc-4906-86da-da533d682ee9.png",
      alt: "فني متخصص في أعمال التشطيب الداخلي"
    },
    {
      src: "/lovable-uploads/4e806a04-7aa0-4ce2-b75f-b8cab6f1ec3d.png",
      alt: "فريق من العمال المتخصصين"
    },
    {
      src: "/lovable-uploads/caff18f7-fd7f-4f86-9a7b-9497f839fa4f.png",
      alt: "مهندس متخصص مبتسم في موقع العمل"
    }
  ];

  const stats = [
    { number: "150+", label: "عامل متخصص" },
    { number: "25+", label: "مهندس خبير" },
    { number: "15+", label: "مشرف مشاريع" },
    { number: "95%", label: "معدل رضا العملاء" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            فريق محترف
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            فريقنا المتخصص
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نفخر بفريق عمل متخصص ومؤهل من المهندسين والفنيين والعمال المهرة، 
            يعملون بأعلى معايير الجودة والسلامة لضمان تنفيذ مشاريعكم بأفضل شكل ممكن
          </p>
        </div>

        {/* إحصائيات الفريق */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* معرض صور الفريق */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 bg-background/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-background to-background/95">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {image.alt}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* رسالة ختامية */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 max-w-4xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              التزامنا بالتميز
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              كل فرد في فريقنا مدرب على أعلى المعايير المهنية ومؤهل للتعامل مع جميع أنواع المشاريع الإنشائية والفنية. 
              نحن نستثمر في تطوير مهارات فريقنا باستمرار لنضمن لعملائنا الحصول على أفضل الخدمات
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;