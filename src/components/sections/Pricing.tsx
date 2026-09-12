"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import MagneticButton from "../ui/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-32 px-6 bg-bg-secondary relative z-10 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-border flex flex-col md:flex-row gap-16 relative overflow-hidden">
          
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="md:w-1/2 relative z-10 flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-muted mb-4 uppercase">
              Website Packages
            </h2>
            <div className="mb-2">
              <span className="text-xl md:text-2xl font-bold text-text-secondary mr-2">STARTING FROM</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-primary tracking-tighter mb-6">
              {siteConfig.pricing.startingPrice}
            </h3>
            <p className="text-xl text-text-primary font-medium mb-4">
              {siteConfig.pricing.disclaimer}
            </p>
            <p className="text-text-secondary mb-10">
              {siteConfig.pricing.note}
            </p>
            
            <div className="hidden md:block">
              <MagneticButton 
                variant="primary"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Discuss Your Requirements
              </MagneticButton>
            </div>
          </div>

          <div className="md:w-1/2 relative z-10">
            <h4 className="text-lg font-bold text-text-primary mb-6">Package possibilities include:</h4>
            <ul className="space-y-4">
              {siteConfig.pricing.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-text-secondary font-medium"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-10 md:hidden block">
              <MagneticButton 
                variant="primary" 
                className="w-full justify-center"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Discuss Your Requirements
              </MagneticButton>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
