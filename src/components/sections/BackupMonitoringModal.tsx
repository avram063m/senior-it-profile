import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Activity, Database, HardDrive, RefreshCw } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  hasHeartbeat?: boolean;
}

interface BackupMonitoringModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const skills: SkillItem[] = [
  {
    name: "Veeam Backup & Replication",
    level: 6,
    description:
      "Comprehensive data protection and disaster recovery software for virtual, physical, and cloud-based workloads, ensuring business continuity.",
    icon: <HardDrive className="h-4 w-4" />,
  },
  {
    name: "Microsoft SCOM",
    level: 7,
    description:
      "Enterprise-level monitoring solution within the System Center suite. Used for proactive detection of performance and availability issues across servers and applications.",
    icon: <Activity className="h-4 w-4" />,
    hasHeartbeat: true,
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

const BackupMonitoringModal = ({ open, onOpenChange }: BackupMonitoringModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                Backup & Monitoring
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Enterprise data protection and infrastructure monitoring
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Status bar */}
        <div className="flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground">
          <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} />
          <span>Continuous Protection & Monitoring</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 pt-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-md ${
                skill.hasHeartbeat ? "relative overflow-hidden" : ""
              }`}
            >
              {skill.hasHeartbeat && (
                <div className="absolute inset-0 bg-accent/5 animate-pulse pointer-events-none" />
              )}

              <div className="flex items-start gap-3 mb-3 relative">
                <div
                  className={`p-2 rounded-lg bg-accent/10 text-accent shrink-0 ${
                    skill.hasHeartbeat ? "animate-pulse" : ""
                  }`}
                  style={skill.hasHeartbeat ? { animationDuration: "1s" } : undefined}
                >
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
                    width: open ? `${skill.level * 10}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed relative">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-border">
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-accent">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime Target</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-xs text-muted-foreground">Monitoring</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-accent">RPO</div>
            <div className="text-xs text-muted-foreground">Recovery Point</div>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-border">
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

export default BackupMonitoringModal;
