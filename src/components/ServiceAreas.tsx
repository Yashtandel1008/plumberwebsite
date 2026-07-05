"use client";

import React, { useState } from "react";
import { businessConfig } from "@/config/business";
import { Search, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ServiceAreas: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{
    searched: boolean;
    covered: boolean;
    cityName: string;
  } | null>(null);

  const handleCheckCity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const formattedQuery = searchQuery.trim().toLowerCase();
    const matches = businessConfig.serviceAreas.cities.some(
      (city) => city.toLowerCase() === formattedQuery
    );

    setSearchResult({
      searched: true,
      covered: matches,
      cityName: searchQuery.trim(),
    });
  };

  // Sort cities alphabetically
  const sortedCities = [...businessConfig.serviceAreas.cities].sort();

  return (
    <section id="service-areas" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Service Details & Checker */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full w-fit">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Plumbing Services in Your Neighborhood
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              We dispatch local plumbing technicians from hubs throughout the region to deliver immediate, same-day relief. Check if we cover your town.
            </p>

            {/* Interactive City Checker Form */}
            <form onSubmit={handleCheckCity} className="flex flex-col space-y-3 max-w-md">
              <label htmlFor="city-search" className="text-xs font-extrabold text-slate-700">
                Check Coverage in Your City:
              </label>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 pointer-events-none">
                    <Search size={16} />
                  </span>
                  <input
                    id="city-search"
                    type="text"
                    placeholder="Enter city name (e.g. San Francisco)"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (searchResult) setSearchResult(null); // clear old result
                    }}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  Check
                </button>
              </div>
            </form>

            {/* Search Result Messages */}
            <AnimatePresence mode="wait">
              {searchResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-md p-4 rounded-2xl border flex items-start space-x-3 shadow-sm ${
                    searchResult.covered
                      ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                      : "bg-amber-50 border-amber-100 text-amber-800"
                  }`}
                >
                  {searchResult.covered ? (
                    <>
                      <div className="p-1 bg-emerald-500 text-white rounded-lg shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs font-extrabold">Service Available!</span>
                        <p className="text-xs leading-normal">
                          Yes! We provide same-day plumbing service in <strong>{searchResult.cityName}</strong>. Call us now at <a href={`tel:${businessConfig.phoneRaw}`} className="underline font-bold">{businessConfig.phone}</a>.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-1 bg-amber-500 text-white rounded-lg shrink-0">
                        <AlertTriangle size={16} />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs font-extrabold">Zone Not Listed</span>
                        <p className="text-xs leading-normal">
                          We don&apos;t see <strong>{searchResult.cityName}</strong> listed in our online map, but we still might cover you! Call us at <a href={`tel:${businessConfig.phoneRaw}`} className="underline font-bold">{businessConfig.phone}</a> to check.
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Alphabetical Grid of Cities */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-6 flex items-center space-x-2">
              <MapPin size={14} className="text-primary" />
              <span>Cities We Proudly Serve</span>
            </h3>

            {/* Scrollable list of cities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
              {sortedCities.map((city, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-primary transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Regional Details */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
              <span>Counties Covered:</span>
              {businessConfig.serviceAreas.counties.map((county, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg border border-slate-200"
                >
                  {county}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
