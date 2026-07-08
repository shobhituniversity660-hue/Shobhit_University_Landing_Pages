import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Users, Award, ShieldCheck, CheckSquare, Search, Landmark } from "lucide-react";
import { PLACEMENT_STATS } from "../data";

export default function PlacementStats() {
  const [selectedSector, setSelectedSector] = useState("all");

  const sectors = [
    { id: "all", name: "All Recruiters" },
    { id: "consulting", name: "Management consulting" },
    { id: "analytics", name: "Data Science & AI" },
    { id: "bfsi", name: "FinTech & Banking" },
  ];

  const filteredRecruiters = PLACEMENT_STATS.topRecruiters.filter((rec) => {
    if (selectedSector === "all") return true;
    if (selectedSector === "consulting") return ["KPMG", "Capgemini"].includes(rec.name);
    if (selectedSector === "analytics") return ["IBM", "Infosys", "Wipro"].includes(rec.name);
    if (selectedSector === "bfsi") return ["Razorpay", "HDFC Bank", "Amazon"].includes(rec.name);
    return true;
  });

  const getSectorAvgSalary = () => {
    switch (selectedSector) {
      case "consulting": return "9.5 LPA";
      case "analytics": return "10.2 LPA";
      case "bfsi": return "11.0 LPA";
      default: return "8.2 LPA";
    }
  };

  return (
    <div id="placement-interactive-panel" className="bg-white rounded-xl shadow-lg border border-zinc-100 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div>
          <div className="inline-flex items-center space-x-1 bg-cyan-100 text-cyan-600 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3 h-3" />
            <span>Interactive Placement Cohorts</span>
          </div>
          <h4 className="text-xl font-display font-extrabold text-izee-black tracking-tight uppercase">
            Outstanding Placement Intelligence
          </h4>
          <p className="text-zinc-500 text-xs mt-0.5 max-w-lg font-sans">
            Filter recruiter sectors to see who hires from our cohorts, including corporate partner insights and salary indices.
          </p>
        </div>

        {/* Sector filtering */}
        <div className="flex flex-wrap gap-1 bg-zinc-50 p-1 rounded-lg border border-zinc-100">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSector(sec.id)}
              className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === sec.id
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "text-zinc-500 hover:text-izee-black hover:bg-zinc-100"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stats Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "MAX ACADEMIC SALARY", value: PLACEMENT_STATS.maxPackage, desc: "Acre-vetted top tier placement", icon: <Award className="w-4 h-4 text-amber-500" /> },
          { label: "AVERAGE STARTING SALARY", value: getSectorAvgSalary(), desc: `${selectedSector === "all" ? "Whole cohort index" : "Selected sector index"}`, icon: <TrendingUp className="w-4 h-4 text-cyan-500" /> },
          { label: "CORPORATE RECRUITERS", value: PLACEMENT_STATS.recruiters, desc: "Sourcing partnerships", icon: <Users className="w-4 h-4 text-indigo-500" /> },
          { label: "VERIFIED PLACEMENT SUCCESS", value: PLACEMENT_STATS.placementRate, desc: "Accredited placement records", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
        ].map((stat, idx) => (
          <div key={idx} className="bg-zinc-50/50 hover:bg-zinc-50 p-4 rounded-xl border border-zinc-100 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-extrabold text-zinc-400 tracking-wider uppercase">
                {stat.label}
              </span>
              {stat.icon}
            </div>
            <div>
              <span className="block font-display font-black text-2xl text-izee-black tracking-tight">
                {stat.value}
              </span>
              <span className="block text-[10px] text-zinc-500 font-sans mt-0.5 leading-none">
                {stat.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter Showcase */}
      <div className="space-y-3 pt-2">
        <h5 className="text-[10px] font-extrabold text-zinc-400 tracking-widest uppercase text-center">
          Key Sourcing Partners (Active in This Sector)
        </h5>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredRecruiters.map((rec, idx) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="bg-white p-3.5 rounded-lg border border-zinc-200/50 flex items-center justify-center space-x-2.5 shadow-xs hover:border-zinc-300 transition-colors"
              >
                <span className="text-xl">{rec.logo}</span>
                <span className="font-display font-bold text-xs text-izee-black">
                  {rec.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
