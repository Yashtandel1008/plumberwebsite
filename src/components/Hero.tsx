"use client";

import React from "react";
import Image from "next/image";
import { businessConfig } from "@/config/business";
import { Phone, Calendar, Star, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/10 px-3.5 py-1.5 rounded-full w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                24/7 Emergency Dispatch
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
              24/7 Emergency <span className="text-primary bg-clip-text">Plumbing Services</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Licensed and insured plumbers providing same-day service with upfront pricing. Don&apos;t let a plumbing emergency ruin your day—we are here to help.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white text-base font-bold px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={18} fill="currentColor" />
                <span>Call Now</span>
              </a>
              <a
                href="#estimate"
                className="flex items-center justify-center space-x-2 bg-accent-dark hover:bg-accent-dark-hover text-white text-base font-bold px-8 py-4 rounded-2xl shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Calendar size={18} />
                <span>Book Service</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/60 max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                {/* Google Reviews */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800 mt-1">
                    {businessConfig.googleRating} Google Rating
                  </span>
                  <span className="text-[10px] text-slate-500">
                    ({businessConfig.googleReviewCount} Reviews)
                  </span>
                </div>

                {/* Happy Customers */}
                <div className="flex flex-col border-l border-slate-200/80 pl-4 sm:pl-6">
                  <span className="text-sm font-extrabold text-slate-900">500+</span>
                  <span className="text-xs font-semibold text-slate-800">Happy Customers</span>
                  <span className="text-[10px] text-slate-500">Locally Trusted</span>
                </div>

                {/* License Status */}
                <div className="flex flex-col border-l border-slate-200/80 pl-4 sm:pl-6">
                  <div className="flex items-center space-x-1 text-emerald-600">
                    <ShieldCheck size={14} />
                    <span className="text-xs font-extrabold">Licensed</span>
                  </div>
                  <span className="text-[10px] text-slate-800 font-semibold mt-1">
                    {businessConfig.licenseNumber}
                  </span>
                  <span className="text-[10px] text-slate-500">&amp; 100% Insured</span>
                </div>

                {/* Response Speed */}
                <div className="flex flex-col border-l border-slate-200/80 pl-4 sm:pl-6">
                  <div className="flex items-center space-x-1 text-primary">
                    <CheckCircle size={14} />
                    <span className="text-xs font-extrabold">Same Day</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 mt-1">Service Guaranteed</span>
                  <span className="text-[10px] text-slate-500">Fast Local Dispatch</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Plumber Graphic/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[500px]"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] rotate-3 pointer-events-none border border-primary/10" />
            <div className="absolute inset-0 bg-accent-dark/5 rounded-[2.5rem] -rotate-3 pointer-events-none" />
            
            {/* The Image Container */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-xl bg-slate-100">
              <Image
                src="/images/PlumberHero.png"
                alt="Professional plumbing service technician at work"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Glass overlay with service stats */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel py-4 px-6 rounded-2xl flex items-center justify-between border border-white/40 shadow-lg">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Apex Commitment</span>
                  <p className="text-sm font-extrabold text-slate-800">On-Time &amp; Clean Guarantee</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <CheckCircle size={20} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
