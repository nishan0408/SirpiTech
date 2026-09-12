"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
}

export default function MagneticButton({ 
  children, 
  className, 
  onClick, 
  variant = "primary",
  showArrow = true 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onMouseEnter={() => setIsHovered(true)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={cn(
        "relative px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-2 overflow-hidden transition-colors duration-300",
        isPrimary 
          ? "bg-[#111318] text-white hover:shadow-[0_0_20px_rgba(37,99,255,0.4)]" 
          : "bg-white text-[#111318] border border-[#E5EAF0] hover:border-primary",
        className
      )}
    >
      {/* Glow Effect Background */}
      {isPrimary && (
        <motion.div 
          className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowRight size={16} className={isHovered && !isPrimary ? "text-primary" : ""} />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
}
