"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tech" className="relative w-full bg-black pt-32 pb-32 text-white overflow-hidden rounded-[2.5rem] md:rounded-[4rem] z-20 shadow-2xl">
      
      {/* Background Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#b48d29]/40 via-black/0 to-transparent blur-2xl z-0" />

      {/* Decorative Curved Dotted Line */}
      <svg 
        className="absolute left-0 top-0 h-full max-w-[600px] opacity-70 z-0 pointer-events-none" 
        viewBox="0 0 600 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 0 50 Q 400 150, 600 650" 
          stroke="white" 
          strokeWidth="16" 
          strokeDasharray="9 9" 
          /* Note: Removed strokeLinecap="round" to match the flat caps in your design */
        />
      </svg>
    

      <div className="relative z-10 mx-auto max-w-5xl px-8" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#facc15] tracking-tight">
            Engineering & Design Arsenal
          </h2>
          <p className="text-gray-300 font-medium text-lg">
            The tools I use to build scalable products.
          </p>
        </div>

        {/* The Grid Arsenal (Staggered to match mockup precisely) */}
        <div className="relative flex flex-col items-center gap-4 w-full">
          
          {/* DRAGGABLE REACT BOX (Tilted on top) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ rotate: -12, x: -150, y: -20 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing", rotate: 0 }}
            className="absolute z-40 flex cursor-grab items-center gap-3 rounded-xl border border-white/80 bg-black px-12 py-8 shadow-2xl"
          >
            <Image src="/react-svgrepo-com.svg" alt="React" width={32} height={32} />
            <span className="text-2xl font-semibold">React.js</span>
          </motion.div>

          {/* Row 1: Aligned Right */}
          <div className="flex w-full max-w-[850px] justify-end gap-4 pl-[30%]">
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/nextjs-icon-svgrepo-com.svg" alt="Next.js" width={32} height={32} className="invert" />
              <span className="text-2xl font-semibold text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-8 py-5 backdrop-blur-sm">
              <Image src="/flutter-svgrepo-com.svg" alt="Flutter" width={32} height={32}/>
              <span className="text-2xl font-semibold text-white">Flutter</span>
            </div>
          </div>

          {/* Row 2: Centered */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/tailwindcss-icon-svgrepo-com.svg" alt="Tailwind" width={32} height={32} />
              <span className="text-2xl font-semibold text-white">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/typescript-icon-svgrepo-com.svg" alt="TypeScript" width={32} height={32} />
              <span className="text-2xl font-semibold text-white">TypeScript</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/python-svgrepo-com.svg" alt="Python" width={32} height={32} />
              <span className="text-2xl font-semibold text-white">Python (Fast API)</span>
            </div>
          </div>

          {/* Row 3: Centered Wide */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/figma-svgrepo-com.svg" alt="Figma" width={32} height={32} />
              <span className="text-2xl font-semibold text-white">Figma</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <Image src="/github-icon-svgrepo-com.svg" alt="GitHub" width={32} height={32} className="invert" />
              <span className="text-2xl font-semibold text-white">Git / GitHub</span>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <span className="text-2xl font-semibold text-white">UI / UX Prototyping</span>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-white/30 bg-black/80 px-12 py-8 backdrop-blur-sm">
              <span className="text-2xl font-semibold text-white">Clean Architecture</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}