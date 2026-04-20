import { Link } from "react-router-dom";
import { Server, Network, Layers, ChevronRight } from "lucide-react";

const projects = [
  {
    slug: "hydroelectric-vmware",
    title: "Hydroelectric – VMware",
    summary: "High-availability virtual infrastructure for Hydropower Plant Bajina Bašta.",
    icon: <Layers className="h-5 w-5" />,
    tags: ["VMware ESXi", "vCenter", "HP ProLiant", "HA"],
  },
  {
    slug: "failover-cluster-windows-server-2022",
    title: "Failover Cluster – Windows Server 2022",
    summary: "Domain-integrated Windows failover cluster on shared SAN storage.",
    icon: <Server className="h-5 w-5" />,
    tags: ["Windows Server 2022", "Failover Cluster", "SAN", "Cisco"],
  },
  {
    slug: "ophthalmology-clinic-network-infrastructure",
    title: "Ophthalmology Clinic – Network Infrastructure",
    summary: "Secure site-to-site MikroTik network with IPSec VPN between two locations.",
    icon: <Network className="h-5 w-5" />,
    tags: ["MikroTik", "IPSec VPN", "Firewall", "Site-to-Site"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of enterprise infrastructure projects I've designed and delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="skill-card group cursor-pointer hover:border-accent/50 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  {project.icon}
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                View project details →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
