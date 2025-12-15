"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Shield,
  Users,
  ChevronRight,
  MapPin,
  FileSearch,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Eye,
} from "lucide-react";
import { dashboardStats, formatCurrency } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Gradient - Light theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-emerald-500/5 to-cyan-500/5 animate-gradient" />
        
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Orbs - Background Effects */}
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-cyan-200/40 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200/30 to-transparent blur-3xl animate-float-reverse" />
        <div className="absolute top-1/3 right-[5%] w-40 h-40 rounded-full bg-gradient-to-br from-amber-200/20 to-transparent blur-2xl animate-float" />
        
        {/* Floating Geometric Shapes */}
        <div className="hidden md:block absolute top-32 left-[15%] w-4 h-4 rounded-full bg-cyan-400/60 animate-float" style={{ animationDelay: '0s' }} />
        <div className="hidden md:block absolute top-48 right-[20%] w-3 h-3 rounded-full bg-emerald-400/60 animate-float-reverse" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute bottom-32 left-[25%] w-5 h-5 rounded-full bg-amber-400/50 animate-float" style={{ animationDelay: '2s' }} />
        <div className="hidden lg:block absolute top-40 left-[40%] w-2 h-2 rounded-full bg-cyan-500/70 animate-float-slow" style={{ animationDelay: '0.5s' }} />
        <div className="hidden lg:block absolute bottom-48 right-[30%] w-3 h-3 rounded-full bg-emerald-500/60 animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Decorative Rings */}
        <div className="hidden lg:block absolute top-1/4 left-[8%] w-20 h-20 rounded-full border border-cyan-200/40 animate-spin-slow" />
        <div className="hidden lg:block absolute bottom-1/4 right-[10%] w-16 h-16 rounded-full border border-emerald-200/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-3 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                See the Progress. Trust the Process.
              </p>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="inline-block bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Aequi</span>
                <span className="inline-block bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Flow</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Track public infrastructure projects in real-time. Report issues
                anonymously. Validate progress with your community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      View Projects
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/report">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group hover:border-cyan-400 hover:bg-cyan-50/50 transition-all duration-300">
                    <AlertTriangle className="w-5 h-5 group-hover:text-amber-500 transition-colors" />
                    Report an Issue
                  </Button>
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 text-xs text-slate-500 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-all duration-300 cursor-default backdrop-blur-sm">
                  CivicTech
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-300 cursor-default backdrop-blur-sm">
                  GovTech
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-all duration-300 cursor-default backdrop-blur-sm">
                  Transparency & Accountability
                </span>
              </div>
            </div>

            {/* Right Content - Logo with accent */}
            <div className="order-1 lg:order-2 flex items-center justify-center relative py-10 sm:py-14 lg:py-2">
              {/* Orbiting elements */}
              <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-orbit">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-400/50" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] animate-orbit-reverse">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-400/50" />
                </div>
              </div>
              
              {/* Decorative blob - morphing animation */}
              <div className="absolute w-[240px] h-[170px] sm:w-[320px] sm:h-[220px] md:w-[380px] md:h-[260px] lg:w-[440px] lg:h-[300px] bg-gradient-to-br from-cyan-100/70 via-white to-emerald-50/70 shadow-2xl shadow-cyan-100/60 border border-cyan-100/50 animate-morph" />
              
              {/* Secondary glow effect */}
              <div className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-cyan-200/30 via-transparent to-emerald-200/30 blur-xl animate-pulse-glow" />
              
              {/* Logo Image with hover effect */}
              <div className="relative group animate-scale-in">
                <Image
                  src="/aequiflowlogo.png"
                  alt="AequiFlow Logo"
                  width={260}
                  height={260}
                  className="relative drop-shadow-2xl w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] transition-transform duration-500 group-hover:scale-105 animate-float"
                  style={{ animationDuration: '4s' }}
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                </div>
              </div>
              
              {/* Floating arrow - hidden on mobile */}
              <button
                onClick={() => {
                  const nextSection = document.getElementById("what-aequiflow-does");
                  nextSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-slate-400 hover:text-cyan-600 transition-all duration-300 cursor-pointer rounded-full hover:bg-slate-100 hover:scale-110 group"
                aria-label="Scroll to next section"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* What AequiFlow Does */}
      <section id="what-aequiflow-does" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What AequiFlow Does
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Empowering citizens with tools for transparency, accountability, and
              active participation in public infrastructure monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="group hover:border-cyan-300 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-200 transition-colors">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  Track Projects
                </h3>
                <p className="text-sm text-slate-600">
                  Monitor infrastructure projects in your area with real-time
                  updates on progress, budget, and timeline.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:border-amber-300 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  Report Issues
                </h3>
                <p className="text-sm text-slate-600">
                  Report delays, quality concerns, or safety issues anonymously
                  and securely.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:border-emerald-300 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  Validate Progress
                </h3>
                <p className="text-sm text-slate-600">
                  Community-powered validation ensures accuracy through collective
                  verification.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group hover:border-blue-300 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  Build Trust
                </h3>
                <p className="text-sm text-slate-600">
                  Strengthen collaboration between citizens and local government
                  units through transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A simple three-step process to ensure transparency and
              accountability in public infrastructure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25">
                    <FileSearch className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-2 border-cyan-500 flex items-center justify-center font-heading font-bold text-cyan-600">
                    1
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                    Track
                  </h3>
                  <p className="text-sm text-slate-600">
                    Browse infrastructure projects by location, status, or type.
                    View budgets, timelines, and progress updates.
                  </p>
                </div>
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-300 to-amber-300 -translate-x-1/2" />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/25">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center font-heading font-bold text-amber-600">
                    2
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                    Report
                  </h3>
                  <p className="text-sm text-slate-600">
                    Spot an issue? Report it anonymously with photos and location.
                    Your identity is protected.
                  </p>
                </div>
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-emerald-300 -translate-x-1/2" />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center font-heading font-bold text-emerald-600">
                    3
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                    Validate
                  </h3>
                  <p className="text-sm text-slate-600">
                    Help verify project updates through community validation.
                    Collective input ensures accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Transparency Stats */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Data
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparency Dashboard
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real-time statistics on public infrastructure projects across the
              Philippines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  {dashboardStats.totalProjects}
                </div>
                <p className="text-sm text-slate-600">Total Projects</p>
              </CardContent>
            </Card>

            {/* Stat 2 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-cyan-600 mb-1">
                  {dashboardStats.ongoingProjects}
                </div>
                <p className="text-sm text-slate-600">Ongoing</p>
              </CardContent>
            </Card>

            {/* Stat 3 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-emerald-600 mb-1">
                  {dashboardStats.completedProjects}
                </div>
                <p className="text-sm text-slate-600">Completed</p>
              </CardContent>
            </Card>

            {/* Stat 4 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-amber-500 mb-1">
                  {dashboardStats.delayedProjects}
                </div>
                <p className="text-sm text-slate-600">Delayed</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-900">
                    {formatCurrency(dashboardStats.totalBudget)}
                  </div>
                  <p className="text-sm text-slate-600">Total Budget</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-900">
                    {dashboardStats.averageValidation}%
                  </div>
                  <p className="text-sm text-slate-600">Avg. Validation</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-900">
                    {dashboardStats.totalReports.toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-600">Reports Filed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Be Part of the Change
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Join thousands of Filipinos working together to ensure public
              infrastructure projects deliver what they promise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/validate">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Start Validating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
