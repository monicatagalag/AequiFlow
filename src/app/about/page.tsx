import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Shield,
  Users,
  Target,
  Eye,
  Heart,
  Globe,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Scale,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface/50 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-6">
              <Heart className="w-3 h-3 mr-1" />
              Built for the Philippines
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Building Trust Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Transparency
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              AequiFlow is a civic technology platform designed to bridge the gap
              between citizens and public infrastructure projects. We believe that
              transparency is the foundation of trust, and trust is the foundation
              of progress.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Empowering Citizens, Strengthening Governance
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                AequiFlow exists to transform how Filipinos interact with public
                infrastructure development. By providing accessible, real-time
                information and secure reporting mechanisms, we enable citizens
                to participate meaningfully in ensuring that public projects
                deliver on their promises.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our platform serves as a bridge between local government units and
                the communities they serve, fostering collaboration and mutual
                accountability in the pursuit of better infrastructure for all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    247
                  </div>
                  <p className="text-sm text-slate-400">Projects Tracked</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-heading font-bold text-success mb-2">
                    45.8B
                  </div>
                  <p className="text-sm text-slate-400">Pesos Monitored</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-heading font-bold text-warning mb-2">
                    1,834
                  </div>
                  <p className="text-sm text-slate-400">Reports Filed</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-heading font-bold text-slate-100 mb-2">
                    84%
                  </div>
                  <p className="text-sm text-slate-400">Trust Score</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every feature we build and every decision we make is guided by
              these principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                  Transparency
                </h3>
                <p className="text-sm text-slate-400">
                  Open access to project information, budgets, and progress. No
                  hidden agendas, just clear facts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-success" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                  Privacy
                </h3>
                <p className="text-sm text-slate-400">
                  Anonymous reporting with no personal data collection. Your
                  identity is protected by design.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-7 h-7 text-warning" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                  Collaboration
                </h3>
                <p className="text-sm text-slate-400">
                  Building bridges between citizens and government for mutual
                  benefit and shared progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Global Impact
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              UN Sustainable Development Goals Alignment
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AequiFlow directly contributes to the United Nations Sustainable
              Development Goals, supporting global efforts for sustainable and
              equitable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SDG 9 */}
            <Card className="border-orange-500/30 bg-orange-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-2">
                      SDG 9
                    </Badge>
                    <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                      Industry, Innovation & Infrastructure
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Build resilient infrastructure, promote inclusive and
                      sustainable industrialization and foster innovation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Monitoring quality and progress of infrastructure projects
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Ensuring efficient use of public infrastructure budgets
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Promoting community participation in development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SDG 16 */}
            <Card className="border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-2">
                      SDG 16
                    </Badge>
                    <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">
                      Peace, Justice & Strong Institutions
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Promote peaceful and inclusive societies, provide access to
                      justice and build effective institutions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Promoting transparency in public fund usage
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Enabling anonymous reporting of irregularities
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>
                          Building accountable and inclusive institutions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AequiFlow Exists */}
      <section className="py-16 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Why We Exist
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              The Challenge We&apos;re Addressing
            </h2>

            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                Public infrastructure is the backbone of national development.
                Roads, bridges, water systems, and public facilities determine
                the quality of life for millions of Filipinos. Yet, monitoring
                the progress and quality of these projects has traditionally
                been opaque, leaving citizens disconnected from developments
                that directly affect their communities.
              </p>
              <p>
                According to studies, a significant portion of infrastructure
                budgets can be lost to inefficiencies, delays, and irregularities.
                Without accessible information and feedback mechanisms, these
                issues often go unnoticed until it&apos;s too late to address them.
              </p>
              <p>
                AequiFlow was created to change this reality. By leveraging
                technology to make project information accessible, enabling
                anonymous reporting of concerns, and facilitating community
                validation of progress, we&apos;re creating a new paradigm of
                citizen-government collaboration in infrastructure development.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-primary">
              <p className="text-lg text-slate-100 italic mb-2">
                &quot;When citizens can see exactly where their taxes go and participate
                in ensuring accountability, trust naturally follows.&quot;
              </p>
              <cite className="text-sm text-slate-400">
                — AequiFlow Founding Principle
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-100 mb-4">
              Join the Movement
            </h2>
            <p className="text-slate-400 mb-8">
              Be part of building a more transparent and accountable Philippines.
              Start tracking projects, reporting issues, or validating progress
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  <Building2 className="w-5 h-5" />
                  Explore Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/report">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Shield className="w-5 h-5" />
                  Report an Issue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

