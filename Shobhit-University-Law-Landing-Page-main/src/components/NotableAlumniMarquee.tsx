import React, { useRef, useEffect, useState } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";

const ALUMNI_PICTURES = [
  "https://i.postimg.cc/65Tfd4nL/BG-(10).png",
  "https://i.postimg.cc/dtXmnQ9s/BG-(5).png",
  "https://i.postimg.cc/7PKNGnGy/BG-(6).png",
  "https://i.postimg.cc/9FzYGwZZ/BG-(7).png",
  "https://i.postimg.cc/ZK0xrvpP/BG-(8).png",
  "https://i.postimg.cc/RVqLcJK7/BG-(9).png"
];

export default function NotableAlumniMarquee() {
  // Duplicate images 4 times for seamless infinity looping
  const combinedPictures = [
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES,
    ...ALUMNI_PICTURES
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set initial scroll position to the second set to allow seamless dragging in both directions
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Give a brief moment for layout/mounting so scrollWidth is populated correctly
    const timer = setTimeout(() => {
      const oneSetWidth = container.scrollWidth / 4;
      container.scrollLeft = oneSetWidth;
    }, 120);

    return () => {
      clearTimeout(timer);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    };
  }, []);

  // Frame-by-frame auto scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTime = performance.now();
    const speed = 40; // Pixels per second
    let animationId: number;

    const animate = (time: number) => {
      if (isInteracting) {
        lastTime = time;
        animationId = requestAnimationFrame(animate);
        return;
      }

      const delta = (time - lastTime) / 1000;
      lastTime = time;

      container.scrollLeft += speed * delta;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isInteracting]);

  // Handle loop wrapper on scroll events (covers both drag, native swipe, and auto scroll)
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const oneSetWidth = container.scrollWidth / 4;
    if (oneSetWidth <= 0) return;

    // If we scroll too far right, wrap back left
    if (container.scrollLeft >= oneSetWidth * 2.5) {
      container.scrollLeft -= oneSetWidth;
    }
    // If we scroll too far left, wrap back right
    else if (container.scrollLeft <= oneSetWidth * 0.5) {
      container.scrollLeft += oneSetWidth;
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDownRef.current = true;
    setIsInteracting(true);
    
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const stopDragging = () => {
    if (!isDownRef.current) return;
    isDownRef.current = false;

    // Wait a brief moment before resuming auto scroll for a polished feel
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  // Touch handlers for mobile fingers
  const handleTouchStart = () => {
    setIsInteracting(true);
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  };

  return (
    <section id="notable-alumni" className="py-24 bg-izee-red text-white relative overflow-hidden border-t border-emerald-800/40">
      {/* Scrollbar-none styles and active transition states */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: auto !important;
        }
      `}</style>

      {/* Decorative Blur Background Accents */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-10%] w-[450px] h-[450px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid subtle overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Minimalist Title Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full w-fit mb-4 select-none">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                global achievements
              </span>
            </div>

            <h2 
              style={{ fontSize: "36px", lineHeight: "40px" }}
              className="font-excon font-normal text-white tracking-tight"
            >
              Notable Alumni
            </h2>
 
            <p 
              style={{ fontSize: "14px", lineHeight: "26px" }}
              className="font-ranade font-light text-emerald-50/90 mt-4"
            >
              Discover the inspiring journeys of our distinguished alumni who are driving innovation, leading global organisations, creating entrepreneurial ventures, and making a meaningful impact across industries, academia, public service, and society.
            </p>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer text-emerald-100 hover:text-white transition-colors duration-300">
            <span className="font-excon font-bold text-xs tracking-wider uppercase">
              Join the Legacy Network
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Highlighted Seamless Infinite Marquee Slider Layout */}
        <div className="relative w-full rounded-3xl overflow-hidden select-none bg-gradient-to-b from-white/[0.04] to-transparent p-1.5 border border-white/10">
          
          {/* Subtle Left and Right Vignette Fade Layers */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-izee-red to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-izee-red to-transparent z-10 pointer-events-none" />

          {/* Marquee Track Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full overflow-x-auto scrollbar-none relative cursor-grab active:cursor-grabbing touch-pan-x"
          >
            <div className="flex items-center gap-6 sm:gap-8 py-2.5 w-max px-12">
              {combinedPictures.map((imageSrc, index) => (
                <div 
                  key={`alumni-card-${index}`} 
                  className="flex-shrink-0 relative h-[360px] sm:h-[420px] w-[260px] sm:w-[310px] rounded-2xl overflow-hidden shadow-2xl bg-[#0a1122] border border-white/5 transform hover:scale-[1.03] transition-all duration-350 hover:border-emerald-500/20 active:scale-95"
                >
                  <img
                    src={imageSrc}
                    alt={`Notable alumnus card ${index + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Sheen effect reflection on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent origin-left opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
