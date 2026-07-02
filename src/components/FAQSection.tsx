import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-univ");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 bg-zinc-50 border-t border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/50 rounded-full w-fit mb-4 mx-auto select-none">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
              Admissions Knowledgebase
            </span>
          </div>
          <h2 className="text-3xl font-display font-extrabold text-izee-black tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-xs max-w-lg mx-auto font-sans">
            Need clarifications about Bengaluru North University affiliation, eligibility guidelines, or how the IBM scholarship models are calculated? Select an query category below.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-zinc-200/50 overflow-hidden divide-y divide-zinc-100">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-all duration-150">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-zinc-50/50 cursor-pointer group"
                >
                  <span className="font-display font-extrabold text-xs sm:text-sm text-izee-black pr-4 tracking-tight uppercase group-hover:text-izee-red transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-zinc-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-izee-red" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-zinc-50/50 border-t border-zinc-100"
                    >
                      <div className="p-5 text-zinc-600 text-xs leading-relaxed font-sans font-medium whitespace-pre-line">
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
