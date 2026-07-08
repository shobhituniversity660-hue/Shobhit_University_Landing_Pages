import React from "react";
import { 
  Terminal,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Lock,
  Infinity as InfinityIcon,
  Layers,
  Link,
  Wifi,
  Compass,
  Network,
  Server,
  Briefcase,
  Rocket,
  BookOpen,
  ArrowUpRight
} from "lucide-react";

interface CareerOpportunity {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export default function CareerOpportunities() {
  const careerList: CareerOpportunity[] = [
    {
      title: "Software Engineer",
      desc: "Build scalable systems, write clean, robust code, and drive enterprise-grade application architectures.",
      icon: <Terminal className="w-5 h-5" />,
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100"
    },
    {
      title: "AI Engineer",
      desc: "Design neural networks, integrate Large Language Models, and spearhead intelligent automation solutions.",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-100"
    },
    {
      title: "Machine Learning Engineer",
      desc: "Train predictive algorithms, optimize inference pipelines, and engineer modern data features.",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-indigo-500/10 to-violet-500/10 text-indigo-600 border-indigo-100"
    },
    {
      title: "Data Scientist",
      desc: "Extract deep quantitative insights, build statistical models, and guide data-backed executive decisions.",
      icon: <Database className="w-5 h-5" />,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100"
    },
    {
      title: "Cloud Engineer",
      desc: "Architect secure cloud infrastructure, manage Kubernetes clusters, and orchestrate serverless pipelines.",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-100"
    },
    {
      title: "Cyber Security Analyst",
      desc: "Safeguard digital infrastructure through ethical hacking, cyber defence, and information assurance.",
      icon: <Lock className="w-5 h-5" />,
      color: "from-rose-500/10 to-red-500/10 text-rose-600 border-rose-100"
    },
    {
      title: "DevOps Engineer",
      desc: "Automate continuous integration, build robust deployment pipelines, and optimize site reliability.",
      icon: <InfinityIcon className="w-5 h-5" />,
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-100"
    },
    {
      title: "Full Stack Developer",
      desc: "Create immersive frontends and robust backends using modern API architectures and frameworks.",
      icon: <Layers className="w-5 h-5" />,
      color: "from-fuchsia-500/10 to-pink-500/10 text-fuchsia-600 border-fuchsia-100"
    },
    {
      title: "Blockchain Developer",
      desc: "Design decentralized applications, write smart contracts, and engineer cryptographic ledgers.",
      icon: <Link className="w-5 h-5" />,
      color: "from-violet-500/10 to-purple-500/10 text-violet-600 border-violet-100"
    },
    {
      title: "IoT Engineer",
      desc: "Build smart connected devices, manage sensor networks, and program embedded hardware controllers.",
      icon: <Wifi className="w-5 h-5" />,
      color: "from-emerald-500/10 to-green-500/10 text-emerald-600 border-emerald-100"
    },
    {
      title: "Product Engineer",
      desc: "Bridge the gap between user experience and system design to launch market-ready software products.",
      icon: <Compass className="w-5 h-5" />,
      color: "from-teal-500/10 to-emerald-500/10 text-teal-600 border-teal-100"
    },
    {
      title: "Systems Architect",
      desc: "Define high-level technical blueprints, evaluate technology stacks, and ensure infinite system scalability.",
      icon: <Network className="w-5 h-5" />,
      color: "from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-100"
    },
    {
      title: "Database Administrator",
      desc: "Optimize high-throughput queries, ensure multi-node high availability, and secure enterprise databases.",
      icon: <Server className="w-5 h-5" />,
      color: "from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-100"
    },
    {
      title: "Technology Consultant",
      desc: "Advise organizations on strategic technology adoptions and complex digital transformation processes.",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-neutral-500/10 to-zinc-500/10 text-neutral-600 border-neutral-200"
    },
    {
      title: "Entrepreneur",
      desc: "Launch tech startups, pitch innovative products, and build next-generation companies from the ground up.",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-orange-500/10 to-amber-500/10 text-orange-600 border-orange-100"
    },
    {
      title: "Research Engineer",
      desc: "Publish scientific breakthroughs, explore frontier technologies, and innovate at the intersection of theory.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-100"
    }
  ];

