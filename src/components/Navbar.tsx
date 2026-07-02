import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, GraduationCap } from "lucide-react";
import { BASE_PATH } from "../config";
import { NAVIGATION_LINKS } from "../data";

interface NavbarProps {
  onApplyClick: () => void;
  linkPrefix?: string;
}

export default function Navbar({ onApplyClick, linkPrefix = BASE_PATH }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      id="main-navigation"
      className="relative w-full bg-white border-b border-zinc-100 py-4 z-45"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Brand matching the new logo URL */}
          <a href={linkPrefix} className="flex items-center group header-logo-link" id="logo-branding">
            <img
              src="https://www.shobhituniversity.ac.in/assets/img/logo/logo.png"
              alt="Shobhit University Logo"
              className="h-11 sm:h-12 w-auto object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={`${linkPrefix}${link.href}`}
                className="font-sans text-[11px] font-bold tracking-wider text-zinc-600 hover:text-izee-red transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden lg:block">
            <button
              onClick={onApplyClick}
              id="nav-apply-btn"
              className="inline-flex items-center justify-center bg-izee-red hover:bg-izee-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-md shadow-lg shadow-izee-red/15 hover:shadow-izee-red/30 transition-all duration-150 group cursor-pointer"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 hover:text-izee-red p-2"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-xl overflow-hidden animate-fade-in py-4 px-6 relative z-50">
          <div className="flex flex-col space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={`${linkPrefix}${link.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-xs font-bold tracking-wider text-zinc-700 hover:text-izee-red py-2 border-b border-zinc-50"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full flex items-center justify-center bg-izee-red hover:bg-izee-red-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded shadow-md mt-4 cursor-pointer"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
