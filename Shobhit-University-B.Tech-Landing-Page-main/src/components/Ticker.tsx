import React from "react";
import { Sparkles, Award, TrendingUp, Coins, BookOpen } from "lucide-react";
import { TICKER_ITEMS } from "../data";

export default function Ticker() {
  const getIcon = (type: string) => {
    switch (type) {
      case "admissions":
        return <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />;
      case "accredited":
        return <Award className="w-4 h-4 text-amber-300 shrink-0" />;
      case "placement":
        return <TrendingUp className="w-4 h-4 text-emerald-200 shrink-0" />;
      case "stipend":
        return <Coins className="w-4 h-4 text-emerald-200 shrink-0" />;
      case "certification":
        return <BookOpen className="w-4 h-4 text-emerald-200 shrink-0" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />;
    }
  };

  // Duplicate items to ensure smooth infinite loop
  const doubledItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div id="ticker-section" className="bg-izee-red text-white py-3 overflow-hidden border-b border-white/10 relative z-50 text-xs font-sans select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubledItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="inline-flex items-center mx-8 space-x-2">
            {getIcon(item.iconType)}
            {item.highlight && (
              <span className="bg-white text-izee-red text-[10px] px-2 py-0.5 rounded font-black tracking-wider uppercase">
                {item.highlight}
              </span>
            )}
            <span className="font-semibold tracking-wide text-[11px] sm:text-xs">
              {item.text}
            </span>
            <span className="text-white/30 mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
