import React, { useMemo } from "react";
import { 
  TrendingUp,
  Briefcase,
  Cpu,
  Users,
  Globe,
  Sprout,
  Pill,
  ArrowRight
} from "lucide-react";

interface ProgramsSectionProps {
  onApply: (specId?: string) => void;
}

interface Specialization {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  badge: string;
}

export default function ProgramsSection({ onApply }: ProgramsSectionProps) {
  const specializations = useMemo<Specialization[]>(() => [
    {
      title: "FinTech, Banking & Insurance",
      description: "Prepare for careers in digital banking, financial services, risk management, and fintech innovation.",
      icon: TrendingUp,
      color: "from-emerald-500/10 to-emerald-600/5 text-emerald-700 border-emerald-200/50",
      badge: "High Growth"
    },
    {
      title: "Marketing & E-Commerce",
      description: "Build expertise in consumer insights, brand management, digital marketing, and omnichannel strategies.",
      icon: Briefcase,
      color: "from-blue-500/10 to-blue-600/5 text-blue-700 border-blue-200/50",
      badge: "Creative"
    },
    {
      title: "Digital Business & Artificial Intelligence",
      description: "Lead digital transformation through AI, analytics, automation, and emerging technologies.",
      icon: Cpu,
      color: "from-purple-500/10 to-purple-600/5 text-purple-700 border-purple-200/50",
      badge: "Tech Driven"
    },
    {
      title: "People Management & HR Analytics",
      description: "Develop competencies in talent management, workforce analytics, organisational development, and leadership.",
      icon: Users,
      color: "from-amber-500/10 to-amber-600/5 text-amber-700 border-amber-200/50",
      badge: "Leadership"
    },
    {
      title: "Global Trade & Logistics Management",
      description: "Gain expertise in international trade, supply chain management, and global logistics operations.",
      icon: Globe,
      color: "from-sky-500/10 to-sky-600/5 text-sky-700 border-sky-200/50",
      badge: "Global Reach"
    },
    {
      title: "Agri-Business & Rural Entrepreneurship",
      description: "Explore opportunities in agribusiness innovation, rural enterprise development, and sustainable growth.",
      icon: Sprout,
      color: "from-teal-500/10 to-teal-600/5 text-teal-700 border-teal-200/50",
      badge: "Sustainable"
    },
    {
      title: "Pharmaceutical & Healthcare Management",
      description: "Build managerial capabilities for the pharmaceutical and healthcare sectors, focusing on strategy, operations, and regulatory practices.",
      icon: Pill,
      color: "from-rose-500/10 to-rose-600/5 text-rose-700 border-rose-200/50",
      badge: "Specialized"
    }
  ], []);

  return (
    <section id="programs-directory" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Active Admissions Banner */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full mb-6 select-none scale-95 sm:scale-100">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#116446] animate-pulse shrink-0" />
            <span className="text-[#116446] font-mono font-bold text-[10px] tracking-widest uppercase">
              MBA ADMISSIONS 2026-27 ACTIVE
            </span>
          </div>
          <span className="text-emerald-200 text-xs">|</span>
          <span className="bg-amber-50 text-amber-800 font-mono font-bold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-amber-200/50">
            SEATS LIMITED
          </span>
        </div>

        {/* Section Heading & Copy as per provided requirement */}
        <h2 
          className="font-excon font-normal text-[#0B1E33] text-center tracking-tight max-w-4xl text-3xl sm:text-4xl lg:text-4xl"
          style={{ lineHeight: "40px" }}
        >
          Choose from 7 Future-Ready MBA Specializations
        </h2>
        
        <p 
          className="font-ranade font-light text-zinc-600 text-sm sm:text-base text-center mt-4 mb-12 max-w-3xl"
          style={{ lineHeight: "26px" }}
        >
          Explore cutting-edge specializations thoughtfully designed to align with emerging industry trends, global business practices, and high-growth career opportunities.
        </p>

        {/* 7 Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full max-w-6xl">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={index}
                onClick={() => onApply(spec.title)}
                className="group relative flex flex-col justify-between bg-white border border-zinc-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-emerald-900/[0.04] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top row with icon & badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${spec.color} border shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-excon font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-100">
                      {spec.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="font-excon font-normal text-lg text-[#0B1E33] tracking-tight group-hover:text-[#116446] transition-colors duration-200">
                    {spec.title}
                  </h4>
                  
                  <p className="font-ranade font-light text-zinc-600 text-xs sm:text-[13px] leading-relaxed mt-3">
                    {spec.description}
                  </p>
                </div>

                {/* Call to action arrow in the footer */}
                <div className="mt-6 pt-4 border-t border-zinc-50 flex items-center justify-between text-zinc-400 group-hover:text-[#116446] transition-colors duration-200">
                  <span className="text-xs font-excon font-medium tracking-wide">
                    Explore Track & Inquiry
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
