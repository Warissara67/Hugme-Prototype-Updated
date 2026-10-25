import { createFileRoute } from "@tanstack/react-router";
import { HugmeApp } from "@/hugme/app";
export const Route = createFileRoute("/contact")({
  component: () => <HugmeApp initialPage="contact" />,
});
