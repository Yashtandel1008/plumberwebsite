"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col space-y-4">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How We Resolve Your Issues
          </h2>
          <p className="text-slate-500 text-base">
            From the initial phone call to the final warranty stamp, we make our service transparent, clean, and entirely stress-free.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-slate-100 -z-10" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {businessConfig.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                {/* Step Number Circle */}
                <div className="h-14 w-14 rounded-2xl bg-slate-50 text-slate-700 font-extrabold text-lg flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 mb-6">
                  {step.number}
                </div>

                {/* Step Details */}
                <h3 className="text-base font-extrabold text-slate-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Desktop indicator chevron between steps */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-400 z-10">
                    <ArrowRight size={14} />
                  </div>
                )}


              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
