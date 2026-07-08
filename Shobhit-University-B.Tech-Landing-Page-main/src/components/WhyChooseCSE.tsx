import React from "react";
import { 
  Briefcase, 
  TrendingUp, 
  Coins, 
  Globe, 
  Lightbulb, 
  Cpu, 
  GraduationCap, 
  Sparkles
} from "lucide-react";

interface BenefitCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  colorClasses: string;
  key?: React.Key;
}

function BenefitCard({ title, desc, icon, colorClasses }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-[8px] p-8 flex flex-col items-start text-left shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100 h-full">
      {/* Icon Wrapper matching individual card color motif */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClasses}`}>
        {icon}
      </div>

      {/* Content Title */}
      <h3 className="font-excon font-bold text-zinc-900 text-lg tracking-tight mb-3">
        {title}
      </h3>

      {/* Description detail */}
      <p className="font-ranade font-light text-zinc-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseCSE() {
  const highlights = [
    {
      title: "Highest Employability",
      desc: "Among the most sought-after professionals across industries.",
      icon: <Briefcase className="w-5 h-5" />,
      colorClasses: "bg-blue-50 text-blue-600"
    },
    {
      title: "Fast-Growing Career Opportunities",
      desc: "Explore careers in AI, Software Development, Data Science, Cyber Security, Cloud Computing, and beyond.",
      icon: <TrendingUp className="w-5 h-5" />,
      colorClasses: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "High Salary Potential",
      desc: "Build a rewarding career with excellent growth and earning opportunities.",
      icon: <Coins className="w-5 h-5" />,
      colorClasses: "bg-amber-50 text-amber-600"
    },
    {
      title: "Global Career Scope",
      desc: "Access opportunities with leading organizations in India and across the world.",
      icon: <Globe className="w-5 h-5" />,
      colorClasses: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Innovation & Entrepreneurship",
      desc: "Transform ideas into innovative products, solutions, and successful startups.",
      icon: <Lightbulb className="w-5 h-5" />,
      colorClasses: "bg-rose-50 text-rose-600"
    },
    {
      title: "AI-Driven Future",
      desc: "Develop expertise in next-generation technologies shaping tomorrow's digital world.",
      icon: <Cpu className="w-5 h-5" />,
      colorClasses: "bg-violet-50 text-violet-600"
    },
    {
      title: "Lifelong Learning & Career Flexibility",
      desc: "Continuously upskill and specialize across diverse technology domains.",
      icon: <GraduationCap className="w-5 h-5" />,
      colorClasses: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <section id="why-choose-cse" className="py-24 bg-[#116446] relative overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-12 bottom-1/4 w-[500px] h-[500px] bg-emerald-300/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Styled to match design guidelines precisely */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-100 text-[11px] font-excon font-semibold tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              THE SHOBHIT ADVANTAGE
            </span>
          </div>

          <h2 style={{ fontSize: "36px", lineHeight: "40px" }} className="font-excon font-normal text-white tracking-tight">
            Why Choose Computer Science & Engineering?
          </h2>

          <p className="font-ranade font-light text-emerald-50/80 text-sm sm:text-base leading-relaxed mt-5 max-w-2xl mx-auto">
            A future-focused discipline driving global innovation in AI, Cybersecurity, and Cloud Computing, equipping you with the skills to build a highly rewarding career.
          </p>
        </div>

        {/* Symmetric Grid with 7 clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-center">
          {highlights.map((item, index) => (
            <BenefitCard 
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              colorClasses={item.colorClasses}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
