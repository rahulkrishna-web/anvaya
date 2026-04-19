"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { 
      name: "Strategic Thinking", 
      icon: "/icons/strategic-thinking.svg",
    },
    { 
      name: "Brand Positioning", 
      icon: "/icons/brand-positioning.svg",
    },
    { 
      name: "Conversion & Websites", 
      icon: "/icons/conversion.svg",
    },
    { 
      name: "Creative Direction", 
      icon: "/icons/creative-direction.svg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      {/* Section 1: Hero */}
      <section 
        className="relative min-h-screen w-full flex flex-col items-start justify-center px-6 md:px-20 text-left pt-20"
        style={{
          backgroundImage: "url('/lead-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Navbar onGetAccessClick={scrollToContact} />
        
        {/* Content Overlay */}
        <div className="z-10 flex flex-col items-start gap-8 max-w-6xl">
          <div className="flex flex-col gap-0">
            <h1 className="text-5xl md:text-[80px] font-extralight tracking-tight text-black leading-[1.1] uppercase font-serif">
              We connect the dots
            </h1>
            <h1 className="text-5xl md:text-[80px] font-extralight tracking-tight text-black leading-[1.1] uppercase font-serif">
              You get the results
            </h1>
          </div>
          
          <div className="flex flex-col gap-8 items-start mt-4">
            <p className="text-xl md:text-2xl font-normal text-black/80 max-w-xl leading-relaxed">
              Anvaya Studio is a strategy-led practice. <br />
              Full website coming soon.
            </p>

            <button 
              onClick={scrollToContact}
              className="px-12 py-5 bg-white text-black rounded-full font-medium shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] transition-all active:scale-95 text-lg"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Marquee */}
      <Marquee />

      {/* Section 3: Services (What We Do) */}
      <section className="px-6 py-32 md:px-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-12 text-center">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                  <img 
                    src={service.icon} 
                    alt={service.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm md:text-2xl font-bold max-w-[150px] leading-tight text-black uppercase font-serif">
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
              Anvaya Studio
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
              © {new Date().getFullYear()} Anvaya Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
