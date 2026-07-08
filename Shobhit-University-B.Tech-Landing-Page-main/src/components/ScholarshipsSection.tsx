import React, { useState } from "react";
import { Award, Sparkles, BookOpen, HelpCircle, Heart, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ScholarshipTab = "merit" | "sunet" | "women" | "sports";

export default function ScholarshipsSection() {
  const [activeTab, setActiveTab] = useState<ScholarshipTab>("merit");

  const scholarshipData = {
    merit: {
      id: "merit" as ScholarshipTab,
      tabName: "Academic Merit",
      title: "Academic Merit Scholarship",
      subtitle: "Based on Board / University qualifying examination marks",
      icon: BookOpen,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      themeColor: "emerald",
      badgeText: "Merit-Based",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      accentBg: "from-emerald-500/5 to-transparent",
      tagline: "Applicable to eligible UG and PG candidates to recognize outstanding academic achievements.",
      highlightValue: "Up to 100% Scholarship",
      highlightLabel: "On Tuition Fee",
      highlightBg: "from-emerald-50 to-emerald-100/30 border-emerald-100 text-emerald-800",
      table: {
        headers: ["Marks in Qualifying Exam", "Scholarship on Tuition Fee"],
        rows: [
          ["75% – 80%", "25% Scholarship"],
          ["81% – 90%", "50% Scholarship"],
          ["91% – 95%", "75% Scholarship"],
          ["Above 95%", "100% Scholarship"],
        ],
      },
      points: [
        "Scholarship applies to the academic tuition fee.",
        "Candidates must maintain good academic standing for continuation.",
        "Applicable for both Undergraduate and Postgraduate programs.",
      ],
    },
    sunet: {
      id: "sunet" as ScholarshipTab,
      tabName: "SUNET Entrance",
      title: "SUNET Score-Based Scholarship",
      subtitle: "Shobhit University National Entrance Test results",
      icon: Sparkles,
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
      themeColor: "amber",
      badgeText: "Entrance Test",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      accentBg: "from-amber-500/5 to-transparent",
      tagline: "Awarded based on the candidate's performance in the university's entrance examination.",
      highlightValue: "Up to 50% Scholarship",
      highlightLabel: "On First-Year Tuition",
      highlightBg: "from-amber-50 to-amber-100/30 border-amber-100 text-amber-855",
      table: {
        headers: ["SUNET Score Range", "Scholarship on Tuition Fee"],
        rows: [
          ["75% – 84%", "20% Scholarship"],
          ["85% – 94%", "30% Scholarship"],
          ["95% and Above", "50% Scholarship"],
        ],
      },
      points: [
        "Applicable on the first-year tuition fee only.",
        "Seats under this scheme are highly limited.",
        "Allotment is strictly on a first-confirmed-admission basis.",
      ],
    },
    women: {
      id: "women" as ScholarshipTab,
      tabName: "Women Empowerment",
      title: "Adarsh Women Empowerment Scholarship",
      subtitle: "Supporting and promoting women in higher education",
      icon: Heart,
      iconBg: "bg-pink-50 text-pink-500 border-pink-100",
      themeColor: "pink",
      badgeText: "Women Empowerment",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200/60",
      accentBg: "from-pink-500/5 to-transparent",
      tagline: "Exclusive initiative to support and empower meritorious girl candidates pursuing higher studies.",
      highlightValue: "20% of Tuition Fee",
      highlightLabel: "For Entire Programme",
      highlightBg: "from-pink-50 to-pink-100/30 border-pink-100 text-pink-855",
      eligibility: {
        title: "Key Eligibility Criteria",
        desc: "Open to all girl candidates applying for any UG or PG programme who have secured 60% or above marks in the qualifying examination.",
      },
      points: [
        "Valid for all UG and PG programmes offered by the university.",
        "Requires a minimum of 60% aggregate marks in the qualifying exam.",
        "Fosters and enables girl students to achieve educational heights.",
      ],
    },
    sports: {
      id: "sports" as ScholarshipTab,
      tabName: "Sports Excellence",
      title: "Sports Excellence Scholarship",
      subtitle: "Honoring state, national, & international athletes",
      icon: Trophy,
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      themeColor: "blue",
      badgeText: "Sports Excellence",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      accentBg: "from-blue-500/5 to-transparent",
      tagline: "Dedicated scholarships for athletic achievers in sports recognized by the Indian Olympic Association.",
      highlightValue: "Up to 50% Scholarship",
      highlightLabel: "Based on Level",
      highlightBg: "from-blue-50 to-blue-100/30 border-blue-100 text-blue-800",
      table: {
        headers: ["Level of Achievement", "Scholarship on Tuition Fee"],
        rows: [
          ["State Level", "20% Scholarship"],
          ["National Level", "30% Scholarship"],
          ["International Level", "50% Scholarship"],
        ],
      },
      points: [
        "Candidates must secure 1st, 2nd, or 3rd position at their respective level.",
        "Sports must be recognized by the Indian Olympic Association (IOA).",
        "Applicable across any UG or PG programme.",
      ],
    },
  };

  const activeData = scholarshipData[activeTab];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden" id="scholarships">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-izee-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto select-none">
            <Award className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Financial Support
            </span>
          </div>
          
          <h2 
            style={{ fontSize: "36px", lineHeight: "40px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight mb-4"
          >
            Scholarships to Support Your Academic Journey
          </h2>
          <div className="h-1 w-20 bg-izee-red mx-auto my-4 rounded-full" />
          
          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-600 max-w-2xl mx-auto"
          >
            Shobhit University offers several major scholarship pathways to recognize merit, promote women's empowerment, and honor athletic distinction.
          </p>
        </div>

        {/* 4 Separate Clean, Modern Tabs */}
        <div className="bg-zinc-200/35 border border-zinc-200/60 p-1.5 rounded-2xl w-full max-w-4xl mx-auto mb-10 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
            {Object.values(scholarshipData).map((item) => {
              const IconComponent = item.icon;
              const isSelected = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="relative py-3.5 px-3 sm:px-4 rounded-xl font-excon text-[11.5px] uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-start md:justify-center gap-2 sm:gap-2.5 cursor-pointer select-none focus:outline-none"
                >
                  {/* Sliding active indicator underlay */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeScholarshipTab"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50 z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className={`relative z-10 p-1.5 rounded-lg border shrink-0 transition-all duration-300 ${item.iconBg} ${isSelected ? "scale-105" : "opacity-75"}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </span>
                  
                  <span className={`relative z-10 text-left transition-colors duration-250 ${
                    isSelected ? "text-zinc-950 font-bold" : "text-zinc-500 hover:text-zinc-800"
                  }`}>
                    {item.tabName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Showcase Content Card */}
        <div className="max-w-4xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-zinc-200/75 p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[460px]"
            >
              {/* Visual background gradient corner accent */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${activeData.accentBg} pointer-events-none rounded-tr-2xl`} />

              <div>
                {/* Category and Title */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className={`inline-block text-[10px] font-excon font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${activeData.badgeColor}`}>
                    {activeData.badgeText}
                  </span>
                </div>

                <h3 
                  style={{ fontSize: "24px", lineHeight: "30px" }}
                  className="font-excon font-normal text-zinc-950 tracking-tight"
                >
                  {activeData.title}
                </h3>
                
                <p className="font-ranade font-light text-sm text-zinc-500 italic mt-1.5">
                  {activeData.subtitle}
                </p>

                <p 
                  style={{ fontSize: "14px", lineHeight: "24px" }}
                  className="font-ranade font-light text-zinc-600 mt-4 mb-6 border-l-2 border-zinc-300 pl-4"
                >
                  {activeData.tagline}
                </p>

                {/* Highlight Callout Block */}
                <div className={`bg-gradient-to-r ${activeData.highlightBg} border rounded-xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}>
                  <div>
                    <div className="font-excon font-medium text-[10px] uppercase tracking-widest text-zinc-500">
                      {activeData.highlightLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-excon mt-0.5">
                      {activeData.highlightValue}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-excon font-semibold bg-white/70 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg w-fit shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Admission 2026-27 Active
                  </div>
                </div>

                {/* Table (if exists) or Special criteria text */}
                {activeData.table && (
                  <div className="overflow-hidden rounded-xl border border-zinc-150 bg-zinc-50/20 mb-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-150">
                          <th className="p-3.5 font-excon font-medium text-xs text-zinc-600 uppercase tracking-wider w-1/2">
                            {activeData.table.headers[0]}
                          </th>
                          <th className="p-3.5 font-excon font-medium text-xs text-zinc-600 uppercase tracking-wider w-1/2">
                            {activeData.table.headers[1]}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 font-ranade text-zinc-700 text-sm">
                        {activeData.table.rows.map((row, idx) => {
                          const isLast = idx === activeData.table!.rows.length - 1;
                          return (
                            <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                              <td className={`p-3.5 font-light ${isLast ? "font-medium text-zinc-850" : "text-zinc-600"}`}>
                                {row[0]}
                              </td>
                              <td className={`p-3.5 font-semibold ${isLast ? "text-emerald-700 font-bold bg-emerald-500/5" : "text-zinc-800"}`}>
                                {row[1]}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeData.eligibility && (
                  <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-5 mb-6">
                    <h4 className="font-excon font-medium text-xs uppercase tracking-wider text-zinc-700 mb-1">
                      {activeData.eligibility.title}
                    </h4>
                    <p 
                      style={{ fontSize: "13.5px", lineHeight: "22px" }}
                      className="font-ranade font-light text-zinc-600"
                    >
                      {activeData.eligibility.desc}
                    </p>
                  </div>
                )}

                {/* Standard Terms & Guidelines */}
                <div className="mt-2">
                  <h4 className="font-excon font-medium text-xs uppercase tracking-wider text-zinc-400 mb-3">
                    Terms & Guidelines
                  </h4>
                  <ul className="space-y-2.5">
                    {activeData.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-650 font-ranade font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card CTA */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-400 font-ranade font-light">
                  *Requires valid documentary proof at the time of admission.
                </div>
                <a
                  href="#admissions-inquiry"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#116446] hover:bg-[#0d4d36] text-white font-excon text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center"
                >
                  Check Eligibility
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Advisory / Guidelines Footer Note */}
        <div className="mx-auto w-fit max-w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 bg-zinc-100/60 border border-zinc-200/40 rounded-xl px-6 py-3.5 mt-10">
          <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <p 
            style={{ fontSize: "13.5px" }}
            className="font-ranade font-light text-zinc-500 italic text-center sm:text-left"
          >
            Scholarships are subject to the university's eligibility criteria and admission guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
