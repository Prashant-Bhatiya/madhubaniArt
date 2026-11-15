import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MadhubaniHeritage from "@/components/MadhubaniHeritage";
import Gallery from "@/components/Gallery";
import InteriorShowcase from "@/components/InteriorShowcase";
import AboutArtist from "@/components/AboutArtist";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#faf7f2]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Traditional Madhubani Styles Heritage Section */}
        <MadhubaniHeritage />

        {/* Main Artwork Gallery (View Portfolio) */}
        <Gallery />

        {/* Monika's Unique Interior Designer & Ancient Art Showcase */}
        <InteriorShowcase />

        {/* About Monika: The Artist & Philosophy */}
        <AboutArtist />

        {/* Custom Commission & Direct WhatsApp/Call Section */}
        <InquirySection />
      </main>

      {/* Footer with Discreet Artist Studio Entrance */}
      <Footer />
    </div>
  );
}
