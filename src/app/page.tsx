"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";

import Hero from "@/components/sections/Hero";
import StoryBeats from "@/components/sections/StoryBeats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Pricing from "@/components/sections/Pricing";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="relative min-h-screen selection:bg-primary selection:text-white">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <div className="relative z-10">
          <Hero />

          {/* This section has pointer-events-none and relies on the CanvasSequence behind it */}
          <StoryBeats />

          {/* Following sections have solid backgrounds to cover the canvas */}
          <div className="relative z-20 bg-white">
            <FeaturedProject />
            <Services />
            <Pricing />
            <Process />
            <Philosophy />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
