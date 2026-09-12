"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site";
import MagneticButton from "../ui/MagneticButton";

export default function FeaturedProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const project = siteConfig.projects[0];

  return (
    <section id="work" className="py-32 px-6 bg-white overflow-hidden relative z-10" ref={containerRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Projects Delivered
            </h2>
          </div>
          
          <MagneticButton variant="secondary" className="px-6 py-2.5 text-xs" onClick={() => window.open(project.url, "_blank")}>
            View Project
          </MagneticButton>
        </div>

        <motion.div 
          style={{ scale, y, opacity }}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-bg-secondary rounded-2xl md:rounded-3xl border border-border overflow-hidden group project-card cursor-pointer shadow-xl"
          onClick={() => window.open(project.url, "_blank")}
        >
          {/* Browser Chrome */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-border flex items-center px-4 gap-2 z-20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5EAF0] group-hover:bg-[#FF5F56] transition-colors"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5EAF0] group-hover:bg-[#FFBD2E] transition-colors"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5EAF0] group-hover:bg-[#27C93F] transition-colors"></div>
            </div>
            <div className="mx-auto bg-bg-secondary px-4 py-1 rounded-md text-[10px] font-mono text-text-muted flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border border-text-muted opacity-50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
              </span>
              {project.displayUrl}
            </div>
          </div>

          {/* Project Content Area */}
          <div className="absolute top-10 inset-x-0 bottom-0 bg-[#f8fafc] flex items-center justify-center overflow-hidden">
            <div className="w-[85%] h-full mt-10 rounded-t-xl bg-white shadow-2xl border border-border overflow-hidden relative">
              <div className="w-full h-16 border-b border-border flex items-center px-8 justify-between">
                <div className="w-32 h-6 bg-border rounded-md"></div>
                <div className="flex gap-4">
                  <div className="w-12 h-2 bg-border rounded-full"></div>
                  <div className="w-12 h-2 bg-border rounded-full"></div>
                  <div className="w-12 h-2 bg-border rounded-full"></div>
                </div>
              </div>
              <div className="p-12 flex flex-col gap-6">
                <div className="w-3/4 h-12 bg-border rounded-lg"></div>
                <div className="w-1/2 h-6 bg-border rounded-lg"></div>
                <div className="w-full h-48 bg-bg-secondary rounded-lg mt-8"></div>
              </div>

              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-8">
                <h4 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h4>
                <p className="text-white/80 font-medium mb-8 text-lg">{project.services}</p>
                <span className="px-6 py-3 bg-white text-primary rounded-full font-semibold text-sm">
                  Visit Website →
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
