import React from "react";
import { Briefcase, Award, Building2, TrendingUp, Users } from "lucide-react";

const ALL_LOGOS = [
  "https://i.postimg.cc/tgpXh2hf/Frame-1707479991.png",
  "https://i.postimg.cc/PqTtm2Wh/Frame-1707479992.png",
  "https://i.postimg.cc/jjcRvPXF/Frame-1707479993.png",
  "https://i.postimg.cc/TP0TQg9S/Frame-1707479996.png",
  "https://i.postimg.cc/ZqHJjpc2/Frame-1707479997.png",
  "https://i.postimg.cc/rpjqgxj6/Frame-1707479998.png",
  "https://i.postimg.cc/mrjTVCjf/Frame-1707479999.png",
  "https://i.postimg.cc/jjcRvPcr/Frame-1707480000.png",
  "https://i.postimg.cc/43PXwVPg/Frame-1707480001.png",
  "https://i.postimg.cc/xd59gM5f/Frame-1707480002.png",
  "https://i.postimg.cc/VNgz4ngY/Frame-1707480003.png",
  "https://i.postimg.cc/yNj7ncjs/Frame-1707480004.png",
  "https://i.postimg.cc/tgk9DWkC/Frame-1707480006.png",
  "https://i.postimg.cc/zf7qpK7g/Frame-1707480007.png",
  "https://i.postimg.cc/5tgfpLgQ/Frame-1707480008.png"
];

export default function RecruitersVerticalMarquee() {
  // Split logos into two different subsets for variety in each row
  const firstRowLogos = ALL_LOGOS.filter((_, idx) => idx % 2 === 0);
  const secondRowLogos = ALL_LOGOS.filter((_, idx) => idx % 2 !== 0);

  // Repeat the sets to ensure smooth seamless infinite loop on any screen width
  const combinedRow1 = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
  const combinedRow2 = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

  return (
    <section id="placements" className="py-20 bg-white border-t border-zinc-100 relative overflow-hidden">
      {/* Styles for horizontal infinite scroll */}
      <style>{`
        @keyframes scroll-horizontal-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-horizontal-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-horizontal-ltr {
          animation: scroll-horizontal-ltr 35s linear infinite;
        }

        .animate-scroll-horizontal-rtl {
          animation: scroll-horizontal-rtl 35s linear infinite;
        }

        .pause-marquee:hover .animate-scroll-horizontal-ltr,
        .pause-marquee:hover .animate-scroll-horizontal-rtl {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Graphic Accents */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute left-10 top-10 w-64 h-64 bg-amber-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Layout: Two column information & stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest">
                placement partners
              </span>
            </div>

            <h2 
              style={{ fontSize: "24px", lineHeight: "30px" }}
              className="font-excon font-normal text-[#0B1E33] tracking-tight"
            >
              Our Corporate Placement Network
            </h2>

            <p 
              style={{ fontSize: "14px", lineHeight: "26px" }}
              className="font-ranade font-light text-zinc-650 mt-4 max-w-xl"
            >
              At Shobhit University, students benefit from meaningful industry engagement, internship opportunities, corporate interactions, and career guidance designed to prepare them for dynamic business environments.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-5 bg-zinc-50 border border-zinc-200/50 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 group">
              <div className="p-2.5 bg-white rounded-xl shadow-xs shrink-0 border border-zinc-100 group-hover:border-emerald-200 group-hover:bg-emerald-50/20 transition-all duration-300">
                <Award className="w-5 h-5 text-[#007a55]" />
              </div>
              <div>
                <span className="block font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 transition-colors duration-300 group-hover:text-[#007a55]">100 %</span>
                <span className="block font-ranade font-medium text-[11px] sm:text-xs text-zinc-500 mt-1 tracking-wider">
                  Placement Record
                </span>
              </div>
            </div>

            <div className="p-5 bg-zinc-50 border border-zinc-200/50 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 group">
              <div className="p-2.5 bg-white rounded-xl shadow-xs shrink-0 border border-zinc-100 group-hover:border-emerald-200 group-hover:bg-emerald-50/20 transition-all duration-300">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="block font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 transition-colors duration-300 group-hover:text-emerald-600">₹12.5 LPA</span>
                <span className="block font-ranade font-medium text-[11px] sm:text-xs text-zinc-500 mt-1 tracking-wider">
                  Highest Package
                </span>
              </div>
            </div>

            <div className="p-5 bg-zinc-50 border border-zinc-200/50 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 group">
              <div className="p-2.5 bg-white rounded-xl shadow-xs shrink-0 border border-zinc-100 group-hover:border-emerald-200 group-hover:bg-emerald-50/20 transition-all duration-300">
                <Building2 className="w-5 h-5 text-[#007a55]" />
              </div>
              <div>
                <span className="block font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 transition-colors duration-300 group-hover:text-[#007a55]">150+</span>
                <span className="block font-ranade font-medium text-[11px] sm:text-xs text-zinc-500 mt-1 tracking-wider">
                  Corporate Partners
                </span>
              </div>
            </div>

            <div className="p-5 bg-zinc-50 border border-zinc-200/50 rounded-2xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 group">
              <div className="p-2.5 bg-white rounded-xl shadow-xs shrink-0 border border-zinc-100 group-hover:border-emerald-200 group-hover:bg-emerald-50/20 transition-all duration-300">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="block font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 transition-colors duration-300 group-hover:text-emerald-600">350+</span>
                <span className="block font-ranade font-medium text-[11px] sm:text-xs text-zinc-500 mt-1 tracking-wider">
                  Recruiters
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Clean, Full-Width Horizontal Infinite Scroll in Two Rows (Transparent with original PNGs directly) */}
      <div className="relative w-full overflow-hidden select-none py-6 pause-marquee flex flex-col gap-6">
        
        {/* Edge Left/Right Soft Overlay Fades (into white bg) */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left-to-Right Marquee */}
        <div className="w-full overflow-hidden relative">
          <div className="flex w-[200%] items-center gap-6 animate-scroll-horizontal-ltr">
            {combinedRow1.map((logoUrl, index) => (
              <div 
                key={`marquee-row1-logo-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-12 sm:h-16 w-auto transform hover:scale-110 transition-all duration-300"
              >
                <img
                  src={logoUrl}
                  alt={`Placement partner logo row 1-${index + 1}`}
                  className="h-12 sm:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left Marquee */}
        <div className="w-full overflow-hidden relative">
          <div className="flex w-[200%] items-center gap-6 animate-scroll-horizontal-rtl">
            {combinedRow2.map((logoUrl, index) => (
              <div 
                key={`marquee-row2-logo-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-12 sm:h-16 w-auto transform hover:scale-110 transition-all duration-300"
              >
                <img
                  src={logoUrl}
                  alt={`Placement partner logo row 2-${index + 1}`}
                  className="h-12 sm:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
