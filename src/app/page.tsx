import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FAQ } from "@/components/FAQ";
import { EstimateForm } from "@/components/EstimateForm";

import { Footer } from "@/components/Footer";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Guarantees Trust Bar */}
        <TrustBar />

        {/* Services Showcase */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* How It Works Timeline */}
        <HowItWorks />

        {/* Testimonials Review Carousel */}
        <Reviews />

        {/* Before / After Gallery */}
        <Gallery />

        {/* Service Area lookup & listings */}
        <ServiceAreas />

        {/* FAQ Accordions */}
        <FAQ />

        {/* Estimate Request Form */}
        <EstimateForm />


      </main>

      {/* footer section */}
      <Footer />

      {/* Mobile Sticky bottom CTA bar */}
      <MobileBottomCTA />
    </>
  );
}
