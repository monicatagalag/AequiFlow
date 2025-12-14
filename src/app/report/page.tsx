"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  Shield,
  Lock,
  Eye,
  Upload,
  MapPin,
  Camera,
  Clock,
  Construction,
  Hammer,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  FileText,
} from "lucide-react";

type IssueType = "delay" | "quality" | "safety" | "corruption" | "other";

const issueTypes: {
  type: IssueType;
  label: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    type: "delay",
    label: "Project Delay",
    description: "Work has stopped or is behind schedule",
    icon: Clock,
  },
  {
    type: "quality",
    label: "Quality Concern",
    description: "Substandard materials or workmanship",
    icon: Hammer,
  },
  {
    type: "safety",
    label: "Safety Issue",
    description: "Hazards to workers or public safety",
    icon: ShieldAlert,
  },
  {
    type: "corruption",
    label: "Irregularity",
    description: "Suspected misuse of funds or resources",
    icon: AlertTriangle,
  },
  {
    type: "other",
    label: "Other",
    description: "Any other concern not listed above",
    icon: HelpCircle,
  },
];

export default function ReportPage() {
  const [step, setStep] = useState(1);
  const [issueType, setIssueType] = useState<IssueType | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [location, setLocation] = useState("Detecting location...");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Simulate location detection
  useState(() => {
    setTimeout(() => {
      setLocation("Novaliches, Quezon City (Auto-detected)");
    }, 1500);
  });

  const handlePhotoUpload = () => {
    // Simulate photo upload
    setPhotos([...photos, `Photo ${photos.length + 1}`]);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return issueType !== null;
      case 2:
        return true; // Photos are optional
      case 3:
        return location.length > 0;
      case 4:
        return description.length >= 10;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-8 pb-8">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-100 mb-3">
              Report Submitted
            </h2>
            <p className="text-slate-400 mb-6">
              Thank you for helping improve public infrastructure. Your report
              has been submitted anonymously and will be reviewed by our team.
            </p>

            {/* Privacy Reassurance */}
            <div className="bg-surface-elevated rounded-lg p-4 mb-6 border border-border">
              <div className="flex items-center gap-2 text-success mb-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Privacy Protected</span>
              </div>
              <p className="text-xs text-slate-400">
                No personal data was collected. Your report is encrypted and
                completely anonymous.
              </p>
            </div>

            {/* Report ID */}
            <div className="bg-surface rounded-lg p-3 mb-6">
              <p className="text-xs text-slate-500 mb-1">Reference Number</p>
              <p className="font-mono text-sm text-slate-100">
                RPT-{Date.now().toString(36).toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/projects">
                <Button className="w-full">View Projects</Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-surface/50 border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-100">
                Report an Issue
              </h1>
            </div>
            <p className="text-slate-400">
              Help improve public infrastructure by reporting issues you observe.
              All reports are anonymous and protected.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="bg-success/5 border-b border-success/20">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-success font-medium">
                Your Privacy is Protected
              </p>
              <p className="text-xs text-slate-400">
                No personal data is collected. Reports are encrypted and
                anonymized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">
                Step {step} of {totalSteps}
              </span>
              <span className="text-sm text-slate-400">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} indicatorClassName="bg-warning" />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Issue Type */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>What type of issue are you reporting?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {issueTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = issueType === type.type;
                      return (
                        <button
                          key={type.type}
                          onClick={() => setIssueType(type.type)}
                          className={`flex items-start gap-3 p-4 rounded-lg border transition-all text-left ${
                            isSelected
                              ? "border-warning bg-warning/10"
                              : "border-border hover:border-warning/50 bg-surface"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              isSelected ? "bg-warning/20" : "bg-surface-elevated"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? "text-warning" : "text-slate-400"
                              }`}
                            />
                          </div>
                          <div>
                            <p
                              className={`font-medium ${
                                isSelected ? "text-warning" : "text-slate-100"
                              }`}
                            >
                              {type.label}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {type.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Photo Upload */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    Add Photo Evidence (Optional)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 mb-4">
                    Photos help verify reports. Metadata like GPS and timestamp
                    are automatically stripped to protect your privacy.
                  </p>

                  {/* Upload Area */}
                  <div
                    onClick={handlePhotoUpload}
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors mb-4"
                  >
                    <Upload className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                    <p className="text-sm text-slate-400">
                      Click to upload photos
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      PNG, JPG up to 10MB
                    </p>
                  </div>

                  {/* Uploaded Photos */}
                  {photos.length > 0 && (
                    <div className="space-y-2">
                      {photos.map((photo, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-surface-elevated rounded-lg border border-border"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                              <Camera className="w-5 h-5 text-slate-400" />
                            </div>
                            <span className="text-sm text-slate-100">{photo}</span>
                          </div>
                          <button
                            onClick={() =>
                              setPhotos(photos.filter((_, i) => i !== index))
                            }
                            className="p-1 hover:bg-surface rounded"
                          >
                            <X className="w-4 h-4 text-slate-400" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Privacy Note */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
                    <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>
                      All photo metadata (including EXIF data with GPS location
                      and device info) is automatically removed before submission.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Confirm Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 mb-4">
                    We&apos;ve auto-detected your location. You can adjust it if needed.
                  </p>

                  {/* Auto-detected Location */}
                  <div className="bg-surface-elevated rounded-lg p-4 border border-border mb-4">
                    <div className="flex items-center gap-2 text-success mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {location.includes("Detecting") ? "Detecting..." : "Location Detected"}
                      </span>
                    </div>
                    <p className="text-slate-100">{location}</p>
                  </div>

                  {/* Manual Input */}
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">
                      Or enter location manually:
                    </label>
                    <Input
                      placeholder="e.g., Corner of Main St and 2nd Ave, Makati"
                      value={location.includes("Auto") ? "" : location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  {/* Privacy Note */}
                  <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
                    <Eye className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>
                      Location is only used to identify the relevant project.
                      Your exact coordinates are not stored.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Description */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Describe the Issue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 mb-4">
                    Provide details about what you observed. Be specific but
                    avoid including personal information.
                  </p>

                  <Textarea
                    placeholder="Describe what you observed. For example: 'Road construction has been idle for 2 weeks with no workers or equipment on site. Materials appear to be rusting.'"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[150px]"
                  />

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">
                      {description.length} characters
                    </span>
                    <span className="text-xs text-slate-500">
                      Minimum 10 characters
                    </span>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-medium text-slate-100 mb-3">
                      Report Summary
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Issue Type:</span>
                        <span className="text-slate-100">
                          {issueTypes.find((t) => t.type === issueType)?.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Location:</span>
                        <span className="text-slate-100 text-right max-w-[200px] truncate">
                          {location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Photos:</span>
                        <span className="text-slate-100">{photos.length} attached</span>
                      </div>
                    </div>
                  </div>

                  {/* Final Privacy Reassurance */}
                  <div className="mt-6 bg-success/5 border border-success/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-success mb-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Before you submit</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      No personal data is collected. Reports are encrypted and
                      anonymized. Your identity cannot be traced from this report.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>

              {step < totalSteps ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  variant="success"
                >
                  <Shield className="w-4 h-4" />
                  Submit Anonymously
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

