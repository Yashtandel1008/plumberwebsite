import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/config/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.name} | Emergency 24/7 Plumbers`,
    template: `%s | ${businessConfig.name}`,
  },
  description: `Licensed & insured plumbing services in ${businessConfig.address.city}, ${businessConfig.address.state} and surrounding areas. Upfront pricing, 24/7 emergency response, and 100% satisfaction guarantee. Call ${businessConfig.phone} now.`,
  keywords: ["plumbing", "emergency plumber", "drain cleaning", "leak detection", "water heater repair", "licensed plumber", businessConfig.address.city],
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: `${businessConfig.name} | Licensed & Insured Plumbers`,
    description: `Professional, same-day plumbing repairs and emergency dispatch in ${businessConfig.address.city} and surrounding communities. Upfront rates and zero hidden fees.`,
    url: `https://www.${businessConfig.shortName.toLowerCase().replace(/\s+/g, "-")}.com`,
    siteName: businessConfig.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  // Generate JSON-LD LocalBusiness Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": businessConfig.name,
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    "@id": `https://www.${businessConfig.shortName.toLowerCase().replace(/\s+/g, "-")}.com/#plumbing-service`,
    "url": `https://www.${businessConfig.shortName.toLowerCase().replace(/\s+/g, "-")}.com`,
    "telephone": businessConfig.phoneRaw,
    "email": businessConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.city,
      "addressRegion": businessConfig.address.state,
      "postalCode": businessConfig.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7928236, // San Francisco general coordinates
      "longitude": -122.4019253
    },
    "areaServed": businessConfig.serviceAreas.cities.map(city => ({
      "@type": "Place",
      "name": city
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "description": "24/7 Emergency plumbing dispatch",
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  // Build the inline style configuration object for custom colors
  const themeStyles = {
    "--primary": businessConfig.theme.primary,
    "--primary-hover": businessConfig.theme.primaryHover,
    "--accent-dark": businessConfig.theme.accentDark,
    "--accent-dark-hover": businessConfig.theme.accentDarkHover,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={themeStyles}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        {children}
        {modal}
      </body>
    </html>
  );
}
