const Team = () => {
  const teamImages = [
    "/lovable-uploads/deaa5756-eff0-478e-b762-fd451fa29b69.png",
    "/lovable-uploads/7e45055c-2380-41e6-86e0-b4a54aac7f97.png", 
    "/lovable-uploads/bb2213fe-3572-4290-9471-179f69f8890d.png",
    "/lovable-uploads/fadecc32-5fc0-4353-9202-16ca2ee97836.png",
    "/lovable-uploads/164f34d4-0200-4c50-9788-e41706ac464b.png",
    "/lovable-uploads/cd4d67db-488f-43a5-ab7e-facd62fb32c0.png",
    "/lovable-uploads/e5861fe1-6adc-4906-86da-da533d682ee9.png",
    "/lovable-uploads/4e806a04-7aa0-4ce2-b75f-b8cab6f1ec3d.png",
    "/lovable-uploads/caff18f7-fd7f-4f86-9a7b-9497f839fa4f.png"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            فريق العمل
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            فريقنا المحترف
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نعمل مع فريق متخصص ومدرب لضمان تنفيذ مشاريعكم بأعلى معايير الجودة
          </p>
        </div>

        {/* معرض صور الفريق */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {teamImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-square bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <img 
                src={image}
                alt="فريق العمل"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* رسالة ختامية */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            فريق عمل مؤهل ومتخصص في جميع مجالات البناء والخدمات الفنية، 
            نلتزم بتقديم أفضل الخدمات وفقاً لأعلى المعايير المهنية
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;