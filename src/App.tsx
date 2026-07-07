/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";

import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import BottomCards from "./components/BottomCards";
import QuickInquiryForm from "./components/QuickInquiryForm";
import TrustMarquee from "./components/TrustMarquee";
import WhyChooseShobhit from "./components/WhyChooseShobhit";
import ConnectivitySection from "./components/ConnectivitySection";
import ProgramsSection from "./components/ProgramsSection";
import AdmissionRoutes from "./components/AdmissionRoutes";
import StickyBottomCTA from "./components/StickyBottomCTA";
import RecruitersVerticalMarquee from "./components/RecruitersVerticalMarquee";
import PlacementGallery from "./components/PlacementGallery";
import NotableAlumniMarquee from "./components/NotableAlumniMarquee";
import LifeAtShobhit from "./components/LifeAtShobhit";
import Footer from "./components/Footer";
import ScholarshipsSection from "./components/ScholarshipsSection";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const handleApplyNow = () => {
    const el = document.getElementById("admissions-inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50/30 text-izee-black font-sans selection:bg-izee-red selection:text-white overflow-x-clip">
      {/* Top Admissions & Accreditation Ticker Banner */}
      <Ticker />

      {/* Primary Floating Navigation Bar */}
      <Navbar onApplyClick={handleApplyNow} />

      {/* Main Hero Container */}
      <header id="admissions-inquiry" className="relative pt-0 pb-0 overflow-visible bg-white">
        
        {/* Aesthetic background curves matching reference curves */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.04] pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M-50,0 Q20,50 -50,100" stroke="currentColor" strokeWidth="0.5" />
            <path d="M-30,0 Q40,50 -30,100" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="w-full relative z-10">
          <div className="relative">
            <img
              src="https://imgh.in/host/1h729x"
              alt="Shobhit University Admissions Banner"
              className="w-full h-auto object-cover select-none block"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlapping CRM Widget on the Right Side - Desktop Only */}
            {isLargeScreen && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-end py-4">
                  <div className="pointer-events-auto transform translate-y-4 lg:translate-x-[40%]">
                    <QuickInquiryForm />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CRM Widget - Mobile and Tablet Only (Under the banner) */}
          {!isLargeScreen && (
            <div className="px-4 py-8 bg-zinc-50 border-b border-zinc-200/50">
              <div className="max-w-md mx-auto">
                <QuickInquiryForm />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Embedded 3-Card Overlay precisely continuing below the banner */}
      <BottomCards />

      {/* Modern Trust, Recognition & Approval Marquee */}
      <TrustMarquee />

      {/* Why Choose Shobhit University visual feature section */}
      <WhyChooseShobhit />

      {/* Shobhit Institute Academic Programs Section */}
      <ProgramsSection onApply={handleApplyNow} />

      {/* Vertical Recruiters Marquee Section */}
      <RecruitersVerticalMarquee />

      {/* Our Placements Showcase Section */}
      <PlacementGallery />

      {/* Single Image Banner Section with 6px radius */}
      <section className="py-6 bg-white" id="programs-university-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[6px] shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src="https://imgh.in/host/nkpko8"
              alt="Multiple Programmes. One University. Banner"
              className="w-full h-auto object-cover rounded-[6px] select-none block"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Notable Alumni picture marquee slider section */}
      <NotableAlumniMarquee />

      {/* Admission Procedure and Routes section */}
      <AdmissionRoutes onApply={handleApplyNow} />

      {/* Scholarships Section */}
      <ScholarshipsSection />

      {/* Connectivity & Access Section */}
      <ConnectivitySection />

      {/* Life @ Shobhit University slider section */}
      <LifeAtShobhit />

      {/* Royal Shobhit University Footer Section */}
      <Footer />

      {/* Persistent Premium Bottom CTA */}
      <StickyBottomCTA 
        onApply={handleApplyNow} 
        onDownloadBrochure={handleApplyNow}
      />
    </div>
  );
}
