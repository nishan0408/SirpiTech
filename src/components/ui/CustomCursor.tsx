"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const pathname = usePathname();

  useEffect(() => {
    // Check if mobile or touch device
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(true);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName.toLowerCase() === 'a' || target.closest('a') || target.tagName.toLowerCase() === 'button' || target.closest('button')) {
        setIsHovered(true);
        if (target.dataset.cursor) {
          setCursorText(target.dataset.cursor);
        } else if (target.closest('.project-card')) {
          setCursorText("VIEW");
        } else if (target.closest('.image-explore')) {
          setCursorText("EXPLORE");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY, pathname]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center text-white text-[10px] font-bold tracking-wider"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered || cursorText ? 64 : 12,
          height: isHovered || cursorText ? 64 : 12,
          backgroundColor: cursorText ? "var(--color-primary)" : isHovered ? "var(--color-text-primary)" : "var(--color-text-primary)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
