import Link from "next/link";
import Image from "next/image";
import { Building2, Shield, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/aequiflowlogo.png"
                alt="AequiFlow Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-lg text-slate-900">
                AequiFlow
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Building trust through transparency. Tracking public infrastructure
              for the Filipino people.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  Project Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/report"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/validate"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  Community Validation
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  LGU Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  About AequiFlow
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors inline-flex items-center gap-1"
                >
                  SDG Alignment
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-600 hover:text-cyan-600 transition-colors inline-flex items-center gap-1"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              Trust & Security
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-600 mt-0.5" />
                <p className="text-sm text-slate-600">
                  Anonymous reporting with end-to-end encryption
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-600 mt-0.5" />
                <p className="text-sm text-slate-600">
                  No personal data collection
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-600 mt-0.5" />
                <p className="text-sm text-slate-600">
                  Community-validated evidence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AequiFlow. Building trust through
            transparency.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-slate-600 font-medium">
              AequiFlow by IrreguLeaders
            </p>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500" /> for the
              Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
