"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Artwork, ArtCategory } from "@/types/artwork";
import { INITIAL_ARTWORKS } from "@/data/artworks";
import { fetchArtworks } from "@/lib/artworksStore";
import {
  Sparkles,
  Maximize2,
  X,
  MessageCircle,
  Mail,
  Feather,
  CheckCircle2,
  Brush,
} from "lucide-react";

const CATEGORIES_LIST: (ArtCategory | "All")[] = [
  "All",
  "Madhubani Folk Mandalas",
  "Dhammapada & Calligraphy",
  "Buddha & Meditative Serenity",
  "Vipassana & Bodhi Murals",
];

export default function Gallery() {
  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | "All">("All");
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    fetchArtworks().then((data) => {
      if (data && data.length > 0) {
        setArtworks(data);
      }
    });
  }, []);

  const filteredArtworks = artworks
    .filter((art) => selectedCategory === "All" || art.category === selectedCategory)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#faf6ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ochre-100 border border-ochre-300 text-ochre-900 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-madder-600" />
            <span>Monika&apos;s Original Art Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-[1.2]">
            Authentic <span className="text-madder-700 font-serif italic">Artworks &amp; Mandalas</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Every piece below is an original handcrafted artwork painted by Monika — fusing traditional Mithila Madhubani symbolism, 
            sacred Dhammapada Buddhist calligraphy, and meditative Bodhi murals.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-madder-700 text-white shadow-md shadow-madder-900/20 scale-105"
                  : "bg-white/90 text-stone-700 border border-ochre-200/90 hover:bg-white hover:border-ochre-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="group bg-[#fdfbf7] rounded-3xl border border-ochre-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Artwork Image Container */}
              <div
                className="relative h-80 sm:h-96 w-full overflow-hidden cursor-pointer bg-stone-100"
                onClick={() => setActiveArtwork(art)}
              >
                <Image
                  src={art.imageUrl}
                  alt={`${art.title} - Original Painting by Monika`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-white bg-stone-900/90 px-4 py-2 rounded-full backdrop-blur-xs font-medium">
                    <Maximize2 className="w-4 h-4 text-amber-300" />
                    <span>View Artwork Details &amp; Verse</span>
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-stone-900 text-xs font-bold rounded-lg shadow-sm border border-stone-200">
                    {art.category}
                  </span>
                </div>

                {/* Artist Signature Tag */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/95 text-amber-900 border border-amber-300 shadow-xs">
                    <Brush className="w-3.5 h-3.5 text-madder-700" />
                    <span>{art.signedBy || "Monika"}</span>
                  </span>
                </div>
              </div>

              {/* Card Content - NO PRICING */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {art.hindiTitle && (
                    <span className="text-xs sm:text-sm font-serif text-madder-700 block mb-1">
                      {art.hindiTitle}
                    </span>
                  )}
                  <h3
                    onClick={() => setActiveArtwork(art)}
                    className="text-xl sm:text-2xl font-display font-bold text-stone-900 hover:text-madder-700 cursor-pointer transition-colors leading-snug"
                  >
                    {art.title}
                  </h3>
                  <p className="text-sm text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                    {art.description}
                  </p>
                </div>

                {/* Medium Details */}
                <div className="space-y-1.5 text-xs sm:text-sm text-stone-600 border-t border-ochre-100 pt-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Art Medium:</span>
                    <span className="font-semibold text-stone-800 truncate max-w-[220px]">{art.medium}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Status:</span>
                    <span className="font-semibold text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {art.status}
                    </span>
                  </div>
                </div>

                {/* Inquire Action Buttons - Direct Contact */}
                <div className="pt-3 grid grid-cols-2 gap-2 border-t border-ochre-100">
                  <a
                    href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20your%20original%20painting%3A%20%22${encodeURIComponent(
                      art.title
                    )}%22.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:savmon15@gmail.com?subject=Art%20is%20Art%20-%20Inquiry%20for%20${encodeURIComponent(art.title)}&body=Namaste%20Monika%2C%0A%0AI%20am%20interested%20in%20your%20artwork%3A%20${encodeURIComponent(art.title)}.`}
                    className="py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-300" />
                    <span>Email</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Full Painting and Inscription Details */}
      {activeArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#fefcf8] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-ochre-300 shadow-2xl relative">
            
            <button
              onClick={() => setActiveArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white focus:outline-none transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Full Original Painting Preview */}
              <div className="relative min-h-[400px] md:min-h-[560px] bg-stone-950 p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-ochre-400/40">
                  <Image
                    src={activeArtwork.imageUrl}
                    alt={activeArtwork.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Story & Specifications - NO PRICING */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-madder-100 text-madder-800 text-xs font-bold rounded uppercase">
                      {activeArtwork.category}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded uppercase">
                      Signed: {activeArtwork.signedBy || "Monika"}
                    </span>
                  </div>

                  {activeArtwork.hindiTitle && (
                    <span className="text-sm sm:text-base font-serif text-madder-700 block">
                      {activeArtwork.hindiTitle}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-1">
                    {activeArtwork.title}
                  </h3>

                  <div className="mt-4 space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed">
                    {activeArtwork.verseOrStory && (
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-madder-800 mb-1.5 flex items-center gap-1.5">
                          <Feather className="w-3.5 h-3.5" />
                          <span>Verse &amp; Sacred Inscription:</span>
                        </h4>
                        <p className="bg-ochre-50/90 p-4 rounded-xl border border-ochre-200/80 italic font-serif text-stone-800 text-base leading-relaxed">
                          &ldquo;{activeArtwork.verseOrStory}&rdquo;
                        </p>
                      </div>
                    )}

                    <p>{activeArtwork.description}</p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs sm:text-sm bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <div>
                      <span className="text-stone-500 block">Artisan Medium:</span>
                      <strong className="text-stone-900">{activeArtwork.medium}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Authenticity:</span>
                      <strong className="text-emerald-800">100% Original Hand-Painted by Monika</strong>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-stone-200 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                    Interested in this Original Piece?
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20acquiring%20your%20artwork%3A%20%22${encodeURIComponent(
                        activeArtwork.title
                      )}%22.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Monika</span>
                    </a>

                    <a
                      href={`mailto:savmon15@gmail.com?subject=Art%20is%20Art%20-%20Inquiry%20for%20${encodeURIComponent(activeArtwork.title)}&body=Namaste%20Monika%2C%0A%0AI%20am%20interested%20in%20your%20artwork%3A%20${encodeURIComponent(activeArtwork.title)}.`}
                      className="py-3 px-4 bg-gradient-to-r from-madder-700 to-madder-800 hover:from-madder-800 hover:to-madder-900 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Inquiry</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