  const row1 = careerList.slice(0, 6);
  const row2 = careerList.slice(6, 11);
  const row3 = careerList.slice(11);

  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];
  const row3Items = [...row3, ...row3];

  return (
    <section id="career-opportunities" className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/20 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column - Heading & Content */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#116446]/5 border border-[#116446]/10 rounded-full w-fit mb-5 select-none">
              <Briefcase className="w-3.5 h-3.5 text-[#116446]" />
              <span className="font-mono text-[10px] font-bold text-[#116446] tracking-widest uppercase">
                Global Horizons
              </span>
            </div>
            
            <h2 className="font-excon font-normal text-[#0B1E33] tracking-tight text-[32px] sm:text-[40px] leading-[36px] sm:leading-[46px] mb-4">
              Career Opportunities after B.Tech CSE
            </h2>
            
            <div className="h-1 w-16 bg-izee-red my-4 rounded-full" />
            
            <p className="font-ranade font-light text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg">
              A degree in Computer Science & Engineering is one of the most powerful catalysts for professional mobility. Equipping you with modern specializations, it unlocks prestigious, high-impact careers in global technology enterprises, pioneering research hubs, and disruptive startups worldwide.
            </p>
          </div>

          {/* Right Column - Infinite Scroll Marquees */}
          <div className="lg:col-span-7 relative w-full overflow-hidden py-4 flex flex-col gap-6">
            {/* Fade Overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Row 1: Forward Marquee */}
            <div className="relative w-full overflow-hidden flex flex-row py-1">
              <div className="flex w-[200%] shrink-0 gap-4 animate-marquee pause-hover">
                {row1Items.map((career, index) => (
                  <div 
                    key={`row1-${career.title}-${index}`}
                    className="flex items-center gap-3 bg-zinc-50 border border-zinc-200/60 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-[#116446]/30 hover:bg-white transition-all duration-300 shrink-0 select-none group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${career.color.split(" ").slice(0, 2).join(" ")} ${career.color.split(" ")[2]} border ${career.color.split(" ")[3]} transition-transform duration-300 group-hover:scale-110`}>
                      {career.icon}
                    </div>
                    <span className="font-excon font-semibold text-[#0B1E33] text-sm tracking-tight flex items-center gap-1 group-hover:text-[#116446] transition-colors duration-200">
                      {career.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Reverse Marquee */}
            <div className="relative w-full overflow-hidden flex flex-row py-1">
              <div className="flex w-[200%] shrink-0 gap-4 animate-marquee-reverse pause-hover">
                {row2Items.map((career, index) => (
                  <div 
                    key={`row2-${career.title}-${index}`}
                    className="flex items-center gap-3 bg-zinc-50 border border-zinc-200/60 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-[#116446]/30 hover:bg-white transition-all duration-300 shrink-0 select-none group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${career.color.split(" ").slice(0, 2).join(" ")} ${career.color.split(" ")[2]} border ${career.color.split(" ")[3]} transition-transform duration-300 group-hover:scale-110`}>
                      {career.icon}
                    </div>
                    <span className="font-excon font-semibold text-[#0B1E33] text-sm tracking-tight flex items-center gap-1 group-hover:text-[#116446] transition-colors duration-200">
                      {career.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Forward Marquee */}
            <div className="relative w-full overflow-hidden flex flex-row py-1">
              <div className="flex w-[200%] shrink-0 gap-4 animate-marquee pause-hover">
                {row3Items.map((career, index) => (
                  <div 
                    key={`row3-${career.title}-${index}`}
                    className="flex items-center gap-3 bg-zinc-50 border border-zinc-200/60 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-[#116446]/30 hover:bg-white transition-all duration-300 shrink-0 select-none group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${career.color.split(" ").slice(0, 2).join(" ")} ${career.color.split(" ")[2]} border ${career.color.split(" ")[3]} transition-transform duration-300 group-hover:scale-110`}>
                      {career.icon}
                    </div>
                    <span className="font-excon font-semibold text-[#0B1E33] text-sm tracking-tight flex items-center gap-1 group-hover:text-[#116446] transition-colors duration-200">
                      {career.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
