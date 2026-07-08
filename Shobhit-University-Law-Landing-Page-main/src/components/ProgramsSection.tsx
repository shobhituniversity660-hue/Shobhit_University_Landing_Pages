import React, { useState, useMemo } from "react";
import { 
  Scale,
  Briefcase,
  Landmark,
  BookOpen,
  Award,
  GraduationCap,
  Clock,
  ArrowRight,
  CheckCircle2,
  Globe
} from "lucide-react";
import { motion } from "motion/react";

interface ProgramsSectionProps {
  onApply: (programId?: string) => void;
}

interface Program {
  title: string;
  duration: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  highlights: string[];
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  programs: Program[];
}

export default function ProgramsSection({ onApply }: ProgramsSectionProps) {
  const categories = useMemo<Category[]>(() => [
    {
      id: "ug",
      title: "Undergraduate Programs",
      subtitle: "5-Year Integrated Law Pathways",
      badge: "Integrated Honors",
      programs: [
        {
          title: "B.A. LL.B.",
          duration: "5 Years",
          description: "Develop a strong foundation in legal principles, humanities, constitutional values, and advocacy through an integrated multidisciplinary curriculum.",
          icon: BookOpen,
          color: "from-emerald-500/10 to-emerald-600/5 text-[#116446] border-emerald-200/40",
          highlights: ["Multidisciplinary Foundation", "Constitutional Values", "Advocacy & Mooting"]
        },
        {
          title: "B.B.A. LL.B. (Hons.)",
          duration: "5 Years (Hons.)",
          description: "Prepare for careers in corporate law, business regulation, governance, and legal management through an industry-oriented curriculum.",
          icon: Briefcase,
          color: "from-blue-500/10 to-blue-600/5 text-blue-700 border-blue-200/40",
          highlights: ["Corporate Jurisprudence", "Business Governance", "Legal Compliance & IP"]
        },
        {
          title: "B.Com. LL.B. (Hons.)",
          duration: "5 Years (Hons.)",
          description: "Integrate commerce with legal studies to develop expertise in taxation, banking, finance, corporate compliance, and commercial law.",
          icon: Landmark,
          color: "from-amber-500/10 to-amber-600/5 text-amber-700 border-amber-200/40",
          highlights: ["Financial Regulation", "Corporate Taxation", "Commercial Agreements"]
        },
        {
          title: "B.A. (Hons.) in Government & Administration",
          duration: "4 Years",
          description: "Develop an understanding of governance, public policy, administration, and political systems through an interdisciplinary curriculum.",
          icon: Globe,
          color: "from-indigo-500/10 to-indigo-600/5 text-indigo-700 border-indigo-200/40",
          highlights: ["Public Administration", "Public Policy & Governance", "Constitutional & Administrative Studies"]
        }
      ]
    },
    {
      id: "professional",
      title: "Professional Programs",
      subtitle: "3-Year Post-Graduate Track",
      badge: "Core Litigation & Judiciary",
      programs: [
        {
          title: "LL.B.",
          duration: "3 Years",
          description: "A comprehensive professional law programme designed for graduates aspiring to pursue litigation, judiciary, corporate legal practice, public service, and higher legal studies.",
          icon: Scale,
          color: "from-purple-500/10 to-purple-600/5 text-purple-700 border-purple-200/40",
          highlights: ["Litigation Practice", "Judiciary Preparation", "Corporate Legal Desk"]
        }
      ]
    },
    {
      id: "pg",
      title: "Postgraduate Programs",
      subtitle: "Advanced Legal Research & Specialization",
      badge: "Master of Laws",
      programs: [
        {
          title: "LL.M.",
          duration: "1 Year",
          description: "Enhance your legal knowledge through advanced specialisations, contemporary legal research, and interdisciplinary learning.",
          icon: Award,
          color: "from-rose-500/10 to-rose-600/5 text-rose-700 border-rose-200/40",
          highlights: ["Constitutional and Administrative Law", "Corporate and Commercial Law", "Criminal and Security Law"]
        },
        {
          title: "LL.M.",
          duration: "2 Years",
          description: "Deepen your legal knowledge through advanced coursework, research, and specialization in emerging areas of law.",
          icon: GraduationCap,
          color: "from-sky-500/10 to-sky-600/5 text-sky-700 border-sky-200/40",
          highlights: ["Corporate Law", "Criminal Law", "Constitutional Law"]
        }
      ]
    }
  ], []);

  const filteredPrograms = useMemo(() => {
    return categories.flatMap(cat => cat.programs);
  }, [categories]);

  return (
    <section id="programs-directory" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Active Admissions Banner */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full mb-6 select-none scale-95 sm:scale-100">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#116446] animate-pulse shrink-0" />
            <span className="text-[#116446] font-mono font-bold text-[10px] tracking-widest uppercase">
              LAW ADMISSIONS 2026-27 ACTIVE
            </span>
          </div>
          <span className="text-emerald-200 text-xs">|</span>
          <span className="bg-amber-50 text-amber-800 font-mono font-bold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-amber-200/50">
            BCI APPROVED
          </span>
        </div>

        {/* Section Heading & Subtitle exactly as per requested */}
        <h2 
          className="font-excon font-normal text-[#0B1E33] text-center tracking-tight max-w-4xl text-[36px] leading-[40px] mb-10"
        >
          Our Law Programmes
        </h2>

        {/* Flat displays in unified grid */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
            {filteredPrograms.map((program, pIndex) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={pIndex}
                  onClick={() => onApply(program.title)}
                  className="group relative flex flex-col justify-between bg-white border border-zinc-200/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-emerald-900/[0.04] hover:border-[#116446]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Top row with icon & duration */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color} border shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[#116446] bg-emerald-50/90 px-3 py-1.5 rounded-full border border-emerald-200/50 shadow-[0_0_12px_rgba(17,100,70,0.08)] group-hover:bg-emerald-100/85 transition-all duration-300">
                        <Clock className="w-3.5 h-3.5 text-[#116446] animate-pulse" />
                        <span className="text-[10px] font-excon font-bold uppercase tracking-wider">
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h4 className="font-excon font-normal text-lg sm:text-xl text-[#0B1E33] tracking-tight group-hover:text-[#116446] transition-colors duration-200">
                      {program.title}
                    </h4>
                    
                    <p className="font-ranade font-light text-zinc-600 text-xs sm:text-[13px] leading-relaxed mt-3">
                      {program.description}
                    </p>

                    {/* Program Key Highlights */}
                    <div className="mt-5 space-y-2">
                      {program.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#116446] shrink-0" />
                          <span className="text-zinc-500 font-ranade text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <motion.button
                      id={`apply-btn-${program.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onApply(program.title);
                      }}
                      className="w-full py-3 px-4 bg-[#116446] hover:bg-[#0d4d36] text-white font-excon font-medium text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3.5,
                      }}
                    >
                      <span>Apply Now</span>
                      <motion.span
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.0,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 4.0,
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
