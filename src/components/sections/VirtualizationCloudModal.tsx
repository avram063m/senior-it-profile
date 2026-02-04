import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Cloud, Server, Monitor, Database } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  description: string;
  icon?: React.ReactNode;
}

interface VirtualizationCloudModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const skills: SkillItem[] = [
  {
    name: "VMware ESXi",
    level: 9,
    description: "Type-1 'bare-metal' hypervisor for direct hardware installation and isolated VM management.",
    icon: <Server className="h-4 w-4" />,
  },
  {
    name: "VMware vCenter Server",
    level: 8,
    description: "Centralized management platform for vSphere to monitor and configure multiple ESXi hosts.",
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "Omnissa Horizon",
    level: 7,
    description: "Virtualization platform for delivering and securing virtual desktops and apps from centralized locations.",
    icon: <Monitor className="h-4 w-4" />,
  },
  {
    name: "Hyper-V",
    level: 8,
    description: "Microsoft's Type-1 hypervisor for server consolidation and running diverse OSes side-by-side.",
    icon: <Server className="h-4 w-4" />,
  },
  {
    name: "Microsoft Azure",
    level: 7,
    description: "Comprehensive cloud platform with over 200 services for computing, AI, and networking.",
    icon: <Cloud className="h-4 w-4" />,
  },
  {
    name: "Microsoft 365",
    level: 7,
    description: "Cloud-based productivity suite (Teams, Exchange, SharePoint) with integrated cloud services.",
    icon: <Cloud className="h-4 w-4" />,
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

const VirtualizationCloudModal = ({ open, onOpenChange }: VirtualizationCloudModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Cloud className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Virtualization & Cloud
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Enterprise virtualization and cloud platform expertise
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 pt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
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
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
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

export default VirtualizationCloudModal;
