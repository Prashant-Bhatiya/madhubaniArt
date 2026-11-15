"use client";

import React from "react";
import Image from "next/image";
import { Brush } from "lucide-react";

export default function AboutArtist() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fbf8f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-stretch">
          
          {/* Artist Portrait & Creative Frame - Coordinated Alignment */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto h-full flex flex-col">
              
              {/* Outer Traditional Frame */}
              <div className="p-3.5 bg-white rounded-3xl border-2 border-ochre-300 shadow-xl relative h-full flex flex-col justify-between">
                
                {/* Image Container with seamless responsive height matching text */}
                <div className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex-1 rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/artworks/art-03-bhavatu-sabba-mangalam-bodhi-mural.jpg"
                    alt="Bhavatu Sabba Mangalam Bodhi Mural by Monika - Art is Art"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                  
                  {/* Badge at bottom of frame */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] tracking-widest uppercase font-bold text-ochre-300 bg-stone-900/80 px-2.5 py-1 rounded backdrop-blur-xs">
                      The Artist &amp; Spatial Designer
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold mt-1.5 text-white">
                      Monika
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                      Founder, Art is Art Studio
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Artist Biography & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ochre-100 border border-ochre-300 text-ochre-900 text-xs sm:text-sm font-semibold uppercase tracking-widest self-start">
              <Brush className="w-4 h-4 text-madder-600" />
              <span>About The Creator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-[1.2]">
              &ldquo;Art is not mere ornament; it is the <span className="text-madder-700 font-serif italic">living heartbeat</span> of a home.&rdquo;
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Namaste. I am <strong className="text-stone-950 font-semibold">Monika</strong>, an Interior Designer and Ancient Folk Art Artist. 
                Through <strong className="text-madder-800 font-bold font-display">Art is Art</strong>, my mission is to preserve the sacred, devotional spirit of 
                <strong> Madhubani (Mithila) art</strong> while harmonizing it with the refined proportions of modern luxury architecture.
              </p>

              <p>
                Madhubani art began thousands of years ago in the villages of Mithila (Bihar), where women painted mud walls with bamboo nibs, 
                soot ink, and crushed flower petals to celebrate harvest, fertility, and cosmic order. In my studio, I retain those sacred organic 
                traditions — using natural dyes, fine nibs, and handmade raw paper — while creating custom scales that turn residential foyers, 
                living rooms, and offices into serene sanctuaries.
              </p>

              <p>
                Whether you seek a sacred <em>Surya Mandala</em> to invite solar energy into your home, a romantic <em>Mayur</em> panel for your bedroom, 
                or a large-scale architectural commission, every stroke is drawn with meditative intention and precision.
              </p>
            </div>

            {/* Quick credentials / commitments */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-ochre-200">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-madder-700 block">100%</span>
                <span className="text-xs sm:text-sm text-stone-600 uppercase tracking-wider block font-medium">Hand-Drawn Works</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-ochre-600 block">Ancient</span>
                <span className="text-xs sm:text-sm text-stone-600 uppercase tracking-wider block font-medium">Mithila Lineage</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-stone-900 block">Direct</span>
                <span className="text-xs sm:text-sm text-stone-600 uppercase tracking-wider block font-medium">Artist Commission</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
