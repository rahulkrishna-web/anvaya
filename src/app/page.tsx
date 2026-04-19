"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SpotlightCard from "@/components/SpotlightCard";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import BlurText from "@/components/BlurText";
import { HeroGradientShape, AnvayaStar } from "@/components/BrandAssets";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { name: "Strategic Thinking", color: "text-brand-olive" },
    { name: "Brand & Positioning", color: "text-brand-yellow" },
    { name: "Creative Direction", color: "text-brand-peach" },
    { name: "Content that Connects", color: "text-brand-pink" },
    { name: "Performance Marketing", color: "text-brand-purple" },
    { name: "Conversion & Websites", color: "text-brand-blue" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Section 1: Hero */}
      <section 
        className="relative min-h-screen w-full flex flex-col items-start justify-center px-6 md:px-20 text-left"
        style={{
          backgroundImage: "url('/lead-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Navbar onGetAccessClick={scrollToWaitlist} />
        
        {/* Content Overlay */}
        <div className="z-10 flex flex-col items-start gap-12 max-w-5xl mt-20">
          <h1 className="text-6xl md:text-9xl font-extralight tracking-tight text-black leading-tight uppercase">
            We connect the dots <br />
            You get the results
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={scrollToWaitlist}
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

      {/* Section 2: Strategy/Philosophy (The "Different parts. One system." section) */}
      <section className="px-6 py-32 md:px-20 bg-white text-black">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-8 h-[1px] bg-black" />
              <span className="text-xs uppercase tracking-[0.3em] font-light">The Philosophy</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif">
              Different parts. <br />
              <span className="italic">One system.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 border-l border-black/10 pl-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Anvaya Studios connects the dots across strategy, creativity and performance to build brands that grow with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services (What We Do) */}
      <section className="px-6 py-32 md:px-20 border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <div className="flex items-center gap-2 opacity-40 mb-4">
              <div className="w-8 h-[1px] bg-white" />
              <span className="text-xs uppercase tracking-[0.3em] font-light">What We Do</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black p-12 flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors">
                <AnvayaStar className={`w-8 h-8 ${service.color}`} />
                <h3 className="text-2xl font-serif">{service.name}</h3>
                <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visual Slogan (Connection, made intelligent.) */}
      <section className="relative py-48 overflow-hidden flex items-center justify-center bg-[#fdfbf7] text-black">
         <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brand-olive via-brand-pink to-brand-blue blur-[100px]" />
         <div className="z-10 text-center px-6">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-none mb-10">
              Connection, <br />
              <span className="italic">made intelligent.</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.5em] font-medium opacity-60">
              Strategy that brings everything together.
            </p>
         </div>
      </section>

      {/* Section 5: COMING SOON */}
      <section className="flex flex-col items-center justify-center py-[120px] text-center border-t border-white/5">
        <div className="w-full overflow-hidden flex justify-center px-4 md:mb-12">
          <BlurText
            text="COMING SOON"
            animateBy="letters"
            delay={50}
            direction="bottom"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.4, transform: 'translate3d(0,-10px,0)' },
              { filter: 'blur(0px)', opacity: 0.8, transform: 'translate3d(0,0,0)' }
            ]}
            className="text-4xl sm:text-6xl md:text-[10vw] font-serif uppercase tracking-tighter leading-none select-none justify-center"
          />
        </div>
      </section>

      {/* Section 6: Waitlist/Contact Form */}
      <section id="waitlist" className="relative px-6 py-32 md:px-20 border-t border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-serif tracking-tight leading-tight mb-6">Let's build your system.</h2>
            <p className="text-white/40 font-light">
              We're currently taking on selective new projects. Drop us a line to see if we're a fit for your next move.
            </p>
          </div>
          
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
            <LeadCaptureForm />
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-olive opacity-[0.05] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple opacity-[0.05] blur-[120px] pointer-events-none rounded-full" />
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-20 text-center md:text-left border-t border-white/5 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              className="text-white/30 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-4 text-xs font-light tracking-widest uppercase opacity-40">
              <span>Strategy</span>
              <span>•</span>
              <span>Creative</span>
              <span>•</span>
              <span>Growth</span>
            </div>
            <p className="text-[10px] tracking-widest text-white/20 uppercase">
              © {new Date().getFullYear()} Anvaya Studios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
