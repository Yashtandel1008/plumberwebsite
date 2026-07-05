"use client";

import React from "react";
import { businessConfig } from "@/config/business";
import { Phone } from "lucide-react";

export const MobileBottomCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 md:hidden">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${businessConfig.phoneRaw.replace(/\D/g, "")}?text=Hi!%20I%27d%20like%20to%20request%20an%20estimate%20for%20plumbing%20service.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 active:scale-90 hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG Logo Path */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.066-3.411c1.656.98 3.284 1.498 4.908 1.499 5.467 0 9.911-4.444 9.914-9.916.002-2.651-1.03-5.143-2.906-7.02C16.163 3.275 13.673 2.242 11.02 2.242 5.55 2.242 1.106 6.686 1.103 12.16c-.001 1.767.464 3.493 1.349 5.023l-.973 3.55 3.648-.957zm12.35-6.52c-.318-.16-1.883-.93-2.174-1.036-.29-.106-.502-.16-.713.16-.212.32-.82.16-1.006-.16-.186-.32-.23-.106-.547-.32-.317-.212-.528-.423-1.003-1.246-.475-.823-.79-1.745-.92-2.17-.13-.424.011-.655.12-.76.096-.094.212-.244.318-.367.106-.123.14-.212.21-.353.07-.14.036-.265-.018-.372-.054-.107-.502-1.213-.688-1.66-.182-.439-.382-.379-.522-.386l-.445-.008c-.153 0-.403.057-.613.286-.21.23-.803.785-.803 1.914 0 1.13.82 2.22 1.933 3.375 1.11 1.156 2.766 2.378 5.076 3.27.55.22 1.02.373 1.37.483.55.174 1.05.15 1.444.09.44-.067 1.353-.553 1.543-1.087.19-.533.19-.99.133-1.087-.056-.097-.21-.16-.528-.32z"/>
        </svg>
      </a>

      {/* Call Now Floating Button */}
      <a
        href={`tel:${businessConfig.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-lg shadow-primary/30 active:scale-90 hover:scale-105 transition-all duration-200"
        aria-label="Call Now"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
};
