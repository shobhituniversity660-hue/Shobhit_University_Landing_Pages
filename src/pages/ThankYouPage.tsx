import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";
import { navigateTo } from "../utils/navigation";

const NEXT_STEPS = [
  {
    step: "01",
    title: "Eligibility Review",
    description:
      "Our admissions team verifies your academic profile against programme requirements.",
  },
  {
    step: "02",
    title: "Counselor Callback",
    description:
      "A dedicated specialist will reach you within 24–48 hours on your registered number.",
  },
  {
    step: "03",
    title: "Campus & Programme Guidance",
    description:
      "Receive personalized guidance on programmes, scholarships, and the admission pathway.",
  },
];

export default function ThankYouPage() {
  const params = new URLSearchParams(window.location.search);
  const fullName = params.get("name")?.trim() || "Candidate";

  useEffect(() => {
    document.title = "Thank You | Shobhit University Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50/30 text-izee-black font-sans selection:bg-izee-red selection:text-white overflow-x-clip flex flex-col">
      <header className="w-full bg-white border-b border-zinc-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://www.shobhituniversity.ac.in/assets/img/logo/logo.png"
              alt="Shobhit University Logo"
              className="h-11 sm:h-12 w-auto object-contain select-none"
              referrerPolicy="no-referrer"
            />
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-izee-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-emerald-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-center mb-10"
            >

              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-6 shadow-lg shadow-emerald-100/80">
                <CheckCircle className="w-10 h-10" strokeWidth={1.75} />
              </div>

              <h1
                className="font-excon font-normal text-[#0B1E33] tracking-tight mb-4"
                style={{ fontSize: "clamp(28px, 5vw, 40px)", lineHeight: "1.15" }}
              >
                Thank You, {fullName}!
              </h1>

              <p
                className="font-ranade font-light text-zinc-600 max-w-xl mx-auto"
                style={{ fontSize: "14px", lineHeight: "26px" }}
              >
                Your inquiry has been successfully submitted. Our admissions
                counselors have received your details and will connect with you
                shortly to guide you through the next steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(17,100,70,0.12)] border border-emerald-800/10 overflow-hidden mb-8"
            >
              <div className="h-2 bg-izee-red w-full" />

              <div className="p-6 sm:p-8 space-y-6">

                <div className="flex items-start gap-3 rounded-xl bg-emerald-50/80 border border-emerald-100 px-4 py-3.5">
                  <Clock className="w-5 h-5 text-izee-red shrink-0 mt-0.5" />
                  <p
                    className="font-ranade font-light text-zinc-600 text-left"
                    style={{ fontSize: "14px", lineHeight: "26px" }}
                  >
                    Expected response time:{" "}
                    <strong className="text-izee-black font-medium">
                      within 24–48 business hours
                    </strong>
                    . Please keep your phone accessible for our counselor&apos;s
                    call.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 mb-10"
            >
              <h2 className="font-excon font-normal text-xl text-[#0B1E33] tracking-tight mb-6">
                What Happens Next
              </h2>

              <div className="space-y-5">
                {NEXT_STEPS.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-izee-red/10 text-izee-red text-xs font-excon font-bold">
                        {item.step}
                      </span>
                      {index < NEXT_STEPS.length - 1 && (
                        <span className="w-px flex-1 bg-zinc-200 my-2 min-h-[24px]" />
                      )}
                    </div>
                    <div className="pb-1">
                      <h3 className="font-excon font-medium text-sm text-izee-black uppercase tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p
                        className="font-ranade font-light text-zinc-600"
                        style={{ fontSize: "14px", lineHeight: "26px" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-zinc-200/80 text-center"
            >
              <p className="text-[10px] font-excon font-bold text-zinc-400 uppercase tracking-wider mb-4">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-ranade font-light text-zinc-600">
                <a
                  href="tel:+919870265521"
                  className="inline-flex items-center gap-2 hover:text-izee-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-izee-red" />
                  +91 98702 65521
                </a>
                <a
                  href="mailto:mail@shobhituniversity.ac.in"
                  className="inline-flex items-center gap-2 hover:text-izee-red transition-colors"
                >
                  <Mail className="w-4 h-4 text-izee-red" />
                  mail@shobhituniversity.ac.in
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
