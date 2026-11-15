"use client";

import React from "react";
import Image from "next/image";
import { Brush, Heart, Award, Sparkles, MapPin, Phone } from "lucide-react";

export default function AboutArtist() {
  return (
    <section id="about" className="py-24 bg-[#fbf8f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Artist Portrait & Creative Corner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="p-3 bg-white rounded-2xl border-2 border-ochre-300 shadow-2xl relative">
                <div className="relative h-96 sm:h-[450px] w-full rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                    alt="Monika - Interior Designer & Ancient Art Artist of Art is Art"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-ochre-300 bg-stone-900/60 px-2 py-0.5 rounded">
                      The Artist &amp; Designer
                    </span>
                    <h3 className="text-2xl font-display font-bold mt-1">
                      Monika
                    </h3>
                    <p className="text-xs text-stone-200">
                      Founder, Art is Art Studio
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-madder-700 text-white p-4 rounded-xl shadow-xl border-2 border-white max-w-[200px]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Ancient Heritage</span>
                </div>
                <p className="text-[11px] text-amber-100 mt-1">
                  Reviving Mithila ritual symbolism for contemporary architecture.
                </p>
              </div>

            </div>
          </div>

          {/* Artist Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ochre-100 border border-ochre-300 text-ochre-900 text-xs font-semibold uppercase tracking-widest">
              <Brush className="w-3.5 h-3.5 text-madder-600" />
              <span>About The Creator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              &ldquo;Art is not mere ornament; it is the <span className="text-madder-700 font-serif italic">living heartbeat</span> of a home.&rdquo;
            </h2>

            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>
                Namaste. I am <strong className="text-stone-950 font-semibold">Monika</strong>, an Interior Designer and Ancient Folk Art Artist. 
                Through <strong className="text-madder-800 font-semibold font-display">Art is Art</strong>, my mission is to preserve the sacred, devotional spirit of 
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
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-ochre-200">
              <div className="space-y-1">
                <span className="text-2xl font-display font-bold text-madder-700 block">100%</span>
                <span className="text-xs text-stone-600 uppercase tracking-wider block">Hand-Drawn Works</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-display font-bold text-ochre-600 block">Ancient</span>
                <span className="text-xs text-stone-600 uppercase tracking-wider block">Mithila Lineage</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-2xl font-display font-bold text-stone-900 block">Direct</span>
                <span className="text-xs text-stone-600 uppercase tracking-wider block">Artist Commission</span>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:8758752080"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-stone-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-ochre-400" />
                <span>Call Monika: 8758752080</span>
              </a>
              <span className="text-xs text-stone-500 font-serif italic">
                Studio visits &amp; spatial consultations by appointment.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
