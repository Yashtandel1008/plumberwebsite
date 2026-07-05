"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { LucideIcon } from "./LucideIcon";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-12 border-t border-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Branding & License */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <a href="#home" className="flex items-center space-x-2 text-white">
              <span className="p-2 bg-primary/20 text-primary rounded-xl">
                <LucideIcon name="Droplets" size={20} />
              </span>
              <span className="text-lg font-bold tracking-tight">{businessConfig.name}</span>
            </a>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Professional, licensed, and insured plumbing services for residential and commercial properties. Available 24/7 for emergency dispatch.
            </p>
            <div className="text-xs font-bold text-slate-500">
              {businessConfig.licenseNumber}
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {businessConfig.socials.facebook && (
                <a
                  href={businessConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="Facebook"
                >
                  <LucideIcon name="Facebook" size={14} />
                </a>
              )}
              {businessConfig.socials.instagram && (
                <a
                  href={businessConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="Instagram"
                >
                  <LucideIcon name="Instagram" size={14} />
                </a>
              )}
              {businessConfig.socials.yelp && (
                <a
                  href={businessConfig.socials.yelp}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
                  aria-label="Yelp"
                >
                  <LucideIcon name="Star" size={14} fill="currentColor" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">
              Company
            </h4>
            <a href="#home" className="text-xs hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-xs hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-xs hover:text-white transition-colors">About Us</a>
            <a href="#reviews" className="text-xs hover:text-white transition-colors">Reviews</a>
            <a href="#service-areas" className="text-xs hover:text-white transition-colors">Service Areas</a>
            <a href="#contact" className="text-xs hover:text-white transition-colors">Contact</a>
          </div>

          {/* Column 3: Services (Dynamic!) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">
              Popular Services
            </h4>
            {businessConfig.services.slice(0, 5).map((service) => (
              <a
                key={service.id}
                href="#services"
                className="text-xs hover:text-white transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>

          {/* Column 4: Contact Detail Callout */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">
              Get Dispatch
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center space-x-2 text-white hover:text-primary transition-colors font-bold"
              >
                <Phone size={12} className="text-primary" fill="currentColor" />
                <span>{businessConfig.phone}</span>
              </a>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="text-slate-600" />
                <span>{businessConfig.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={12} className="text-slate-600 shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state} {businessConfig.address.zip}
                </span>
              </div>
            </div>

            {/* Quick Call CTA block */}
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="w-full bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3 rounded-xl shadow-md text-center transition-colors block"
            >
              📞 Dispatch Emergency Plumber
            </a>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-bold">
          <div>
            &copy; {currentYear} {businessConfig.name}. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="#sitemap" className="hover:text-slate-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
