"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import PartnershipSection from "@/components/PartnershipSection";
import LogisticsSection from "@/components/LogisticsSection";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function IntiDayaLanding() {
  // Inject Google Font: Poppins
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <SmoothScroll />
      <div 
        className="min-h-screen bg-white text-slate-900" 
        style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
      >
        <Header />
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <VisionMissionSection />
        <PartnershipSection />
        <LogisticsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
