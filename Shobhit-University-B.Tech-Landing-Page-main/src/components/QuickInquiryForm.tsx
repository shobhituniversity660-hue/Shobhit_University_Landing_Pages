import React, { useEffect } from "react";
import { motion } from "motion/react";

const CRM_WIDGET_SCRIPT = "https://widgets.nopaperforms.com/emwgts.js";

export default function QuickInquiryForm() {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${CRM_WIDGET_SCRIPT}"]`,
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = CRM_WIDGET_SCRIPT;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="quick-inquiry-form-card"
      className="w-full lg:w-[380px] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(17,100,70,0.18)] border border-emerald-800/10 overflow-hidden relative"
    >
      <div className="h-2 bg-izee-red w-full" />

      <div className="p-6 sm:p-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="mb-6 text-center">
            <h3 className="font-excon font-medium text-xl text-izee-black tracking-tight leading-tight">
              Inquire Now & Save Your Spot
            </h3>
            <p className="text-zinc-500 text-xs mt-2 font-ranade font-light leading-relaxed mx-auto max-w-sm">
              Fill out the form below to check eligibility and secure your priority counseling.
            </p>
          </div>

          <div
            className="npf_wgts"
            data-height="500px"
            data-w="6372e6d31b0230d8b27289ff59422c6e"
          />
        </motion.div>
      </div>
    </div>
  );
}
