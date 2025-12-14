"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Map,
  List,
  Search,
  MapPin,
  Clock,
  Banknote,
  Users,
  ChevronRight,
  Building2,
  Filter,
} from "lucide-react";
import {
  projects,
  formatCurrency,
  type Project,
  type ProjectStatus,
} from "@/lib/mock-data";
import dynamic from "next/dynamic";

// Dynamically import the map to avoid SSR issues
const ProjectMap = dynamic(() => import("@/components/ProjectMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
      <div className="text-slate-500">Loading map...</div>
    </div>
  ),
});

function getStatusBadge(status: ProjectStatus) {
  switch (status) {
    case "ongoing":
      return <Badge variant="default">Ongoing</Badge>;
    case "delayed":
      return <Badge variant="warning">Delayed</Badge>;
    case "completed":
      return <Badge variant="success">Completed</Badge>;
  }
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="h-full hover:border-cyan-300 transition-all duration-300 cursor-pointer group">
        <CardContent className="pt-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
            </div>
            {getStatusBadge(project.status)}
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-500">Progress</span>
              <span className="font-medium text-slate-900">
                {project.progress}%
              </span>
            </div>
            <Progress
              value={project.progress}
              indicatorClassName={
                project.status === "delayed"
                  ? "bg-amber-500"
                  : project.status === "completed"
                  ? "bg-emerald-500"
                  : "bg-cyan-600"
              }
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-slate-400" />
              <div>
                <p className="text-xs text-slate-400">Budget</p>
                <p className="text-sm font-medium text-slate-900">
                  {formatCurrency(project.budget)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" />
              <div>
                <p className="text-xs text-slate-400">Validation</p>
                <p className="text-sm font-medium text-slate-900">
                  {project.validationScore}%
                </p>
              </div>
            </div>
          </div>

          {/* View Details */}
          <div className="flex items-center justify-end mt-4 text-sm text-cyan-600 group-hover:gap-2 transition-all">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;
    const matchesRegion =
      regionFilter === "all" || project.region === regionFilter;
    return matchesSearch && matchesStatus && matchesRegion;
  });

  // Get unique regions
  const regions = [...new Set(projects.map((p) => p.region))];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-cyan-600" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Project Tracker
            </h1>
          </div>
          <p className="text-slate-600 max-w-2xl">
            Monitor public infrastructure projects across the Philippines.
            Filter by location, status, and view on map or as a list.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="border-b border-slate-200 bg-white sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full lg:w-auto">
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1 border border-slate-200">
              <Button
                variant={viewMode === "map" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="gap-2"
              >
                <Map className="w-4 h-4" />
                Map
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="gap-2"
              >
                <List className="w-4 h-4" />
                List
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <Filter className="w-4 h-4" />
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {viewMode === "map" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map */}
              <div className="lg:col-span-2">
                <ProjectMap projects={filteredProjects} />
              </div>

              {/* Project List Sidebar */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                <h3 className="font-heading text-lg font-semibold text-slate-900 sticky top-0 bg-white py-2">
                  Projects ({filteredProjects.length})
                </h3>
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="block"
                  >
                    <Card className="hover:border-cyan-300 transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 text-sm truncate">
                              {project.name}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {project.location}
                            </p>
                          </div>
                          {getStatusBadge(project.status)}
                        </div>
                        <Progress
                          value={project.progress}
                          className="mt-3 h-1"
                          indicatorClassName={
                            project.status === "delayed"
                              ? "bg-amber-500"
                              : project.status === "completed"
                              ? "bg-emerald-500"
                              : "bg-cyan-600"
                          }
                        />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* List View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                No projects found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters or search query.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
