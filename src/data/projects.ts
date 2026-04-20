export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  intro: string;
  sections: ProjectSection[];
  outcome: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "hydroelectric-vmware",
    title: "Hydroelectric – VMware",
    intro:
      "I delivered a high-availability virtual infrastructure project for the Hydropower Plant Bajina Bašta, designed for continuous operation in a critical energy environment.",
    sections: [
      {
        heading: "Scope of work",
        items: [
          "Deployed and configured two VMware ESXi hosts on HP ProLiant DL380 servers",
          "Implemented redundant networking using two HP switches to eliminate single points of failure",
          "Installed and configured VMware vCenter Server for centralized management and monitoring",
          "Designed and implemented a high-availability architecture with seamless failover",
        ],
      },
    ],
    outcome:
      "A resilient, fully redundant, and centrally managed virtual infrastructure ensuring maximum uptime and reliability.",
    tags: ["VMware ESXi", "vCenter", "HP ProLiant DL380", "High Availability"],
  },
  {
    slug: "failover-cluster-windows-server-2022",
    title: "Failover Cluster – Windows Server 2022",
    intro:
      "I delivered a high-availability infrastructure project based on Windows Server 2022, designed to ensure business continuity and reliable system performance.",
    sections: [
      {
        heading: "Scope of work",
        items: [
          "Configured two Cisco servers connected to shared storage (SAN)",
          "Deployed Windows Server on storage LUNs and integrated systems into the domain",
          "Performed full network configuration to support cluster communication and stability",
          "Implemented and configured a Windows Failover Cluster for high availability",
          "Created detailed technical documentation for ongoing maintenance and support",
        ],
      },
    ],
    outcome:
      "A stable, fully redundant, and domain-integrated infrastructure with high availability, ensuring continuous service operation and minimal downtime.",
    tags: ["Windows Server 2022", "Failover Cluster", "SAN", "Cisco", "Active Directory"],
  },
  {
    slug: "ophthalmology-clinic-network-infrastructure",
    title: "Ophthalmology Clinic – Network Infrastructure",
    intro:
      "I delivered a secure and reliable network infrastructure for an ophthalmology hospital and its associated retail location, ensuring seamless communication between the two sites.",
    sections: [
      {
        heading: "Scope of work",
        items: [
          "Deployed and configured MikroTik routers at both locations",
          "Implemented full network configuration (IP addressing, firewall rules, DHCP, DNS)",
          "Designed and configured a secure VPN with IPSec encryption",
          "Established a site-to-site IPSec tunnel for secure and continuous data exchange",
          "Enabled stable and secure access to a critical application hosted at the retail location",
        ],
      },
    ],
    outcome:
      "A fully functional, secure, and resilient network infrastructure that ensures reliable communication and uninterrupted access to essential systems across both locations.",
    tags: ["MikroTik", "IPSec VPN", "Firewall", "Site-to-Site", "DHCP/DNS"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
