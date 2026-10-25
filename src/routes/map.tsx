import { createFileRoute } from "@tanstack/react-router";
import { HugmeApp } from "@/hugme/app";
export const Route = createFileRoute("/map")({ component: () => <HugmeApp initialPage="map" /> });
