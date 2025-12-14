"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Banknote,
  Building2,
  Users,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Camera,
  Shield,
  Bot,
  ThumbsUp,
  Flag,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import {
  getProjectById,
  formatCurrency,
  type ProjectStatus,
  type TimelineEvent,
  type ProjectPhoto,
} from "@/lib/mock-data";

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

function TimelineItem({ event, isLast }: { event: TimelineEvent; isLast: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
            event.status === "completed"
              ? "bg-success/20 border-success text-success"
              : event.status === "current"
              ? "bg-primary/20 border-primary text-primary animate-pulse-soft"
              : "bg-surface-elevated border-border text-slate-500"
          }`}
        >
          {event.status === "completed" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : event.status === "current" ? (
            <Clock className="w-5 h-5" />
          ) : (
            <Calendar className="w-5 h-5" />
          )}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 flex-1 my-2 ${
              event.status === "completed" ? "bg-success/50" : "bg-border"
            }`}
          />
        )}
      </div>
      <div className="pb-8">
        <p className="text-xs text-slate-500 mb-1">
          {new Date(event.date).toLocaleDateString("en-PH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h4 className="font-medium text-slate-100">{event.title}</h4>
        <p className="text-sm text-slate-400 mt-1">{event.description}</p>
      </div>
    </div>
  );
}

function PhotoCard({ photo }: { photo: ProjectPhoto }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video">
        <Image
          src={photo.url}
          alt={photo.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Validation Badges */}
        <div className="absolute top-2 right-2 flex gap-2">
          {photo.aiValidated && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
              <Bot className="w-3 h-3" />
              AI Verified
            </div>
          )}
          {photo.communityValidated && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/90 text-white text-xs font-medium">
              <Users className="w-3 h-3" />
              Community
            </div>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-slate-100 mb-2">{photo.caption}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {photo.timestamp}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {photo.gpsCoordinates}
          </span>
        </div>
        {/* Validation Bar */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Community Validation</span>
            <span className="text-xs font-medium text-slate-100">
              {photo.validationCount} validations
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1 text-xs">
              <ThumbsUp className="w-3 h-3" />
              Confirm
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-xs text-warning hover:text-warning">
              <Flag className="w-3 h-3" />
              Flag
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const disbursedPercentage = Math.round(
    (project.disbursed / project.budget) * 100
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-surface/50 border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {getStatusBadge(project.status)}
                <Badge variant="secondary">{project.region}</Badge>
              </div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <Link href="/report">
                <Button variant="outline">
                  <AlertTriangle className="w-4 h-4" />
                  Report Issue
                </Button>
              </Link>
              <Link href="/validate">
                <Button>
                  <CheckCircle2 className="w-4 h-4" />
                  Validate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">
                        Overall Progress
                      </span>
                      <span className="text-lg font-semibold text-slate-100">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-3"
                      indicatorClassName={
                        project.status === "delayed"
                          ? "bg-warning"
                          : project.status === "completed"
                          ? "bg-success"
                          : "bg-primary"
                      }
                    />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Banknote className="w-4 h-4" />
                        <span className="text-xs">Budget</span>
                      </div>
                      <p className="font-semibold text-slate-100">
                        {formatCurrency(project.budget)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs">Disbursed</span>
                      </div>
                      <p className="font-semibold text-slate-100">
                        {formatCurrency(project.disbursed)} ({disbursedPercentage}%)
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">Start Date</span>
                      </div>
                      <p className="font-semibold text-slate-100">
                        {new Date(project.startDate).toLocaleDateString("en-PH", {
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-elevated border border-border">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">Target</span>
                      </div>
                      <p className="font-semibold text-slate-100">
                        {new Date(project.targetDate).toLocaleDateString("en-PH", {
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Progress Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    {project.timeline.map((event, index) => (
                      <TimelineItem
                        key={event.id}
                        event={event}
                        isLast={index === project.timeline.length - 1}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Photo Evidence */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    Photo Evidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.photos.map((photo) => (
                      <PhotoCard key={photo.id} photo={photo} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Validation Score */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-success" />
                    Community Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-heading font-bold text-success mb-1">
                      {project.validationScore}%
                    </div>
                    <p className="text-sm text-slate-400">
                      Based on {project.validationCount} validations
                    </p>
                  </div>
                  <Progress
                    value={project.validationScore}
                    className="h-2 mb-4"
                    indicatorClassName="bg-success"
                  />
                  <p className="text-xs text-slate-500 text-center">
                    Community members have verified this project&apos;s progress
                    and documentation.
                  </p>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Contractor</p>
                    <p className="text-sm text-slate-100">{project.contractor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Implementing Agency
                    </p>
                    <p className="text-sm text-slate-100">{project.agency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Location</p>
                    <p className="text-sm text-slate-100">{project.location}</p>
                    <p className="text-xs text-slate-500">
                      {project.coordinates.lat.toFixed(4)}° N,{" "}
                      {project.coordinates.lng.toFixed(4)}° E
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Validation */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-100">
                        AI Validation
                      </h4>
                      <p className="text-xs text-slate-400">Automated checks</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">
                    Photos and progress reports are automatically analyzed for
                    consistency and authenticity using machine learning.
                  </p>
                  <Badge variant="default" className="mt-3">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    All checks passed
                  </Badge>
                </CardContent>
              </Card>

              {/* Report Button */}
              <Card className="border-warning/30 bg-warning/5">
                <CardContent className="pt-6 text-center">
                  <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-3" />
                  <h4 className="font-medium text-slate-100 mb-2">
                    See Something Wrong?
                  </h4>
                  <p className="text-sm text-slate-400 mb-4">
                    Report issues anonymously. Your identity is protected.
                  </p>
                  <Link href="/report">
                    <Button variant="warning" className="w-full">
                      Report Issue
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

