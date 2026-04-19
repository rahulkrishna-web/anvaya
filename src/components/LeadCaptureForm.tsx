"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation of submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 5000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start justify-center py-12"
      >
        <h4 className="text-3xl font-serif text-black">Message Received.</h4>
        <p className="mt-4 text-black/60 font-light">
          We'll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-12 bg-white text-black">
      {/* Top 3 Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="relative border-b border-black/10 py-2 focus-within:border-black transition-colors">
          <label htmlFor="name" className="block text-sm font-light text-black/40 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent text-black placeholder-black/10 focus:outline-none"
          />
        </div>

        <div className="relative border-b border-black/10 py-2 focus-within:border-black transition-colors">
          <label htmlFor="email" className="block text-sm font-light text-black/40 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent text-black placeholder-black/10 focus:outline-none"
          />
        </div>

        <div className="relative border-b border-black/10 py-2 focus-within:border-black transition-colors">
          <label htmlFor="phone" className="block text-sm font-light text-black/40 mb-1">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent text-black placeholder-black/10 focus:outline-none"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="relative border-b border-black/10 py-2 focus-within:border-black transition-colors">
        <label htmlFor="message" className="block text-sm font-light text-black/40 mb-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={1}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent text-black placeholder-black/10 focus:outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-start pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#E5A1BA] to-[#BEA9DE] px-8 py-4 font-medium text-black shadow-lg transition-transform active:scale-95 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Leave us a Message"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
