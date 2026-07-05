"use client";

import React, { useState, useEffect } from "react";
import { businessConfig } from "@/config/business";
import { LucideIcon } from "./LucideIcon";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2">
              <span className="p-2 bg-primary/10 rounded-xl text-primary">
                <LucideIcon name="Droplets" size={24} className="animate-pulse" />
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                {businessConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center space-x-2 text-sm font-semibold text-slate-900 hover:text-primary px-4 py-2 rounded-lg transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>{businessConfig.phone}</span>
              </a>
              <a
                href="#estimate"
                className="flex items-center space-x-2 bg-accent-dark hover:bg-accent-dark-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                <Calendar size={16} />
                <span>Book Service</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-30 bg-white/95 backdrop-blur-lg md:hidden flex flex-col justify-between px-6 py-8 border-t border-slate-200/50"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors border-b border-slate-100 pb-3"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col space-y-4 mb-20">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center justify-center space-x-2 border border-slate-200 text-slate-800 font-semibold py-3.5 rounded-2xl transition-colors bg-white shadow-sm"
              >
                <Phone size={18} className="text-primary" />
                <span>Call {businessConfig.phone}</span>
              </a>
              <a
                href="#estimate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-primary/20 transition-all"
              >
                <Calendar size={18} />
                <span>Book Service Online</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
