"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Orbit, Zap, MonitorUp, Paintbrush } from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { 
      name: "Strategic Thinking", 
      icon: Orbit,
      description: "Defining the core logic that drives your brand toward scaled results."
    },
    { 
      name: "Brand Positioning", 
      icon: Zap,
      description: "Crafting a unique voice and identity that resonates at first touch."
    },
    { 
      name: "Conversion & Websites", 
      icon: MonitorUp,
      description: "High-performance digital experiences built to turn visitors into fans."
    },
    { 
      name: "Creative Direction", 
      icon: Paintbrush,
      description: "Visual storytelling that connects emotional triggers with strategic goals."
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      {/* Section 1: Hero */}
      <section 
        className="relative min-h-screen w-full flex flex-col items-start justify-center px-6 md:px-20 text-left"
        style={{
          backgroundImage: "url('/lead-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Navbar onGetAccessClick={scrollToContact} />
        
        {/* Content Overlay */}
        <div className="z-10 flex flex-col items-start gap-12 max-w-5xl mt-20">
          <h1 className="text-6xl md:text-9xl font-extralight tracking-tight text-black leading-tight uppercase">
            We connect the dots <br />
            You get the results
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="px-12 py-5 bg-white text-black rounded-full font-medium shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              Let&apos;s Connect
            </button>
            <button 
              className="px-12 py-5 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all active:scale-95"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Marquee */}
      <Marquee />

      {/* Section 3: Services (What We Do) */}
      <section className="px-6 py-32 md:px-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <service.icon className="w-12 h-12 stroke-[1.25]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold max-w-[150px] leading-tight">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Contact (Get In Touch) */}
      <section id="contact" className="px-6 py-32 md:px-20 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-6xl md:text-8xl font-serif mb-20 tracking-tight uppercase">
            Get In Touch
          </h2>
          
          <div className="w-full">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-20 text-center md:text-left border-t border-black/5 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center">
            <span className="font-serif text-lg font-bold tracking-widest uppercase">
              Anvaya Studios
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-4 text-xs font-light tracking-widest uppercase opacity-40">
              <span>Strategy</span>
              <span>•</span>
              <span>Creative</span>
              <span>•</span>
              <span>Growth</span>
            </div>
            <p className="text-[10px] tracking-widest text-black/20 uppercase font-medium">
              © {new Date().getFullYear()} Anvaya Studios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
