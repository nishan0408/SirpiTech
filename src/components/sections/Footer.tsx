"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary pt-24 pb-8 px-6 border-t border-border z-10 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit" data-cursor="HOME">
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
            <p className="text-text-secondary font-medium">Digital experiences, built around your requirements.</p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold tracking-widest text-text-primary uppercase mb-2">Navigation</h4>
              {["Work", "Services", "Process", "About", "Contact"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-text-secondary hover:text-primary transition-colors font-medium w-fit">{item}</Link>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold tracking-widest text-text-primary uppercase mb-2">Services</h4>
              <Link href="#services" className="text-text-secondary hover:text-primary transition-colors font-medium w-fit">Web Development</Link>
              <Link href="#services" className="text-text-secondary hover:text-primary transition-colors font-medium w-fit">App Development</Link>
              <Link href="#services" className="text-text-secondary hover:text-primary transition-colors font-medium w-fit">Digital Design</Link>
              <Link href="#services" className="text-text-secondary hover:text-primary transition-colors font-medium w-fit">Google Business Profile</Link>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1 mt-8 md:mt-0">
              <h4 className="text-sm font-bold tracking-widest text-text-primary uppercase mb-2">Featured</h4>
              <a href={siteConfig.projects[0].url} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors font-medium flex flex-col gap-1">
                <span className="text-text-primary">{siteConfig.projects[0].title}</span>
                <span className="text-sm text-text-muted">{siteConfig.projects[0].displayUrl}</span>
              </a>
              <Link href="#contact" className="mt-4 font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-2">
                Start a Project <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted font-medium">© {currentYear} Sirpi Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-text-muted font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
