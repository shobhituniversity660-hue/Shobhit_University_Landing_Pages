import React, { useState, useEffect } from "react";

const SLIDER_IMAGES = [
  "https://imgh.in/host/rvbo3y",
  "https://imgh.in/host/joqt1x",
  "https://imgh.in/host/mvaku3",
  "https://imgh.in/host/3q3lqs",
  "https://imgh.in/host/xs1mdz",
  "https://imgh.in/host/wxi75k",
  "https://imgh.in/host/1bsxl1",
  "https://imgh.in/host/1mmy03",
  "https://imgh.in/host/7t686b",
  "https://imgh.in/host/aylewu",
  "https://imgh.in/host/9emshe",
  "https://imgh.in/host/wifkse"
];

// Duplicate the creatives to make a seamless loop
const DOUBLE_IMAGES = [...SLIDER_IMAGES, ...SLIDER_IMAGES];

export default function BottomCards() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const innerWidthPercent = (DOUBLE_IMAGES.length / visibleCount) * 100;

  return (
    <div 
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8" 
      id="interactive-hero-cards"
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-inner-container {
          display: flex;
          animation: marquee 35s linear infinite;
        }
        .marquee-inner-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(17,100,70,0.12),0_1px_3px_rgba(0,0,0,0.05)] border border-zinc-200/80 p-6 md:p-8 relative overflow-hidden">
        
        {/* Rankings Header */}
        <div className="mb-6 max-w-2xl">
          <h2 
            style={{ fontSize: "24px", lineHeight: "30px" }}
            className="font-excon font-normal text-zinc-950 tracking-tight"
          >
            Our Rankings
          </h2>
          <p 
            style={{ fontSize: "16px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-500 mt-1"
          >
            Consistently recognized among the top-tier universities for excellence in engineering, research, and technical education.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full rounded-xl relative">
          <div 
            className="marquee-inner-container"
            style={{ width: `${innerWidthPercent}%` }}
          >
            {DOUBLE_IMAGES.map((imgUrl, idx) => (
              <div
                key={idx}
                style={{ width: `${100 / DOUBLE_IMAGES.length}%` }}
                className="px-2 shrink-0"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm group border border-zinc-200/60 bg-zinc-50">
                  <img
                    src={imgUrl}
                    alt={`Campus Gallery item ${(idx % SLIDER_IMAGES.length) + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Premium subtle gloss/overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
