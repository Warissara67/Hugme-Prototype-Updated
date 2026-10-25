import { createFileRoute } from "@tanstack/react-router";
import { HugmeApp } from "@/hugme/app";
export const Route = createFileRoute("/prepare")({
  component: () => <HugmeApp initialPage="map" />,
});
