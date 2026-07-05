"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { LucideIcon } from "./LucideIcon";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Decorative vector shape */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Professional Plumbing Services
          </h2>
          <p className="text-slate-500 text-base">
            From minor residential repairs to large commercial system diagnostics, our licensed professionals handle it all with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businessConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="p-3.5 bg-slate-50 text-slate-700 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                  <LucideIcon name={service.icon} size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs font-medium text-slate-600">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#estimate"
                className="mt-auto flex items-center justify-between w-full py-3 px-4 bg-slate-50 hover:bg-primary hover:text-white text-slate-700 font-bold text-xs rounded-xl transition-all duration-300 group/btn"
              >
                <span>Book Service</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
