"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "work", label: "Case Studies", href: "#work" },
  { id: "tech", label: "Tech Stack", href: "#tech" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Create a "trigger line" about 1/3rd of the way down your screen
      const triggerPoint = window.scrollY + window.innerHeight / 3;
      let currentActive = "home"; // Default fallback

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // If our trigger line falls inside this section's top and bottom boundaries, make it active
          if (triggerPoint >= sectionTop && triggerPoint < sectionBottom) {
            currentActive = link.id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    // Add scroll event listener with passive true for smooth performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Fire it once on initial load just in case you refresh halfway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      <nav className="flex items-center rounded-full bg-black p-1.5 shadow-2xl">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          
          return (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setActiveSection(link.id)}
              className={`relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
                isActive ? "text-black" : "text-white hover:text-gray-300"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 z-0 rounded-full bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              
              {link.icon && <link.icon size={16} className="relative z-10" />}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}