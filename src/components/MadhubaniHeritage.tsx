"use client";

import React, { useState } from "react";
import { Sparkles, BookOpen, Layers, Sun, Feather, Eye } from "lucide-react";

export default function MadhubaniHeritage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const styles = [
    {
      name: "Bharni Style (रंग भरणी)",
      sub: "Vibrant Pigments & Divine Narratives",
      desc: "Characterized by bold, rich color fills using traditional mineral pigments. Traditionally depicts Hindu deities (Radha-Krishna, Surya, Shiva-Parvati) and lush floral-faunal surroundings with vivid warmth.",
      icon: Sun,
      palette: ["#9e2a2b", "#d48b14", "#17565e", "#2d5a3f"],
      visualTrait: "Dense color saturation, double-line borders, zero empty space filled with leaves and flowers.",
    },
    {
      name: "Kachni Style (कचनी रेखांकन)",
      sub: "Fine Line Hatching & Monochrome Rhythm",
      desc: "Derived from 'Kachni' meaning delicate linear hatching. Executed strictly using fine bamboo pens (kalam) with black soot ink or vermilion wash, creating mesmerizing texture through parallel and criss-cross lines.",
      icon: Feather,
      palette: ["#1a1615", "#8d4a0d", "#ded0b6"],
      visualTrait: "Intricate micro-hatching, poetic avian figures, delicate fish scales and textured tree bark.",
    },
    {
      name: "Godna Style (गोधना रेखा)",
      sub: "Ancient Tattoo Motifs & Tribal Mandalas",
      desc: "Rooted in the ancestral body-tattooing tradition of the Mithila plains. Uses concentric circular rings, repetitive needle-stroke patterns, and cosmic talismans that symbolize spiritual defense and grounded connection to earth.",
      icon: Eye,
      palette: ["#1a1615", "#5c4033", "#c29b38"],
      visualTrait: "Concentric circular rhythm, geometric solar discs, stylized flora, and meditative symmetry.",
    },
    {
      name: "Kohbar Ghar (कोहबर भित्ति)",
      sub: "The Sacred Nuptial Chamber Mandala",
      desc: "The pinnacle ceremonial art of Mithila, painted on the walls of the bridal chamber. Rich in esoteric blessings: the central lotus (Kamal) and bamboo shaft (Bans) represent the eternal union of cosmic feminine and masculine energies.",
      icon: Sparkles,
      palette: ["#9e2a2b", "#d48b14", "#17565e"],
      visualTrait: "Bamboo shaft, blooming lotus, swimming fish, tortoises, and sun-moon celestial observers.",
    },
  ];

  return (
    <section id="heritage" className="py-20 lg:py-28 bg-[#f7f2e7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-madder-50 border border-madder-200 text-madder-800 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            <span>The Living Soul of Mithila</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-[1.2]">
            Understanding <span className="text-madder-700 font-serif italic">Madhubani Art</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Originating in the historic Mithila kingdom of Bihar and southern Nepal, Madhubani painting was born when 
            King Janaka commissioned artists to immortalize the royal wedding of Goddess Sita and Lord Rama. Passed down across 
            generations of women artists, each piece breathes life into walls and canvases without leaving a single stroke empty.
          </p>
        </div>

        {/* Traditional Styles Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Navigation Pill List */}
          <div className="lg:col-span-5 space-y-3.5">
            <p className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-widest pl-2">
              Select a Traditional Style:
            </p>
            {styles.map((style, idx) => {
              const Icon = style.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={style.name}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-white border-ochre-400 shadow-md translate-x-1.5"
                      : "bg-[#fdfaf5]/70 border-ochre-200/70 hover:bg-white/90"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? "bg-madder-600 text-white"
                          : "bg-ochre-100 text-stone-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-stone-900 text-base sm:text-lg">
                        {style.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 mt-0.5">{style.sub}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 shrink-0 pl-2">
                    {style.palette.map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-stone-200"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Style Spotlight Panel */}
          <div className="lg:col-span-7 bg-[#fdfbf7] p-7 sm:p-10 rounded-3xl border-2 border-ochre-300 shadow-lg relative">
            <div className="absolute top-6 right-6 text-ochre-500/15 pointer-events-none">
              <Layers className="w-24 h-24" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-ochre-100 text-ochre-800 text-xs sm:text-sm font-bold rounded-lg uppercase tracking-wider">
                  Style Profile #{activeTab + 1}
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-serif italic">
                  Preserved &amp; Practiced by Monika
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                {styles[activeTab].name}
              </h3>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                {styles[activeTab].desc}
              </p>

              <div className="pt-4 border-t border-ochre-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/95 p-4 sm:p-5 rounded-2xl border border-ochre-100 shadow-xs">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5 text-madder-800">
                    Visual Hallmarks
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {styles[activeTab].visualTrait}
                  </p>
                </div>

                <div className="bg-white/95 p-4 sm:p-5 rounded-2xl border border-ochre-100 shadow-xs">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5 text-madder-800">
                    Traditional Mediums
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Bamboo twigs, cotton nibs, cow dung wash (leepan), lamp soot &amp; crushed palash flowers.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-semibold text-madder-700">Color Resonance:</span>
                  <div className="flex gap-2 items-center">
                    {styles[activeTab].palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-5 h-5 rounded-md shadow-xs border border-stone-300"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <a
                  href="#gallery"
                  className="text-xs sm:text-sm font-bold text-madder-700 hover:text-madder-800 underline underline-offset-4 tracking-wider uppercase"
                >
                  Explore in Gallery →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
