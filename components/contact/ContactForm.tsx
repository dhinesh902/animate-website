"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Wholesale & Distribution",
  "Brand Collaboration",
  "Press & Media",
  "Feedback & Product Support",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECT_OPTIONS[0],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: SUBJECT_OPTIONS[0],
        message: "",
      });
    } catch (err: unknown) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#0C0C0C] border border-white/10 p-6 sm:p-10 lg:p-12 select-none shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
      {/* Corner Viewfinder Metadata */}
      <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#7A7A80] pb-6 border-b border-white/[0.08] mb-8 sm:mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
          <span>TRANSMISSION MODULE // 01</span>
        </div>
        <div className="hidden sm:block">ENCRYPTED CITRUS DISPATCH</div>
      </div>

      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="py-14 text-center flex flex-col items-center justify-center min-h-[380px]"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#FF7900] bg-[#FF7900]/10 flex items-center justify-center text-[#FF7900] mb-6 shadow-[0_0_25px_rgba(255,121,0,0.25)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7900] mb-2">
              DISPATCH TRANSMITTED
            </span>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight uppercase text-white mb-4">
              THANK YOU FOR REACHING OUT.
            </h3>

            <p className="text-sm sm:text-base text-[#F4EFE5]/80 font-light max-w-md leading-relaxed mb-8">
              Your inquiry has arrived at our desk. A member of the JRINK team will get back to you within 24 hours.
            </p>

            <button
              onClick={() => setSubmitStatus("idle")}
              className="text-xs font-mono uppercase tracking-[0.25em] text-white hover:text-[#FF7900] transition-colors border-b border-white/20 hover:border-[#FF7900] pb-1 cursor-pointer"
            >
              SEND ANOTHER TRANSMISSION
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8 sm:space-y-10"
            noValidate
          >
            {/* Row 1: Full Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-2"
              >
                01 // FULL NAME *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name or studio"
                className={`w-full bg-transparent border-b ${
                  errors.name ? "border-red-500" : "border-white/20 focus:border-[#FF7900]"
                } pb-3 text-lg sm:text-xl font-light text-white placeholder-white/25 focus:outline-none transition-colors duration-300`}
              />
              {errors.name && (
                <span className="text-xs font-mono text-red-400 mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Row 2: Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Email Address */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-2"
                >
                  02 // EMAIL ADDRESS *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full bg-transparent border-b ${
                    errors.email ? "border-red-500" : "border-white/20 focus:border-[#FF7900]"
                  } pb-3 text-lg sm:text-xl font-light text-white placeholder-white/25 focus:outline-none transition-colors duration-300`}
                />
                {errors.email && (
                  <span className="text-xs font-mono text-red-400 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone Number (Optional) */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-2"
                >
                  03 // PHONE NUMBER (OPTIONAL)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#FF7900] pb-3 text-lg sm:text-xl font-light text-white placeholder-white/25 focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 3: Subject Dropdown */}
            <div className="relative">
              <label
                htmlFor="subject"
                className="block text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-2"
              >
                04 // NATURE OF INQUIRY
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#0C0C0C] border-b border-white/20 focus:border-[#FF7900] pb-3 text-base sm:text-lg font-light text-white focus:outline-none transition-colors duration-300 cursor-pointer"
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0C0C0C] text-white py-2">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Your Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A80] mb-2"
              >
                05 // YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, idea, or request..."
                className={`w-full bg-transparent border-b ${
                  errors.message ? "border-red-500" : "border-white/20 focus:border-[#FF7900]"
                } pb-3 text-lg sm:text-xl font-light text-white placeholder-white/25 focus:outline-none transition-colors duration-300 resize-none`}
              />
              {errors.message && (
                <span className="text-xs font-mono text-red-400 mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submission Error Banner */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono"
              >
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#FF7900] text-black text-xs font-mono uppercase tracking-[0.25em] font-bold hover:bg-[#FFA726] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,121,0,0.3)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE ↗</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </motion.button>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A7A80]">
                PRIVACY PROTECTED // ZERO SPAM
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

