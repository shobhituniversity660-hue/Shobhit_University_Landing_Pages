import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e4a38] text-white pt-16 pb-8 border-t border-[#133024] relative overflow-hidden">
      {/* Subtle organic background lights to match elite style */}
      <div className="absolute right-[-10%] bottom-[-10%] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-[5%] top-[-20%] w-60 h-60 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Left Column: Logo & Address info */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            
            {/* White rounded logo badge as shown in image */}
            <div className="bg-white rounded-xl p-4 w-fit shadow-lg shadow-black/10 flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://www.shobhituniversity.ac.in/assets/img/logo/logo.png"
                alt="Shobhit University Logo"
                className="h-12 w-auto object-contain select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* University metadata descriptions */}
            <div className="space-y-1">
              <h3 className="font-excon font-normal text-lg text-white tracking-wide">
                Shobhit Institute of Engineering & Technology
              </h3>
              <p className="font-ranade text-sm text-[#b3d3c4] font-medium leading-relaxed">
                (Deemed-to-be University)
              </p>
            </div>

            {/* Address with location icon */}
            <div className="flex items-start gap-3 pt-2 text-[#cadbda]">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="font-ranade text-sm font-light leading-relaxed max-w-lg">
                NH-58, Modipuram, Meerut – 250110, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* Right Column: Contact info styled as per image */}
          <div className="md:col-span-5 flex flex-col space-y-6 md:pl-8 lg:pl-12">
            
            <h4 className="font-excon font-bold text-sm tracking-[0.15em] text-white/95 uppercase mb-1">
              CONTACT
            </h4>

            <div className="space-y-4">
              {/* Phones */}
              <div className="flex items-center gap-3.5 text-[#cadbda]">
                <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <span className="font-sans text-[14px] sm:text-base font-medium space-x-4">
                  <span>+91 98702 65521</span>
                  <span className="text-white/20">|</span>
                  <span>+91 7617505016</span>
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 text-[#cadbda]">
                <Mail className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <a 
                  href="mailto:mail@shobhituniversity.ac.in" 
                  className="font-sans text-[14px] sm:text-base font-medium hover:text-white transition-colors underline decoration-emerald-400/30 underline-offset-4"
                >
                  mail@shobhituniversity.ac.in
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Dividers and Copyright details */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-4 text-xs tracking-wide">
          
          <p className="font-ranade text-[11px] sm:text-sm text-[#9fbfb0] font-light leading-relaxed max-w-3xl">
            © 2026 Shobhit Institute of Engineering & Technology (Deemed-to-be University). All rights reserved.
          </p>

          <p className="font-excon font-normal text-[11px] text-[#7da491] tracking-wider uppercase pt-1">
            Design and Developed By <span className="text-white font-medium hover:text-emerald-400 cursor-pointer transition-colors">Mediagarh</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
