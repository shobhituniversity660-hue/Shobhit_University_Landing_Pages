import React, { useState, useMemo } from "react";
import { Search, GraduationCap, ChevronRight } from "lucide-react";

interface ProgramsSectionProps {
  onApply: (specId?: string) => void;
}

export default function ProgramsSection({ onApply }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState<"UG" | "PG" | "PHD">("UG");
  const [searchQuery, setSearchQuery] = useState("");

  // Raw column data to maintain the exact layout and ordering of the screenshots when search is empty
  const ugColumns = useMemo(() => [
    [
      "B.Tech. Computer Science & Engg.",
      "B.Tech. Agriculture Engineering",
      "B.Tech. Biomedical Engg.",
      "B.Tech. Biotechnology",
      "B.Sc. Hons Agriculture (4 Yrs)",
      "B.Sc. Hons Nutrition & Dietetics (3 Yrs)",
      "B.Sc. Hons Biotechnology (3 Yrs)",
      "B.Sc. Hons Microbiology (3 Yrs)",
      "B.Sc. Hons Biomedical Science (3 Yrs)",
    ],
    [
      "B.Com. Hons",
      "BA LL.B. (5 Years)",
      "B.Com. LL.B. Hons (5 Years)",
      "BBA LL.B. Hons (5 Years)",
      "BCA (31st Batch)",
      "BCA AI and Machine Learning",
      "BCA Cyber Security",
      "BCA Internet of Things",
      "BCA Data Science",
    ],
    [
      "BA General",
      "BA Hons Psychology",
      "BA Hons Govt & Administration",
      "BA Business Economics (Honours)",
      "BBA (31st Batch)",
      "BBA General",
      "BBA Digital Marketing",
      "BBA Banking Finance & Insurance",
      "BBA Global Business & Management",
    ]
  ], []);

  const pgColumns = useMemo(() => [
    [
      "M.Tech. Computer Sc. & Engineering",
      "M.Tech. Agriculture Engineering",
      "M.Tech. Biomedical Engg.",
      "M.Tech. Biotechnology",
      "MCA (29th Batch)",
      "MCA Cloud Computing",
      "MCA Internet of Things",
      "MCA Network and Information Security",
      "MCA Full Stack Development",
      "MCA Data Science & Machine Learning",
      "M.Com.",
      "PG Diploma in Counselling Psychology",
      "PG Diploma in Yoga",
    ],
    [
      "MBA Agri-Business & Rural Entrepreneurship",
      "MBA Digital Business & AI",
      "MBA Global Trade & Logistics Management",
      "MBA Fintech, Banking & Insurance",
      "MBA People Management & HR Analytics",
      "MBA Pharmaceutical & Healthcare Management",
      "MBA Marketing & E-Commerce",
      "B.Ed.",
      "LL.B.",
      "LL.M. (1 Year)",
      "LL.M. (2 Years)",
      "M.Sc. Artificial Intelligence",
      "M.Sc. Bio-Informatics",
    ],
    [
      "M.Sc. Biomedical Science",
      "M.Sc. Biotechnology",
      "M.Sc. Clinical Research",
      "M.Sc. Cyber Security",
      "M.Sc. Data Science",
      "M.Sc. Food Science & Technology",
      "M.Sc. Horticulture",
      "M.Sc. Agronomy",
      "M.Sc. Environmental Sciences",
      "M.Sc. Geo-Informatics",
      "M.Sc. Mathematics",
      "M.Sc. Medical Physics",
      "M.Sc. Microbiology",
    ]
  ], []);

  const phdColumns = useMemo(() => [
    [
      "Agricultural Technology",
      "Business Management",
      "Microbiology",
      "Commerce",
      "Physics",
    ],
    [
      "Biotechnology",
      "Computer Science and Engineering",
      "Environmental Science",
      "Economics",
      "Chemistry",
    ],
    [
      "Biomedical Sciences",
      "Law",
      "Psychology",
      "Mathematics",
      "Indian Knowledge Systems (IKS)",
    ]
  ], []);

  // Helper to filter and balance lists dynamically during searching
  const getDisplayColumns = () => {
    let currentColumns = ugColumns;
    if (activeTab === "PG") currentColumns = pgColumns;
    if (activeTab === "PHD") currentColumns = phdColumns;

    if (!searchQuery.trim()) {
      return currentColumns;
    }

    // Flatten, filter, and redistribute to balance the layout
    const cleanQuery = searchQuery.toLowerCase().trim();
    const allFiltered = currentColumns.flat().filter(program =>
      program.toLowerCase().includes(cleanQuery)
    );

    // Distribute evenly across 3 columns
    const cols: string[][] = [[], [], []];
    allFiltered.forEach((program, idx) => {
      cols[idx % 3].push(program);
    });

    return cols;
  };

  const displayColumns = getDisplayColumns();

  const getCardTitle = () => {
    switch (activeTab) {
      case "UG":
        return "Undergraduate Programs";
      case "PG":
        return "Postgraduate Programs";
      case "PHD":
        return "Ph.D Programs";
    }
  };

  return (
    <section id="programs-directory" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Academic Admission Active Tag Banner */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full mb-6 select-none scale-95 sm:scale-100">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-emerald-800 font-mono font-bold text-[10px] tracking-widest uppercase">
              ACADEMIC ADMISSIONS 2026-27 ACTIVE
            </span>
          </div>
          <span className="text-emerald-200 text-xs">|</span>
          <span className="bg-amber-50 text-amber-800 font-mono font-bold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-amber-200/50">
            SEATS LIMITED
          </span>
        </div>

        {/* Institution Title Area */}
        <h2 
          style={{ fontSize: "36px", lineHeight: "40px" }}
          className="font-excon font-normal text-[#0B1E33] text-center tracking-tight max-w-4xl"
        >
          Multiple Programmes. One University.
        </h2>
        <h3 className="font-excon font-normal text-sm sm:text-base lg:text-[15px] text-[#006644] text-center tracking-wide leading-relaxed mt-3.5 max-w-3xl">
          Engineering · Law · Management · Life Sciences · Agriculture · Education
        </h3>
        <p 
          style={{ lineHeight: "26px" }}
          className="font-ranade font-light text-zinc-600 text-[13px] sm:text-sm text-center mt-3.5 mb-10 max-w-2xl"
        >
          All programmes are aligned with the UGC National Curriculum Framework (NCF) 2024 and are designed in consultation with industry experts, ensuring that graduates are equipped with the knowledge, skills, and competencies required for professional success.
        </p>

        {/* Active Route Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 w-full max-w-2xl px-4">
          <button
            id="tab-ug"
            onClick={() => {
              setActiveTab("UG");
              setSearchQuery("");
            }}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-excon font-semibold tracking-wide border transition-all duration-300 ${
              activeTab === "UG"
                ? "bg-[#116446] text-white border-[#116446] shadow-sm font-semibold"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
            }`}
          >
            Undergraduate (UG)
          </button>
          
          <button
            id="tab-pg"
            onClick={() => {
              setActiveTab("PG");
              setSearchQuery("");
            }}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-excon font-semibold tracking-wide border transition-all duration-300 ${
              activeTab === "PG"
                ? "bg-[#116446] text-white border-[#116446] shadow-sm font-semibold"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
            }`}
          >
            Postgraduate (PG)
          </button>

          <button
            id="tab-phd"
            onClick={() => {
              setActiveTab("PHD");
              setSearchQuery("");
            }}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-excon font-semibold tracking-wide border transition-all duration-300 ${
              activeTab === "PHD"
                ? "bg-[#116446] text-white border-[#116446] shadow-sm font-semibold"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
            }`}
          >
            PhD
          </button>
        </div>

        {/* Dynamic Card Container & Grid */}
        <div id="programs-card-container" className="w-full max-w-6xl bg-white border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-100/40 p-6 sm:p-10 md:p-12 transition-all duration-300">
          
          {/* Internal Card Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 pb-6 mb-8 gap-4">
            <div className="relative">
              <h4 className="font-excon font-normal text-xl sm:text-2xl text-[#0B1E33]">
                {getCardTitle()}
              </h4>
              <div className="absolute -bottom-6 left-0 w-24 h-[3px] bg-[#EAB308]" />
            </div>

            {/* Live Search Bar */}
            <div className="relative w-full sm:w-72 mt-2 sm:mt-0">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pl-4 pr-10 bg-zinc-50 border border-zinc-200 rounded-lg text-xs font-ranade font-light text-[#0B1E33] placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-[#116446] focus:border-[#116446] transition-all bg-[#FAF9F6]/20"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Program Multi-Column Grid */}
          {displayColumns.flat().length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-ranade font-light text-zinc-500 text-sm">
                No matching academic programs found for "{searchQuery}".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-1">
              {displayColumns.map((colItems, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {colItems.map((prog, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="flex items-start gap-2.5 py-1 text-zinc-800 group hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] shrink-0 mt-[7px] shadow-xs" />
                      <span className="font-ranade font-medium text-xs sm:text-[13px] leading-relaxed text-[#0B1E33]">
                        {prog}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Dynamic Card Sub-Footer Banner */}
          <div className="border-t border-zinc-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-zinc-500">
              <GraduationCap className="w-5 h-5 text-[#116446] shrink-0" />
              <span className="font-ranade font-light text-[10.5px] uppercase tracking-wider text-zinc-500">
                ALL PROGRAMS ALIGNED TO CENTRAL UGC CURRICULUMS 2026-27
              </span>
            </div>

            <button
              id="btn-inquire-programs"
              onClick={() => onApply()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#116446] hover:bg-[#0d4e36] text-white text-xs sm:text-sm font-excon font-semibold tracking-wide rounded-full transition-all duration-300 shadow-md shadow-[#116446]/10 group hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Inquire Academic Registrations</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
