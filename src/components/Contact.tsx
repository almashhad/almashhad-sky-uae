import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Shield,
  Award
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+971 50 732 3644"],
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["info@almashhadsky.com"],
      color: "bg-blue-primary"
    },
    {
      icon: MapPin,
      title: "منطقة الخدمة",
      details: ["جميع إمارات دولة الإمارات العربية المتحدة"],
      color: "bg-blue-secondary"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 8:00 ص - 6:00 م", "الجمعة: مغلق"],
      color: "bg-orange-500"
    }
  ];

  const serviceAreas = [
    "أبوظبي", "دبي", "الشارقة", "عجمان", 
    "أم القيوين", "رأس الخيمة", "الفجيرة"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-primary text-white">
            تواصل معنا
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            احصل على استشارة مجانية
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا للحصول على استشارة مجانية وعرض سعر مفصل
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional bg-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-blue-primary" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        الاسم الكامل *
                      </label>
                      <Input 
                        placeholder="أدخل اسمك الكامل"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        رقم الهاتف *
                      </label>
                      <Input 
                        placeholder="أدخل رقم هاتفك"
                        type="tel"
                        className="w-full"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input 
                      placeholder="أدخل بريدك الإلكتروني"
                      type="email"
                      className="w-full"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      نوع الخدمة المطلوبة
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>اختر نوع الخدمة</option>
                      <option>البناء والإنشاء</option>
                      <option>التجديد والتطوير</option>
                      <option>الطلاء والديكور</option>
                      <option>الكهرباء والسباكة</option>
                      <option>النجارة والأرضيات</option>
                      <option>صيانة عامة</option>
                      <option>أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      تفاصيل المشروع *
                    </label>
                    <Textarea 
                      placeholder="اكتب تفاصيل مشروعك أو الخدمة المطلوبة..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button 
                      variant="professional" 
                      size="lg" 
                      className="w-full py-4 text-base"
                      onClick={() => window.open('https://wa.me/971507323644?text=مرحباً، أود إرسال طلب للحصول على خدماتكم', '_blank')}
                    >
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الطلب
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full py-4 text-base"
                      onClick={() => window.open('https://wa.me/971507323644?text=مرحباً، أود التحدث معكم مباشرة', '_blank')}
                    >
                      <Phone className="h-5 w-5 ml-2" />
                      اتصل بنا مباشرة
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="shadow-card bg-gradient-primary text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2">خدمة الطوارئ</h4>
                <p className="text-blue-light mb-4">متوفرون لخدمتكم على مدار الساعة</p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/971507323644?text=مرحباً، لدي طارئ وأحتاج لخدماتكم فوراً', '_blank')}
                >
                  <Phone className="h-5 w-5 ml-2" />
                  اتصال طارئ
                </Button>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-card bg-white border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  مناطق الخدمة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-foreground">مرخص ومؤمن</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-primary" />
                  <span className="font-semibold text-foreground">معتمد ومعترف</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  رخصة #1478322 من دائرة التنمية الاقتصادية - دبي
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-professional p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              جاهزون لبدء مشروعك؟
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مفصل لمشروعك
            </p>
            <div className="flex flex-col gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:mx-0 sm:flex-row">
              <Button 
                variant="professional" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/971507323644?text=مرحباً، أود الحصول على عرض سعر مجاني لمشروعي', '_blank')}
              >
                احصل على عرض سعر مجاني
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/971507323644?text=مرحباً، أود حجز موعد استشارة', '_blank')}
              >
                حدد موعد استشارة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;