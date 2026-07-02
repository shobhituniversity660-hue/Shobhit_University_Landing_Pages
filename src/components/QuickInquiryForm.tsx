import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, User } from "lucide-react";
import { navigateTo } from "../utils/navigation";

export default function QuickInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      const trackerId = `IZ-Q-${Math.floor(100000 + Math.random() * 900000)}`;
      const params = new URLSearchParams({
        name: formData.fullName,
        id: trackerId,
      });
      navigateTo(`/thank-you?${params.toString()}`);
    }, 1000);
  };

  return (
    <div 
      id="quick-inquiry-form-card" 
      className="w-full lg:w-[380px] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(17,100,70,0.18)] border border-emerald-800/10 overflow-hidden relative"
    >
      {/* Sleek dynamic top accent line */}
      <div className="h-2 bg-izee-red w-full" />

      <div className="p-6 sm:p-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
              <div className="mb-6">
                <h3 className="font-excon font-medium text-xl text-izee-black tracking-tight leading-tight uppercase">
                  Fast-Track Eligibility
                </h3>
                <p className="text-zinc-500 text-xs mt-2.5 font-ranade font-light leading-relaxed">
                  Enter your details to receive instant accreditation prospectus.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-excon font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Candidate Full Name *
                  </label>
                  <div className="relative font-ranade font-light">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyanika Sen"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 focus:bg-white rounded-lg font-ranade font-light text-sm focus:outline-none focus:ring-2 focus:ring-izee-red/20 focus:border-izee-red transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10px] font-excon font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    E-mail Address *
                  </label>
                  <div className="relative font-ranade font-light">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="p.sen@domain.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 focus:bg-white rounded-lg font-ranade font-light text-sm focus:outline-none focus:ring-2 focus:ring-izee-red/20 focus:border-izee-red transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-[10px] font-excon font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative font-ranade font-light">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 focus:bg-white rounded-lg font-ranade font-light text-sm focus:outline-none focus:ring-2 focus:ring-izee-red/20 focus:border-izee-red transition-all"
                    />
                  </div>
                </div>

                {/* Form Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-izee-red hover:bg-izee-red-hover text-white py-3 rounded-lg text-xs font-excon font-bold uppercase tracking-wider shadow-lg shadow-izee-red/20 flex items-center justify-center space-x-1.5 transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Query & Apply Now</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
        </motion.div>
      </div>
    </div>
  );
}
