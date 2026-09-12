"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { siteConfig } from "@/config/site";

const ProcessStep = ({ step, index, totalSteps, scrollYProgress }: { step: { id: string, title: string, description: string }, index: number, totalSteps: number, scrollYProgress: MotionValue<number> }) => {
  const isEven = index % 2 === 0;
  const start = index / totalSteps;
  const end = (index + 0.5) / totalSteps;
  
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const backgroundColor = useTransform(scrollYProgress, [start, end], ["#E5EAF0", "#2563FF"]);
  
  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row w-full`}>
      <div className={`w-full md:w-1/2 flex pl-12 sm:pl-20 md:pl-0 ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
        <motion.div 
          className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-border max-w-md w-full hover:shadow-md transition-shadow duration-300"
          style={{ opacity, scale }}
        >
          <span className="text-primary font-mono text-lg md:text-xl font-bold mb-3 md:mb-4 block">
            {step.id}
          </span>
          <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-2 md:mb-3">
            {step.title}
          </h4>
          <p className="text-text-secondary text-base md:text-lg">
            {step.description}
          </p>
        </motion.div>
      </div>

      <div className="absolute left-4 sm:left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-bg-secondary flex items-center justify-center z-10">
        <motion.div 
          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-border"
          style={{ backgroundColor }}
        />
      </div>
      
      <div className="hidden md:block w-1/2" />
    </div>
  );
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" className="py-32 px-6 bg-bg-secondary relative" ref={containerRef}>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-muted mb-4 uppercase">
            Our Process
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            From Idea to Digital Reality.
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />
          
          <motion.div 
            className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-primary -translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-24">
            {siteConfig.process.map((step, index) => (
              <ProcessStep 
                key={step.id} 
                step={step} 
                index={index} 
                totalSteps={siteConfig.process.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
