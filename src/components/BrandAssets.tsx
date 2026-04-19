"use client";

import React from "react";

export function AnvayaStar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
    </svg>
  );
}

export function AnvayaLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Simplified stylized 'a' glyph concept */}
        <div className="absolute inset-0 border-4 border-current rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-current">
          <AnvayaStar className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-widest uppercase">Anvaya</span>
        <span className="text-[10px] tracking-[0.3em] font-light uppercase opacity-70">Studios</span>
      </div>
    </div>
  );
}

export function HeroGradientShape() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
      {/* 
        The background gradient shape 
        Usingbrand colors: Yellow -> Pink -> Purple -> Blue
      */}
      <div 
        className="absolute inset-0 rounded-full blur-[2px]"
        style={{
          background: "linear-gradient(135deg, #F8D992 0%, #E5A1BA 35%, #BEA9DE 70%, #AEC4E1 100%)",
          maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)"
        }}
      />
      
      {/* The Star Cutout effect */}
      <div className="absolute inset-0 flex items-center justify-center mix-blend-difference text-black">
        <AnvayaStar className="w-24 h-24 md:w-40 md:h-40" />
      </div>
      
      {/* Extra glows */}
      <div className="absolute -inset-10 bg-brand-pink/20 blur-[100px] rounded-full -z-10" />
      <div className="absolute -inset-20 bg-brand-blue/10 blur-[150px] rounded-full -z-10" />
    </div>
  );
}
