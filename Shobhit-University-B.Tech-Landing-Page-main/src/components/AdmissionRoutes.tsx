import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, FileText, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

interface AdmissionRoutesProps {
  onApply: (route: string) => void;
}

export default function AdmissionRoutes({ onApply }: AdmissionRoutesProps) {
  const routes = [
    {
      id: "sunet",
      icon: GraduationCap,
      badge: "Route 01",
      title: "SUNET",
      subtitle: "Shobhit University National Entrance & Scholarship Test",
      bullets: [
        "Primary admission pathway for most programmes",
        "Programme-wise aptitude assessment",
        "Merit-based admission consideration",
        "Scholarship eligibility linked to SUNET score"
      ],
      description: "Admission through SUNET is subject to the fulfilment of prescribed eligibility criteria, performance in the entrance test, document verification, and counselling or personal interaction, wherever applicable.",
      buttonText: "Register For SUNET",
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "bg-emerald-500 text-emerald-700 border-emerald-500/20"
    },
    {
      id: "national-score",
      icon: Award,
      badge: "Route 02",
      title: "National Score Route",
      subtitle: "Recognised National-Level Entrance Scores Accepted, Wherever Applicable",
      bullets: [
        "Common University Entrance Test (CUET)",
        "Joint Entrance Examination (JEE Main)",
        "Other recognised programme-relevant scores"
      ],
      description: "",
      buttonText: "Apply Now",
      color: "from-blue-500/10 to-indigo-500/10",
      accent: "bg-blue-500 text-blue-700 border-blue-500/20"
    },
    {
      id: "merit-based",
      icon: FileText,
      badge: "Route 03",
      title: "Merit-Based Admission",
      subtitle: "Academic Merit as a Recognised Admission Pathway",
      intro: "For selected programmes where entrance assessment is not mandatory, admission may also be considered on the basis of:",
      bullets: [
        "Qualifying examination performance (minimum 75% marks, where applicable)",
        "Academic consistency",
        "Programme eligibility",
        "Direct merit review in selected programmes"
      ],
      description: "or any other area of demonstrated excellence considered relevant by the University.",
      buttonText: "Apply Now",
      color: "from-amber-500/10 to-orange-500/10",
      accent: "bg-amber-500 text-amber-700 border-amber-500/20"
    },
    {
      id: "exceptional-merit",
      icon: Sparkles,
      badge: "Route 04",
      title: "Exceptional Merit / Distinction Route",
      subtitle: "Recognition of Outstanding Achievement",
      intro: "Candidates with demonstrated distinction may be considered on the basis of:",
      bullets: [
        "Extraordinary achievement in sports",
        "Innovation and Creativity",
        "Arts / cultural excellence",
        "Research aptitude",
        "Leadership and Social Impact"
      ],
      description: "Such candidates may be considered for direct evaluation and admission under the Exceptional Merit Route, wherever applicable.",
      buttonText: "Apply Now",
      color: "from-purple-500/10 to-pink-500/10",
      accent: "bg-purple-500 text-purple-700 border-purple-500/20"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="admission-procedure-and-routes">
      {/* Absolute background visual details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-izee-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto select-none">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Enrollment 2026
            </span>
          </div>
          <h2 
            className="font-excon font-normal text-[36px] leading-[40px] text-izee-black tracking-tight"
          >
            Admission Procedure And Pathways
          </h2>
          <div className="h-1 w-20 bg-izee-red mx-auto my-4 rounded-full" />
          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-600 max-w-3xl mx-auto"
          >
            Admission to various undergraduate, postgraduate, professional, technical, and interdisciplinary programmes are offered through a structured multi-pathway framework
            designed to ensure accessibility, merit recognition, and academic suitability.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-izee-red/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top gradient hover layer */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-izee-red transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center opacity-0 group-hover:opacity-100" />
                
                {/* Header Gradient Top Decorator */}
                <div className={`p-6 bg-gradient-to-br ${route.color} border-b border-zinc-100 flex flex-col justify-between h-48 relative overflow-hidden`}>
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white rounded-xl border border-zinc-100 shadow-sm text-izee-red transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-excon font-extrabold tracking-widest text-zinc-400 uppercase">
                      {route.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-excon font-medium text-lg text-izee-black tracking-tight leading-tight mb-1">
                      {route.title}
                    </h3>
                    <p className="font-ranade font-light text-[11px] text-black leading-snug line-clamp-2">
                      {route.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content list & descriptive text */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6 relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    {/* Optional Intro Paragraph */}
                    {route.intro && (
                      <p className="font-ranade font-normal text-[12px] text-black leading-normal">
                        {route.intro}
                      </p>
                    )}

                    {/* Bullet List */}
                    <ul className="space-y-2.5">
                      {route.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-black font-ranade font-normal text-xs leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-izee-red shrink-0 mt-0.5 mr-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Description text */}
                    {route.description && (
                      <p className="font-ranade font-normal text-[12px] text-black italic leading-relaxed border-t border-zinc-100 pt-3.5">
                        {route.description}
                      </p>
                    )}
                  </div>

                  {/* Call to action button */}
                  <button
                    onClick={() => onApply(route.title)}
                    className="w-full mt-auto py-3 px-4 rounded-xl font-excon font-bold text-[10.5px] uppercase tracking-wider bg-zinc-50 hover:bg-izee-red border border-zinc-200/80 hover:border-izee-red hover:text-white text-izee-black shadow-sm group-hover:shadow transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer relative z-10"
                  >
                    <span>{route.buttonText}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
