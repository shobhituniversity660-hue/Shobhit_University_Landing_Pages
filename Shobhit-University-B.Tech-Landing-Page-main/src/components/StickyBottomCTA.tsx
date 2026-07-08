import React, { useState, useEffect } from "react";
import { GraduationCap, ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface StickyBottomCTAProps {
  onApply: () => void;
  onDownloadBrochure: () => void;
}

export default function StickyBottomCTA({ onApply, onDownloadBrochure }: StickyBottomCTAProps) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      },
      {
        root: null, // relative to document viewport
        threshold: 0.05, // trigger as soon as 5% of the footer enters the screen
      }
    );

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isFooterInView ? 150 : 0, opacity: isFooterInView ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Pulse indicator & Info */}
        <div className="flex items-center gap-3.5">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-excon font-bold text-xs sm:text-sm text-[#0B1E33] tracking-normal uppercase">
                Admissions 2026-27 Active
              </span>
              <span className="inline bg-amber-100 text-amber-900 text-[10px] font-excon font-bold px-2 py-0.5 rounded-md border border-amber-300">
                Seats Filling Fast
              </span>
            </div>
            <p className="font-ranade font-normal text-[11px] sm:text-xs text-zinc-700 mt-1 leading-normal">
              Aligned to UGC Framework. Secure your seat today.
            </p>
          </div>
        </div>

        {/* Right Side: Dual Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Brochure button */}
          <button
            onClick={onDownloadBrochure}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-50 text-zinc-900 hover:text-black text-xs sm:text-sm font-excon font-bold rounded-full border-2 border-zinc-300 hover:border-zinc-400 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-zinc-600" />
            <span>Brochure</span>
          </button>

          {/* Quick Apply CTA */}
          <button
            onClick={onApply}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#116446] hover:bg-[#0d4e36] text-white text-xs sm:text-sm font-excon font-bold rounded-full transition-all duration-200 shadow-md shadow-[#116446]/20 group active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
