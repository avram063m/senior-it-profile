import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      <div className="relative section-container section-padding">
        <div className="max-w-4xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground mb-6">
            <MapPin className="h-4 w-4" />
            <span>Valencia, Spain</span>
            <span className="mx-2">•</span>
            <Globe className="h-4 w-4" />
            <span>Available for International Work</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Milos Avramovic
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            Senior System Administrator | IT Infrastructure Consultant
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Senior System Administrator and IT Infrastructure Consultant with over{" "}
            <span className="text-foreground font-semibold">14 years of experience</span>{" "}
            in designing, managing, and maintaining enterprise IT environments. 
            Extensive expertise with Windows Server, VMware, Hyper-V, Azure, networking, 
            and virtualization. Proven track record of delivering complex infrastructure 
            projects for international teams across Europe, the USA, and Asia.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/CV_Milos_Avramovic_Eng.pdf" download>
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
