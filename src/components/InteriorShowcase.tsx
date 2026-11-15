"use client";

import React from "react";
import Image from "next/image";
import { Compass, CheckCircle2, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";

export default function InteriorShowcase() {
  const interiorServices = [
    {
      title: "Bespoke Architectural Murals",
      desc: "Custom-scaled Madhubani wall murals integrated seamlessly into residential feature walls, double-height atriums, and luxury villas.",
    },
    {
      title: "Vastu & Energy Harmonization",
      desc: "Careful alignment of ancient Mithila symbology (Surya in the East, Matsya for liquid prosperity, Kohbar in master chambers) to invoke positive spatial energy.",
    },
    {
      title: "Luxury Spatial Palette Matching",
      desc: "Balancing earthy terracotta, raw silk linens, and natural mineral dyes to blend effortlessly with contemporary, Scandinavian, or neo-classical interior decors.",
    },
    {
      title: "Handmade Paper & Canvas Framing",
      desc: "Archival museum-grade framing options with anti-reflective glass, custom wooden borders, and conservation mounting.",
    },
  ];

  return (
    <section id="interiors" className="py-24 bg-[#1f1917] text-white relative overflow-hidden">
      {/* Subtle traditional gold backdrop glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-madder-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-ochre-400" />
              <span>Interior Architecture & Ancient Art</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Curated by an <span className="text-amber-400 font-serif italic">Interior Designer</span> for Modern Sanctuaries
            </h2>

            <p className="text-stone-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Monika bridges the sacred geometry of ancient Mithila art with modern spatial proportions. 
              Every piece is conceived not in isolation, but as a living dialogue with light, architectural lines, and interior serenity.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href="https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20looking%20for%20an%20Interior%20Consultation%20with%20custom%20Madhubani%20Art."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-ochre-500 to-ochre-600 hover:from-ochre-600 hover:to-ochre-700 text-stone-950 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-ochre-500/20"
            >
              <MessageCircle className="w-4 h-4 text-stone-950" />
              <span>Book Interior Art Consult</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Visual Showcase: Modern Room with Madhubani statement piece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* High-end Interior Scene */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-800 shadow-2xl group">
              <div className="relative h-96 sm:h-[460px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Interior with Madhubani Artwork curated by Monika"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-amber-400 text-stone-950 text-xs font-bold rounded-md tracking-wider uppercase">
                    Space Transformation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
                    Harmonizing Folk Roots in High-End Modern Residences
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 max-w-xl">
                    Custom scale, hand-ground mineral ochre pigments, and tactile canvas texture curated specifically for luxury living room acoustics and visual warmth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars of Monika's Interior Integration */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-bold text-amber-200 uppercase tracking-widest text-xs">
              Why Collectors & Homeowners Choose Monika
            </h3>

            <div className="space-y-4">
              {interiorServices.map((service, idx) => (
                <div
                  key={service.title}
                  className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/50 transition-colors duration-300 flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {service.title}
                    </h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-madder-900/60 to-stone-900 border border-madder-700/40 text-stone-300 text-xs flex items-center justify-between">
              <div>
                <strong className="text-white block font-display">Personalized Spatial Commission:</strong>
                <span>Direct phone consultation: <a href="tel:8758752080" className="text-amber-300 hover:underline font-semibold">+91 8758752080</a></span>
              </div>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
