"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { LucideIcon } from "./LucideIcon";
import { motion } from "framer-motion";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] bg-blue-100/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Why Homeowners Trust {businessConfig.shortName}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
              We know that invite-only tradespeople in your home require trust. We pride ourselves on transparent practices, master craftsmanship, and friendly customer care.
            </p>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessConfig.whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/50 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-xl hover:border-blue-500/10 transition-all duration-300 flex flex-col space-y-5"
            >
              {/* Icon Container */}
              <div className="p-3 bg-primary/10 text-primary rounded-2xl w-fit">
                <LucideIcon name={reason.icon} size={22} />
              </div>

              {/* Text */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-base font-extrabold text-slate-950">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
