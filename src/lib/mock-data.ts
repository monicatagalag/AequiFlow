// Mock Data for AequiFlow

export type ProjectStatus = "ongoing" | "delayed" | "completed";

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  region: string;
  coordinates: { lat: number; lng: number };
  status: ProjectStatus;
  budget: number;
  disbursed: number;
  progress: number;
  validationScore: number;
  validationCount: number;
  startDate: string;
  targetDate: string;
  contractor: string;
  agency: string;
  timeline: TimelineEvent[];
  photos: ProjectPhoto[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

export interface ProjectPhoto {
  id: string;
  url: string;
  caption: string;
  timestamp: string;
  gpsCoordinates: string;
  aiValidated: boolean;
  communityValidated: boolean;
  validationCount: number;
}

export interface Report {
  id: string;
  projectId?: string;
  type: "delay" | "quality" | "safety" | "corruption" | "other";
  description: string;
  status: "pending" | "under_review" | "verified" | "resolved";
  createdAt: string;
  location: string;
  hasPhoto: boolean;
}

export interface ValidationItem {
  id: string;
  projectId: string;
  projectName: string;
  type: "photo" | "progress" | "completion";
  description: string;
  photoUrl?: string;
  timestamp: string;
  location: string;
  confirmCount: number;
  flagCount: number;
}

export interface DashboardStats {
  totalProjects: number;
  ongoingProjects: number;
  completedProjects: number;
  delayedProjects: number;
  totalBudget: number;
  totalDisbursed: number;
  totalReports: number;
  pendingReports: number;
  averageValidation: number;
}

// Mock Projects
export const projects: Project[] = [
  {
    id: "proj-001",
    name: "Quezon City - Novaliches Flood Control Project",
    description:
      "Construction of drainage systems and flood control infrastructure along the Novaliches watershed area to prevent flooding in residential zones during monsoon season.",
    location: "Novaliches, Quezon City",
    region: "NCR",
    coordinates: { lat: 14.7089, lng: 121.0420 },
    status: "ongoing",
    budget: 450000000,
    disbursed: 315000000,
    progress: 68,
    validationScore: 89,
    validationCount: 234,
    startDate: "2024-03-15",
    targetDate: "2025-09-30",
    contractor: "DPWH District Engineering Office",
    agency: "Department of Public Works and Highways",
    timeline: [
      {
        id: "t1",
        date: "2024-03-15",
        title: "Project Groundbreaking",
        description: "Official groundbreaking ceremony with DPWH officials",
        status: "completed",
      },
      {
        id: "t2",
        date: "2024-05-20",
        title: "Phase 1 - Excavation Complete",
        description: "Main drainage canal excavation completed",
        status: "completed",
      },
      {
        id: "t3",
        date: "2024-08-10",
        title: "Phase 2 - Concrete Works",
        description: "Concrete lining of primary channels",
        status: "completed",
      },
      {
        id: "t4",
        date: "2024-11-15",
        title: "Phase 3 - Pump Station Installation",
        description: "Installation of flood control pump stations",
        status: "current",
      },
      {
        id: "t5",
        date: "2025-03-01",
        title: "Phase 4 - Secondary Channels",
        description: "Construction of secondary drainage network",
        status: "upcoming",
      },
      {
        id: "t6",
        date: "2025-09-30",
        title: "Project Completion",
        description: "Final inspection and turnover",
        status: "upcoming",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        caption: "Drainage canal excavation progress - Section A",
        timestamp: "2024-11-28 09:45:32",
        gpsCoordinates: "14.7089° N, 121.0420° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 89,
      },
      {
        id: "ph2",
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        caption: "Concrete works on primary channel",
        timestamp: "2024-11-25 14:22:18",
        gpsCoordinates: "14.7091° N, 121.0418° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 67,
      },
      {
        id: "ph3",
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
        caption: "Pump station foundation being prepared",
        timestamp: "2024-11-20 11:15:44",
        gpsCoordinates: "14.7087° N, 121.0422° E",
        aiValidated: true,
        communityValidated: false,
        validationCount: 34,
      },
    ],
  },
  {
    id: "proj-002",
    name: "Cebu City Road Rehabilitation Program",
    description:
      "Major road rehabilitation covering key arterial roads in Cebu City including asphalt overlay, road widening, and installation of proper drainage systems.",
    location: "Cebu City, Cebu",
    region: "Central Visayas",
    coordinates: { lat: 10.3157, lng: 123.8854 },
    status: "delayed",
    budget: 280000000,
    disbursed: 140000000,
    progress: 42,
    validationScore: 67,
    validationCount: 156,
    startDate: "2024-01-10",
    targetDate: "2024-12-15",
    contractor: "Metro Cebu Construction Corp.",
    agency: "Cebu City Engineering Office",
    timeline: [
      {
        id: "t1",
        date: "2024-01-10",
        title: "Project Start",
        description: "Mobilization and initial survey",
        status: "completed",
      },
      {
        id: "t2",
        date: "2024-03-15",
        title: "Phase 1 - Osmeña Boulevard",
        description: "Road rehabilitation of main boulevard",
        status: "completed",
      },
      {
        id: "t3",
        date: "2024-06-20",
        title: "Phase 2 - Mango Avenue",
        description: "Scheduled road works - DELAYED",
        status: "current",
      },
      {
        id: "t4",
        date: "2024-09-01",
        title: "Phase 3 - Colon Street",
        description: "Heritage district road improvement",
        status: "upcoming",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        caption: "Osmeña Boulevard rehabilitation in progress",
        timestamp: "2024-11-15 08:30:12",
        gpsCoordinates: "10.3157° N, 123.8854° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 45,
      },
    ],
  },
  {
    id: "proj-003",
    name: "Davao City Water Distribution Enhancement",
    description:
      "Expansion and upgrade of water distribution network in Davao City including installation of new pipelines and reservoir construction.",
    location: "Davao City, Davao del Sur",
    region: "Davao Region",
    coordinates: { lat: 7.1907, lng: 125.4553 },
    status: "completed",
    budget: 520000000,
    disbursed: 518500000,
    progress: 100,
    validationScore: 95,
    validationCount: 312,
    startDate: "2023-06-01",
    targetDate: "2024-08-30",
    contractor: "Davao City Water District",
    agency: "Local Water Utilities Administration",
    timeline: [
      {
        id: "t1",
        date: "2023-06-01",
        title: "Project Commencement",
        description: "Initial groundwork and planning",
        status: "completed",
      },
      {
        id: "t2",
        date: "2023-09-15",
        title: "Pipeline Installation Phase 1",
        description: "Main distribution lines installed",
        status: "completed",
      },
      {
        id: "t3",
        date: "2024-02-20",
        title: "Reservoir Construction",
        description: "New water reservoir completed",
        status: "completed",
      },
      {
        id: "t4",
        date: "2024-08-30",
        title: "Project Completion",
        description: "Final testing and commissioning",
        status: "completed",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
        caption: "Completed water reservoir facility",
        timestamp: "2024-08-28 16:45:00",
        gpsCoordinates: "7.1907° N, 125.4553° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 156,
      },
    ],
  },
  {
    id: "proj-004",
    name: "Iloilo City Bridge Construction - Phase 2",
    description:
      "Construction of new bridge connecting key districts in Iloilo City to improve traffic flow and accessibility.",
    location: "Iloilo City, Iloilo",
    region: "Western Visayas",
    coordinates: { lat: 10.7202, lng: 122.5621 },
    status: "ongoing",
    budget: 890000000,
    disbursed: 445000000,
    progress: 51,
    validationScore: 82,
    validationCount: 189,
    startDate: "2024-02-01",
    targetDate: "2026-02-01",
    contractor: "Western Visayas Construction Inc.",
    agency: "Department of Public Works and Highways",
    timeline: [
      {
        id: "t1",
        date: "2024-02-01",
        title: "Foundation Works",
        description: "Bridge foundation and piling works",
        status: "completed",
      },
      {
        id: "t2",
        date: "2024-07-15",
        title: "Pier Construction",
        description: "Main bridge piers under construction",
        status: "current",
      },
      {
        id: "t3",
        date: "2025-04-01",
        title: "Deck Installation",
        description: "Bridge deck segments installation",
        status: "upcoming",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        caption: "Bridge pier construction progress",
        timestamp: "2024-11-20 10:15:00",
        gpsCoordinates: "10.7202° N, 122.5621° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 78,
      },
    ],
  },
  {
    id: "proj-005",
    name: "Baguio City Public Market Modernization",
    description:
      "Complete renovation and modernization of Baguio City Public Market including structural improvements, sanitation upgrades, and vendor facilities.",
    location: "Baguio City, Benguet",
    region: "CAR",
    coordinates: { lat: 16.4023, lng: 120.5960 },
    status: "ongoing",
    budget: 320000000,
    disbursed: 256000000,
    progress: 78,
    validationScore: 91,
    validationCount: 267,
    startDate: "2024-01-15",
    targetDate: "2025-03-15",
    contractor: "Baguio City Engineering Office",
    agency: "Baguio City Government",
    timeline: [
      {
        id: "t1",
        date: "2024-01-15",
        title: "Structural Assessment",
        description: "Complete structural evaluation",
        status: "completed",
      },
      {
        id: "t2",
        date: "2024-04-01",
        title: "Phase 1 Renovation",
        description: "East wing renovation completed",
        status: "completed",
      },
      {
        id: "t3",
        date: "2024-08-15",
        title: "Phase 2 Renovation",
        description: "West wing under renovation",
        status: "current",
      },
      {
        id: "t4",
        date: "2025-03-15",
        title: "Grand Opening",
        description: "Reopening of modernized market",
        status: "upcoming",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800",
        caption: "East wing renovation completed",
        timestamp: "2024-11-18 09:00:00",
        gpsCoordinates: "16.4023° N, 120.5960° E",
        aiValidated: true,
        communityValidated: true,
        validationCount: 134,
      },
    ],
  },
  {
    id: "proj-006",
    name: "Manila Bay Coastal Road Extension",
    description:
      "Extension of the coastal road along Manila Bay including seawall construction and beautification of the waterfront area.",
    location: "Manila, Metro Manila",
    region: "NCR",
    coordinates: { lat: 14.5547, lng: 120.9786 },
    status: "delayed",
    budget: 1250000000,
    disbursed: 500000000,
    progress: 35,
    validationScore: 58,
    validationCount: 145,
    startDate: "2023-11-01",
    targetDate: "2025-06-30",
    contractor: "Manila Bay Development Corp.",
    agency: "Department of Public Works and Highways",
    timeline: [
      {
        id: "t1",
        date: "2023-11-01",
        title: "Project Initiation",
        description: "Environmental clearances obtained",
        status: "completed",
      },
      {
        id: "t2",
        date: "2024-03-01",
        title: "Seawall Construction",
        description: "Foundation and seawall works - DELAYED",
        status: "current",
      },
    ],
    photos: [
      {
        id: "ph1",
        url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800",
        caption: "Seawall construction site",
        timestamp: "2024-11-22 15:30:00",
        gpsCoordinates: "14.5547° N, 120.9786° E",
        aiValidated: true,
        communityValidated: false,
        validationCount: 23,
      },
    ],
  },
];

// Mock Reports
export const reports: Report[] = [
  {
    id: "rep-001",
    projectId: "proj-002",
    type: "delay",
    description:
      "Road rehabilitation on Mango Avenue has been stalled for 3 weeks with no visible progress or workers on site.",
    status: "verified",
    createdAt: "2024-11-25",
    location: "Mango Avenue, Cebu City",
    hasPhoto: true,
  },
  {
    id: "rep-002",
    projectId: "proj-006",
    type: "quality",
    description:
      "Seawall construction appears to use substandard materials. Visible cracks appearing in newly poured concrete sections.",
    status: "under_review",
    createdAt: "2024-11-28",
    location: "Manila Bay Coastal Road",
    hasPhoto: true,
  },
  {
    id: "rep-003",
    projectId: "proj-001",
    type: "safety",
    description:
      "Construction site lacks proper safety barriers near pedestrian walkway. Several near-accidents reported by residents.",
    status: "pending",
    createdAt: "2024-11-29",
    location: "Novaliches, Quezon City",
    hasPhoto: false,
  },
  {
    id: "rep-004",
    type: "other",
    description:
      "Unannounced road closure causing severe traffic congestion. No prior notice to residents.",
    status: "resolved",
    createdAt: "2024-11-20",
    location: "Osmeña Highway, Makati",
    hasPhoto: false,
  },
  {
    id: "rep-005",
    projectId: "proj-004",
    type: "corruption",
    description:
      "Alleged ghost deliveries of construction materials. Trucks entering empty and leaving empty.",
    status: "under_review",
    createdAt: "2024-11-27",
    location: "Iloilo City Bridge Site",
    hasPhoto: true,
  },
];

// Mock Validation Items
export const validationItems: ValidationItem[] = [
  {
    id: "val-001",
    projectId: "proj-001",
    projectName: "Quezon City - Novaliches Flood Control Project",
    type: "photo",
    description:
      "Pump station installation progress - validate if this matches expected progress",
    photoUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    timestamp: "2024-11-28 14:30:00",
    location: "Novaliches, Quezon City",
    confirmCount: 45,
    flagCount: 3,
  },
  {
    id: "val-002",
    projectId: "proj-005",
    projectName: "Baguio City Public Market Modernization",
    type: "progress",
    description:
      "West wing renovation reported at 78% completion - verify if accurate",
    photoUrl:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    timestamp: "2024-11-27 10:15:00",
    location: "Baguio City Public Market",
    confirmCount: 89,
    flagCount: 5,
  },
  {
    id: "val-003",
    projectId: "proj-004",
    projectName: "Iloilo City Bridge Construction - Phase 2",
    type: "photo",
    description:
      "New pier construction photos submitted - validate construction quality",
    photoUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    timestamp: "2024-11-26 09:45:00",
    location: "Iloilo City",
    confirmCount: 67,
    flagCount: 12,
  },
  {
    id: "val-004",
    projectId: "proj-002",
    projectName: "Cebu City Road Rehabilitation Program",
    type: "progress",
    description:
      "Mango Avenue section reported as resumed work - needs community verification",
    photoUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    timestamp: "2024-11-29 16:00:00",
    location: "Mango Avenue, Cebu City",
    confirmCount: 23,
    flagCount: 8,
  },
  {
    id: "val-005",
    projectId: "proj-003",
    projectName: "Davao City Water Distribution Enhancement",
    type: "completion",
    description:
      "Project marked as completed - verify if water supply is operational in your area",
    timestamp: "2024-11-25 11:30:00",
    location: "Davao City",
    confirmCount: 156,
    flagCount: 2,
  },
];

// Dashboard Statistics
export const dashboardStats: DashboardStats = {
  totalProjects: 247,
  ongoingProjects: 156,
  completedProjects: 78,
  delayedProjects: 13,
  totalBudget: 45800000000, // 45.8 billion PHP
  totalDisbursed: 28650000000, // 28.65 billion PHP
  totalReports: 1834,
  pendingReports: 127,
  averageValidation: 84,
};

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

export function getReportsByProject(projectId: string): Report[] {
  return reports.filter((r) => r.projectId === projectId);
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000000) {
    return `₱${(amount / 1000000000).toFixed(2)}B`;
  }
  if (amount >= 1000000) {
    return `₱${(amount / 1000000).toFixed(2)}M`;
  }
  return `₱${amount.toLocaleString()}`;
}

export function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case "ongoing":
      return "primary";
    case "delayed":
      return "warning";
    case "completed":
      return "success";
    default:
      return "secondary";
  }
}

