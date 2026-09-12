"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import CanvasSequence from "../ui/CanvasSequence";

const RevealText = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number, number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[1]], [40, 0]);
  const pointerEvents = useTransform(opacity, (v) => v > 0.05 ? "auto" : "none");

  return <motion.div style={{ opacity, y, pointerEvents, willChange: "transform, opacity" }}>{children}</motion.div>;
};

export default function StoryBeats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <CanvasSequence 
          frameCount={300} 
          progress={scrollYProgress} 
          className="absolute inset-0 pointer-events-none -z-10 w-full h-full flex items-center justify-center bg-white"
        />
        <section className="absolute inset-0 flex items-center px-6 md:px-24 pointer-events-none">
          <RevealText progress={scrollYProgress} range={[0.02, 0.08, 0.1, 0.15]}>
            <div className="max-w-2xl text-left pointer-events-none">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4 md:mb-6 leading-tight">
                EVERY DIGITAL PRODUCT <br />
                STARTS WITH AN IDEA.
              </h2>
              <p className="text-lg md:text-xl text-primary font-medium">Your requirements are where the process begins.</p>
            </div>
          </RevealText>
        </section>

        <section className="absolute inset-0 flex items-center justify-end px-6 md:px-24 pointer-events-none">
          <RevealText progress={scrollYProgress} range={[0.18, 0.22, 0.25, 0.3]}>
            <div className="max-w-xl text-right pointer-events-none">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4 md:mb-6 leading-tight">
                UNDERSTAND <br />
                BEFORE WE BUILD.
              </h2>
              <p className="text-lg md:text-xl text-primary font-medium">We start by understanding your business, your audience and what you actually need.</p>
            </div>
          </RevealText>
        </section>

        <section className="absolute inset-0 flex items-end justify-start px-6 md:px-24 pb-8 md:pb-12 pointer-events-none">
          <RevealText progress={scrollYProgress} range={[0.32, 0.38, 0.4, 0.45]}>
            <div className="max-w-2xl text-left pointer-events-none">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4 md:mb-6 leading-tight">
                DESIGNED WITH PURPOSE.
              </h2>
              <p className="text-lg md:text-xl text-primary font-medium">Every interface is designed to be clear, responsive and aligned with the way your business works.</p>
            </div>
          </RevealText>
        </section>



        <section className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none z-20">
          <RevealText progress={scrollYProgress} range={[0.68, 0.72, 0.85, 0.9]}>
            <div className="max-w-4xl bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/50 shadow-xl pointer-events-none">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4 md:mb-6 leading-tight">
                BUILT FOR <br />
                THE WAY PEOPLE USE IT.
              </h2>
              <p className="text-lg md:text-xl text-primary font-medium max-w-2xl mx-auto">From responsive websites to application experiences, we build digital products across screens and platforms.</p>
            </div>
          </RevealText>
        </section>
      </div>
    </div>
  );
}
