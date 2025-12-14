"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, MapPin } from "lucide-react";
import type { Project, ProjectStatus } from "@/lib/mock-data";

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

interface ProjectMapProps {
  projects: Project[];
}

// Create a separate inner component for the map to avoid re-initialization
function MapInner({ projects }: ProjectMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [L, setL] = useState<typeof import("leaflet") | null>(null);

  // Memoize projects to prevent unnecessary re-renders
  const projectsKey = useMemo(
    () => projects.map((p) => p.id).join(","),
    [projects]
  );

  useEffect(() => {
    // Dynamic import of leaflet
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  useEffect(() => {
    if (!L || !mapContainerRef.current) return;

    // If map already exists, remove it first
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }


    // Center on Philippines
    const center: [number, number] = [12.8797, 121.774];

    // Create new map
    const map = L.map(mapContainerRef.current, {
      center: center,
      zoom: 6,
    });

    mapRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Add markers for each project
    projects.forEach((project) => {
      const color =
        project.status === "ongoing"
          ? "#0891B2"
          : project.status === "delayed"
          ? "#F59E0B"
          : "#22C55E";

      const icon = L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            width: 32px;
            height: 32px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          ">
            <svg style="transform: rotate(45deg);" width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const statusText =
        project.status === "ongoing"
          ? "Ongoing"
          : project.status === "delayed"
          ? "Delayed"
          : "Completed";

      const statusClass =
        project.status === "ongoing"
          ? "bg-cyan-600"
          : project.status === "delayed"
          ? "bg-amber-500"
          : "bg-green-500";

      const progressClass =
        project.status === "ongoing"
          ? "bg-cyan-600"
          : project.status === "delayed"
          ? "bg-amber-500"
          : "bg-green-500";

      const marker = L.marker([project.coordinates.lat, project.coordinates.lng], {
        icon,
      }).addTo(map);

      marker.bindPopup(`
        <div style="min-width: 220px; padding: 8px;">
          <h3 style="font-weight: 600; font-size: 14px; margin-bottom: 8px; color: #e5e5e5; line-height: 1.3;">
            ${project.name}
          </h3>
          <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #a3a3a3; margin-bottom: 12px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${project.location}
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 500; color: white;" class="${statusClass}">
              ${statusText}
            </span>
            <span style="font-size: 12px; color: #a3a3a3;">
              ${project.progress}% complete
            </span>
          </div>
          <div style="height: 6px; background: #404040; border-radius: 9999px; margin-bottom: 12px; overflow: hidden;">
            <div style="height: 100%; width: ${project.progress}%; border-radius: 9999px;" class="${progressClass}"></div>
          </div>
          <a href="/projects/${project.id}" style="display: block; width: 100%; padding: 8px 16px; background: #0891B2; color: white; text-align: center; border-radius: 8px; font-size: 12px; font-weight: 500; text-decoration: none;">
            View Details →
          </a>
        </div>
      `);
    });

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [L, projectsKey, projects]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full"
      style={{ minHeight: "500px" }}
    />
  );
}

export default function ProjectMap({ projects }: ProjectMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700">
        <div className="text-neutral-400">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-neutral-700">
      <MapInner projects={projects} />
    </div>
  );
}
