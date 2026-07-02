import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Phone, Mail, User } from "lucide-react";

export default function QuickInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [trackerId, setTrackerId] = useState("");

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
      setIsSuccess(true);
      setTrackerId(`IZ-Q-${Math.floor(100000 + Math.random() * 900000)}`);
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
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form-fields"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
          ) : (
            <motion.div
              key="success-fields"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-4 space-y-3"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-excon font-bold text-izee-black uppercase leading-none">
                  Query Submitted!
                </h4>
                <p className="text-[10px] text-zinc-400 mt-1.5 font-ranade font-light px-1">
                  Thank you, <strong className="text-izee-black">{formData.fullName}</strong>. Your inquiry tracking code is active.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-2 text-left space-y-1 text-[10px] max-w-xs mx-auto font-ranade font-light">
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-bold">Query ID:</span>
                  <strong className="text-izee-black font-mono font-medium">{trackerId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-bold">Priority Status:</span>
                  <span className="text-izee-red font-excon font-bold">Active</span>
                </div>
              </div>

              <p className="text-[9px] text-zinc-400 font-ranade font-light px-1">
                A specialist will verify eligibility and contact you shortly.
              </p>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                  });
                }}
                className="px-3 py-1 hover:bg-zinc-100 border border-zinc-200 text-zinc-500 rounded text-[9px] font-excon font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Inquire Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
