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
import WhyChooseCSE from "./components/WhyChooseCSE";
import ConnectivitySection from "./components/ConnectivitySection";
import ProgramsSection from "./components/ProgramsSection";
import CareerOpportunities from "./components/CareerOpportunities";
import RecruitersVerticalMarquee from "./components/RecruitersVerticalMarquee";
import ProgramsUniversityBanner from "./components/ProgramsUniversityBanner";
import AdmissionRoutes from "./components/AdmissionRoutes";
import ScholarshipsSection from "./components/ScholarshipsSection";
import StickyBottomCTA from "./components/StickyBottomCTA";
import LifeAtShobhit from "./components/LifeAtShobhit";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

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
              src="https://imgh.in/host/pzd3w2"
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

      {/* Why Choose Computer Science & Engineering highlights section */}
      <WhyChooseCSE />

      {/* Shobhit Institute Academic Programs Section */}
      <ProgramsSection onApply={handleApplyNow} />

      {/* Career Opportunities Section */}
      <CareerOpportunities />

      {/* Recruiters & Placement Partners Marquee */}
      <RecruitersVerticalMarquee />

      {/* Programs University Banner Section */}
      <ProgramsUniversityBanner />



      {/* Admission Procedure and Routes section */}
      <AdmissionRoutes onApply={handleApplyNow} />

      {/* Scholarships Section */}
      <ScholarshipsSection />

      {/* Connectivity & Access Section */}
      <ConnectivitySection />

      {/* Life @ Shobhit University slider section */}
      <LifeAtShobhit />

      {/* Frequently Asked Questions */}
      <FAQSection />

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
