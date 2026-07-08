import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Award, CheckCircle, Shield, Compass, Sparkles } from "lucide-react";
import { CURRICULUM_SEMESTERS } from "../data";

export default function CurriculumViewer() {
  const [activeSem, setActiveSem] = useState(0);

  return (
    <div id="curriculum-interactive-panel" className="bg-white rounded-xl shadow-lg border border-zinc-100 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div>
          <div className="inline-flex items-center space-x-1 bg-izee-red/10 text-izee-red px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3 h-3" />
            <span>Interactive syllabus directory</span>
          </div>
          <h4 className="text-xl font-display font-extrabold text-izee-black tracking-tight uppercase">
            IBM Audited Core Curriculum Explorer
          </h4>
          <p className="text-zinc-500 text-xs mt-0.5 max-w-lg font-sans">
            Select a academic semester below to view core accredited papers and the associated master certifications issued directly by IBM.
          </p>
        </div>

        {/* Semester Buttons */}
        <div className="flex bg-zinc-50 p-1 rounded-lg border border-zinc-100 self-start sm:self-center overflow-x-auto max-w-full">
          {CURRICULUM_SEMESTERS.map((sem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSem(idx)}
              className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                activeSem === idx
                  ? "bg-izee-black text-white shadow-sm"
                  : "text-zinc-500 hover:text-izee-black hover:bg-zinc-100"
              }`}
            >
              Sem {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSem}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Title Semester Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl font-serif text-izee-red font-bold">
                0{activeSem + 1}
              </span>
              <div>
                <h5 className="font-display font-extrabold text-md text-izee-black tracking-tight uppercase">
                  {CURRICULUM_SEMESTERS[activeSem].title}
                </h5>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wide">
                  Standard State University Syllabus & Case Method Studies
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {CURRICULUM_SEMESTERS[activeSem].coreSubjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3.5 bg-zinc-50 hover:bg-zinc-100/50 rounded-lg border border-zinc-100 transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-zinc-400 mt-0.5 group-hover:text-izee-red transition-colors" />
                  <span className="text-xs font-sans text-zinc-700 font-semibold leading-relaxed">
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Credentials/Certificates from IBM */}
          <div className="md:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-5 rounded-lg border border-zinc-200/50 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-indigo-600" />
                <h6 className="font-display font-extrabold text-xs text-indigo-900 tracking-wider uppercase">
                  Associated IBM Credentials
                </h6>
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-relaxed mb-4">
                These specialized competency programs are taught and verified directly by IBM. They award co-branded professional badges.
              </p>

              <div className="space-y-3">
                {CURRICULUM_SEMESTERS[activeSem].certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 bg-white p-3 rounded shadow-xs border border-zinc-200/30">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-zinc-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-3 border-t border-zinc-200">
              <Shield className="w-4 h-4 text-zinc-400" />
              <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest leading-none">
                Verified Global Academic Blueprints 2026-2028
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
