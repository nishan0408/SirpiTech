"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Layers, Users, MessageSquare, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "", phone: "", productCategory: "", customerType: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form Submission: ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}
Phone: ${formState.phone}
Product Category: ${formState.productCategory}
Customer Type: ${formState.customerType}

Message:
${formState.message}`);
    
    window.location.href = `mailto:nishanthveluchamy@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi, I'm ${formState.name ? formState.name : "interested in your services"}.
Phone: ${formState.phone}
Product Category: ${formState.productCategory || "Not specified"}
Customer Type: ${formState.customerType || "Not specified"}

Message:
${formState.message}`);
    window.open(`https://wa.me/919342623353?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 bg-white z-10 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-5/12">
            <h2 className="text-xs font-bold tracking-[0.2em] text-text-muted mb-6 uppercase">Start a Project</h2>
            <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6">
              HAVE AN IDEA?
              <span className="block mt-2 text-text-secondary">
                LET&apos;S TURN IT INTO SOMETHING REAL.
              </span>
            </h3>
            <p className="text-base text-text-muted font-medium mb-8 max-w-sm">
              Tell us what you need. We&apos;ll discuss the requirements and recommend a suitable approach.
            </p>
            <div className="hidden lg:flex gap-4 items-center">
              <div className="w-8 h-[1px] bg-border"></div>
              <span className="text-xs font-bold tracking-widest text-text-muted uppercase">Sirpi Technologies</span>
            </div>
          </div>

          <div className="w-full lg:w-7/12 bg-[#f9f8f4] p-6 md:p-8 lg:p-10 rounded-[2rem] border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your name *</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 w-4 h-4 text-gray-400" />
                    <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="Ex. Ramesh Kumar" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                  <div className="relative flex items-center">
                    <Phone className="absolute left-4 w-4 h-4 text-gray-400" />
                    <input type="tel" id="phone" name="phone" required value={formState.phone} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="productCategory" className="text-sm font-medium text-gray-700">Product category *</label>
                  <div className="relative flex items-center">
                    <Layers className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select id="productCategory" name="productCategory" required value={formState.productCategory} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-10 py-3 text-sm text-gray-800 focus:outline-none focus:border-gray-400 transition-colors appearance-none bg-none">
                      <option value="" disabled>Select Category</option>
                      {siteConfig.contact.projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 pointer-events-none text-gray-400">
                      <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="customerType" className="text-sm font-medium text-gray-700">Customer type</label>
                  <div className="relative flex items-center">
                    <Users className="absolute left-4 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select id="customerType" name="customerType" value={formState.customerType} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-10 py-3 text-sm text-gray-800 focus:outline-none focus:border-gray-400 transition-colors appearance-none bg-none">
                      <option value="" disabled>Select Type</option>
                      <option value="Homeowner">Homeowner</option>
                      <option value="Business">Business</option>
                      <option value="Enterprise">Enterprise</option>
                      <option value="Individual">Individual</option>
                    </select>
                    <div className="absolute right-4 pointer-events-none text-gray-400">
                      <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message / Requirement</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none" placeholder="Enter Message...." />
                </div>
              </div>
              
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="px-6 py-2.5 bg-black text-white rounded-full font-medium text-sm tracking-wide flex items-center gap-2 hover:bg-gray-900 transition-colors">
                  <Send className="w-4 h-4" />
                  Submit Now
                </button>
                <button type="button" onClick={handleWhatsApp} className="px-6 py-2.5 bg-transparent text-gray-800 border border-gray-200 hover:border-gray-300 rounded-full font-medium text-sm tracking-wide flex items-center gap-2 hover:bg-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
