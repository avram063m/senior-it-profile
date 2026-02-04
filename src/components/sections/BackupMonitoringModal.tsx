import { motion } from "framer-motion";
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
    icon: <HardDrive className="h-5 w-5" />,
  },
  {
    name: "Microsoft SCOM",
    level: 7,
    description:
      "Enterprise-level monitoring solution within the System Center suite. Used for proactive detection of performance and availability issues across servers and applications.",
    icon: <Activity className="h-5 w-5" />,
    hasHeartbeat: true,
  },
];

const getLevelColor = (level: number): string => {
  if (level >= 8) return "bg-indigo-500";
  if (level >= 6) return "bg-violet-500";
  return "bg-slate-500";
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
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
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

        {/* Decorative pulse wave */}
        <div className="relative py-2 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-full h-8" viewBox="0 0 400 30" preserveAspectRatio="none">
              <motion.path
                d="M0,15 Q50,5 100,15 T200,15 T300,15 T400,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-violet-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} />
            <span>Continuous Protection & Monitoring</span>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="p-5 rounded-xl bg-muted/30 border border-border/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg bg-violet-500/10 text-violet-500 shrink-0 ${
                    skill.hasHeartbeat ? "animate-pulse" : ""
                  }`}
                  style={skill.hasHeartbeat ? { animationDuration: "1s" } : undefined}
                >
                  {skill.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-foreground text-base">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-violet-500/10 text-violet-500">
                        {getLevelLabel(skill.level)}
                      </span>
                      <span className="text-sm font-bold text-muted-foreground">
                        {skill.level}/10
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Animated progress bar with Framer Motion */}
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className={`h-full ${getLevelColor(skill.level)}`}
                  initial={{ width: 0 }}
                  animate={open ? { width: `${skill.level * 10}%` } : { width: 0 }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={open ? { x: "200%" } : { x: "-100%" }}
                  transition={{
                    delay: index * 0.2 + 1,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key metrics section */}
        <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-border">
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-violet-500">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime Target</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-violet-500">24/7</div>
            <div className="text-xs text-muted-foreground">Monitoring</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/30">
            <div className="text-2xl font-bold text-violet-500">RPO</div>
            <div className="text-xs text-muted-foreground">Recovery Point</div>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-border">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span>Expert (8-10)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span>Advanced (6-7)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <span>Intermediate (4-5)</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BackupMonitoringModal;
