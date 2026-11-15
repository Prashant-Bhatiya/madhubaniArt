"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Palette, Compass, Brush } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative Traditional Madhubani Motif Corner Accents */}
      <div className="absolute top-12 left-4 md:left-12 w-32 h-32 md:w-48 md:h-48 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-madder-700 stroke-current">
          <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="2 3" />
          <path d="M50 10 Q65 35 50 50 Q35 35 50 10 Z" fill="currentColor" opacity="0.3" />
          <path d="M50 90 Q65 65 50 50 Q35 65 50 90 Z" fill="currentColor" opacity="0.3" />
          <path d="M10 50 Q35 65 50 50 Q35 35 10 50 Z" fill="currentColor" opacity="0.3" />
          <path d="M90 50 Q65 65 50 50 Q65 35 90 50 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-4 md:right-12 w-36 h-36 md:w-56 md:h-56 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-ochre-600 stroke-current">
          <circle cx="50" cy="50" r="45" strokeWidth="1.2" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.8" strokeDasharray="3 3" />
          <polygon points="50,15 62,38 85,38 66,54 73,78 50,62 27,78 34,54 15,38 38,38" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Artistic Statement */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ochre-100/90 border border-ochre-300 text-ochre-800 text-xs font-semibold tracking-widest uppercase">
              <Brush className="w-3.5 h-3.5 text-madder-600" />
              <span>Ancient Mithila Folk Tradition & Contemporary Interior Art</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.15] tracking-tight">
              Where Ancient <span className="text-madder-700 italic font-serif">Mithila Roots</span> Meet Modern <span className="relative inline-block text-ochre-600">
                Spatial Elegance
                <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-ochre-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Sub-copy emphasizing Monika's unique brand Art is Art */}
            <p className="text-stone-700 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="font-bold text-stone-900 font-display">Art is Art</strong> — curated by <strong className="font-semibold text-stone-900">Monika</strong>, 
              Interior Designer &amp; Ancient Art Artist. Celebrating the sacred ritual art of Mithila (Bihar) through hand-crafted Madhubani paintings tailored for luxury living, architectural serenity, and cultural pride.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-ochre-200/80 shadow-sm">
                <Palette className="w-5 h-5 text-madder-600 mb-1" />
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Fine Kachni & Bharni</h4>
                <p className="text-[11px] text-stone-600">Authentic nib-lines & mineral pigments</p>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-ochre-200/80 shadow-sm">
                <Compass className="w-5 h-5 text-ochre-600 mb-1" />
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Vastu & Interiors</h4>
                <p className="text-[11px] text-stone-600">Spatially harmonious energy murals</p>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-ochre-200/80 shadow-sm col-span-2 sm:col-span-1">
                <Sparkles className="w-5 h-5 text-indigoMithila-500 mb-1" />
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">Custom Commissions</h4>
                <p className="text-[11px] text-stone-600">Crafted to your wall dimensions</p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-madder-700 to-madder-800 hover:from-madder-800 hover:to-madder-900 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-lg shadow-madder-900/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Explore Artworks</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Signature Artwork Feature Display */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Traditional Frame Effect */}
              <div className="relative p-3.5 bg-[#fdfaf3] rounded-3xl border-2 border-ochre-300 shadow-2xl overflow-hidden">
                
                <div className="absolute inset-2 border border-dashed border-madder-500/40 pointer-events-none rounded-2xl" />

                <div className="relative h-80 sm:h-96 md:h-[430px] w-full rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src="/artworks/art-01-surya-narayana-mithila-kalash.jpg"
                    alt="Madhubani Surya Narayana Kalash Painting by Monika - Art is Art"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-ochre-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                      Signature Original Artwork
                    </span>
                    <h3 className="text-xl font-display font-bold mt-1 text-white">
                      Surya Narayana &amp; Mithila Kalash Yatra
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                      Authentic Madhubani scroll painting hand-drawn by Monika
                    </p>
                  </div>
                </div>

                {/* Artist signature seal at bottom */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-serif italic text-stone-800">Original Handcrafted Artwork</span>
                  </div>
                  <span className="font-semibold text-madder-700 tracking-wider">
                    By Monika • Art is Art
                  </span>
                </div>

              </div>

              {/* Decorative Floating Seal Badge */}
              <div className="absolute -top-5 -right-5 bg-gradient-to-br from-ochre-400 to-ochre-600 text-stone-900 p-3.5 rounded-full shadow-lg border-2 border-white flex flex-col items-center justify-center w-20 h-20 transform rotate-12 select-none">
                <span className="text-[9px] font-bold uppercase tracking-wider text-stone-950">100%</span>
                <span className="text-xs font-display font-extrabold leading-tight text-center">Hand Made</span>
                <span className="text-[8px] uppercase tracking-tighter text-stone-950">Mithila</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
