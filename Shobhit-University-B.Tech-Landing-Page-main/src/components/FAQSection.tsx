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
      question: "What are the eligibility criteria for B.Tech CSE?",
      answer: "Candidates must have passed 10+2 or an equivalent examination with Physics and Mathematics as compulsory subjects, along with one of the approved optional subjects, and meet the eligibility criteria prescribed by the University and regulatory authorities."
    },
    {
      question: "Which specializations are offered?",
      answer: "Students can choose from industry-relevant specializations, including Artificial Intelligence, Machine Learning, Cloud Computing, Cyber Security, Full Stack Development, and Data Science, designed to meet the evolving demands of the technology industry."
    },
    {
      question: "Are internships included in the programme?",
      answer: "Yes. The programme emphasizes experiential learning through internships, live projects, industrial visits, and industry interactions, enabling students to gain valuable real-world experience."
    },
    {
      question: "What placement support does the University provide?",
      answer: "The University offers comprehensive placement support through career counselling, aptitude and technical training, mock interviews, resume-building workshops, industry interactions, internships, and campus recruitment opportunities with leading organizations."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes. Merit-based scholarships and SUNET score-based scholarships are available for eligible students, subject to the University's scholarship policy and applicable terms and conditions."
    },
    {
      question: "What industry certifications can I pursue?",
      answer: "Students have opportunities to pursue globally recognized industry certifications through the University's strategic collaborations with leading technology partners, helping enhance technical expertise and employability."
    },
    {
      question: "Are hostel facilities available?",
      answer: "Yes. Shobhit University provides safe, secure, and well-equipped hostel facilities for both boys and girls, offering a comfortable and conducive environment for academic and personal growth."
    },
    {
      question: "How do I apply for admission?",
      answer: "You can apply online by completing the application form, submitting the required documents, and following the admission process. Our Admissions Team is available to guide you through every step of your application journey."
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
            Find answers to common questions about eligibility, specializations, scholarships, placements, and learning in the B.Tech Computer Science & Engineering (CSE) programme.
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
