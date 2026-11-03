"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [showCvMenu, setShowCvMenu] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle pulsing animation for the yellow glow behind the image
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{
        // Replicating the exact radial gradient from your design panel
        background: "radial-gradient(circle at center, #FFFFFF 0%, #E8E8E8 100%)"
      }}
    >
      {/* Top Left Logo */}
      <div className="absolute left-12 top-10 text-4xl font-bold tracking-tight text-black z-20">
        SD
      </div>
      
      {/* Bottom Left Copyright */}
      <div className="absolute bottom-10 left-12 text-sm font-medium text-gray-700 z-20">
        Copyright 2026
      </div>

      {/* Bottom Right Decorative SVGs */}
      <div className="absolute bottom-8 right-0 z-20 hidden md:flex items-center gap-16 opacity-90">
        <Image 
          src="/cursor.svg" 
          alt="Cursor Tool" 
          width={119} 
          height={119} 
        />
        <Image 
          src="/desktop.svg" 
          alt="Desktop Developer" 
          width={119} 
          height={119} 
        />
        <Image 
          src="/hash.svg" 
          alt="Hash Grid" 
          width={50} 
          height={50} 
          className="translate-x-1/2" // Pushes the hash icon slightly off-screen to match the cut-off look in your design
        />
      </div>

      {/* Main Content Container (3-Column Grid to allow center image overlap) */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center px-12 md:grid-cols-[1fr_400px_1fr]">
        
        {/* Left Column: Name & Status */}
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[5.5rem] font-semibold leading-[1.05] tracking-tight text-black">
            Sashin <br /> Deemantha
          </h1>
          <div className="mt-4 flex items-center gap-3 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm">
            <span className="h-3 w-3 rounded-full bg-[#facc15]"></span> 
            Open to UI UX & SE Roles
          </div>
        </div>

        {/* Center Column: Empty space for Grid structure */}
        <div className="hidden md:block"></div>

        {/* Right Column: Description & Buttons */}
        <div className="flex flex-col items-start gap-8 pl-8">
          <p className="max-w-md text-lg leading-relaxed text-gray-800 font-medium">
            I translate complex logic into beautiful, developer-ready user
            experiences. Bridging the gap between front-end architecture and
            high-end visual design.
          </p>

          <div className="flex flex-no-wrap items-center gap-4">
            <a 
              href="#work"
              className="flex items-center gap-2 rounded-full border border-gray-400 bg-white px-7 py-3.5 font-medium text-black transition hover:bg-gray-50 hover:shadow-sm"
            >
              Case Studies <ArrowRight size={18} />
            </a>
            
            {/* Download CV Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowCvMenu(!showCvMenu)}
                className="flex items-center gap-2 rounded-full bg-[#facc15] px-7 py-3.5 font-medium text-black shadow-sm transition hover:bg-yellow-400"
              >
                Download CV <Download size={18} />
              </button>
              
              {showCvMenu && (
                <div className="absolute right-0 top-16 z-50 flex w-56 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
                  {/* Added text-black to both links below to fix the color issue */}
                  <a href="/cv/CV_SE.pdf" download className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100">
                    <Download size={16} className="text-gray-500" /> Software Eng. CV
                  </a>
                  <a href="/cv/CV_UIUX.pdf" download className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-black transition hover:bg-gray-100">
                    <Download size={16} className="text-gray-500" /> UI/UX CV
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Absolute Centered Profile Image & Yellow Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex h-[85%] w-[800px] -translate-x-1/2 justify-center">
        {/* Animated Yellow Radial Blur */}
        <div 
          ref={glowRef}
          className="absolute top-[10%] h-[500px] w-[500px] rounded-full bg-[#facc15] opacity-50 blur-[120px]"
        />
        {/* Profile Image Anchored to Bottom */}
        <Image 
          src="/profile-picture.png" 
          alt="Sashin Deemantha" 
          fill 
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}