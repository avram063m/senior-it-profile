import { Award } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer?: string;
}

const CertificationCard = ({ name, issuer }: CertificationCardProps) => (
  <div className="flex items-center gap-3 bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow">
    <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0">
      <Award className="h-5 w-5" />
    </div>
    <div>
      <p className="font-medium text-foreground text-sm">{name}</p>
      {issuer && <p className="text-xs text-muted-foreground">{issuer}</p>}
    </div>
  </div>
);

const Certifications = () => {
  const certifications = [
    { name: "VMware vSphere 8 – Install, Configure, Manage", issuer: "VMware" },
    { name: "MikroTik Certified (MTCNA, MTCRE, MTCSE)", issuer: "MikroTik" },
    { name: "Cisco CCNA", issuer: "Cisco" },
    { name: "Microsoft MCSE", issuer: "Microsoft" },
    { name: "Microsoft Specialist: Hyper-V & System Center", issuer: "Microsoft" },
    { name: "Extreme Networks WiNG", issuer: "Extreme Networks" },
  ];

  return (
    <section id="certifications" className="section-alt-bg">
      <div className="section-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise across key technologies
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
