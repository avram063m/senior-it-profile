import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Server, Shield } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  description?: string;
  icon?: React.ReactNode;
  isSubItem?: boolean;
}

interface SkillGroup {
  title: string;
  icon?: React.ReactNode;
  skills: SkillItem[];
}

interface SkillDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const skillGroups: SkillGroup[] = [
  {
    title: "Windows Server 2012–2025",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Windows Server Administration", level: 8, description: "Core server management and configuration", icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    title: "Active Directory Services",
    icon: <Shield className="h-5 w-5" />,
    skills: [
      { name: "AD DS (Domain Services)", level: 7, description: "Main component for managing identities and security", icon: <Shield className="h-4 w-4" />, isSubItem: true },
      { name: "AD CS (Certificate Services)", level: 5, description: "Manages digital certificates", icon: <Shield className="h-4 w-4" />, isSubItem: true },
      { name: "AD FS (Federation Services)", level: 7, description: "Enables SSO and identity sharing", icon: <Shield className="h-4 w-4" />, isSubItem: true },
      { name: "AD LDS (Lightweight Directory Services)", level: 7, description: "Directory service for applications", icon: <Shield className="h-4 w-4" />, isSubItem: true },
      { name: "AD RMS (Rights Management Services)", level: 7, description: "Manages document access permissions", icon: <Shield className="h-4 w-4" />, isSubItem: true },
    ],
  },
  {
    title: "Core Infrastructure Services",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "DNS", level: 8, description: "Critical for locating domain controllers", icon: <Server className="h-4 w-4" /> },
      { name: "DHCP", level: 9, description: "Automatic IP address management within AD", icon: <Server className="h-4 w-4" /> },
      { name: "DFS", level: 7, description: "Centralized management of shared folders", icon: <Server className="h-4 w-4" /> },
      { name: "IIS", level: 7, description: "Web server for hosting websites and services", icon: <Server className="h-4 w-4" /> },
      { name: "WSUS", level: 7, description: "Centralized Microsoft update management", icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    title: "Linux Administration",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Linux Server Management", level: 4, description: "Installing and securing Linux-based servers (Debian, Red Hat, CentOS)", icon: <Server className="h-4 w-4" /> },
    ],
  },
];

const getLevelColor = (level: number): string => {
  if (level >= 8) return "bg-accent";
  if (level >= 6) return "bg-primary";
  return "bg-muted-foreground";
};

const getLevelLabel = (level: number): string => {
  if (level >= 9) return "Expert";
  if (level >= 7) return "Advanced";
  if (level >= 5) return "Intermediate";
  return "Familiar";
};

const SkillDetailModal = ({ open, onOpenChange }: SkillDetailModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Server className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Infrastructure & Systems
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Detailed proficiency breakdown
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                {group.icon && <span className="text-accent">{group.icon}</span>}
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                        {skill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-foreground text-sm truncate">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
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
                          width: open ? `${skill.level * 10}%` : '0%',
                          transitionDelay: `${(groupIndex * 5 + skillIndex) * 100}ms`,
                        }}
                      />
                    </div>

                    {skill.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t border-border">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span>Expert (9-10)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span>Advanced (7-8)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
              <span>Intermediate (5-6)</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDetailModal;
