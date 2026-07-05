"use client";

import React, { useState } from "react";
import Image from "next/image";
import { businessConfig } from "@/config/business";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Gallery: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100

  const activeProject = businessConfig.gallery[activeProjectIndex];

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const relativeX = clientX - container.left;
    const position = Math.max(0, Math.min(100, (relativeX / container.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
            Work Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Before &amp; After Showcase
          </h2>
          <p className="text-slate-500 text-base">
            Slide the divider to see the results of our professional plumbing services. We take pride in clean installations and thorough repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Slider Column */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            {/* Interactive Slider Container */}
            <div
              className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg cursor-ew-resize select-none bg-slate-100"
              style={{ containerType: "inline-size" }}
              onMouseMove={(e) => {
                if (e.buttons === 1) handleSliderMove(e);
              }}
              onTouchMove={handleSliderMove}
              onClick={handleSliderMove}
            >
              {/* After Image (Background) */}
              <Image
                src={activeProject.afterUrl}
                alt="After plumbing service"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                className="object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
                After Repair
              </div>

              {/* Before Image (Clipping Foreground) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div 
                  className="absolute inset-y-0 left-0 h-full"
                  style={{ width: "100cqw" }}
                >
                  <Image
                    src={activeProject.beforeUrl}
                    alt="Before plumbing service"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 shadow-md pointer-events-none">
                Before Service
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-[2px] bg-white shadow-xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xl flex items-center justify-center pointer-events-none">
                  <ArrowLeftRight size={14} className="text-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Slider Instructions */}
            <div className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-400">
              <ArrowLeftRight size={12} />
              <span>Drag or click on the image to compare the workmanship</span>
            </div>
          </div>

          {/* Project Selector Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Select Project
              </span>
              
              <div className="flex flex-col space-y-3">
                {businessConfig.gallery.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setActiveProjectIndex(index);
                      setSliderPosition(50); // reset slider to middle
                    }}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      index === activeProjectIndex
                        ? "bg-primary/5 border-primary text-primary shadow-sm"
                        : "bg-white border-slate-200/60 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 block mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {project.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#estimate"
              className="flex items-center justify-between w-full py-4 px-5 bg-accent-dark hover:bg-accent-dark-hover text-white font-bold text-sm rounded-2xl shadow-md transition-colors"
            >
              <span>Get Similar Results</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
