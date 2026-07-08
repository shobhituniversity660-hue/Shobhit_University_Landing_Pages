import React from "react";
import { 
  Globe, 
  Users, 
  Cpu, 
  Layers, 
  Award, 
  Target, 
  BookOpen, 
  Zap,
  Sparkles
} from "lucide-react";

interface DistinctiveItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ITEMS: DistinctiveItem[] = [
  {
    id: "global-immersion",
    number: "01",
    title: "Global Business Immersion",
    description: "One-week international study tour to experience cross-cultural corporate ecosystems.",
    icon: Globe,
  },
  {
    id: "cxo-talks",
    number: "02",
    title: "CXO Talk Series & Mentorship",
    description: "Interact directly with top business leaders and gain personal career mentorship.",
    icon: Users,
  },
  {
    id: "tech-specializations",
    number: "03",
    title: "Technology-Driven Specializations",
    description: "Specialized tracks in FinTech, Business Analytics, AI, and Digital Marketing with live tools and certifications.",
    icon: Cpu,
  },
  {
    id: "skill-labs",
    number: "04",
    title: "Integrated Skill Labs",
    description: "Hands-on training in communication, analytics, leadership, and digital platforms embedded in every semester.",
    icon: Layers,
  },
  {
    id: "dual-credential",
    number: "05",
    title: "Dual Credential Advantage",
    description: "Earn value-added certifications like PMP, Six Sigma, Google, SAP, and Power BI while pursuing your MBA degree.",
    icon: Award,
  },
  {
    id: "live-projects",
    number: "06",
    title: "Live Projects & Startup Challenges",
    description: "Work on real business problems, pitch in incubation events, and launch your ideas on campus.",
    icon: Target,
  },
  {
    id: "mooc-flexibility",
    number: "07",
    title: "MOOC Credit Transfer Flexibility",
    description: "Customize your learning with global MOOCs from SWAYAM, NPTEL, and Coursera for up to 20% credits.",
    icon: BookOpen,
  },
  {
    id: "placement-ecosystem",
    number: "08",
    title: "Placement-Ready Ecosystem",
    description: "Continuous grooming, internship-to-job pathways, PPO opportunities, and strong alumni referrals.",
    icon: Zap,
  },
];

export default function DistinctiveMBA() {
  return (
    <section id="distinctive-mba" className="py-24 bg-white border-t border-b border-zinc-100 relative overflow-hidden">
      {/* High-fidelity modern background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Decorative ambient radial gradients */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 right-1/4 w-96 h-96 bg-[#0b1e33]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content with clean center alignment and elevated design */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/40 rounded-full mb-5 shadow-sm shadow-emerald-100/20">
            <Sparkles className="w-3.5 h-3.5 text-[#116446] animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-[#116446] tracking-widest uppercase">
              Our Unique Offerings
            </span>
          </div>
          
          <h2 
            style={{ fontSize: "36px", lineHeight: "44px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight sm:text-4xl"
          >
            What Makes Our MBA Distinctive
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-[#116446] mt-5 rounded-full" />
          
          <p 
            className="font-ranade font-light text-zinc-600 text-sm sm:text-base mt-5 max-w-2xl"
            style={{ lineHeight: "26px" }}
          >
            An MBA experience designed to combine academic rigor, industry exposure, and professional growth opportunities.
          </p>
        </div>

        {/* Elegant bento-like grid of distinctive items with top hover accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-white border border-zinc-200/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] hover:border-emerald-500/20 flex flex-col justify-between overflow-hidden"
              >
                {/* Top decorative gradient border visible only on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-[#116446] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Card top banner with icon and sequential index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1E33]/5 flex items-center justify-center text-[#116446] group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-[#116446] group-hover:text-white group-hover:rotate-3 transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-300 group-hover:text-emerald-500/60 transition-colors duration-300">
                      {item.number}
                    </span>
                  </div>

                  {/* Text Description */}
                  <h3 className="font-excon font-normal text-base text-[#0B1E33] tracking-tight group-hover:text-[#116446] transition-colors duration-200 mb-2.5">
                    {item.title}
                  </h3>
                  
                  <p 
                    className="font-ranade font-light text-zinc-500 text-xs sm:text-sm"
                    style={{ lineHeight: "22px" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
