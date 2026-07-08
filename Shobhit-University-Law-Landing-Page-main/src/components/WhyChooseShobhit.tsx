import React from "react";
import { 
  Award, 
  Scale, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Handshake, 
  BookOpen,
  Sparkles 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClasses: string;
  key?: React.Key;
}

function FeatureCard({ icon, title, description, colorClasses }: FeatureCardProps) {
  return (
    <div className="group relative bg-white border border-zinc-200/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(17,100,70,0.15)] hover:border-[#116446]/30 overflow-hidden flex flex-col justify-between">
      {/* Decorative hover gradient glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top green accent strip shown on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-600 to-[#116446] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Icon Container with dynamic colorful defaults */}
        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 ${colorClasses}`}>
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="font-excon font-semibold text-zinc-950 text-base md:text-lg tracking-tight group-hover:text-[#116446] transition-colors duration-300">
            {title}
          </h3>
          <p className="font-ranade font-light text-zinc-600 text-xs sm:text-[13px] mt-2.5 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseShobhit() {
  const features = [
    {
      icon: <Award className="w-5.5 h-5.5" />,
      title: "NAAC 'A' Accredited & UGC-Recognized University",
      description: "Pursue legal education at a NAAC 'A' Accredited, UGC-recognized university known for academic excellence, quality education, and a strong commitment to legal studies.",
      colorClasses: "bg-emerald-50 border-emerald-200/60 text-[#116446] group-hover:bg-emerald-100/80 group-hover:text-emerald-800"
    },
    {
      icon: <Scale className="w-5.5 h-5.5" />,
      title: "Bar Council of India (BCI) Approved Programs",
      description: "All law programs are approved by the Bar Council of India (BCI), making graduates eligible to practice law and build successful legal careers.",
      colorClasses: "bg-indigo-50 border-indigo-200/60 text-indigo-600 group-hover:bg-indigo-100/80 group-hover:text-indigo-700"
    },
    {
      icon: <Users className="w-5.5 h-5.5" />,
      title: "Distinguished Faculty, Senior Advocates, & Legal Experts",
      description: "Learn from experienced academicians, legal practitioners, retired judges, and industry experts who bring real-world legal insights into the classroom.",
      colorClasses: "bg-blue-50 border-blue-200/60 text-blue-600 group-hover:bg-blue-100/80 group-hover:text-blue-700"
    },
    {
      icon: <GraduationCap className="w-5.5 h-5.5" />,
      title: "Experiential Legal Learning",
      description: "Develop practical advocacy skills through moot courts, courtroom simulations, case studies, and legal aid initiatives that prepare you for professional practice.",
      colorClasses: "bg-amber-50 border-amber-200/60 text-amber-600 group-hover:bg-amber-100/80 group-hover:text-amber-700"
    },
    {
      icon: <Briefcase className="w-5.5 h-5.5" />,
      title: "Internships & Professional Legal Exposure",
      description: "Gain hands-on experience through internships with leading law firms, NGOs, corporate legal departments, and public institutions, supported by Shobhit University's strong industry network.",
      colorClasses: "bg-rose-50 border-rose-200/60 text-rose-600 group-hover:bg-rose-100/80 group-hover:text-rose-700"
    },
    {
      icon: <Handshake className="w-5.5 h-5.5" />,
      title: "Interaction with Eminent Legal Professionals",
      description: "Interact with Supreme Court and High Court judges, senior advocates, policymakers, and renowned legal professionals through expert talks, workshops, and seminars.",
      colorClasses: "bg-purple-50 border-purple-200/60 text-purple-600 group-hover:bg-purple-100/80 group-hover:text-purple-700"
    },
    {
      icon: <BookOpen className="w-5.5 h-5.5" />,
      title: "Research & Constitutional Studies",
      description: "Engage in contemporary legal research, constitutional studies, policy analysis, and interdisciplinary legal scholarship.",
      colorClasses: "bg-sky-50 border-sky-200/60 text-sky-600 group-hover:bg-sky-100/80 group-hover:text-sky-700"
    }
  ];

  return (
    <section id="why-choose-shobhit" className="py-24 bg-[#116446] relative overflow-hidden">
      {/* Background visual accents for rich depth */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-excon font-normal text-[36px] leading-[40px] text-white tracking-tight">
            Why Study Law at Shobhit University?
          </h2>
          <p className="font-ranade font-light text-emerald-50/90 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover a distinguished, BCI-approved legal academy built on rich academic pedagogy, senior legal practitioner mentorship, and rigorous practical training.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClasses={feature.colorClasses}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
