import { GraduationCap, Languages } from "lucide-react";

const Education = () => {
  const languages = [
    { language: "Serbian", level: "Native", progress: 100 },
    { language: "English", level: "Advanced", progress: 90 },
    { language: "Spanish", level: "Basic", progress: 30 },
  ];

  return (
    <section id="education" className="bg-background">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Bachelor of Economics – Computer Engineering
              </h3>
              <p className="text-muted-foreground">Megatrend University, Serbia</p>
            </div>
          </div>
          
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Languages className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Languages</h2>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6 space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{lang.language}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
