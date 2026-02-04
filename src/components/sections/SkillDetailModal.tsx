import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Server, Shield } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  description?: string;
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
      { name: "Windows Server Administration", level: 8, description: "Core server management and configuration" },
    ],
  },
  {
    title: "Active Directory Services",
    icon: <Shield className="h-5 w-5" />,
    skills: [
      { name: "AD DS (Domain Services)", level: 7, description: "Main component for managing identities and security", isSubItem: true },
      { name: "AD CS (Certificate Services)", level: 5, description: "Manages digital certificates", isSubItem: true },
      { name: "AD FS (Federation Services)", level: 7, description: "Enables SSO and identity sharing", isSubItem: true },
      { name: "AD LDS (Lightweight Directory Services)", level: 7, description: "Directory service for applications", isSubItem: true },
      { name: "AD RMS (Rights Management Services)", level: 7, description: "Manages document access permissions", isSubItem: true },
    ],
  },
  {
    title: "Core Infrastructure Services",
    skills: [
      { name: "DNS", level: 8, description: "Critical for locating domain controllers" },
      { name: "DHCP", level: 9, description: "Automatic IP address management within AD" },
      { name: "DFS", level: 7, description: "Centralized management of shared folders" },
      { name: "IIS", level: 7, description: "Web server for hosting websites and services" },
      { name: "WSUS", level: 7, description: "Centralized Microsoft update management" },
    ],
  },
  {
    title: "Linux Administration",
    skills: [
      { name: "Linux Server Management", level: 4, description: "Installing and securing Linux-based servers (Debian, Red Hat, CentOS)" },
    ],
  },
];

const getLevelColor = (level: number): string => {
  if (level >= 8) return "bg-accent";
  if (level >= 6) return "bg-primary";
  if (level >= 4) return "bg-muted-foreground";
  return "bg-muted-foreground/60";
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
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
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
              <div className="flex items-center gap-2">
                {group.icon && (
                  <span className="text-accent">{group.icon}</span>
                )}
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              
              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-3 rounded-lg bg-muted/50 border border-border/50 ${
                      skill.isSubItem ? "ml-4" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground text-sm">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                          {getLevelLabel(skill.level)}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          {skill.level}/10
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary mb-2">
                      <div
                        className={`h-full transition-all duration-500 ${getLevelColor(skill.level)}`}
                        style={{ width: `${skill.level * 10}%` }}
                      />
                    </div>
                    
                    {skill.description && (
                      <p className="text-xs text-muted-foreground mt-1">
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
