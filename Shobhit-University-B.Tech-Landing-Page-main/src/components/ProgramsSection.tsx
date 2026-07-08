import React from "react";
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Code, 
  Database,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

interface ProgramsSectionProps {
  onApply: (specializationTitle?: string) => void;
}

interface SpecializationCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  colorClasses: string;
  onApplyClick: () => void;
  key?: React.Key;
}

function SpecializationCard({ title, desc, icon, colorClasses, onApplyClick }: SpecializationCardProps) {
  return (
    <div className="bg-white rounded-[8px] p-8 flex flex-col justify-between items-start text-left shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-100 h-full">
      <div className="w-full">
        {/* Icon Wrapper matching individual card color motif */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${colorClasses}`}>
          {icon}
        </div>

        {/* Content Title */}
        <h3 className="font-excon font-bold text-[#0B1E33] text-lg tracking-tight mb-3">
          {title}
        </h3>

        {/* Description detail */}
        <p className="font-ranade font-light text-zinc-600 text-sm leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      {/* Action Button */}
      <button 
        onClick={onApplyClick}
        className="group/btn mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#116446] text-white font-excon font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#0d4d36] hover:shadow-md cursor-pointer"
      >
        <span>Apply Now</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
}

export default function ProgramsSection({ onApply }: ProgramsSectionProps) {
  const specializations = [
    {
      title: "Artificial Intelligence",
      desc: "Design intelligent systems powered by Artificial Intelligence, Deep Learning, Natural Language Processing, and Intelligent Automation.",
      icon: <Brain className="w-5 h-5" />,
      colorClasses: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Machine Learning",
      desc: "Develop predictive models and intelligent applications using modern machine learning techniques.",
      icon: <Cpu className="w-5 h-5" />,
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      title: "Cloud Computing",
      desc: "Develop expertise in cloud architecture, virtualization, DevOps, containerization, and cloud deployment across leading cloud platforms.",
      icon: <Cloud className="w-5 h-5" />,
      colorClasses: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      title: "Cyber Security",
      desc: "Safeguard digital infrastructure through ethical hacking, cyber defence, digital forensics, network security, and information assurance.",
      icon: <Shield className="w-5 h-5" />,
      colorClasses: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      title: "Full Stack Development",
      desc: "Design and develop scalable web applications using modern frontend frameworks, backend technologies, APIs, and databases.",
      icon: <Code className="w-5 h-5" />,
      colorClasses: "bg-violet-50 text-violet-600 border-violet-100"
    },
    {
      title: "Data Science",
      desc: "Transform data into actionable insights using statistics, programming, machine learning, visualization, and business analytics.",
      icon: <Database className="w-5 h-5" />,
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <section id="programs-directory" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Active Admissions Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full select-none scale-95 sm:scale-100">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#116446] animate-pulse shrink-0" />
              <span className="text-[#116446] font-mono font-bold text-[10px] tracking-widest uppercase">
                CSE ADMISSIONS 2026-27 ACTIVE
              </span>
            </div>
            <span className="text-emerald-200 text-xs">|</span>
            <span className="bg-amber-50 text-amber-800 font-mono font-bold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-amber-200/50">
              AICTE APPROVED
            </span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-excon font-normal text-[#0B1E33] tracking-tight text-[36px] leading-[40px] mb-4">
            Choose Your Future Specialization
          </h2>
          <p className="font-ranade font-light text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Master next-generation technologies through specialised learning pathways designed to meet the evolving demands of the global technology industry.
          </p>
        </div>

        {/* Symmetrical Grid for the 6 Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {specializations.map((item, index) => (
            <SpecializationCard 
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
              colorClasses={item.colorClasses}
              onApplyClick={() => onApply(item.title)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
