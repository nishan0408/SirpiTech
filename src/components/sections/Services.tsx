"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-white z-10 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-16 md:mb-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-text-muted mb-4 uppercase">
          What We Build
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight max-w-2xl">
          Custom solutions for your business.
        </h3>
      </div>

      <div className="relative overflow-hidden w-full flex border-y border-border py-16">
        {/* Gradients for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex gap-6 md:gap-8 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...siteConfig.services, ...siteConfig.services].map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[450px] shrink-0 border border-border rounded-2xl p-6 md:p-8 bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:border-primary/30 relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(37, 99, 255, 0.05) 0%, transparent 70%)"
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xl font-medium text-text-muted font-mono">{service.id}</span>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-4 leading-tight">
                  {service.title}
                </h4>
              </div>
              <p className="text-primary text-base md:text-lg mt-8 relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
