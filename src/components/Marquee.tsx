"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const words = Array(10).fill("✨ Details Coming Soon ✨");

  return (
    <div className="relative w-full bg-black py-4 overflow-hidden border-y border-white/10">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="flex gap-10 px-10">
          {words.map((word, i) => (
            <span 
              key={i} 
              className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/80"
            >
              {word}
            </span>
          ))}
        </div>
        <div className="flex gap-10 px-10">
          {words.map((word, i) => (
            <span 
              key={i} 
              className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/80"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
