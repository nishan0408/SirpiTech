"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Philosophy() {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-48 px-6 bg-white z-10 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 md:mb-32 text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-3/5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-8"
            >
              NO TWO BUSINESSES <br />
              ARE THE SAME.
              <span className="block mt-4 text-gradient-primary">
                SO WHY SHOULD THEIR DIGITAL PRODUCTS BE?
              </span>
            </motion.h2>
          </div>
          <div className="w-full md:w-2/5">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed"
            >
              Sirpi Technologies creates digital experiences around the requirements, goals and identity of each client.
            </motion.p>
          </div>
        </div>

        <div>
          <div className="mb-10 md:mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-muted uppercase">
              Why Sirpi Technologies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 border-t border-border pt-12 md:pt-16">
            {siteConfig.principles.map((principle, index) => (
              <motion.div 
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-end gap-4 border-b border-border pb-4 mb-2">
                  <span className="text-sm font-mono text-primary font-bold">
                    {principle.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-lg text-text-secondary font-medium">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
