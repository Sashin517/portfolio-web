"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

// Register ScrollTrigger to GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Merged and ranked projects from both UI/UX and SE CVs
  const projects = [
    {
      id: 1,
      title: "Enterprise Hotel Management System",
      desc: "A B2B SaaS dashboard designed to unify fragmented hospitality operations with a highly intuitive global navigation sidebar and frictionless contextual modal overlays.",
      tags: ["UI/UX Design", "Figma", "SaaS", "B2B"],
      image: "/projects/hms.png",
      links: [
        { label: "View UX Case Study", url: "https://www.behance.net/gallery/257800361/HMS-Enterprise-Hotel-Management-Dashboard-UIUX" }
      ]
    },
    {
      id: 2,
      title: "LankaLawBot",
      desc: "A Generative AI legal assistant and secure Human-in-the-Loop (HITL) dashboard utilizing local RAG and structured LLM workflows for Sri Lankan legal research.",
      tags: ["UX Research", "Figma", "Next.js", "Python", "RAG", "PostgreSQL"],
      image: "/projects/lankalawbot.png",
      links: [
        { label: "Live Deployment", url: "https://lanka-law-bot-delta.vercel.app/" },
        { label: "View UX Case Study", url: "https://www.behance.net/gallery/248785563/LankaLawBot-AI-Legal-SaaS-UIUX-Case-Study" },
        { label: "GitHub Repository", url: "https://github.com/Sashin517/lanka-law-bot" }
      ]
    },
    {
      id: 3,
      title: "EcoChange",
      desc: "A gamified cross-platform mobile application modernizing urban e-waste management with intuitive token-reward dashboards and cloud data synchronization.",
      tags: ["UI/UX Design", "Flutter", "Firebase", "Node.js"],
      image: "/projects/ecochange.png",
      links: [
        { label: "View UX Case Study", url: "https://www.behance.net/gallery/248819403/EcoChange-Smart-E-Waste-Mobile-App-UI" },
        { label: "GitHub Repository", url: "https://github.com/Sashin517/eco-change" }
      ]
    },
    {
      id: 4,
      title: "SAPSRI Web Platform",
      desc: "Owned full-lifecycle development for a live production domain, featuring automated GitHub Actions CI/CD pipelines for zero-downtime deployments and normalized MySQL schemas.",
      tags: ["Full-Stack", "JavaScript", "PHP", "MySQL", "CI/CD"],
      image: "/projects/sapsri.png",
      links: [
        { label: "Live Deployment", url: "https://sapsri.lk/project-sedna" },
        { label: "GitHub Repository", url: "https://github.com/Sashin517/sapsri-web" }
      ]
    },
    {
      id: 5,
      title: "Telco Customer Churn Engine",
      desc: "A containerized Python backend microservice integrating automated OpenAI reasoning pipelines to dynamically generate personalized retention actions from predictive model scores.",
      tags: ["Backend", "Python", "FastAPI", "Docker", "MLOps"],
      image: "/projects/telco.png",
      links: [
        { label: "DagsHub Repository", url: "https://dagshub.com/sashindeemantha/churn-mlops-project" }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = cardsRef.current.filter(Boolean);
      
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative w-full overflow-hidden bg-[#f8f9fa] -mb-10 pt-24 pb-32">
      
      {/* Header with Horizontal Dotted Track */}
      <div className="mx-auto flex w-full items-center gap-8 pr-16 mb-16">
        {/* Horizontal Dotted Track (Dash 9, Gap 9, Weight 16) */}
        <div 
          className="h-4 flex-grow opacity-30" 
          style={{ backgroundImage: 'repeating-linear-gradient(to right, #9ca3af 0, #9ca3af 9px, transparent 9px, transparent 18px)' }}
        ></div>
        <h2 className="text-[3.5rem] font-bold tracking-tight text-black shrink-0">
          Featured Work
        </h2>
      </div>
      
      {/* Projects Container */}
      <div className="mx-auto w-full px-16 space-y-12 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            // Light gray background, large rounded corners, standard padding
            className="flex flex-col gap-8 rounded-[2.5rem] bg-[#eef0f2] p-10 md:flex-row md:p-12 shadow-sm"
          >
            {/* Left Column: Text & Meta (Using Flex-Col and Justify-Between to push description down) */}
            <div className="flex flex-1 flex-col justify-between">
              
              {/* Top Anchor: Title */}
              <h3 className="text-[2.5rem] font-medium leading-tight text-black">
                {project.title}
              </h3>
              
              {/* Bottom Anchor: Description, Tags, Link */}
              <div className="mt-32 space-y-8"> {/* mt-32 creates the massive gap seen in the mockup */}
                <p className="max-w-[90%] text-[1.05rem] leading-relaxed text-black font-medium">
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full bg-black px-6 py-2.5 text-sm font-medium tracking-wide text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Dynamic Links Container */}
                <div className="pt-2 flex flex-wrap gap-x-8 gap-y-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-medium text-black transition hover:opacity-70"
                    >
                      {link.label}
                      <ExternalLink size={18} className="stroke-[2.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column: Project Image */}
            <div className="relative h-[300px] w-full flex-1 overflow-hidden rounded-[1.5rem] md:h-[450px]">
               <Image 
                 src={project.image} 
                 alt={project.title} 
                 fill 
                 className="object-cover object-left-top shadow-inner" 
               /> 
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Vertical Dotted Track (Dash 9, Gap 9, Weight 16) */}
      <div 
        className="absolute bottom-0 left-1/2 w-4 h-32 -translate-x-1/2 opacity-30 z-0"
        style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0, #9ca3af 9px, transparent 9px, transparent 18px)' }}
      ></div>
      
    </section>
  );
}