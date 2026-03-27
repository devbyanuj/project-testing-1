import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "devvizy | No-Code & Full-Stack Expert",
  description:
    "50+ web apps built with Bubble.io, Next.js, and AI. Top Rated Plus developer with 100% Job Success. Build faster, scale smarter.",
};

export default function HomePage() {
  return <LandingPage />;
}
