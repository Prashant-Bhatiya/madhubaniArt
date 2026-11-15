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
  Calendar,
  Layers,
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

  // Filter artworks by style and sort by chronology order
  const filteredArtworks = artworks
    .filter((art) => selectedStyle === "All" || art.style === selectedStyle)
    .sort((a, b) => a.order - b.order);

  // Status badge styling
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
    <section id="gallery" className="py-24 bg-[#faf6ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ochre-100 border border-ochre-300 text-ochre-800 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-madder-600" />
            <span>Monika&apos;s Curated Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900">
            Madhubani <span className="text-madder-700 font-serif italic">Art Collection</span>
          </h2>

          <p className="text-stone-700 text-base md:text-lg">
            Each artwork is individually envisioned and hand-painted by Monika using authentic Mithila iconography, 
            ritual symbology, and archival materials. Filter by traditional style below.
          </p>
        </div>

        {/* Style Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {STYLES_LIST.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                selectedStyle === style
                  ? "bg-madder-700 text-white shadow-md shadow-madder-900/20 scale-105"
                  : "bg-white/80 text-stone-700 border border-ochre-200/80 hover:bg-white hover:border-ochre-400"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => {
            const badge = getStatusBadge(art.status);
            const StatusIcon = badge.icon;

            return (
              <div
                key={art.id}
                className="group bg-[#fdfbf7] rounded-2xl border border-ochre-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Artwork Image Container */}
                <div
                  className="relative h-72 w-full overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => setActiveArtwork(art)}
                >
                  <Image
                    src={art.imageUrl}
                    alt={`${art.title} by Monika - Chitralekha Art`}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-white bg-stone-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Detailed Story</span>
                    </span>
                  </div>

                  {/* Status & Style Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-900 text-[11px] font-bold rounded-md shadow-sm border border-stone-200">
                      {art.style}
                    </span>
                    {art.isFeatured && (
                      <span className="px-2.5 py-1 bg-ochre-500 text-stone-950 text-[11px] font-bold rounded-md shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${badge.bg}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {art.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {art.hindiTitle && (
                      <span className="text-xs font-serif text-madder-700 block mb-0.5">
                        {art.hindiTitle}
                      </span>
                    )}
                    <h3
                      onClick={() => setActiveArtwork(art)}
                      className="text-xl font-display font-bold text-stone-900 hover:text-madder-700 cursor-pointer transition-colors"
                    >
                      {art.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  {/* Meta details */}
                  <div className="space-y-1.5 text-xs text-stone-600 border-t border-ochre-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Dimensions:</span>
                      <span className="font-medium text-stone-800">{art.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Medium:</span>
                      <span className="font-medium text-stone-800 truncate max-w-[180px]">{art.medium}</span>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-2 flex items-center justify-between border-t border-ochre-100">
                    <div>
                      <span className="text-[10px] uppercase text-stone-500 tracking-wider block">Investment</span>
                      <span className="text-base font-bold text-stone-900">
                        {art.price || "Price on Request"}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20am%20interested%20in%20the%20artwork%3A%20%22${encodeURIComponent(
                        art.title
                      )}%22%20(ID%3A%20${art.id}).%20Please%20share%20details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-madder-700 hover:bg-madder-800 text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
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
          <div className="bg-[#fefcf8] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-ochre-300 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white focus:outline-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Preview with traditional framing */}
              <div className="relative min-h-[350px] md:min-h-[500px] bg-stone-950 p-4 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[320px] rounded-lg overflow-hidden border border-ochre-400/40">
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
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-madder-100 text-madder-800 text-xs font-bold rounded uppercase">
                      {activeArtwork.style} Style
                    </span>
                    <span className="px-2.5 py-0.5 bg-ochre-100 text-ochre-800 text-xs font-bold rounded uppercase">
                      {activeArtwork.status}
                    </span>
                  </div>

                  {activeArtwork.hindiTitle && (
                    <span className="text-sm font-serif text-madder-700 block">
                      {activeArtwork.hindiTitle}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-1">
                    {activeArtwork.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-stone-700 text-sm leading-relaxed">
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-madder-800 mb-1">
                        Folklore & Sacred Symbolism:
                      </h4>
                      <p className="bg-ochre-50/70 p-3 rounded-lg border border-ochre-100 italic font-serif text-stone-800 text-base">
                        &ldquo;{activeArtwork.story}&rdquo;
                      </p>
                    </div>

                    <p>{activeArtwork.description}</p>
                  </div>

                  {/* Specifications */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                    <div>
                      <span className="text-stone-500 block">Dimensions:</span>
                      <strong className="text-stone-800">{activeArtwork.dimensions}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Creation Year:</span>
                      <strong className="text-stone-800">{activeArtwork.year}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-500 block">Artisan Medium:</span>
                      <strong className="text-stone-800">{activeArtwork.medium}</strong>
                    </div>
                    {activeArtwork.interiorSuitability && (
                      <div className="col-span-2 pt-1 border-t border-stone-200 flex items-start gap-1.5 text-stone-700">
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
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest block">Inquiry Value</span>
                    <span className="text-xl font-bold text-stone-900">
                      {activeArtwork.price || "Price on Request"}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/918758752080?text=Namaste%20Monika%2C%20I%20would%20like%20to%20inquire%20about%20acquiring%20the%20artwork%3A%20%22${encodeURIComponent(
                      activeArtwork.title
                    )}%22%20(ID%3A%20${activeArtwork.id}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 hover:from-emerald-800 hover:to-emerald-900 transition-all"
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
