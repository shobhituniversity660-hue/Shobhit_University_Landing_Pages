import React from "react";
import { motion } from "motion/react";
import { 
  Scale, 
  Briefcase, 
  Building, 
  Scroll, 
  FileCheck, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Compass,
  CheckCircle2
} from "lucide-react";

export default function CareerPathways() {
  const coreCareers = [
    {
      title: "Legal Advisor",
      description: "Provide legal counsel to individuals, businesses, and organizations on civil, corporate, and criminal matters.",
      icon: Briefcase,
      color: "text-[#116446]",
      bg: "bg-emerald-50 border-emerald-100",
      accent: "from-[#116446]/20 to-transparent"
    },
    {
      title: "Advocate",
      description: "Represent clients before courts, tribunals, and other legal forums.",
      icon: Scale,
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-100",
      accent: "from-indigo-600/10 to-transparent"
    },
    {
      title: "Company Secretary",
      description: "Ensure corporate governance, regulatory compliance, and legal documentation within organizations.",
      icon: Building,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
      accent: "from-amber-600/15 to-transparent"
    },
    {
      title: "Solicitor",
      description: "Advise clients on legal matters, contracts, transactions, and dispute resolution.",
      icon: Scroll,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
      accent: "from-blue-600/15 to-transparent"
    },
    {
      title: "Notary",
      description: "Authenticate, certify, and witness legal documents in accordance with statutory provisions.",
      icon: FileCheck,
      color: "text-rose-600",
      bg: "bg-rose-50 border-rose-100",
      accent: "from-rose-600/15 to-transparent"
    },
    {
      title: "Oath Commissioner",
      description: "Administer oaths, affirmations, affidavits, and statutory declarations for legal proceedings.",
      icon: ShieldCheck,
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-100",
      accent: "from-purple-600/15 to-transparent"
    }
  ];

  const otherOpportunities = [
    "Judicial Services",
    "Public Prosecutor",
    "Legal Consultant",
    "Corporate Counsel",
    "Compliance Officer",
    "Arbitration & Mediation Specialist",
    "Legal Researcher",
    "Policy Analyst",
    "Civil Services",
    "Legal Journalist",
    "Academia & Teaching",
    "International Organizations",
    "Intellectual Property Consultant"
  ];

  return (
    <section id="career-pathways" className="py-16 bg-[#116446] relative overflow-hidden">
      {/* Abstract geometric overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/40 border border-emerald-700/45 rounded-full w-fit mb-3 select-none">
            <Compass className="w-3.5 h-3.5 text-emerald-300 animate-spin-slow" />
            <span className="font-mono text-[10px] font-bold text-emerald-200 tracking-widest uppercase">
              Opportunities & Placements
            </span>
          </div>
          <h2 className="font-excon font-normal text-[36px] leading-[40px] text-white tracking-tight">
            Explore Diverse Career Pathways
          </h2>
          <p className="font-ranade font-light text-emerald-100/85 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mt-3">
            Explore diverse career opportunities across the legal, corporate, judicial, and public sectors.
          </p>
        </div>

        {/* Primary Careers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {coreCareers.map((career, index) => {
            const IconComponent = career.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative bg-white border border-emerald-900/10 rounded-xl p-5 hover:shadow-xl hover:shadow-emerald-950/[0.1] transition-all duration-300 overflow-hidden"
              >
                {/* Visual accent glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${career.accent} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 ${career.bg} ${career.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-excon font-medium text-zinc-900 text-base tracking-tight group-hover:text-[#116446] transition-colors duration-200">
                      {career.title}
                    </h3>
                    <p className="font-ranade font-light text-zinc-500 text-xs leading-relaxed mt-1.5">
                      {career.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Opportunities Section - Minimal Space Redesign */}
        <div className="pt-8 border-t border-emerald-800/50 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className="lg:w-1/4 shrink-0">
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-300" />
              <h3 className="font-excon font-medium text-base text-white tracking-tight">
                Other Opportunities
              </h3>
            </div>
            <p className="font-ranade font-light text-xs text-emerald-100/70 leading-relaxed">
              Global pathways and specialized roles open for Shobhit law graduates.
            </p>
          </div>

          <div className="lg:w-3/4 flex flex-wrap gap-2">
            {otherOpportunities.map((opportunity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.015 }}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-800/20 bg-white hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 text-zinc-800 hover:text-[#116446] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <div className="p-0.5 rounded bg-emerald-50 border border-emerald-100 group-hover:bg-white transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-[#116446]" />
                </div>
                <span className="font-ranade font-medium text-xs leading-none">
                  {opportunity}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
