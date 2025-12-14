"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Flag,
  MapPin,
  Clock,
  Camera,
  TrendingUp,
  Users,
  Shield,
  HelpCircle,
  ThumbsUp,
  AlertTriangle,
  ChevronRight,
  Eye,
} from "lucide-react";
import { validationItems, type ValidationItem } from "@/lib/mock-data";

function ValidationCard({
  item,
  onConfirm,
  onFlag,
}: {
  item: ValidationItem;
  onConfirm: () => void;
  onFlag: () => void;
}) {
  const [hasVoted, setHasVoted] = useState(false);
  const [voteType, setVoteType] = useState<"confirm" | "flag" | null>(null);

  const handleConfirm = () => {
    if (!hasVoted) {
      setHasVoted(true);
      setVoteType("confirm");
      onConfirm();
    }
  };

  const handleFlag = () => {
    if (!hasVoted) {
      setHasVoted(true);
      setVoteType("flag");
      onFlag();
    }
  };

  const totalVotes = item.confirmCount + item.flagCount;
  const confirmPercentage = Math.round((item.confirmCount / totalVotes) * 100);

  return (
    <Card className="overflow-hidden">
      {/* Image */}
      {item.photoUrl && (
        <div className="relative aspect-video">
          <Image
            src={item.photoUrl}
            alt={item.description}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge
              variant={
                item.type === "photo"
                  ? "default"
                  : item.type === "progress"
                  ? "warning"
                  : "success"
              }
            >
              {item.type === "photo"
                ? "Photo Evidence"
                : item.type === "progress"
                ? "Progress Update"
                : "Completion Report"}
            </Badge>
          </div>
        </div>
      )}

      <CardContent className="p-4">
        {/* Project Link */}
        <Link
          href={`/projects/${item.projectId}`}
          className="text-xs text-cyan-600 hover:underline inline-flex items-center gap-1 mb-2"
        >
          {item.projectName}
          <ChevronRight className="w-3 h-3" />
        </Link>

        {/* Description */}
        <p className="text-sm text-slate-900 mb-3">{item.description}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(item.timestamp).toLocaleDateString("en-PH")}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
        </div>

        {/* Validation Stats */}
        <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500">Community Validation</span>
            <span className="text-xs text-slate-900">
              {totalVotes} validations
            </span>
          </div>

          {/* Validation Bar */}
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${confirmPercentage}%` }}
            />
            <div className="h-full bg-amber-500 flex-1" />
          </div>

          <div className="flex items-center justify-between mt-2 text-xs">
            <span className="text-emerald-600 flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" />
              {item.confirmCount} confirmed
            </span>
            <span className="text-amber-600 flex items-center gap-1">
              <Flag className="w-3 h-3" />
              {item.flagCount} flagged
            </span>
          </div>
        </div>

        {/* Actions */}
        {hasVoted ? (
          <div
            className={`text-center py-3 rounded-lg ${
              voteType === "confirm"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {voteType === "confirm" ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    You confirmed this update
                  </span>
                </>
              ) : (
                <>
                  <Flag className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    You flagged this update
                  </span>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="success"
              size="sm"
              className="flex-1"
              onClick={handleConfirm}
            >
              <ThumbsUp className="w-4 h-4" />
              Confirm
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-amber-600 hover:text-amber-700 hover:bg-amber-50 hover:border-amber-300"
              onClick={handleFlag}
            >
              <Flag className="w-4 h-4" />
              Flag
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ValidatePage() {
  const [items, setItems] = useState(validationItems);

  const handleConfirm = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, confirmCount: item.confirmCount + 1 } : item
      )
    );
  };

  const handleFlag = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, flagCount: item.flagCount + 1 } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
              Community Validation
            </h1>
          </div>
          <p className="text-slate-600 max-w-2xl">
            Help verify project updates by reviewing and validating submitted
            evidence. Your participation ensures accuracy and builds public trust.
          </p>
        </div>
      </section>

      {/* Why Validation Matters */}
      <section className="bg-cyan-50 border-b border-cyan-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-cyan-600" />
              </div>
              <span className="font-medium text-slate-900">
                Why Validation Matters
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Ensures report accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-600" />
                <span>Builds collective trust</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Detects misinformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-4 pb-4">
                <div className="text-2xl font-heading font-bold text-cyan-600">
                  {items.length}
                </div>
                <p className="text-xs text-slate-500">Pending Validations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-4">
                <div className="text-2xl font-heading font-bold text-emerald-600">
                  1,234
                </div>
                <p className="text-xs text-slate-500">Validated Today</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-4">
                <div className="text-2xl font-heading font-bold text-slate-900">
                  89%
                </div>
                <p className="text-xs text-slate-500">Accuracy Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 pb-4">
                <div className="text-2xl font-heading font-bold text-slate-900">
                  5,678
                </div>
                <p className="text-xs text-slate-500">Active Validators</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Items */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-semibold text-slate-900">
              Pending Validations
            </h2>
            <Badge variant="secondary">{items.length} items</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ValidationCard
                key={item.id}
                item={item}
                onConfirm={() => handleConfirm(item.id)}
                onFlag={() => handleFlag(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-slate-900 text-center mb-8">
            How Validation Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">
                  1. Review
                </h3>
                <p className="text-sm text-slate-600">
                  Examine photos and progress updates submitted for projects in
                  your area.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">
                  2. Validate
                </h3>
                <p className="text-sm text-slate-600">
                  Confirm if the update is accurate or flag if something seems
                  wrong.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">
                  3. Impact
                </h3>
                <p className="text-sm text-slate-600">
                  Your validation contributes to the project&apos;s trust score and
                  helps maintain accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
