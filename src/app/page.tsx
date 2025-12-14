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
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/aequiflow-logo.jpg"
                  alt="AequiFlow Logo"
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-neutral-400 mb-4 animate-fade-in">
                See the Progress. Trust the Process.
              </p>

              {/* Headline */}
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                AequiFlow
              </h1>

              {/* Description */}
              <p className="text-lg text-neutral-400 max-w-xl mb-8 animate-slide-up animate-delay-100">
                Track public infrastructure projects in real-time. Report issues
                anonymously. Validate progress with your community.
              </p>

              {/* Team Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700 text-neutral-300 text-sm mb-8">
                <span>Presented By: IrreguLeaders</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <Eye className="w-5 h-5" />
                    View Projects
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/report">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-neutral-600 hover:bg-neutral-800">
                    <AlertTriangle className="w-5 h-5" />
                    Report an Issue
                  </Button>
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 text-xs text-neutral-500">
                <span className="px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">
                  CivicTech
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">
                  GovTech
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">
                  Transparency & Accountability
                </span>
              </div>
            </div>

            {/* Right Content - Infrastructure Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80"
                  alt="Infrastructure - Bridge"
                  width={600}
                  height={700}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
              </div>
              {/* Floating arrow */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-neutral-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What AequiFlow Does */}
      <section className="py-20 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              What AequiFlow Does
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Empowering citizens with tools for transparency, accountability, and
              active participation in public infrastructure monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">
                  Track Projects
                </h3>
                <p className="text-sm text-slate-400">
                  Monitor infrastructure projects in your area with real-time
                  updates on progress, budget, and timeline.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">
                  Report Issues
                </h3>
                <p className="text-sm text-slate-400">
                  Report delays, quality concerns, or safety issues anonymously
                  and securely.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">
                  Validate Progress
                </h3>
                <p className="text-sm text-slate-400">
                  Community-powered validation ensures accuracy through collective
                  verification.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">
                  Build Trust
                </h3>
                <p className="text-sm text-slate-400">
                  Strengthen collaboration between citizens and local government
                  units through transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A simple three-step process to ensure transparency and
              accountability in public infrastructure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                    <FileSearch className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center font-heading font-bold text-primary">
                    1
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                    Track
                  </h3>
                  <p className="text-sm text-slate-400">
                    Browse infrastructure projects by location, status, or type.
                    View budgets, timelines, and progress updates.
                  </p>
                </div>
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-warning/50 -translate-x-1/2" />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-warning to-warning/70 flex items-center justify-center mb-4 shadow-lg shadow-warning/25">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center font-heading font-bold text-warning">
                    2
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                    Report
                  </h3>
                  <p className="text-sm text-slate-400">
                    Spot an issue? Report it anonymously with photos and location.
                    Your identity is protected.
                  </p>
                </div>
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-warning/50 to-success/50 -translate-x-1/2" />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success to-success/70 flex items-center justify-center mb-4 shadow-lg shadow-success/25">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-surface-elevated border border-border flex items-center justify-center font-heading font-bold text-success">
                    3
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                    Validate
                  </h3>
                  <p className="text-sm text-slate-400">
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
      <section className="py-20 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
              Live Data
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Transparency Dashboard
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real-time statistics on public infrastructure projects across the
              Philippines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-slate-100 mb-1">
                  {dashboardStats.totalProjects}
                </div>
                <p className="text-sm text-slate-400">Total Projects</p>
              </CardContent>
            </Card>

            {/* Stat 2 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {dashboardStats.ongoingProjects}
                </div>
                <p className="text-sm text-slate-400">Ongoing</p>
              </CardContent>
            </Card>

            {/* Stat 3 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-success mb-1">
                  {dashboardStats.completedProjects}
                </div>
                <p className="text-sm text-slate-400">Completed</p>
              </CardContent>
            </Card>

            {/* Stat 4 */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-heading font-bold text-warning mb-1">
                  {dashboardStats.delayedProjects}
                </div>
                <p className="text-sm text-slate-400">Delayed</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-100">
                    {formatCurrency(dashboardStats.totalBudget)}
                  </div>
                  <p className="text-sm text-slate-400">Total Budget</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-100">
                    {dashboardStats.averageValidation}%
                  </div>
                  <p className="text-sm text-slate-400">Avg. Validation</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-slate-100">
                    {dashboardStats.totalReports.toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-400">Reports Filed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Be Part of the Change
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
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

