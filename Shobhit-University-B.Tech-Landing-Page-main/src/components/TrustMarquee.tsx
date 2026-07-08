import React from "react";

interface TrustItem {
  id: string;
  title: string;
  subtitle?: string;
  logo: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    id: "trust-naac",
    title: "Shobhit Institute of Engineering & Technology, Meerut",
    subtitle: "(NAAC) Accredited Grade 'A'",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition11.png",
  },
  {
    id: "trust-shobhit",
    title: "Shobhit Institute of Engineering & Technology, Meerut",
    subtitle: "Deemed to be University",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition01.png",
  },
  {
    id: "trust-aicte",
    title: "AICTE Approval",
    subtitle: "All India Council for Technical Education",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition03.png",
  },
  {
    id: "trust-ugc",
    title: "12-B Status",
    subtitle: "by University Grants Commission (UGC)",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition01.png",
  },
  {
    id: "trust-aiu",
    title: "Association of Indian Universities (AIU)",
    subtitle: "Member Organization Link",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition10.png",
  },
  {
    id: "trust-ncte",
    title: "National Council of Teachers Education",
    subtitle: "NCTE Approval Certification",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition05.png",
  },
  {
    id: "trust-bci",
    title: "Bar Council of India",
    subtitle: "BCI Approved Legal Education",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition09.png",
  },
  {
    id: "trust-siro",
    title: "Scientific and Industrial Research Organisation (SIRO)",
    subtitle: "Recognized Research Organization",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-siro.png",
  },
  {
    id: "trust-nats",
    title: "National Apprenticeship Training Scheme (NATS)",
    subtitle: "Professional Training Partnership",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition14.png",
  },
  {
    id: "trust-boat",
    title: "Board of Apprenticeship Training (NR)",
    subtitle: "BOAT Certification Link",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/logo-recognition15.png",
  },
  {
    id: "trust-icar",
    title: "ICAR Approval Not Required",
    subtitle: "Accreditation Status Exempted",
    logo: "https://www.shobhituniversity.ac.in/assets/img/recognition-approvals/icar_logo.png",
  },
];

export default function TrustMarquee() {
  // Duplicate array once for seamless infinite looping
  const combinedItems = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <section className="py-12 bg-zinc-50/60 border-b border-zinc-200/50 overflow-hidden relative w-full select-none">
      {/* Decorative gradient overlay blocks for fading edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-zinc-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-zinc-50/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <h2 style={{ fontSize: "24px", lineHeight: "30px" }} className="font-excon font-normal text-izee-black tracking-tight">
            Recognitions, Approvals & Memberships
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden py-6 flex flex-row">
        <div className="flex w-[200%] shrink-0 gap-6 animate-marquee pause-hover">
          {combinedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex flex-col items-center justify-between text-center bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] shrink-0 w-[240px] h-[290px] select-none hover:shadow-xl hover:border-izee-red/35 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center p-2 bg-zinc-50/70 rounded-xl border border-zinc-100 overflow-hidden">
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className="max-h-[92%] max-w-[92%] object-contain transition-all duration-300 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-center min-w-0 w-full mt-4 space-y-1.5">
                <p className="font-excon font-medium text-[12px] sm:text-[13px] leading-snug text-izee-black whitespace-normal line-clamp-3">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="font-ranade font-light text-[10px] text-zinc-400 mt-1 tracking-wide whitespace-normal line-clamp-2">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
