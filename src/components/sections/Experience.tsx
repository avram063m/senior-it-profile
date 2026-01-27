import { Briefcase, CheckCircle } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  isLast?: boolean;
}

const ExperienceItem = ({ company, role, location, period, highlights, isLast = false }: ExperienceItemProps) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[11px] top-6 bottom-0 w-0.5 timeline-line" />
    )}
    
    {/* Timeline dot */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
      <Briefcase className="h-3 w-3 text-accent-foreground" />
    </div>
    
    {/* Content */}
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{company}</h3>
          <p className="text-primary font-medium">{role}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-sm font-medium text-foreground">{period}</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Avnet",
      role: "System Administrator (x86 / Virtualization)",
      location: "Europe & Middle East",
      period: "07/2022 – 11/2025",
      highlights: [
        "VMware infrastructure and Horizon administration",
        "Azure environments management",
        "Windows Server 2019–2022 deployment",
        "Veeam backup and disaster recovery",
        "Delivered 10+ successful infrastructure projects",
        "Worked with distributed teams (EU, USA, Asia)",
      ],
    },
    {
      company: "Algotech Serbia",
      role: "System Administrator",
      location: "Serbia",
      period: "02/2012 – 08/2021",
      highlights: [
        "Full enterprise IT infrastructure administration",
        "VMware & Hyper-V virtualization",
        "Network design (LAN, VLAN, VPN, firewalls)",
        "20+ infrastructure projects completed",
        "400+ workstations and 200+ servers deployed",
      ],
    },
    {
      company: "Freelance IT Consultant",
      role: "IT Infrastructure Consultant",
      location: "Remote",
      period: "2004 – Present",
      highlights: [
        "IT infrastructure design and consulting",
        "Windows & Linux servers administration",
        "Network security and optimization",
        "Multi-client environments management",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <div className="section-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 14 years of hands-on experience in enterprise IT infrastructure management
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              {...exp} 
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
