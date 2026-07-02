import React, { useState } from "react";
import { Train, Car, Landmark, Plane, ArrowUpRight, Compass, Clock, MapPin, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConnectivityOption {
  id: string;
  num: string;
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  description: string;
  distanceStat: {
    value: string;
    label: string;
  };
  linkStat: string;
  visualGradient: string;
  gridLabel: string;
  metricLabel: string;
  bgGlass: string;
  glowColor: string;
}

const CONNECTIVITY_DATA: ConnectivityOption[] = [
  {
    id: "rrts",
    num: "01",
    icon: <Train className="w-8 h-8 text-emerald-400" />,
    label: "By RRTS",
    subtitle: "Delhi–Meerut Regional Rapid Transit System (RRTS)",
    description: "The Delhi–Meerut Regional Rapid Transit System (RRTS) has significantly enhanced accessibility to the campus. Modipuram RRTS Station is situated approximately 200 metres from the campus, placing the University within immediate reach of high-speed regional transit. The Delhi–Modipuram journey now takes nearly one hour, making daily commuting faster and more convenient.",
    distanceStat: { value: "200m", label: "To Main Campus Gate" },
    linkStat: "Modipuram RRTS Station",
    visualGradient: "from-emerald-950 via-zinc-900 to-zinc-950",
    gridLabel: "DELHI–MEERUT RRTS LINE",
    metricLabel: "~1 Hour Daily Commute",
    bgGlass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    glowColor: "rgba(16,185,129,0.15)"
  },
  {
    id: "road",
    num: "02",
    icon: <Car className="w-8 h-8 text-amber-400" />,
    label: "By Road",
    subtitle: "NH-58 Expressway Corridor",
    description: "Strategically located on NH-58, the campus enjoys direct road connectivity with Delhi, Haridwar, Dehradun, and other major cities across North India. The modern expressway network ensures efficient and comfortable travel.",
    distanceStat: { value: "Direct", label: "NH-58 Location" },
    linkStat: "National Highway 58",
    visualGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    gridLabel: "EXPRESSWAY ROUTE",
    metricLabel: "Direct National Highway Access",
    bgGlass: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    glowColor: "rgba(245,158,11,0.15)"
  },
  {
    id: "rail",
    num: "03",
    icon: <Landmark className="w-8 h-8 text-indigo-400" />,
    label: "By Rail",
    subtitle: "Dual Railway Connectivity Hubs",
    description: "Meerut City Junction railway station and Meerut Cantt railway station offer regular rail services to Delhi and major cities across the country. The campus is easily accessible from both stations through local transport services.",
    distanceStat: { value: "Convenient", label: "Multi-station access" },
    linkStat: "Meerut City / Cantt",
    visualGradient: "from-indigo-950 via-zinc-900 to-zinc-950",
    gridLabel: "NORTHERN RAILWAY GRID",
    metricLabel: "Dual-hub Station Connectivity",
    bgGlass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    glowColor: "rgba(99,102,241,0.15)"
  },
  {
    id: "air",
    num: "04",
    icon: <Plane className="w-8 h-8 text-sky-400" />,
    label: "By Air",
    subtitle: "International Gateway Access",
    description: "Indira Gandhi International Airport, Delhi, serves as the nearest international airport, located approximately 90 km from the campus. Seamless access through the Delhi–Meerut Expressway has substantially reduced travel time, ensuring seamless access for domestic and international visitors.",
    distanceStat: { value: "90 km", label: "To Delhi Airport (DEL)" },
    linkStat: "Delhi Airport (DEL)",
    visualGradient: "from-sky-950 via-zinc-900 to-zinc-950",
    gridLabel: "GLOBAL FLYWAY ROUTE",
    metricLabel: "Indira Gandhi Int'l Airport",
    bgGlass: "bg-sky-500/10 border-sky-500/20 text-sky-300",
    glowColor: "rgba(14,165,233,0.15)"
  },
];

export default function ConnectivitySection() {
  const [selectedId, setSelectedId] = useState<string>("rrts");
  const activeOption = CONNECTIVITY_DATA.find((opt) => opt.id === selectedId) || CONNECTIVITY_DATA[0];

  return (
    <section id="connectivity-and-access" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden">
      {/* Abstract Background Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Area and Campus Navigation Badges */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 select-none">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              STRATEGIC GEOGRAPHIC CORRIDOR
            </span>
          </div>

          <h2 
            style={{ fontSize: "36px", lineHeight: "40px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight max-w-3xl"
          >
            Connectivity and Access
          </h2>

          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-500 text-center mt-4 max-w-2xl"
          >
            Strategically positioned within the Golden Triangle of North India, our campus combines high-speed mass transit, major expressway connections, and multiple regional transit gateways.
          </p>
        </div>

        {/* Combined Single Premium Horizontal Card */}
        <div className="bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Premium Square Image Container */}
            <div className="lg:col-span-5 flex">
              <div className="w-full aspect-square relative rounded-2xl overflow-hidden group shadow-md border border-zinc-200/50">
                <img
                  src="https://imgh.in/host/t2zvny"
                  alt="Modern Rapid Transit and Highway Connectivity"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Column: Interactive Content and Selection Tabs */}
            <div className="lg:col-span-7 flex flex-col justify-between py-1.5">
              
              {/* Top part: Selection segment tabs */}
              <div className="mb-8">
                <span className="font-excon font-semibold text-[11px] text-zinc-400 tracking-wider uppercase block mb-3">
                  Select Transportation Mode
                </span>
                <div className="p-1 bg-zinc-100/80 border border-zinc-200/40 rounded-2xl grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap gap-1">
                  {CONNECTIVITY_DATA.map((opt) => {
                    const isSelected = opt.id === selectedId;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedId(opt.id)}
                        className={`relative py-3 px-4 rounded-xl font-excon text-xs sm:text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 sm:flex-1 cursor-pointer select-none ${
                          isSelected
                            ? "bg-white text-[#0B1E33] shadow-xs border border-zinc-200/50"
                            : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/30"
                        }`}
                      >
                        <span className="shrink-0">{React.cloneElement(opt.icon as React.ReactElement, { className: "w-4 h-4" })}</span>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Middle part: Main details with smooth transitions */}
              <div className="flex-1 flex flex-col justify-center min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200/50 rounded-md mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-excon text-[10px] font-medium text-emerald-700 uppercase tracking-wider">
                          ACTIVE PATHWAY
                        </span>
                      </div>
                      <h3 className="font-excon font-bold text-xl sm:text-2xl text-[#0B1E33] tracking-tight">
                        {activeOption.subtitle}
                      </h3>
                    </div>

                    <p className="font-ranade font-light text-zinc-600 text-sm sm:text-[15px] leading-relaxed">
                      {activeOption.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom part: Stats block */}
              <div className="border-t border-zinc-100 mt-8 pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center gap-3.5 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0B1E33]/5 flex items-center justify-center shrink-0">
                        <Compass className="w-5 h-5 text-[#0B1E33]" />
                      </div>
                      <div>
                        <span className="block font-ranade text-[11px] text-zinc-400 uppercase tracking-wider">
                          Transit Corridor / Hub
                        </span>
                        <span className="block font-excon font-semibold text-xs sm:text-sm text-[#0B1E33]">
                          {activeOption.linkStat}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="w-10 h-10 rounded-lg bg-[#0B1E33]/5 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#0B1E33]" />
                      </div>
                      <div>
                        <span className="block font-ranade text-[11px] text-zinc-400 uppercase tracking-wider">
                          {activeOption.distanceStat.label}
                        </span>
                        <span className="block font-excon font-semibold text-xs sm:text-sm text-[#0B1E33]">
                          {activeOption.distanceStat.value}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
