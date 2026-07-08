import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const PLACEMENT_IMAGES = [
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement4.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement5.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement6.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement7.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement8.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/placement9.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p7.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p8.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p9.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p10.webp",
  "https://www.shobhituniversity.ac.in/assets/img/placements/p11.webp"
];

export default function PlacementGallery() {
  // Duplicate images 4 times for seamless infinity looping
  const combinedImages = [
    ...PLACEMENT_IMAGES,
    ...PLACEMENT_IMAGES,
    ...PLACEMENT_IMAGES,
    ...PLACEMENT_IMAGES
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
    
    const timer = setTimeout(() => {
      const oneSetWidth = container.scrollWidth / 4;
      container.scrollLeft = oneSetWidth;
    }, 120);

    return () => {
      clearTimeout(timer);
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    };
  }, []);

  // Frame-by-frame auto scroll at 40 pixels/sec to match Notable Alumni marquee speed
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

  // Handle loop wrapper on scroll events (covers drag, native swipe, and auto scroll)
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

    // Wait a brief moment before resuming auto scroll
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
    <section id="our-placements-gallery" className="py-16 bg-zinc-50 border-t border-zinc-250/50 relative overflow-hidden">
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

      {/* Decorative ambient background blur lights */}
      <div className="absolute left-1/3 top-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
                Success Stories
              </span>
            </div>
            <h2 style={{ fontSize: "36px", lineHeight: "40px" }} className="font-excon font-normal text-zinc-950 tracking-tight">
              Our Placements
            </h2>
            <p 
              style={{ lineHeight: "26px" }}
              className="font-ranade font-light text-zinc-550 text-sm mt-2 max-w-xl"
            >
              Celebrating outstanding corporate placements of our bright minds across premium international enterprises and pioneer domestic giants.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#007a55] font-ranade text-xs font-semibold uppercase tracking-wider group cursor-default">
            <span>Drag or swipe to explore</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Seamless horizontal sliding carousel container with manual touch drag and swipe support */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Soft left/right gradients to blend edges beautifully */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/60 to-transparent z-10 pointer-events-none" />

        {/* Scrolling rail with drag & touch actions */}
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
          <div className="flex items-center gap-6 py-2.5 w-max px-12">
            {combinedImages.map((imgUrl, idx) => (
              <div
                key={`placement-creative-${idx}`}
                className="group shrink-0 relative aspect-square w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden bg-white shadow-[0_12px_30px_-8px_rgba(0,122,85,0.06),0_1px_3px_rgba(0,0,0,0.02)] border border-zinc-200/60 transition-all duration-500"
              >
                <img
                  src={imgUrl}
                  alt={`Shobhit University Placement Banner ${(idx % PLACEMENT_IMAGES.length) + 1}`}
                  className="w-full h-full object-cover transform scale-[1.005] group-hover:scale-105 transition-all duration-500 ease-out select-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Premium hover overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
