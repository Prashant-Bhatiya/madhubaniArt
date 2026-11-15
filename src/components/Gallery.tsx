"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Artwork, MadhubaniStyle } from "@/types/artwork";
import { INITIAL_ARTWORKS } from "@/data/artworks";
import { fetchArtworks } from "@/lib/artworksStore";
import {
  Sparkles,
  Maximize2,
  X,
  MessageCircle,
  Tag,
  Home,
  CheckCircle2,
  Clock,
  Palette,
} from "lucide-react";

const STYLES_LIST: (MadhubaniStyle | "All")[] = [
  "All",
  "Kachni",
  "Bharni",
  "Kohbar",
  "Godna",
  "Tantrik",
  "Interior & Contemporary",
];

export default function Gallery() {
  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [selectedStyle, setSelectedStyle] = useState<MadhubaniStyle | "All">("All");
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    fetchArtworks().then((data) => {
      if (data && data.length > 0) {
        setArtworks(data);
      }
    });
  }, []);

  const filteredArtworks = artworks
    .filter((art) => selectedStyle === "All" || art.style === selectedStyle)
    .sort((a, b) => a.order - b.order);

  const getStatusBadge = (status: Artwork["status"]) => {
    switch (status) {
      case "Available":
        return {
          bg: "bg-emerald-100 text-emerald-800 border-emerald-300",
          icon: CheckCircle2,
        };
      case "Commission Only":
        return {
          bg: "bg-amber-100 text-amber-900 border-amber-300",
          icon: Clock,
        };
      case "Exhibition":
        return {
          bg: "bg-sky-100 text-sky-800 border-sky-300",
          icon: Palette,
        };
      case "Sold":
      default:
        return {
          bg: "bg-stone-200 text-stone-700 border-stone-300",
          icon: Tag,
        };
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#faf6ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ochre-100 border border-ochre-300 text-ochre-900 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-madder-600" />
            <span>Monika&apos;s Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-[1.2]">
            Madhubani <span className="text-madder-700 font-serif italic">Art Collection</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Each artwork is individually envisioned and hand-painted by Monika using authentic Mithila iconography, 
            ritual symbology, and archival materials. Filter by traditional style below.
          </p>
        </div>

        {/* Style Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {STYLES_LIST.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                selectedStyle === style
                  ? "bg-madder-700 text-white shadow-md shadow-madder-900/20 scale-105"
                  : "bg-white/90 text-stone-700 border border-ochre-200/90 hover:bg-white hover:border-ochre-400"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {filteredArtworks.map((art) => {
            const badge = getStatusBadge(art.status);
            const StatusIcon = badge.icon;

            return (
              <div
                key={art.id}
                className="group bg-[#fdfbf7] rounded-2xl border border-ochre-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* Artwork Image Container */}
                <div
                  className="relative h-72 sm:h-80 w-full overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => setActiveArtwork(art)}
                >
                  <Image
                    src={art.imageUrl}
                    alt={`${art.title} by Monika - Art is Art`}
                    fill
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white bg-stone-900/80 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Story &amp; Details</span>
                    </span>
                  </div>

                  {/* Status & Style Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-bold rounded-md shadow-sm border border-stone-200">
                      {art.style}
                    </span>
                    {art.isFeatured && (
                      <span className="px-2.5 py-1 bg-ochre-500 text-stone-950 text-xs font-bold rounded-md shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.bg}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {art.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
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

                  {/* Meta details */}
                  <div className="space-y-2 text-xs sm:text-sm text-stone-600 border-t border-ochre-100 pt-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Dimensions:</span>
                      <span className="font-semibold text-stone-800">{art.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Medium:</span>
                      <span className="font-semibold text-stone-800 truncate max-w-[200px]">{art.medium}</span>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-3 flex items-center justify-between border-t border-ochre-100">
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase text-stone-500 tracking-wider font-semibold block">Investment</span>
                      <span className="text-lg sm:text-xl font-bold text-stone-900">
                        {art.price || "Price on Request"}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20the%20artwork%3A%20%22${encodeURIComponent(
                        art.title
                      )}%22%20(ID%3A%20${art.id}).%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-madder-700 hover:bg-madder-800 text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Modal for Deep Artwork Examination */}
      {activeArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#fefcf8] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-ochre-300 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white focus:outline-none transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Preview with traditional framing */}
              <div className="relative min-h-[360px] md:min-h-[520px] bg-stone-950 p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden border border-ochre-400/40">
                  <Image
                    src={activeArtwork.imageUrl}
                    alt={activeArtwork.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Story & Specifications */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-madder-100 text-madder-800 text-xs font-bold rounded uppercase">
                      {activeArtwork.style} Style
                    </span>
                    <span className="px-3 py-1 bg-ochre-100 text-ochre-800 text-xs font-bold rounded uppercase">
                      {activeArtwork.status}
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
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-madder-800 mb-1">
                        Folklore &amp; Sacred Symbolism:
                      </h4>
                      <p className="bg-ochre-50/80 p-3.5 rounded-xl border border-ochre-100 italic font-serif text-stone-800 text-base sm:text-lg">
                        &ldquo;{activeArtwork.story}&rdquo;
                      </p>
                    </div>

                    <p>{activeArtwork.description}</p>
                  </div>

                  {/* Specifications */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <div>
                      <span className="text-stone-500 block">Dimensions:</span>
                      <strong className="text-stone-900">{activeArtwork.dimensions}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Creation Year:</span>
                      <strong className="text-stone-900">{activeArtwork.year}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-500 block">Artisan Medium:</span>
                      <strong className="text-stone-900">{activeArtwork.medium}</strong>
                    </div>
                    {activeArtwork.interiorSuitability && (
                      <div className="col-span-2 pt-2 border-t border-stone-200 flex items-start gap-2 text-stone-700">
                        <Home className="w-4 h-4 text-ochre-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-stone-900">Interior Fit:</strong> {activeArtwork.interiorSuitability}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest font-semibold block">Investment Value</span>
                    <span className="text-xl sm:text-2xl font-bold text-stone-900">
                      {activeArtwork.price || "Price on Request"}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20would%20like%20to%20inquire%20about%20acquiring%20the%20artwork%3A%20%22${encodeURIComponent(
                      activeArtwork.title
                    )}%22%20(ID%3A%20${activeArtwork.id}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
