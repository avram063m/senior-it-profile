import { useState } from "react";
import { Server, Cloud, Shield, Database, ChevronRight } from "lucide-react";
import SkillDetailModal from "./SkillDetailModal";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  onClick?: () => void;
  isClickable?: boolean;
}

const SkillCategory = ({ icon, title, skills, onClick, isClickable }: SkillCategoryProps) => (
  <div 
    className={`skill-card ${isClickable ? 'cursor-pointer hover:border-accent/50 hover:shadow-lg transition-all group' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent/10 text-accent">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      {isClickable && (
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
      )}
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-muted-foreground text-sm leading-relaxed">
          {skill}
        </li>
      ))}
    </ul>
    {isClickable && (
      <p className="text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        Click for detailed proficiency breakdown →
      </p>
    )}
  </div>
);

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Infrastructure & Systems",
      skills: [
        "Windows Server (2012–2025): AD, DNS, DHCP, DFS, IIS, WSUS",
        "Linux Administration: Debian, Red Hat, CentOS",
      ],
      isClickable: true,
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
    <>
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
              <SkillCategory 
                key={index} 
                {...category} 
                onClick={category.isClickable ? () => setIsModalOpen(true) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <SkillDetailModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Skills;
