"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { Phone, Mail, Clock, MapPin, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Side: Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                We Are Here to Help Anytime
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Have a question or need to schedule a service? Reach out to our friendly office staff or emergency dispatcher.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="flex flex-col space-y-4">
              {/* Phone */}
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center space-x-4 p-4 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/50 transition-colors group"
              >
                <div className="p-3 bg-primary text-white rounded-xl group-hover:scale-105 transition-transform">
                  <Phone size={18} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Call Office</span>
                  <span className="text-sm font-extrabold text-slate-900">{businessConfig.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center space-x-4 p-4 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/50 transition-colors group"
              >
                <div className="p-3 bg-primary text-white rounded-xl group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Email Us</span>
                  <span className="text-sm font-extrabold text-slate-900">{businessConfig.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/50">
                <div className="p-3 bg-primary text-white rounded-xl">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Headquarters</span>
                  <span className="text-sm font-extrabold text-slate-900">
                    {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.zip}
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/50 flex flex-col space-y-4">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                <Clock size={14} className="text-primary" />
                <span>Office Hours</span>
              </h3>
              
              <div className="flex flex-col space-y-2 text-xs font-bold text-slate-700">
                <div className="flex justify-between border-b border-slate-200/40 pb-2">
                  <span>Weekdays</span>
                  <span className="text-slate-900">{businessConfig.hours.weekday}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/40 pb-2">
                  <span>Saturday</span>
                  <span className="text-slate-900">{businessConfig.hours.saturday}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Sunday</span>
                  <span className="text-slate-900">{businessConfig.hours.sunday}</span>
                </div>
              </div>

              {/* 24/7 Callout Tag */}
              <div className="bg-red-50 text-red-800 border border-red-100 rounded-xl p-3 flex items-start space-x-2.5">
                <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <span className="text-xs font-extrabold">Emergency Service</span>
                  <p className="text-[10px] leading-normal font-semibold">
                    {businessConfig.hours.emergency}. Call our primary line for dispatch.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm relative min-h-[350px] lg:min-h-full"
          >
            <iframe
              title={`${businessConfig.name} Service Map`}
              src={businessConfig.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
