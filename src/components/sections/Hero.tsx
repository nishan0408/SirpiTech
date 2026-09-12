"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import MagneticButton from "../ui/MagneticButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full flex items-center justify-center pt-32 pb-20 px-6 z-10 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-border bg-white/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.2em] text-text-muted"
          >
            {siteConfig.headline.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.05] max-w-2xl mb-6 md:mb-8"
          >
            {siteConfig.headline.mainPart1}
            <span className="text-gradient-primary inline-block">
              {siteConfig.headline.mainHighlight}
            </span>
            <br className="hidden lg:block" />
            {siteConfig.headline.mainPart2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mb-10 md:mb-12 font-medium"
          >
            {siteConfig.headline.subText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton 
              variant="primary"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start a Project
            </MagneticButton>
            <MagneticButton 
              variant="secondary" 
              showArrow={false}
              onClick={() => {
                const element = document.getElementById("work");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Work ↓
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: Logo */}
        <div className="relative w-full aspect-square flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full h-full max-w-[400px] max-h-[400px] lg:max-w-[600px] lg:max-h-[600px]"
          >
            <Image 
              src="/logo/logo.png" 
              alt="SIRPI Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-widest text-text-muted">SCROLL</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
