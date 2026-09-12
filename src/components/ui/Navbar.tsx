"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = ["Home", "Work", "Services", "Process", "About", "Contact"];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-[60]" data-cursor="HOME">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              <div className="absolute inset-1 bg-white rounded-sm transform rotate-45"></div>
              <span className="relative font-bold text-primary text-xs">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight leading-tight text-text-primary">SIRPI</span>
              <span className="font-medium text-[10px] tracking-widest text-text-muted leading-none">TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block z-[60]">
            <MagneticButton 
              variant="primary" 
              showArrow={true}
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-[60]"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <>
                <span className="w-6 h-[2px] bg-text-primary rounded-full"></span>
                <span className="w-6 h-[2px] bg-text-primary rounded-full"></span>
              </>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 flex flex-col justify-between"
          >
            <nav className="flex flex-col items-center gap-8 mt-12">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-text-primary hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center px-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-4 bg-black text-white rounded-full font-semibold flex items-center justify-center gap-2"
              >
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
