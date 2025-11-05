import { Card, CardContent } from "@/components/ui/card";
import { Mail, User, GraduationCap, BookOpen } from "lucide-react";

const Index = () => {
  const personalInfo = [
    {
      icon: User,
      label: "Họ và tên",
      value: "Võ Thành Lộc",
    },
    {
      icon: BookOpen,
      label: "MSSV",
      value: "22110180",
    },
    {
      icon: GraduationCap,
      label: "Lớp",
      value: "22110CLST2B",
    },
    {
      icon: Mail,
      label: "Email",
      value: "22110180@student.hcmute.edu.vn",
    },
  ];

  return (
    <main className="min-h-screen gradient-hero">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full gradient-primary shadow-card mx-auto flex items-center justify-center animate-float">
              <span className="text-5xl font-bold text-primary-foreground">VTL</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Võ Thành Lộc
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sinh viên Đại học Sư phạm Kỹ thuật TP.HCM
          </p>
        </section>

        {/* Info Cards */}
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-lg transition-smooth hover:-translate-y-1 border-border/50 backdrop-blur-sm bg-card/80 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-primary shadow-soft">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-card-foreground break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            © 2025 Võ Thành Lộc. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
