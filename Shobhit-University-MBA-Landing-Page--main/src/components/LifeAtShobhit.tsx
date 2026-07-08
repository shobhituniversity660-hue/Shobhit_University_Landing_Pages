import React, { useRef, useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface LifeImageItem {
  url: string;
  category: string;
  title: string;
}

const LIFE_IMAGES: LifeImageItem[] = [
  {
    url: "https://live.staticflickr.com/65535/55088381215_7fda0bbbcf_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 7"
  },
  {
    url: "https://live.staticflickr.com/65535/55130314438_972f0b4940_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 3"
  },
  {
    url: "https://live.staticflickr.com/65535/54916199971_dd90967cb6_b.jpg",
    category: "CAMPUS",
    title: "Campus Life 10"
  },
  {
    url: "https://live.staticflickr.com/65535/55131689413_23d96ff7cd_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 1"
  },
  {
    url: "https://live.staticflickr.com/65535/55088276929_99b4f7007d_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 8"
  },
  {
    url: "https://live.staticflickr.com/65535/55130198598_6eda331857_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 4"
  },
  {
    url: "https://live.staticflickr.com/65535/55088265354_e5b4b63ea7_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 11"
  },
  {
    url: "https://live.staticflickr.com/65535/55130316428_2be1f68799_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 2"
  },
  {
    url: "https://live.staticflickr.com/65535/55082598058_5f404aabb0_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 9"
  },
  {
    url: "https://live.staticflickr.com/65535/55130249074_e48d28116e_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 5"
  },
  {
    url: "https://live.staticflickr.com/65535/55088015856_e25b5e4730_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 12"
  },
  {
    url: "https://live.staticflickr.com/65535/55100740375_3990d3a4ec_k.jpg",
    category: "CAMPUS",
    title: "Campus Life 6"
  }
];

export default function LifeAtShobhit() {
  // Duplicate images 4 times for seamless infinity looping
  const combinedImages = [
    ...LIFE_IMAGES,
    ...LIFE_IMAGES,
    ...LIFE_IMAGES,
    ...LIFE_IMAGES
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

  // Frame-by-frame auto scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTime = performance.now();
    const speed = 40; // Pixels per second to match Notable Alumni marquee speed
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
    <section id="life-at-shobhit" className="py-24 bg-white text-zinc-950 relative overflow-hidden border-t border-zinc-100">
      {/* Scrollbar-none style block */}
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

      {/* Background Soft Accents */}
      <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-[#007a55]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
        {/* Header content precisely following prompt labels */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Student Experiences
            </span>
          </div>

          <h2 
            style={{ fontSize: "36px", lineHeight: "40px" }}
            className="font-excon font-normal text-zinc-900 tracking-tight"
          >
            Life @ Shobhit University
          </h2>

          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-500 mt-4"
          >
            A campus where academics, creativity, sports, and student experiences come together to create an enriching and memorable university journey.
          </p>
        </div>
      </div>

      {/* Full-width carousel scroll track with manual touch drag and swipe support */}
      <div className="relative w-full overflow-hidden select-none py-2">
        {/* Soft edge blur overlays to blend in and out seamlessly */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

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
            {combinedImages.map((item, index) => (
              <div
                key={`life-img-${index}`}
                className="group shrink-0 relative aspect-square w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-150 transition-all duration-500"
              >
                {/* Image itself */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
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
