"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { LucideIcon } from "./LucideIcon";
import { motion } from "framer-motion";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-50/50 py-12 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {businessConfig.trustGuarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <LucideIcon name={guarantee.icon} size={20} />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-sm font-extrabold text-slate-900">
                  {guarantee.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
