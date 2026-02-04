import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shield, Network, Lock, Server, ShieldCheck, Wifi } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  hasPulse?: boolean;
}

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

interface NetworkingSecurityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const skillGroups: SkillGroup[] = [
  {
    title: "Networking",
    icon: <Network className="h-5 w-5" />,
    skills: [
      {
        name: "LAN",
        level: 9,
        description: "Local network connecting devices within a single geographic area like an office or data center.",
        icon: <Network className="h-4 w-4" />,
      },
      {
        name: "VLAN",
        level: 9,
        description: "Logical segmentation of physical networks to improve security, performance, and traffic isolation.",
        icon: <Wifi className="h-4 w-4" />,
      },
      {
        name: "VPN",
        level: 7,
        description: "Secure, encrypted tunneling services for protecting data privacy and enabling remote access.",
        icon: <Lock className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Security",
    icon: <ShieldCheck className="h-5 w-5" />,
    skills: [
      {
        name: "Firewall",
        level: 7,
        description: "Hardware and software systems for monitoring and controlling traffic based on strict security rules.",
        icon: <Shield className="h-4 w-4" />,
        hasPulse: true,
      },
      {
        name: "MikroTik RouterOS",
        level: 7,
        description: "Advanced Linux-based OS for RouterBOARD hardware, focusing on professional routing and firewalling.",
        icon: <Server className="h-4 w-4" />,
      },
      {
        name: "IPsec",
        level: 7,
        description: "Protocol suite for securing IP communications through authentication and encryption of every packet.",
        icon: <Lock className="h-4 w-4" />,
      },
      {
        name: "System Hardening",
        level: 7,
        description: "Proactive reduction of the attack surface through configuration, policy, and vulnerability management.",
        icon: <ShieldCheck className="h-4 w-4" />,
        hasPulse: true,
      },
    ],
  },
];

const getLevelColor = (level: number): string => {
  if (level >= 8) return "bg-emerald-500";
  if (level >= 6) return "bg-cyan-500";
  return "bg-slate-500";
};

const getLevelLabel = (level: number): string => {
  if (level >= 9) return "Expert";
  if (level >= 7) return "Advanced";
  if (level >= 5) return "Intermediate";
  return "Familiar";
};

const NetworkingSecurityModal = ({ open, onOpenChange }: NetworkingSecurityModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Networking & Security
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Enterprise networking infrastructure and security expertise
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                <span className="text-emerald-500">{group.icon}</span>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-md ${
                      skill.hasPulse ? "relative overflow-hidden" : ""
                    }`}
                  >
                    {skill.hasPulse && (
                      <div className="absolute inset-0 bg-emerald-500/5 animate-pulse pointer-events-none" />
                    )}
                    
                    <div className="flex items-start gap-3 mb-3 relative">
                      <div className={`p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 ${
                        skill.hasPulse ? "animate-pulse" : ""
                      }`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-foreground text-sm truncate">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                              {getLevelLabel(skill.level)}
                            </span>
                            <span className="text-sm font-bold text-muted-foreground">
                              {skill.level}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary mb-3">
                      <div
                        className={`h-full transition-all duration-700 ease-out ${getLevelColor(skill.level)}`}
                        style={{
                          width: open ? `${skill.level * 10}%` : "0%",
                          transitionDelay: `${(groupIndex * 4 + skillIndex) * 100}ms`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed relative">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t border-border">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Expert (9-10)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span>Advanced (7-8)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <span>Intermediate (5-6)</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NetworkingSecurityModal;
