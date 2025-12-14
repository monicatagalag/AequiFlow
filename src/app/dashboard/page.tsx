"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  FileText,
  ChevronRight,
  Shield,
  MapPin,
  Banknote,
  BarChart3,
  Eye,
  Flag,
} from "lucide-react";
import {
  dashboardStats,
  formatCurrency,
  projects,
  reports,
  type Report,
} from "@/lib/mock-data";

function ReportStatusBadge({ status }: { status: Report["status"] }) {
  switch (status) {
    case "pending":
      return <Badge variant="warning">Pending</Badge>;
    case "under_review":
      return <Badge variant="default">Under Review</Badge>;
    case "verified":
      return <Badge variant="success">Verified</Badge>;
    case "resolved":
      return <Badge variant="secondary">Resolved</Badge>;
  }
}

function ReportTypeBadge({ type }: { type: Report["type"] }) {
  switch (type) {
    case "delay":
      return (
        <Badge variant="warning" className="text-xs">
          Delay
        </Badge>
      );
    case "quality":
      return (
        <Badge variant="default" className="text-xs">
          Quality
        </Badge>
      );
    case "safety":
      return (
        <Badge variant="warning" className="text-xs">
          Safety
        </Badge>
      );
    case "corruption":
      return (
        <Badge variant="warning" className="text-xs">
          Irregularity
        </Badge>
      );
    case "other":
      return (
        <Badge variant="secondary" className="text-xs">
          Other
        </Badge>
      );
  }
}

export default function DashboardPage() {
  // Get projects requiring attention (delayed or low validation)
  const attentionProjects = projects.filter(
    (p) => p.status === "delayed" || p.validationScore < 70
  );

  // Get pending/under review reports
  const activeReports = reports.filter(
    (r) => r.status === "pending" || r.status === "under_review"
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-cyan-600" />
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
                  LGU Dashboard
                </h1>
              </div>
              <p className="text-slate-600">
                Overview of public infrastructure projects, reports, and community
                validation metrics.
              </p>
            </div>
            <Badge variant="secondary" className="self-start">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse mr-2" />
              Demo Mode
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-slate-900">
                      {dashboardStats.totalProjects}
                    </p>
                    <p className="text-xs text-slate-600">Total Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-emerald-600">
                      {dashboardStats.completedProjects}
                    </p>
                    <p className="text-xs text-slate-600">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-amber-600">
                      {dashboardStats.delayedProjects}
                    </p>
                    <p className="text-xs text-slate-600">Delayed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-slate-900">
                      {dashboardStats.pendingReports}
                    </p>
                    <p className="text-xs text-slate-600">Pending Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Budget Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-cyan-600" />
                    Budget Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Total Budget</p>
                      <p className="text-2xl font-heading font-bold text-slate-900">
                        {formatCurrency(dashboardStats.totalBudget)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Disbursed</p>
                      <p className="text-2xl font-heading font-bold text-emerald-600">
                        {formatCurrency(dashboardStats.totalDisbursed)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">
                        Disbursement Progress
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        {Math.round(
                          (dashboardStats.totalDisbursed /
                            dashboardStats.totalBudget) *
                            100
                        )}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        (dashboardStats.totalDisbursed /
                          dashboardStats.totalBudget) *
                        100
                      }
                      className="h-3"
                      indicatorClassName="bg-success"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-600" />
                    Recent Reports
                  </CardTitle>
                  <Badge variant="warning">{activeReports.length} active</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {reports.slice(0, 5).map((report) => (
                      <div
                        key={report.id}
                        className="flex items-start justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <ReportTypeBadge type={report.type} />
                            <ReportStatusBadge status={report.status} />
                          </div>
                          <p className="text-sm text-slate-900 line-clamp-1">
                            {report.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {report.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(report.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4">
                    View All Reports
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Projects Requiring Attention */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Projects Requiring Attention
                  </CardTitle>
                  <Badge variant="warning">
                    {attentionProjects.length} projects
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {attentionProjects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="block"
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant={
                                  project.status === "delayed"
                                    ? "warning"
                                    : "default"
                                }
                              >
                                {project.status}
                              </Badge>
                              {project.validationScore < 70 && (
                                <Badge variant="secondary" className="text-xs">
                                  <Flag className="w-3 h-3 mr-1" />
                                  Low validation
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-900 font-medium line-clamp-1">
                              {project.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {project.location}
                            </p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-sm font-medium text-slate-900">
                              {project.progress}%
                            </p>
                            <p className="text-xs text-slate-500">progress</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Validation Confidence */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Validation Confidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-heading font-bold text-emerald-600">
                      {dashboardStats.averageValidation}%
                    </div>
                    <p className="text-sm text-slate-600">
                      Average across all projects
                    </p>
                  </div>
                  <Progress
                    value={dashboardStats.averageValidation}
                    className="h-2 mb-4"
                    indicatorClassName="bg-success"
                  />

                  {/* Breakdown */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">High confidence (&gt;80%)</span>
                      <span className="font-medium text-slate-900">
                        {
                          projects.filter((p) => p.validationScore > 80).length
                        }{" "}
                        projects
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        Medium confidence (60-80%)
                      </span>
                      <span className="font-medium text-slate-900">
                        {
                          projects.filter(
                            (p) =>
                              p.validationScore >= 60 && p.validationScore <= 80
                          ).length
                        }{" "}
                        projects
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        Low confidence (&lt;60%)
                      </span>
                      <span className="font-medium text-amber-600">
                        {
                          projects.filter((p) => p.validationScore < 60).length
                        }{" "}
                        projects
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-600" />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Total Reports Filed
                      </span>
                      <span className="font-medium text-slate-900">
                        {dashboardStats.totalReports.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Reports This Month
                      </span>
                      <span className="font-medium text-slate-900">234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Avg. Response Time
                      </span>
                      <span className="font-medium text-slate-900">2.4 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Resolution Rate
                      </span>
                      <span className="font-medium text-emerald-600">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/projects">
                    <Button variant="secondary" className="w-full justify-start">
                      <Eye className="w-4 h-4" />
                      View All Projects
                    </Button>
                  </Link>
                  <Link href="/validate">
                    <Button variant="secondary" className="w-full justify-start">
                      <CheckCircle2 className="w-4 h-4" />
                      Review Validations
                    </Button>
                  </Link>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="w-4 h-4" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

