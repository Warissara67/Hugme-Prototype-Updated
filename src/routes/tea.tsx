import { createFileRoute } from "@tanstack/react-router";
import { HugmeApp } from "@/hugme/app";
export const Route = createFileRoute("/tea")({ component: () => <HugmeApp initialPage="tea" /> });
