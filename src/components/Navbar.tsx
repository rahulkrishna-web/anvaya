"use client";

import React from "react";

interface NavbarProps {
  onGetAccessClick?: () => void;
}

export default function Navbar({ onGetAccessClick }: NavbarProps) {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 shadow-sm text-black">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-serif text-lg font-bold tracking-widest uppercase">
            Anvaya Studios
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <button 
            onClick={onGetAccessClick}
            className="text-sm font-medium hover:opacity-100 transition-opacity"
          >
            Connect
          </button>
          <button 
            onClick={scrollToFooter}
            className="text-sm font-medium hover:opacity-100 transition-opacity"
          >
            Socials
          </button>
        </div>
      </nav>
    </div>
  );
}
