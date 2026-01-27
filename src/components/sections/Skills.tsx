import { Server, Cloud, Shield, Database } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory = ({ icon, title, skills }: SkillCategoryProps) => (
  <div className="skill-card">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-muted-foreground text-sm leading-relaxed">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Infrastructure & Systems",
      skills: [
        "Windows Server (2012–2025): AD, DNS, DHCP, DFS, IIS, WSUS",
        "Linux Administration: Debian, Red Hat, CentOS",
      ],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Virtualization & Cloud",
      skills: [
        "VMware ESXi, vCenter, VMware Horizon",
        "Hyper-V",
        "Microsoft Azure, Microsoft 365 / Office 365",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Networking & Security",
      skills: [
        "LAN, VLAN, VPN, Firewall",
        "MikroTik RouterOS, IPsec",
        "System hardening & access management",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backup & Monitoring",
      skills: [
        "Veeam Backup & Disaster Recovery",
        "Microsoft SCOM",
      ],
    },
  ];

  return (
    <section id="skills" className="section-alt-bg">
      <div className="section-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across enterprise IT infrastructure, cloud platforms, and security solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
