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

      <div className="p-2 sm:p-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="npf_wgts"
            data-height="550px"
            data-w="7f6a4e5c15cb6fc38f2512cf4cb1842f"
          />
        </motion.div>
      </div>
    </div>
  );
}
