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
      question: "Who can apply for the MBA programme?",
      answer: "Graduates from any recognized university who meet the prescribed eligibility criteria."
    },
    {
      question: "How many specializations are offered?",
      answer: "Students can choose from seven industry-focused MBA specializations."
    },
    {
      question: "Are internships part of the programme?",
      answer: "Yes. Industry internships form an integral part of the MBA curriculum."
    },
    {
      question: "Does the programme include industry certifications?",
      answer: "Yes. Students have access to certification opportunities through leading industry partners."
    },
    {
      question: "Is placement assistance available?",
      answer: "Yes. Comprehensive placement and career development support is provided throughout the programme."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes. Scholarships are offered based on University norms and eligibility criteria."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden" id="faqs">
      {/* Background radial soft light accents for organic depth */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#116446]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zinc-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#116446]/5 border border-[#116446]/10 rounded-full w-fit mb-4 mx-auto select-none">
            <HelpCircle className="w-3.5 h-3.5 text-[#116446]" />
            <span className="font-mono text-[10px] font-bold text-[#116446] tracking-widest uppercase">
              knowledge base
            </span>
          </div>
          
          <h2 
            style={{ fontSize: "36px", lineHeight: "42px" }}
            className="font-excon font-normal text-[#0B1E33] tracking-tight mb-4"
          >
            Frequently Asked Questions (FAQs)
          </h2>
          
          {/* Brand Divider */}
          <div className="h-1 w-20 bg-[#116446] mx-auto my-4 rounded-full" />
          
          <p 
            style={{ fontSize: "14px", lineHeight: "26px" }}
            className="font-ranade font-light text-zinc-500 max-w-2xl mx-auto"
          >
            Find answers to common questions about eligibility, specializations, scholarships, placements, and learning in the MBA programme.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center bg-white hover:bg-zinc-50/30 transition-colors duration-200 cursor-pointer group"
                >
                  <span className="font-excon font-medium text-[#0B1E33] text-sm sm:text-[15px] pr-6 leading-tight">
                    {faq.question}
                  </span>
                  
                  <span className="shrink-0">
                    <div className={`p-1.5 rounded-full border border-zinc-100 bg-zinc-50/50 text-zinc-400 group-hover:bg-zinc-100 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#116446] border-[#116446]/10 bg-[#116446]/5" : ""
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      {/* Divider line before content */}
                      <div className="mx-5 sm:mx-6 h-[1px] bg-zinc-100" />
                      
                      <div className="p-5 sm:p-6 pt-4 sm:pt-4">
                        <p className="font-ranade font-light text-sm text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </p>
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
