"use client";

import React, { useState } from "react";
import { businessConfig } from "@/config/business";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % businessConfig.reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + businessConfig.reviews.length) % businessConfig.reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              What Your Neighbors Say
            </h2>
            <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
              We stand by our work. Thousands of families trust us to keep their water running clean. Read real reviews directly from Google.
            </p>
          </div>

          {/* Google Aggregator Box */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-2xl font-black text-slate-900">{businessConfig.googleRating}</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Based on {businessConfig.googleReviewCount} Google Reviews
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Star size={24} fill="currentColor" />
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div className="relative max-w-4xl mx-auto min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Verified */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < businessConfig.reviews[activeIndex].rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200"
                        }
                      />
                    ))}
                  </div>
                  {businessConfig.reviews[activeIndex].verified && (
                    <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                      <span className="h-3 w-3 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Check size={8} strokeWidth={4} />
                      </span>
                      <span>Verified Customer</span>
                    </span>
                  )}
                </div>

                {/* Review Body */}
                <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium italic mb-6">
                  &ldquo;{businessConfig.reviews[activeIndex].text}&rdquo;
                </blockquote>
              </div>

              {/* Author & Meta */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <cite className="not-italic text-sm font-extrabold text-slate-900 block">
                    {businessConfig.reviews[activeIndex].author}
                  </cite>
                  <span className="text-xs text-slate-400 font-medium">
                    {businessConfig.reviews[activeIndex].date}
                  </span>
                </div>
                
                {/* Google Badge logo indicator */}
                <div className="text-xs font-bold text-slate-300 tracking-wider">
                  GOOGLE REVIEW
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevReview}
              className="h-12 w-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center shadow-sm active:scale-95 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Bullet indicators */}
            <div className="flex space-x-2">
              {businessConfig.reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="h-12 w-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center shadow-sm active:scale-95 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
