import React from "react";
import Image from "next/image";

interface NavbarProps {
  onGetAccessClick?: () => void;
}

export default function Navbar({ onGetAccessClick }: NavbarProps) {
  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4">
      <nav 
        className="w-full flex items-center justify-between px-6 py-3 rounded-xl shadow-lg text-white"
        style={{
          background: "linear-gradient(90deg, #B0C7EA 0%, #DCBDE7 8.17%, #E790A2 19.71%, #F0AC4D 62.98%, #F8E19D 83.17%, #BFC56B 100%)"
        }}
      >
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 relative rounded-lg overflow-hidden bg-white/20 backdrop-blur-sm flex-shrink-0">
            <Image 
              src="/anvaya-logo.svg" 
              alt="Anvaya Logo" 
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="font-serif text-base md:text-lg font-bold tracking-widest uppercase whitespace-nowrap">
            Anvaya Studio
          </span>
        </div>

        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onGetAccessClick}
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            Connect
          </button>
          <button 
            onClick={scrollToFooter}
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            Socials
          </button>
        </div>
      </nav>
    </div>
  );
}
