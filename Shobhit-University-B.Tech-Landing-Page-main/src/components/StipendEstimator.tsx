import React, { useState } from "react";
import { Coins, GraduationCap, ChevronRight, Briefcase, Star, Sparkles } from "lucide-react";

export default function StipendEstimator() {
  const [cgpa, setCgpa] = useState(8.5);
  const [track, setTrack] = useState("analytics");

  const calculateStipend = (cgpaValue: number, trackValue: string) => {
    let base = 15000;
    // Track modifiers
    if (trackValue === "analytics") base = 17000;
    if (trackValue === "fintech") base = 18000;
    if (trackValue === "operations") base = 16000;

    // CGPA modifiers
    if (cgpaValue >= 9.5) return base + 7000;
    if (cgpaValue >= 8.5) return base + 4000;
    if (cgpaValue >= 7.5) return base + 2000;
    return base;
  };

  const expectedStipend = calculateStipend(cgpa, track);

  return (
    <div id="stipend-interactive-panel" className="bg-white rounded-xl shadow-lg border border-zinc-100 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div>
          <div className="inline-flex items-center space-x-1 bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
            <Coins className="w-3 h-3" />
            <span>Interactive Stipend Estimator</span>
          </div>
          <h4 className="text-xl font-display font-extrabold text-izee-black tracking-tight uppercase">
            Earn while you Learn Scholarship Calculator
          </h4>
          <p className="text-zinc-500 text-xs mt-0.5 max-w-lg font-sans">
            Fine-tune your predicted cgpa score and chosen engineering/business stream below to calculate your industry-assured stipends from Semester 3.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="md:col-span-7 space-y-5">
          {/* Track selection */}
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
              Select Specialization Track
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: "analytics", label: "Analytics & AI", color: "border-purple-200 focus:ring-purple-200" },
                { id: "fintech", label: "FinTech & Banking", color: "border-pink-200 focus:ring-pink-200" },
                { id: "operations", label: "Cloud Ops", color: "border-blue-200 focus:ring-blue-200" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTrack(t.id)}
                  className={`px-3 py-3 border text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                    track === t.id
                      ? "border-izee-red bg-izee-red/[0.02] text-izee-red ring-2 ring-izee-red/10"
                      : "border-zinc-200 hover:border-zinc-300 text-zinc-500 bg-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* CGPA Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                Predicted CGPA Score:
              </span>
              <span className="font-display font-extrabold text-lg text-pink-600">
                {cgpa.toFixed(1)} / 10.0
              </span>
            </div>
            <input
              type="range"
              min="6.0"
              max="10.0"
              step="0.1"
              value={cgpa}
              onChange={(e) => setCgpa(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
              <span>MIN ACCEPTED (6.0)</span>
              <span>FIRST CLASS (8.0)</span>
              <span>MERIT LIST (9.5+)</span>
            </div>
          </div>
        </div>

        {/* Estimation Results Panel */}
        <div className="md:col-span-5 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-orange-500/5 p-6 rounded-lg border border-pink-500/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Briefcase className="w-5 h-5 text-pink-600" />
              <h5 className="font-display font-extrabold text-xs text-pink-900 tracking-wider uppercase">
                Estimated Corporate stipend
              </h5>
            </div>
            
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-pink-600/70 tracking-widest uppercase">
                Guaranteed Starting Rate
              </span>
              <h6 className="font-display font-black text-3xl text-zinc-900 leading-none">
                ₹{expectedStipend.toLocaleString("en-IN")}
                <span className="text-sm font-bold text-zinc-500 lowercase-none"> / month</span>
              </h6>
            </div>

            <div className="mt-4 pt-4 border-t border-pink-500/10 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-zinc-600">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Gain <strong>12 Months</strong> of proven Indian corporate history</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-600">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Deducts up to <strong>₹3,000,000</strong> from living cost</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded border border-pink-500/10 text-center">
            <span className="block text-[8px] font-extrabold text-zinc-400 tracking-widest uppercase mb-1">
              Primary Academic Placement Partners
            </span>
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold text-zinc-500">
              <span className="bg-zinc-50 py-1 rounded">IBM</span>
              <span className="bg-zinc-50 py-1 rounded">KPMG</span>
              <span className="bg-zinc-50 py-1 rounded">Wipro</span>
              <span className="bg-zinc-50 py-1 rounded">Infosys</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
