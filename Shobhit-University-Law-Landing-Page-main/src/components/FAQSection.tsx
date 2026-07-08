import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is the Law programme approved by the Bar Council of India (BCI)?",
      answer: "Yes. All eligible law programmes offered by the School of Law & Constitutional Studies are approved by the Bar Council of India (BCI), ensuring that graduates meet the academic requirements to pursue legal practice in accordance with prevailing BCI regulations."
    },
    {
      question: "What career opportunities are available after completing a law degree?",
      answer: "A law degree opens doors to diverse career paths, including litigation, corporate law, judiciary, legal consultancy, public policy, civil services, legal research, compliance, arbitration, academia, and legal advisory roles across public and private sectors."
    },
    {
      question: "Does the University provide internship opportunities?",
      answer: "Yes. Students gain valuable practical exposure through internships with law firms, corporate legal departments, NGOs, courts, government organizations, and legal professionals, enabling them to develop real-world legal skills alongside academic learning."
    },
    {
      question: "Why should I choose Shobhit University for legal studies?",
      answer: "Shobhit University's School of Law & Constitutional Studies combines academic excellence with experiential learning through moot courts, legal aid clinics, internships, expert mentoring, research opportunities, and industry engagement to prepare students for successful legal careers."
    },
    {
      question: "Are scholarships available for law students?",
      answer: "Yes. The University offers merit-based scholarships and SUNET score-based scholarships to eligible students, subject to the University's scholarship policy and applicable terms and conditions."
    },
    {
      question: "What practical learning opportunities are available during the programme?",
      answer: "Students actively participate in moot court competitions, courtroom simulations, legal aid clinics, case studies, legal drafting, client counselling, workshops, seminars, and internships to build practical legal expertise."
    },
    {
      question: "Can I pursue higher studies after completing my law degree?",
      answer: "Absolutely. Graduates may pursue LL.M., doctoral research (Ph.D.), judicial service examinations, specialized certifications, or other advanced legal and interdisciplinary programmes in India and abroad."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-950/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-3 mx-auto select-none">
            <HelpCircle className="w-3.5 h-3.5 text-[#116446]" />
            <span className="font-mono text-[10px] font-bold text-[#116446] tracking-widest uppercase">
              Knowledgebase
            </span>
          </div>
          
          <h2 className="font-excon font-normal text-[#0B1E33] tracking-tight text-[36px] leading-[40px]">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="h-1 w-20 bg-[#116446] mx-auto my-3.5 rounded-full" />
          <p className="font-ranade font-light text-zinc-500 text-xs sm:text-sm max-w-lg mx-auto">
            Find answers to common questions about approvals, career pathways, scholarships, and learning at the School of Law & Constitutional Studies.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-zinc-200/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-300/80 shadow-[0_1px_2px_rgba(0,0,0,0.015)]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center bg-white hover:bg-zinc-50/40 cursor-pointer group transition-colors focus:outline-none"
                >
                  <span className="font-excon font-medium text-sm text-zinc-900 pr-4 tracking-tight group-hover:text-[#116446] transition-colors">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 p-1 rounded-lg bg-zinc-50 text-zinc-400 group-hover:text-[#116446] group-hover:bg-emerald-50 transition-all duration-300 ${isOpen ? "rotate-180 text-[#116446] bg-emerald-50" : ""}`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-zinc-600 text-[13px] leading-relaxed font-ranade font-light border-t border-zinc-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
